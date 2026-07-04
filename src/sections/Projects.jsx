import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBookOpen, FiMic, FiMessageSquare, FiShield } from 'react-icons/fi';

const projects = [
  {
    title: 'Fake Link Detector',
    subtitle: 'Full-Stack Phishing URL Detection Web Application',
    desc: 'A full-stack web application that analyzes URLs to help identify potentially malicious or phishing websites. Built with React.js, Node.js, and Express.js, the application validates URLs through a backend API and provides a fast, responsive user interface.',
    github: 'https://github.com/Sandilyakavi/Fake-Link-Detector',
    live: 'https://fake-link-detector-nu.vercel.app',
    tags: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'Vercel', 'Render'],
    features: ['URL Validation', 'Phishing Detection', 'REST API', 'Responsive UI', 'Live Deployment'],
    icon: <FiShield className="text-2xl text-[#10B981]" />,
    headerColor: 'from-[#10B981]/20 via-[#059669]/5 to-[#09090B]',
    accentColor: '#10B981',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-b from-[#10B981]/10 to-transparent">
        <div className="w-4/5 h-[80%] rounded border border-white/10 bg-[#111827]/90 p-3 shadow-inner flex flex-col space-y-2">
          <div className="flex items-center space-x-1 border-b border-white/5 pb-1 text-[8px] font-mono text-txtSec">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="ml-2 text-[6px] tracking-wider opacity-60">fake-link-detector.vercel.app</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-2">
            {/* Shield icon visual */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full border-2 border-[#10B981]/60 flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 rounded-full bg-[#10B981]/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            </div>
            {/* URL input simulation */}
            <div className="w-full px-2">
              <div className="h-3 w-full bg-white/5 rounded border border-white/10 flex items-center px-1">
                <div className="h-1 w-3/4 bg-[#10B981]/20 rounded" />
              </div>
            </div>
            {/* Scan result */}
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[6px] font-mono text-[#10B981] tracking-wider">SCAN_COMPLETE: SAFE</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Sustainable Living Courses',
    subtitle: 'Educational Platform',
    desc: 'An educational platform that promotes sustainable learning through structured online courses and interactive content.',
    github: 'https://github.com/Sandilyakavi/FED-Project',
    live: 'https://fed-project-ten.vercel.app/courses',
    tags: ['React', 'CSS', 'JavaScript'],
    features: [],
    icon: <FiBookOpen className="text-2xl text-accent" />,
    headerColor: 'from-[#06B6D4]/20 via-[#0891B2]/5 to-[#09090B]',
    accentColor: '#06B6D4',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-b from-[#06B6D4]/10 to-transparent">
        <div className="w-4/5 h-[80%] rounded border border-white/10 bg-[#111827]/90 p-3 shadow-inner flex flex-col space-y-2">
          <div className="flex items-center space-x-1 border-b border-white/5 pb-1 text-[8px] font-mono text-txtSec">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="ml-2 text-[6px] tracking-wider opacity-60">fed-project.vercel.app/courses</span>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="h-2 w-1/2 bg-accent/20 rounded" />
              <div className="h-1.5 w-3/4 bg-white/5 rounded" />
              <div className="h-1.5 w-2/3 bg-white/5 rounded" />
            </div>
            {/* Simulation of a course progress */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between text-[7px] font-mono text-accent">
                <span>Green Energy Module</span>
                <span>65%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Jarvis AI Voice Assistant',
    subtitle: 'AI-Powered Voice Interface',
    desc: 'A browser-based AI voice assistant capable of responding to user commands and performing basic internet-related tasks.',
    github: 'https://github.com/Sandilyakavi/Jarvis-AI-',
    live: 'https://jarvis-ai-delta-black.vercel.app',
    tags: ['React', 'JavaScript', 'API', 'Speech Recognition'],
    features: [],
    icon: <FiMic className="text-2xl text-primary" />,
    headerColor: 'from-[#2563EB]/20 via-[#1D4ED8]/5 to-[#09090B]',
    accentColor: '#2563EB',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-b from-[#2563EB]/10 to-transparent">
        <div className="w-4/5 h-[80%] rounded border border-white/10 bg-[#111827]/90 p-3 shadow-inner flex flex-col justify-between items-center">
          <div className="w-full flex items-center justify-between border-b border-white/5 pb-1 text-[8px] font-mono text-txtSec">
            <span className="text-[6px] opacity-60">JARVIS_AI_CONSOLE</span>
            <span className="text-[6px] text-primary">MIC_ACTIVE</span>
          </div>
          {/* Animated voice wave simulator */}
          <div className="flex items-center space-x-1.5 h-8">
            <div className="w-1 h-3 bg-primary rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
            <div className="w-1 h-6 bg-accent rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-8 bg-highlight rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1 h-5 bg-[#8B5CF6] rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="w-1 h-2 bg-primary rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="text-[6px] font-mono text-txtSec/60 tracking-wider">
            "Searching Linux directory protocols..."
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Chat App (Chatbox)',
    subtitle: 'Real-Time Messaging Platform',
    desc: 'A modern chat application focused on messaging with future support planned for voice and video calling features.',
    github: 'https://github.com/Sandilyakavi/Chatbox',
    live: 'https://chatbox-rho-eosin.vercel.app/',
    tags: ['React', 'Firebase', 'JavaScript'],
    features: [],
    icon: <FiMessageSquare className="text-2xl text-highlight" />,
    headerColor: 'from-[#8B5CF6]/20 via-[#7C3AED]/5 to-[#09090B]',
    accentColor: '#8B5CF6',
    mockup: (
      <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent">
        <div className="w-4/5 h-[80%] rounded border border-white/10 bg-[#111827]/90 p-3 shadow-inner flex flex-col justify-between">
          <div className="flex items-center space-x-1 border-b border-white/5 pb-1 text-[8px] font-mono text-txtSec">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
            <span className="ml-1 text-[6px] tracking-wider opacity-60">Chatbox Client v1.0</span>
          </div>
          <div className="flex-1 flex flex-col space-y-1.5 justify-center py-1">
            <div className="flex items-start space-x-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]/50 flex-shrink-0" />
              <div className="bg-bgDark border border-white/5 p-1 rounded max-w-[80%]">
                <div className="w-12 h-1 bg-txtSec rounded" />
              </div>
            </div>
            <div className="flex items-start space-x-1 justify-end">
              <div className="bg-primary/20 border border-primary/20 p-1 rounded max-w-[80%]">
                <div className="w-16 h-1 bg-white rounded" />
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bgDark">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-space">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-txtSec text-sm mt-3 font-light max-w-lg mx-auto">
            A collection of projects showcasing full-stack development, AI integration, and cybersecurity.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid — 2x2 on large screens for balanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel rounded-lg border border-white/5 overflow-hidden flex flex-col justify-between glass-panel-hover"
            >
              <div>
                {/* Mockup Header */}
                <div className={`h-48 border-b border-white/5 relative overflow-hidden bg-gradient-to-br ${project.headerColor}`}>
                  {project.mockup}
                  <div className="absolute top-4 right-4 p-2 bg-black/60 border border-white/10 rounded-lg">
                    {project.icon}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-space text-white tracking-wide">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs font-mono tracking-wider mt-1" style={{ color: project.accentColor }}>
                      {project.subtitle}
                    </p>
                  )}
                  
                  <p className="text-txtSec text-sm mt-3 font-light leading-relaxed min-h-[60px]">
                    {project.desc}
                  </p>

                  {/* Features (shown only if present) */}
                  {project.features && project.features.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {project.features.map((feat) => (
                        <span key={feat} className="text-[11px] font-mono text-txtSec flex items-center space-x-1">
                          <span className="text-[10px]" style={{ color: project.accentColor }}>✔</span>
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-txtSec"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex space-x-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded border border-white/10 bg-white/[0.02] text-xs font-mono font-semibold tracking-wider text-[#E4E4E7] flex items-center justify-center space-x-1.5 transition-all hover:bg-white/[0.05] hover:text-white"
                >
                  <FiGithub />
                  <span>GITHUB</span>
                </a>
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded bg-primary text-xs font-mono font-semibold tracking-wider text-white flex items-center justify-center space-x-1.5 transition-all hover:bg-primary/95 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <FiExternalLink />
                  <span>LIVE DEMO</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
