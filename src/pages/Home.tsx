import { motion } from 'motion/react';
import { ArrowRight, Video, Figma, BarChart, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <main className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
              Marketing Specialist & Creative Designer
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Hi, I'm <br />
              <span className="text-zinc-400">Hermansyah</span> <br />
              Adika Putra
            </h1>
            <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
              Owner of UNCLD. I bridge the gap between high-end visual design and data-driven marketing to help brands scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group"
              >
                Let's Collaborate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-100"
          >
            <img 
              src="https://picsum.photos/seed/hermansyah/800/1000" 
              alt="Hermansyah Adika Putra"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="bg-zinc-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Core Services</h2>
              <p className="text-zinc-500 max-w-md">Specialized solutions for modern digital brands.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors">
              All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-3xl border border-black/5 hover:shadow-xl hover:shadow-emerald-900/5 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to={service.href} className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                  Learn More <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100">
                <img src="https://picsum.photos/seed/work1/400/400" alt="Work 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 mt-8">
                <img src="https://picsum.photos/seed/work2/400/400" alt="Work 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 -mt-8">
                <img src="https://picsum.photos/seed/work3/400/400" alt="Work 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100">
                <img src="https://picsum.photos/seed/work4/400/400" alt="Work 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold tracking-tight mb-8">6+ Years of Creative & Strategic Experience</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold mb-2">UNCLD</h4>
                <p className="text-zinc-500 leading-relaxed">Owner & Creative Director. Building visual identities that resonate with modern audiences.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Bocah Ngimpi</h4>
                <p className="text-zinc-500 leading-relaxed">Marketing Specialist. Driving growth through strategic digital campaigns.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">CapCut</h4>
                <p className="text-zinc-500 leading-relaxed">Freelance Video Editor. Creating high-quality templates for millions of creators.</p>
              </div>
            </div>
            <Link to="/about" className="mt-12 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors">
              Full Experience <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
