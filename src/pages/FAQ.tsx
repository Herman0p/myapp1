import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  {
    question: "What services do you offer exactly?",
    answer: "I specialize in Meta & TikTok Ads management, Landing Page UI/UX design using Figma, Graphic Design for branding and marketplaces, and high-quality Video Editing for social media content."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope. A landing page design usually takes 1-2 weeks, while full Ads management is an ongoing monthly service. Graphic design assets can often be delivered within 3-5 business days."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While I am based in Indonesia, I work with brands and businesses worldwide. All communication is handled via email, Slack, or Zoom."
  },
  {
    question: "What is your pricing structure?",
    answer: "I offer both project-based pricing and monthly retainers. For specific services like Ads management, I usually work on a monthly retainer basis. Contact me for a custom quote."
  },
  {
    question: "Can I book a consultation call?",
    answer: "Absolutely. You can reach out via the contact form, and we can schedule a 15-30 minute discovery call to discuss your project needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="mb-32 text-center">
          <ScrollReveal width="100%" y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 italic break-words">FAQ</h1>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 leading-relaxed font-light max-w-3xl mx-auto">
              Common questions about my workflow, pricing, and services.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} width="100%" delay={idx * 0.1} y={20}>
              <div 
                className={`border border-black/5 rounded-[40px] overflow-hidden transition-all duration-700 ${openIndex === idx ? 'bg-white shadow-2xl shadow-black/5' : 'bg-zinc-50'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-10 flex items-center justify-between text-left hover:bg-white transition-colors duration-500"
                >
                  <span className="text-xl md:text-2xl font-bold pr-12 tracking-tight">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-zinc-900 text-white border-zinc-900 rotate-180' : 'bg-white text-zinc-900'}`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-10 pt-0 text-lg text-zinc-500 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.5} y={40}>
          <div className="mt-32 p-16 bg-zinc-900 rounded-[60px] text-center text-white relative overflow-hidden">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 relative z-10">Still have questions?</h3>
            <p className="text-zinc-400 text-xl mb-12 font-light relative z-10">I'm here to help you grow your brand and answer any specifics.</p>
            <a 
              href="/contact" 
              className="relative z-10 inline-flex px-12 py-6 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-500 transition-all duration-500"
            >
              Contact Me Directly
            </a>
            <div className="absolute top-[-20%] right-[-10%] w-[50%] aspect-square bg-emerald-600/20 blur-[100px] rounded-full" />
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
