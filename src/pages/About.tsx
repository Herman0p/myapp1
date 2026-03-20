import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, User } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxImage from '../components/ParallaxImage';

const experiences = [
  {
    company: "UNCLD",
    role: "Owner & Creative Director",
    period: "2019 - Present",
    description: "Leading visual branding and creative strategy for diverse clients."
  },
  {
    company: "Bocah Ngimpi",
    role: "Marketing Specialist",
    period: "2022 - Present",
    description: "Developing and executing digital marketing strategies to drive user acquisition."
  },
  {
    company: "CapCut",
    role: "Freelance Video Editor",
    period: "2021 - Present",
    description: "Creating high-performance video templates and business content."
  },
  {
    company: "PT MDA",
    role: "Graphic Designer",
    period: "2020 - 2021",
    description: "Visual asset creation for corporate branding and marketing materials."
  },
  {
    company: "PT TAJIR TUJU TURUNAN",
    role: "Creative Specialist",
    period: "2018 - 2020",
    description: "Handling social media content and brand visual identity."
  }
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <ScrollReveal delay={0.1} y={60}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85]">
              The Story <br /> Behind <br /> <span className="text-zinc-300 italic font-serif">Uncle</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3} y={30}>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-4xl leading-relaxed font-light">
              I'm Hermansyah Adika Putra, a creative professional based in Indonesia. With over 6 years of experience, I've navigated the intersection of design, video, and marketing to help brands build meaningful connections with their audience.
            </p>
          </ScrollReveal>
        </div>

        {/* Navigation Tabs */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap gap-6 mb-32 border-b border-black/5 pb-12">
            <Link to="/about/work" className="px-8 py-3 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">Experience</Link>
            <Link to="/about/socials" className="px-8 py-3 rounded-full border border-zinc-200 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all">Socials</Link>
            <Link to="/about/personal" className="px-8 py-3 rounded-full border border-zinc-200 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all">Personal</Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-32">
            {/* Work Experience */}
            <section id="work">
              <ScrollReveal>
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter">Professional Experience</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-16">
                {experiences.map((exp, idx) => (
                  <ScrollReveal key={exp.company} delay={idx * 0.1} y={40}>
                    <div className="group relative pl-12 border-l border-zinc-100 pb-12 last:pb-0">
                      <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-emerald-500 transition-colors duration-500" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <h3 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors duration-500">{exp.company}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{exp.period}</span>
                      </div>
                      <h4 className="text-emerald-600 font-medium mb-6 text-lg tracking-tight">{exp.role}</h4>
                      <p className="text-zinc-500 leading-relaxed font-light text-lg">{exp.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-16">
            <ScrollReveal delay={0.2} y={40}>
              <div className="p-10 bg-zinc-50 rounded-[40px] border border-black/5">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-4">
                  <User size={20} className="text-emerald-600" />
                  Quick Facts
                </h3>
                <ul className="space-y-6 text-sm">
                  <li className="flex justify-between border-b border-zinc-200 pb-3">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px]">Based in</span>
                    <span className="font-medium">Indonesia</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-200 pb-3">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px]">Experience</span>
                    <span className="font-medium">6+ Years</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-200 pb-3">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px]">Tools</span>
                    <span className="font-medium text-right">Figma, CapCut, Adobe Suite</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-200 pb-3">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px]">Specialty</span>
                    <span className="font-medium text-right">Visual Branding & Ads</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} y={40}>
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-100 mb-16">
                <ParallaxImage src="https://picsum.photos/seed/uncle-portrait/600/800" alt="Uncle Portrait" className="w-full h-full" offset={60} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} y={40}>
              <div className="p-10 bg-emerald-600 text-white rounded-[40px] shadow-2xl shadow-emerald-900/20 group overflow-hidden relative">
                <GraduationCap size={48} className="mb-8 opacity-30 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Education & Learning</h3>
                <p className="text-emerald-50 leading-relaxed mb-10 font-light relative z-10">
                  Continuous learning is at the core of my workflow. I regularly update my skills in TikTok Ads and UI/UX trends to stay ahead of the curve.
                </p>
                <Link to="/edu" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:translate-x-2 transition-transform relative z-10">
                  View Resources <ArrowRight size={16} />
                </Link>
                <div className="absolute top-[-20%] right-[-20%] w-[60%] aspect-square bg-white/10 blur-[60px] rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
