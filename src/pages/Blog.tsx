import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxImage from '../components/ParallaxImage';

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
        <div className="mb-32">
          <ScrollReveal delay={0.1} y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 italic">Insights</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-2xl leading-relaxed font-light">
              Thought leadership on marketing, design, and the creative industry.
            </p>
          </ScrollReveal>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-zinc-100 rounded-[60px] aspect-[4/5]" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <ScrollReveal width="100%">
            <div className="text-center py-40 bg-zinc-50 rounded-[60px] border border-dashed border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-300 tracking-tight">No articles yet. Stay tuned!</h3>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {posts.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 0.1} y={40}>
                <motion.article
                  whileHover={{ y: -10 }}
                  className="group flex flex-col h-full"
                >
                  <Link to={`/blog/${post.slug}`} className="relative aspect-[4/5] rounded-[60px] overflow-hidden bg-zinc-100 mb-10 block">
                    <ParallaxImage 
                      src={post.coverImage || `https://picsum.photos/seed/${post.slug}/600/800`} 
                      alt={post.title}
                      className="w-full h-full"
                      offset={40}
                    />
                    <div className="absolute top-8 left-8">
                      <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.createdAt?.toDate?.().toLocaleDateString() || 'Recently'}</span>
                    <span className="flex items-center gap-2"><User size={14} /> {post.author || 'Uncle'}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-emerald-600 transition-colors duration-500 leading-[1.1] tracking-tight">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-light line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors group/link">
                    Read Article <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
