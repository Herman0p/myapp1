import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

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
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 italic">FAQ</h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Common questions about my workflow, pricing, and services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-black/5 rounded-[32px] overflow-hidden bg-zinc-50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-zinc-100 transition-colors"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 text-zinc-500 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-900 rounded-[40px] text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-zinc-400 mb-8">I'm here to help you grow your brand.</p>
          <a 
            href="/contact" 
            className="inline-flex px-8 py-4 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all"
          >
            Contact Me Directly
          </a>
        </div>
      </div>
    </main>
  );
}
