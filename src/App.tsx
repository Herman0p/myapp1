import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Edu from './pages/Edu';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 bg-white antialiased">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/edu" element={<Edu />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
