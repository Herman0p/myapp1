import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  createdAt: any;
  author: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 italic">Insights</h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Thought leadership on marketing, design, and the creative industry.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-zinc-100 rounded-[40px] aspect-[4/5]" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-[40px] border border-dashed border-zinc-200">
            <h3 className="text-xl font-bold text-zinc-400">No articles yet. Stay tuned!</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-100 mb-6 block">
                  <img 
                    src={post.coverImage || `https://picsum.photos/seed/${post.slug}/600/800`} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.createdAt?.toDate?.().toLocaleDateString() || 'Recently'}</span>
                  <span className="flex items-center gap-1.5"><User size={12} /> {post.author || 'Uncle'}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors">
                  Read Article <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
