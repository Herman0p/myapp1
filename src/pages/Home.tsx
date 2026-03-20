import { motion } from 'motion/react';
import { ArrowRight, Video, Figma, BarChart, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxImage from '../components/ParallaxImage';

const services = [
  {
    title: "Meta & TikTok Ads",
    description: "End-to-end Ads management for business growth.",
    icon: BarChart,
    href: "/services/meta-tiktok-ads",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Landing Page UI",
    description: "High-converting web & landing page design using Figma.",
    icon: Layout,
    href: "/services/landing-page-ui",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Graphic Design",
    description: "Visual branding & marketplace assets for your brand.",
    icon: Figma,
    href: "/services/graphic-design",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Video Editing",
    description: "High-quality video templates & business content.",
    icon: Video,
    href: "/services/video-editing",
    color: "bg-rose-50 text-rose-600"
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Text Content Column */}
        <div className="w-full lg:w-1/2 flex items-center p-6 md:p-12 lg:pr-16 lg:pl-20 bg-white z-10">
          <div className="max-w-2xl w-full">
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Marketing Specialist & Creative Designer
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} y={60}>
              <h1 className="text-5xl md:text-7xl lg:text-[4.5vw] font-bold tracking-tighter leading-[1.1] mb-10 break-words">
                Hi, I'm <br />
                <span className="text-zinc-300 italic font-serif">Hermansyah</span> <br />
                Adika Putra
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3} y={30}>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-500 max-w-lg mb-12 leading-relaxed font-light">
                Owner of UNCLD. I bridge the gap between high-end visual design and data-driven marketing to help brands scale.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} y={20}>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link 
                  to="/contact" 
                  className="px-8 md:px-10 py-4 md:py-5 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-zinc-800 transition-all flex items-center gap-3 group"
                >
                  Let's Collaborate
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 md:px-10 py-4 md:py-5 border border-zinc-200 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-zinc-50 transition-all"
                >
                  View Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-zinc-100"
        >
          <ParallaxImage 
            src="https://picsum.photos/seed/hermansyah/800/1000" 
            alt="Hermansyah Adika Putra"
            className="w-full h-full"
            offset={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Services Quick View */}
      <section className="bg-zinc-50 py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <ScrollReveal>
              <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Core Services</h2>
                <p className="text-zinc-500 max-w-md text-lg font-light">Specialized solutions for modern digital brands, crafted with precision and purpose.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link to="/services" className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors group">
                All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 0.1} y={40}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group p-10 bg-white rounded-[40px] border border-black/5 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 h-full flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-light">{service.description}</p>
                  <Link to={service.href} className="mt-auto text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal delay={0.1} y={40}>
                <div className="aspect-square rounded-[40px] overflow-hidden bg-zinc-100">
                  <ParallaxImage src="https://picsum.photos/seed/work1/600/600" alt="Work 1" className="w-full h-full" offset={40} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} y={60}>
                <div className="aspect-square rounded-[40px] overflow-hidden bg-zinc-100 mt-12">
                  <ParallaxImage src="https://picsum.photos/seed/work2/600/600" alt="Work 2" className="w-full h-full" offset={60} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3} y={20}>
                <div className="aspect-square rounded-[40px] overflow-hidden bg-zinc-100 -mt-12">
                  <ParallaxImage src="https://picsum.photos/seed/work3/600/600" alt="Work 3" className="w-full h-full" offset={30} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4} y={40}>
                <div className="aspect-square rounded-[40px] overflow-hidden bg-zinc-100">
                  <ParallaxImage src="https://picsum.photos/seed/work4/600/600" alt="Work 4" className="w-full h-full" offset={50} />
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 leading-[0.9]">6+ Years of <br /> <span className="text-zinc-300 italic font-serif">Creative</span> & Strategic <br /> Experience</h2>
            </ScrollReveal>
            
            <div className="space-y-12">
              {[
                { name: "UNCLD", role: "Owner & Creative Director", desc: "Building visual identities that resonate with modern audiences." },
                { name: "Bocah Ngimpi", role: "Marketing Specialist", desc: "Driving growth through strategic digital campaigns." },
                { name: "CapCut", role: "Freelance Video Editor", desc: "Creating high-quality templates for millions of creators." }
              ].map((exp, idx) => (
                <ScrollReveal key={exp.name} delay={0.2 + idx * 0.1}>
                  <div className="group border-b border-black/5 pb-8">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">{exp.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{exp.role}</span>
                    </div>
                    <p className="text-zinc-500 leading-relaxed font-light">{exp.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={0.5}>
              <Link to="/about" className="mt-16 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors group">
                Full Experience <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-zinc-900 text-white rounded-[60px] mx-6 mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal width="100%">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85]">
              Ready to <br /> <span className="text-emerald-500 italic font-serif">Elevate</span> Your <br /> Brand?
            </h2>
          </ScrollReveal>
          <ScrollReveal width="100%" delay={0.3}>
            <Link 
              to="/contact" 
              className="inline-flex px-12 py-6 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all duration-500"
            >
              Start a Project
            </Link>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square bg-emerald-600/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] aspect-square bg-blue-600/20 blur-[120px] rounded-full" />
        </div>
      </section>
    </main>
  );
}
