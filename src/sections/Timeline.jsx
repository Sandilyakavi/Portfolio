import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiCode, FiLayers, FiGlobe, FiTerminal, FiShield, FiBriefcase, FiAward, FiTarget } from 'react-icons/fi';

const timelineEvents = [
  {
    year: '2023',
    title: 'Commenced B.Tech in Computer Science',
    desc: 'Began engineering studies focusing on systems, logic structures, and foundational programming paradigms.',
    icon: <FiPlayCircle className="text-accent" />
  },
  {
    year: '2024',
    title: 'Full-Stack Development Focus',
    desc: 'Built and deployed modern web applications utilizing React, Node.js, and CI/CD pipelines (Vercel/Render).',
    icon: <FiLayers className="text-primary" />
  },
  {
    year: '2024',
    title: 'Linux & Security Foundations',
    desc: 'Established proficiency in Linux server administration, bash automation, and network protocol analysis.',
    icon: <FiTerminal className="text-highlight" />
  },
  {
    year: '2025',
    title: 'Ethical Hacking Internship',
    desc: 'Completed an intensive 8-week internship focused on penetration testing, threat analysis, and risk mitigation.',
    icon: <FiBriefcase className="text-accent" />
  },
  {
    year: '2025',
    title: 'Earned Azure Fundamentals Certification',
    desc: 'Validated cloud computing expertise, covering architecture, identity security, and network components.',
    icon: <FiAward className="text-primary" />
  },
  {
    year: '2026',
    title: 'Deployed EDR & SOC Dashboard',
    desc: 'Architected and launched a real-time endpoint monitoring solution for Linux hosts.',
    icon: <FiShield className="text-highlight" />
  },
  {
    year: '2028',
    title: 'Future Goal: Cybersecurity Engineer',
    desc: 'Aiming to design, implement, and scale enterprise-grade network defenses and incident response strategies.',
    icon: <FiTarget className="text-accent animate-pulse" />,
    future: true
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-bgDark">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-space">
            Academic & Tech <span className="text-accent">Timeline</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-12 space-y-10 py-2">
          
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
              className="relative"
            >
              {/* Timeline dot circle icon */}
              <span className={`absolute -left-[35px] sm:-left-[53px] top-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#111827] border ${
                event.future ? 'border-accent animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-white/10'
              }`}>
                <div className="text-xs sm:text-sm">
                  {event.icon}
                </div>
              </span>

              {/* Event Box card details */}
              <div className={`glass-panel p-5 rounded-lg border ${
                event.future 
                  ? 'border-accent/30 bg-[#06B6D4]/5 shadow-[0_0_20px_rgba(6,182,212,0.05)]' 
                  : 'border-white/5'
              } glass-panel-hover`}>
                
                {/* Year and Title */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2 mb-3">
                  <h3 className={`text-base font-bold font-space ${event.future ? 'text-accent' : 'text-white'}`}>
                    {event.title}
                  </h3>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    event.future ? 'bg-accent/20 text-accent' : 'bg-white/5 text-txtSec'
                  }`}>
                    {event.year}
                  </span>
                </div>

                <p className="text-txtSec text-xs sm:text-sm leading-relaxed font-light">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
