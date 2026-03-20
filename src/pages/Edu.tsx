import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Download, BookOpen, PlayCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import ScrollReveal from '../components/ScrollReveal';

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
        <div className="mb-32 text-center">
          <ScrollReveal width="100%" y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 italic">Education</h1>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light">
              Level up your marketing and design game with my premium resources and free guides.
            </p>
          </ScrollReveal>
        </div>

        {/* Lead Magnet Section */}
        <ScrollReveal width="100%" y={40}>
          <section className="bg-zinc-900 rounded-[60px] p-12 md:p-24 text-white mb-32 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Get My Weekly <br /> <span className="text-emerald-500 italic font-serif">Marketing</span> Insights</h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
                Join 1,000+ creators and business owners. No fluff, just actionable strategies for Meta Ads, Figma, and Video Content.
              </p>
              <form onSubmit={handleLeadGen} className="flex flex-col md:flex-row gap-4">
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-grow px-10 py-6 bg-white/10 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-lg"
                />
                <button 
                  disabled={status === 'loading'}
                  className="px-12 py-6 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-500 transition-all flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Now'}
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <Mail size={18} />
                  </motion.div>
                </button>
              </form>
              {status === 'success' && <p className="mt-6 text-emerald-400 font-medium">Welcome to the inner circle!</p>}
            </div>
            <div className="absolute right-[-10%] top-[-10%] w-[60%] aspect-square bg-emerald-600/20 blur-[120px] rounded-full" />
          </section>
        </ScrollReveal>

        {/* Free Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {resources.map((res, idx) => (
            <ScrollReveal key={res.id} delay={idx * 0.1} y={40}>
              <div className="group p-12 md:p-16 bg-zinc-50 rounded-[60px] border border-black/5 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 h-full">
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${res.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700`}>
                    <res.icon size={32} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4 block">{res.type}</span>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">{res.title}</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-12 font-light">{res.description}</p>
                </div>
                <button className="w-full py-6 border border-zinc-200 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-500 flex items-center justify-center gap-3">
                  Download Now <Download size={18} />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
