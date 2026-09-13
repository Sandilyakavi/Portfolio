import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiTerminal, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const typingSequences = [
  'Cybersecurity Developer',
  'Linux Security',
  'Full-Stack Engineering',
  'SOC Analysis',
  'Python & React'
];

function TypingEffect() {
  const [text, setText] = useState('');
  const [seqIndex, setSeqIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeStr = typingSequences[seqIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setText(activeStr.substring(0, text.length + 1));
        setTypingSpeed(100);
        
        if (text === activeStr) {
          // Pause at full word
          setIsDeleting(true);
          setTypingSpeed(1500); // Wait 1.5s
        }
      } else {
        // Deleting
        setText(activeStr.substring(0, text.length - 1));
        setTypingSpeed(45);
        
        if (text === '') {
          setIsDeleting(false);
          setSeqIndex((prev) => (prev + 1) % typingSequences.length);
          setTypingSpeed(400); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, seqIndex, isDeleting, typingSpeed]);

  return (
    <span className="font-mono text-accent font-semibold tracking-wider text-lg md:text-2xl flex items-center min-h-[36px]">
      <FiTerminal className="mr-2 text-primary" />
      <span>{text}</span>
      <span className="w-2.5 h-5 bg-accent ml-1 animate-pulse" />
    </span>
  );
}

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
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
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#09090B]" />
      
      {/* Grid Pattern inside Section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-accent uppercase">
              Recruiter-Friendly Console Active
            </span>
          </motion.div>

          <div className="space-y-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] font-space text-white"
            >
              Kavi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-txtSec to-primary/80">
                Sandilya
              </span>
            </motion.h1>
          </div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypingEffect />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-txtSec max-w-xl text-base md:text-lg leading-relaxed font-light"
          >
            I am a cybersecurity-focused developer who actually builds and deploys real technical projects. My expertise bridges system security, Linux endpoint monitoring, and full-stack software development to create robust, practical solutions.
          </motion.p>

          {/* Premium Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            {/* View Projects */}
            <a 
              href="#projects" 
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 rounded bg-primary text-white font-semibold font-space tracking-wide text-sm flex items-center space-x-2 hover:bg-primary/95 transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.55)] transform hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <FiArrowRight />
            </a>

            {/* Download Resume */}
            <a 
              href="/assets/resume.pdf"
              download="Kavi_Sandilya_Resume.pdf"
              className="px-6 py-3.5 rounded border border-white/10 hover:border-accent/40 bg-white/[0.02] text-[#E4E4E7] font-semibold font-space tracking-wide text-sm flex items-center space-x-2 transition-all duration-300 hover:bg-white/[0.05] hover:text-white transform hover:scale-[1.02]"
            >
              <FiDownload />
              <span>Resume</span>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/Sandilyakavi"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded border border-white/10 hover:border-[#06B6D4]/40 bg-white/[0.02] text-[#E4E4E7] transition-all duration-300 hover:bg-white/[0.05] hover:text-[#06B6D4] transform hover:scale-[1.02] flex items-center justify-center"
              aria-label="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/kavi-sandilya-86a66831b/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3.5 rounded border border-white/10 hover:border-[#2563EB]/40 bg-white/[0.02] text-[#E4E4E7] transition-all duration-300 hover:bg-white/[0.05] hover:text-[#2563EB] transform hover:scale-[1.02] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
            
            {/* Contact */}
            <a 
              href="#contact"
              className="px-4 py-3.5 rounded border border-white/10 hover:border-[#8B5CF6]/40 bg-white/[0.02] text-[#E4E4E7] transition-all duration-300 hover:bg-white/[0.05] hover:text-[#8B5CF6] transform hover:scale-[1.02] flex items-center justify-center"
              aria-label="Contact"
            >
              <FiMail className="text-lg" />
            </a>
          </motion.div>
        </div>

        {/* Right Geometric Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle Ambient Behind Visual */}
          <div className="absolute w-72 h-72 rounded-full radial-glow-cyan opacity-40 blur-3xl pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full radial-glow-purple opacity-30 blur-3xl pointer-events-none" />

          {/* Designer SVG Geometric System */}
          <svg 
            viewBox="0 0 500 500" 
            className="w-full max-w-[420px] aspect-square relative select-none"
          >
            {/* Central Node */}
            <circle cx="250" cy="250" r="10" className="fill-accent filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <circle cx="250" cy="250" r="2" className="fill-white" />

            {/* Orbiting Ring 1 - Inner Cyan */}
            <motion.circle 
              cx="250" 
              cy="250" 
              r="60" 
              stroke="#06B6D4" 
              strokeWidth="1.5"
              strokeDasharray="4,8"
              fill="transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '250px', originY: '250px' }}
            />

            {/* Orbiting Ring 2 - Blue Grid Circle */}
            <motion.circle 
              cx="250" 
              cy="250" 
              r="100" 
              stroke="#2563EB" 
              strokeWidth="1"
              strokeDasharray="40,20,10,20"
              fill="transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '250px', originY: '250px' }}
              className="opacity-75"
            />

            {/* Orbiting Ring 3 - Outer Hex Crosshair */}
            <motion.circle 
              cx="250" 
              cy="250" 
              r="150" 
              stroke="#8B5CF6" 
              strokeWidth="1.5"
              strokeDasharray="80,10,30,10"
              fill="transparent"
              animate={{ rotate: 180 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '250px', originY: '250px' }}
              className="opacity-60"
            />

            {/* Cyber Grid Lines */}
            <line x1="250" y1="50" x2="250" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
            <line x1="50" y1="250" x2="450" y2="250" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />

            {/* Target Crosshair Corners */}
            <path d="M 80,80 L 100,80 M 80,80 L 80,100" stroke="#06B6D4" strokeWidth="2" fill="none" className="opacity-50" />
            <path d="M 420,80 L 400,80 M 420,80 L 420,100" stroke="#06B6D4" strokeWidth="2" fill="none" className="opacity-50" />
            <path d="M 80,420 L 100,420 M 80,420 L 80,400" stroke="#06B6D4" strokeWidth="2" fill="none" className="opacity-50" />
            <path d="M 420,420 L 400,420 M 420,420 L 420,400" stroke="#06B6D4" strokeWidth="2" fill="none" className="opacity-50" />

            {/* Cyber Rings with Nodes */}
            <g className="opacity-80">
              <motion.g 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '250px', originY: '250px' }}
              >
                {/* Node 1 */}
                <circle cx="150" cy="150" r="6" className="fill-accent filter drop-shadow-[0_0_5px_rgba(6,182,212,0.6)]" />
                <line x1="250" y1="250" x2="150" y2="150" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" />
                <text x="140" y="135" className="fill-accent font-mono text-[9px] tracking-wider" textAnchor="end">PORT_22</text>
              </motion.g>

              <motion.g 
                animate={{ rotate: -120 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '250px', originY: '250px' }}
              >
                {/* Node 2 */}
                <circle cx="370" cy="180" r="5" className="fill-primary filter drop-shadow-[0_0_5px_rgba(37,99,235,0.6)]" />
                <line x1="250" y1="250" x2="370" y2="180" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" />
                <text x="382" y="175" className="fill-primary font-mono text-[9px] tracking-wider" textAnchor="start">SYS_SEC</text>
              </motion.g>

              <motion.g 
                animate={{ rotate: 240 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '250px', originY: '250px' }}
              >
                {/* Node 3 */}
                <circle cx="210" cy="380" r="7" className="fill-highlight filter drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
                <line x1="250" y1="250" x2="210" y2="380" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
                <text x="195" y="395" className="fill-highlight font-mono text-[9px] tracking-wider" textAnchor="end">NET_STAT</text>
              </motion.g>
            </g>

            {/* Glowing Tech Elements / Coordinates */}
            <text x="10" y="25" className="fill-txtSec/30 font-mono text-[8px] tracking-widest">SYS.LOC: KL_UNI</text>
            <text x="490" y="25" className="fill-txtSec/30 font-mono text-[8px] tracking-widest" textAnchor="end">SYS.STATUS: ALIVE</text>
            <text x="10" y="490" className="fill-txtSec/30 font-mono text-[8px] tracking-widest">SEC_HASH: SHA-256</text>
            <text x="490" y="490" className="fill-txtSec/30 font-mono text-[8px] tracking-widest" textAnchor="end">IP.ADDR: 127.0.0.1</text>
          </svg>
        </motion.div>
        
      </div>
    </section>
  );
}
