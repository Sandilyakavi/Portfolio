import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Core layout components
import TerminalLoader from './components/TerminalLoader';
import CustomCursor from './components/CustomCursor';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';

// Page sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Blog from './sections/Blog';
import Timeline from './sections/Timeline';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom Mouse Cursor Trail (Active on non-touch devices) */}
      <CustomCursor />

      {/* Cyberpunk Animated Matrix Particle Canvas Background */}
      <CyberBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          <TerminalLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 w-full"
          >
            {/* Header Sticky Navigation */}
            <Navbar />

            {/* Content Sections Container */}
            <main className="w-full">
              {/* Home Section */}
              <Hero />
              
              {/* Profile Narrative Section */}
              <About />
              
              {/* Technical Capabilities Section */}
              <Skills />
              
              {/* Internship Work Section */}
              <Experience />
              
              {/* Portfolio Builds Section */}
              <Projects />
              
              {/* Azure Credentials Section */}
              <Certifications />
              
              {/* Key Milestones Section */}
              <Achievements />
              
              {/* Research articles Section */}
              <Blog />
              
              {/* Road Map timeline Section */}
              <Timeline />
              
              {/* Testimonials Carousel Section */}
              <Testimonials />
              
              {/* Email Form Contact Section */}
              <Contact />
            </main>

            {/* Page Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
