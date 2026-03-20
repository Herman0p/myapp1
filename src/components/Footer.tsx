import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-black/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            HERMANSYAH ADIKA PUTRA
          </Link>
          <p className="mt-4 text-zinc-500 max-w-sm leading-relaxed">
            Graphic Designer, Video Editor, and Digital Marketer. Owner of UNCLD.
            Helping brands build visual identity and digital presence.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">About</Link></li>
            <li><Link to="/services" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">Services</Link></li>
            <li><Link to="/edu" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">Education</Link></li>
            <li><Link to="/blog" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Socials</h4>
          <ul className="space-y-4">
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">LinkedIn</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">Dribbble</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 transition-colors">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-400">
          © {currentYear} Hermansyah Adika Putra. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
