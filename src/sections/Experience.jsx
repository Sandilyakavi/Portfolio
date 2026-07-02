import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiShield, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

export default function Experience() {
  const internshipTasks = [
    'Studied and applied core ethical hacking and penetration testing methodologies.',
    'Gained hands-on experience with networking tools and security scanners including Nmap, Wireshark, and Kali Linux utilities.',
    'Practiced security concepts in sandboxed environments, understanding vulnerabilities and system configuration flaws.',
    'Explored the OWASP Top 10 web application vulnerabilities and basic risk mitigation techniques.',
    'Acquired deep security awareness, analyzing common social engineering threat vectors like phishing and credential harvesting.'
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bgDark">
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
            Professional <span className="text-accent">Experience</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-12">
          
          {/* Node */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#111827] border border-accent shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
            </span>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-lg border border-white/5 glass-panel-hover relative overflow-hidden">
              {/* Highlight Overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-space flex items-center gap-2">
                    <FiShield className="text-accent" />
                    <span>Ethical Hacking Intern</span>
                  </h3>
                  <p className="text-primary font-mono text-sm font-semibold tracking-wider mt-1">
                    Eduskills Foundation
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 bg-white/[0.03] border border-white/5 rounded-full px-3.5 py-1.5 self-start sm:self-auto">
                  <FiCalendar className="text-accent text-xs" />
                  <span className="text-[11px] font-mono text-txtSec uppercase tracking-wider">
                    8 Weeks (Summer)
                  </span>
                </div>
              </div>

              {/* Description & Accomplishments */}
              <div className="mt-6 space-y-4">
                <p className="text-txtSec text-sm md:text-base font-light leading-relaxed">
                  Participated in a structured cybersecurity program focusing on ethical hacking fundamentals, cyber threat analysis, and hands-on laboratory exercises. Collaborated in sandboxed setups to discover, analyze, and document security vulnerabilities.
                </p>

                <div className="space-y-2.5 pt-4">
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider flex items-center gap-1">
                    <span>Key Learnings & Labs</span>
                    <FiChevronRight className="text-accent" />
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-2.5">
                    {internshipTasks.map((task, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm text-txtSec">
                        <FiCheckCircle className="text-accent mt-0.5 shrink-0" />
                        <span className="font-light">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-6 flex flex-wrap gap-2">
                  {['Ethical Hacking', 'Penetration Testing', 'Nmap', 'Kali Linux', 'Network Security', 'Security Awareness'].map((badge) => (
                    <span 
                      key={badge}
                      className="px-2.5 py-1 rounded bg-[#111827] border border-white/5 text-[10px] font-mono text-accent hover:border-accent/40 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
