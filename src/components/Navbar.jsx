import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Blog', id: 'blog' },
  { name: 'Timeline', id: 'timeline' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor scrolling to highlight links active state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger active when section occupies center viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Navbar offset height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 backdrop-blur-md bg-bgDark/85 border-b border-white/5 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-transform group-hover:scale-105">
              KS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider font-space leading-tight">KAVI SANDILYA</span>
              <span className="text-[10px] text-accent font-mono tracking-widest uppercase">Cyber Security</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1.5 2xl:space-x-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-accent font-semibold' 
                    : 'text-txtSec hover:text-txtMain'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Resume Button */}
            <a 
              href="/assets/resume.pdf"
              download="Kavi_Sandilya_Resume.pdf"
              className="ml-4 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-white border border-primary/40 rounded bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-300 flex items-center space-x-1.5 shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]"
            >
              <FiFileText className="text-sm" />
              <span>RESUME.PDF</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded border border-white/10 hover:border-accent/40 text-txtSec hover:text-txtMain transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 xl:hidden bg-bgDark/95 backdrop-blur-lg border-b border-white/5 overflow-y-auto px-6 py-8 flex flex-col justify-between"
            style={{ height: 'calc(100vh - 70px)' }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`text-base font-semibold tracking-wider font-space uppercase py-2 border-b border-white/5 flex justify-between items-center ${
                    activeSection === item.id ? 'text-accent' : 'text-txtSec hover:text-txtMain'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-[#8B5CF6]/50">0{index + 1}</span>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="/assets/resume.pdf"
                download="Kavi_Sandilya_Resume.pdf"
                className="w-full py-3 bg-primary/20 border border-primary/50 text-white rounded font-mono font-bold text-center tracking-widest flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
              >
                <FiFileText />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
