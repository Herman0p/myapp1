import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Download, BookOpen, PlayCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const resources = [
  {
    id: "ads-checklist",
    title: "The Ultimate Meta Ads Checklist",
    type: "Free PDF",
    description: "Everything you need to check before launching your next campaign.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "figma-templates",
    title: "High-Converting Landing Page Templates",
    type: "Figma File",
    description: "3 UI layouts that I use for my clients to drive 20%+ conversion rates.",
    icon: PlayCircle,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function Edu() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleLeadGen = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await addDoc(collection(db, 'edu_leads'), {
        email,
        createdAt: serverTimestamp(),
        resourceId: 'general_newsletter'
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 italic">Education</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Level up your marketing and design game with my premium resources and free guides.
          </p>
        </motion.div>

        {/* Lead Magnet Section */}
        <section className="bg-zinc-900 rounded-[48px] p-12 md:p-20 text-white mb-32 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get My Weekly Marketing Insights</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Join 1,000+ creators and business owners. No fluff, just actionable strategies for Meta Ads, Figma, and Video Content.
            </p>
            <form onSubmit={handleLeadGen} className="flex flex-col md:flex-row gap-4">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-grow px-8 py-5 bg-white/10 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <button 
                disabled={status === 'loading'}
                className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'Joining...' : 'Join Now'}
                <Mail size={16} />
              </button>
            </form>
            {status === 'success' && <p className="mt-4 text-emerald-400 font-medium">Welcome to the inner circle!</p>}
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-[60%] aspect-square bg-emerald-600/20 blur-[120px] rounded-full" />
        </section>

        {/* Free Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, idx) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-zinc-50 rounded-[40px] border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${res.color} flex items-center justify-center mb-8`}>
                  <res.icon size={28} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 block">{res.type}</span>
                <h3 className="text-2xl font-bold mb-4">{res.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-10">{res.description}</p>
              </div>
              <button className="w-full py-4 border border-zinc-200 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center justify-center gap-2">
                Download Now <Download size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
