import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiGlobe, FiCloudLightning, FiTerminal, FiShield, FiCpu } from 'react-icons/fi';

const achievements = [
  {
    title: 'Projects Deployed Successfully',
    desc: 'Designed, integrated, and deployed multiple responsive web applications (Sustainable Living, Jarvis Voice Assistant, Chatbox) using React, Vite, Firebase, and CDNs like Vercel and Render.',
    status: 'Operational',
    icon: <FiCloudLightning className="text-xl text-accent" />,
    color: 'border-accent/20 bg-accent/5'
  },
  {
    title: 'Cybersecurity Learning Pathway',
    desc: 'Constantly practicing network vulnerability assessments, sandboxed exploitation tasks, traffic sniffing, and threat monitoring strategies.',
    status: 'In Progress',
    icon: <FiShield className="text-xl text-primary" />,
    color: 'border-primary/20 bg-primary/5'
  },
  {
    title: 'Completed Microsoft Azure Certification',
    desc: 'Validated understanding of cloud models, resource management, identity security, network components, and data privacy compliance structures.',
    status: 'Completed',
    icon: <FiCpu className="text-xl text-highlight" />,
    color: 'border-highlight/20 bg-highlight/5'
  },
  {
    title: 'Completed Ethical Hacking Internship',
    desc: 'Engaged in a structured 8-week corporate training program via Eduskills, obtaining foundational proficiency in defensive system hardening and cyber threat vectors.',
    status: 'Completed',
    icon: <FiTrendingUp className="text-xl text-accent" />,
    color: 'border-accent/20 bg-accent/5'
  },
  {
    title: 'Linux & Kali Linux Explorer',
    desc: 'Comfortable with CLI system controls, bash utilities, networking configuration files, automated package management, and forensic/auditing tools inside Debian-based OS structures.',
    status: 'Active Study',
    icon: <FiTerminal className="text-xl text-primary" />,
    color: 'border-primary/20 bg-primary/5'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-bgDark">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-space">
            Key <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 rounded-lg border ${ach.color} glass-panel-hover flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-black/40 border border-white/5 rounded-lg">
                    {ach.icon}
                  </div>
                  <span className="text-[9px] font-mono font-semibold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                    {ach.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold font-space text-white tracking-wide">
                    {ach.title}
                  </h3>
                  <p className="text-txtSec text-xs font-light mt-2 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-txtSec/30">
                <span>ACH_RECORD_0{idx + 1}</span>
                <span>SECURE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
