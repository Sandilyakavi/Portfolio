import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTerminal, FiGlobe, FiTool, FiShield } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Cybersecurity',
    icon: <FiShield className="text-xl text-accent" />,
    skills: [
      { name: 'Linux Security', level: 'Advanced', width: '85%' },
      { name: 'Security Monitoring', level: 'Proficient', width: '80%' },
      { name: 'Endpoint Security', level: 'Proficient', width: '80%' },
      { name: 'Threat Detection', level: 'Intermediate', width: '70%' },
      { name: 'SOC Concepts', level: 'Intermediate', width: '65%' },
      { name: 'Incident Response', level: 'Intermediate', width: '60%' }
    ]
  },
  {
    title: 'Programming',
    icon: <FiCode className="text-xl text-primary" />,
    skills: [
      { name: 'Python', level: 'Advanced', width: '85%' },
      { name: 'JavaScript', level: 'Advanced', width: '85%' },
      { name: 'Bash / Shell', level: 'Proficient', width: '80%' },
      { name: 'C', level: 'Intermediate', width: '65%' }
    ]
  },
  {
    title: 'Web Development',
    icon: <FiGlobe className="text-xl text-highlight" />,
    skills: [
      { name: 'React', level: 'Advanced', width: '85%' },
      { name: 'Tailwind CSS', level: 'Proficient', width: '80%' },
      { name: 'Vite', level: 'Proficient', width: '75%' },
      { name: 'REST APIs', level: 'Intermediate', width: '70%' }
    ]
  },
  {
    title: 'Systems & Networking',
    icon: <FiTerminal className="text-xl text-accent" />,
    skills: [
      { name: 'Linux', level: 'Advanced', width: '90%' },
      { name: 'System Monitoring', level: 'Proficient', width: '80%' },
      { name: 'Process Monitoring', level: 'Proficient', width: '80%' },
      { name: 'Networking Fundamentals', level: 'Intermediate', width: '70%' }
    ]
  },
  {
    title: 'Tools & Version Control',
    icon: <FiTool className="text-xl text-primary" />,
    skills: [
      { name: 'Git', level: 'Proficient', width: '85%' },
      { name: 'GitHub', level: 'Proficient', width: '85%' },
      { name: 'VS Code', level: 'Advanced', width: '90%' }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bgDark">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

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
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          <p className="text-txtSec text-sm md:text-base mt-4 max-w-lg mx-auto font-light">
            A comprehensive overview of my technical capabilities. Progress bars represent confidence and project-based experience.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel p-6 rounded-lg border border-white/5 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold font-space text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-txtMain font-medium">{skill.name}</span>
                        <span className={`text-[10px] uppercase font-semibold ${
                          skill.level === 'Advanced' ? 'text-accent' :
                          skill.level === 'Proficient' ? 'text-primary' :
                          'text-highlight'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Bar Container */}
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/[0.03]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                          className={`h-full rounded-full progress-active-bar ${
                            skill.level === 'Advanced' ? 'bg-accent' :
                            skill.level === 'Proficient' ? 'bg-primary' :
                            'bg-highlight'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tiny bottom indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-txtSec/30">
                <span>SKILLS_GRP_0{index + 1}</span>
                <span>SECURE</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
