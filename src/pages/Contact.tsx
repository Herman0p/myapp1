import { motion } from 'motion/react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <ScrollReveal delay={0.1} y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 italic">Let's Talk</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-2xl leading-relaxed font-light">
              Have a project in mind? Looking for a strategic partner to grow your brand? I'm always open to new collaborations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            {[
              { icon: Mail, label: "Email", value: "hermansyah.ap@gmail.com", href: "mailto:hermansyah.ap@gmail.com" },
              { icon: Phone, label: "Phone", value: "+62 8XX XXXX XXXX", href: null },
              { icon: MapPin, label: "Location", value: "Indonesia (Remote Worldwide)", href: null }
            ].map((item, idx) => (
              <ScrollReveal key={item.label} delay={0.4 + idx * 0.1} y={20}>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-3xl bg-zinc-50 flex items-center justify-center shrink-0 border border-black/5 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-3">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-2xl md:text-3xl font-bold tracking-tight hover:text-emerald-600 transition-colors duration-500">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-2xl md:text-3xl font-bold tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.5} y={40} width="100%">
            <div className="bg-zinc-50 p-10 md:p-16 rounded-[60px] border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-700">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-8 py-5 bg-white border border-zinc-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-8 py-5 bg-white border border-zinc-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Subject</label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-zinc-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-light"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-4">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-8 py-5 bg-white border border-zinc-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-light resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full py-6 bg-zinc-900 text-white rounded-3xl font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 group"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-emerald-600 font-medium">Message sent successfully! I'll get back to you soon.</motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-rose-600 font-medium">Something went wrong. Please try again.</motion.p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
