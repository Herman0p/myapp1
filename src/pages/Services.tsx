import { motion } from 'motion/react';
import { BarChart, Layout, Figma, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxImage from '../components/ParallaxImage';

const services = [
  {
    id: "meta-tiktok-ads",
    title: "Meta & TikTok Ads",
    icon: BarChart,
    description: "End-to-end Ads management. From creative strategy to technical setup and scaling.",
    features: ["Campaign Strategy", "Creative Direction", "A/B Testing", "Pixel/API Setup", "Weekly Reporting"],
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    id: "landing-page-ui",
    title: "Landing Page UI",
    icon: Layout,
    description: "High-converting web & landing page design focused on user experience and brand story.",
    features: ["Conversion Optimization", "Responsive Design", "Interactive Prototypes", "Copywriting Support", "SEO Ready"],
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Figma,
    description: "Visual branding & marketplace assets. Building a consistent visual language for your brand.",
    features: ["Logo & Branding", "Social Media Kits", "Marketplace Assets", "Brand Guidelines", "Print Materials"],
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    id: "video-editing",
    title: "Video Editing",
    icon: Video,
    description: "High-quality video templates & business content optimized for social media performance.",
    features: ["Reels & TikTok Editing", "Business Promos", "CapCut Templates", "Color Grading", "Sound Design"],
    color: "text-rose-600",
    bg: "bg-rose-50"
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <ScrollReveal delay={0.1} y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] italic">
              Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-2xl leading-relaxed font-light">
              Strategic creative solutions designed to help your brand stand out and scale in the digital landscape.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.1} y={60} width="100%">
              <div className="group bg-white rounded-[60px] border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12 md:p-20 flex flex-col justify-center">
                    <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700`}>
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">{service.title}</h2>
                    <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-12 font-light">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                      {service.features.map(feature => (
                        <div key={feature} className="flex items-center gap-4 text-sm text-zinc-600 font-medium">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/contact?service=${service.id}`}
                      className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-zinc-800 transition-all group/btn"
                    >
                      Get Started 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  <div className="bg-zinc-100 relative min-h-[500px] overflow-hidden">
                    <ParallaxImage 
                      src={`https://picsum.photos/seed/${service.id}/1000/1000`} 
                      alt={service.title}
                      className="w-full h-full"
                      offset={100}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
