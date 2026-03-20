import { motion } from 'motion/react';
import { BarChart, Layout, Figma, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 italic">Services</h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Strategic creative solutions designed to help your brand stand out and scale in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[48px] border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-16">
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight mb-6">{service.title}</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-10">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all"
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="bg-zinc-100 relative min-h-[400px]">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/800`} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
