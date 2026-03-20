import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, User } from 'lucide-react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">The Story <br /> Behind <span className="text-zinc-400 italic">Uncle</span></h1>
          <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
            I'm Hermansyah Adika Putra, a creative professional based in Indonesia. With over 6 years of experience, I've navigated the intersection of design, video, and marketing to help brands build meaningful connections with their audience.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-black/5 pb-8">
          <Link to="/about/work" className="px-6 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold uppercase tracking-widest">Experience</Link>
          <Link to="/about/socials" className="px-6 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">Socials</Link>
          <Link to="/about/personal" className="px-6 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all">Personal</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            {/* Work Experience */}
            <section id="work">
              <div className="flex items-center gap-4 mb-12">
                <Briefcase className="text-emerald-600" size={24} />
                <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
              </div>
              <div className="space-y-12">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-zinc-200"
                  >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{exp.period}</span>
                    </div>
                    <h4 className="text-emerald-600 font-medium mb-4">{exp.role}</h4>
                    <p className="text-zinc-500 leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-zinc-50 rounded-[40px] border border-black/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <User size={20} className="text-emerald-600" />
                Quick Facts
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Based in</span>
                  <span className="font-medium">Indonesia</span>
                </li>
                <li className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Experience</span>
                  <span className="font-medium">6+ Years</span>
                </li>
                <li className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Tools</span>
                  <span className="font-medium text-right">Figma, CapCut, Adobe Suite</span>
                </li>
                <li className="flex justify-between border-b border-zinc-200 pb-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Specialty</span>
                  <span className="font-medium text-right">Visual Branding & Ads</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-emerald-600 text-white rounded-[40px] shadow-xl shadow-emerald-900/20">
              <GraduationCap size={40} className="mb-6 opacity-50" />
              <h3 className="text-xl font-bold mb-4">Education & Learning</h3>
              <p className="text-emerald-50 leading-relaxed mb-8">
                Continuous learning is at the core of my workflow. I regularly update my skills in TikTok Ads and UI/UX trends.
              </p>
              <Link to="/edu" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:translate-x-1 transition-transform">
                View Resources <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
