import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayers, FiBriefcase, FiAward, FiShield } from 'react-icons/fi';

function AnimatedCounter({ value, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    // Extract numerical value
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const stats = [
    { 
      label: 'Security & Dev Projects', 
      value: '10', 
      suffix: '+',
      icon: <FiShield className="text-xl text-accent" />, 
      desc: 'EDR, AI & Web builds' 
    },
    { 
      label: 'Technologies', 
      value: '15', 
      suffix: '+',
      icon: <FiLayers className="text-xl text-primary" />, 
      desc: 'Linux, Python, React, APIs' 
    },
    { 
      label: 'Internship Experience', 
      value: '8', 
      suffix: ' Wks',
      icon: <FiBriefcase className="text-xl text-highlight" />, 
      desc: 'Ethical Hacking focus' 
    },
    { 
      label: 'Certifications', 
      value: '1', 
      suffix: '',
      icon: <FiAward className="text-xl text-accent" />, 
      desc: 'Azure Fundamentals' 
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bgDark">
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
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Narrative Content */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 space-y-6 text-txtSec leading-relaxed text-base"
          >
            <h3 className="text-xl md:text-2xl font-bold font-space text-white tracking-wide">
              Who is <span className="text-accent">Kavi Sandilya</span>?
            </h3>
            
            <p>
              I am a <span className="text-white font-medium">Cybersecurity Developer</span> and Computer Science Engineering student (Class of 2028). My interest in engineering revolves around understanding how complex computer systems communicate, how software is structured, and how we can defend digital assets against evolving threats.
            </p>

            <p>
              Rather than relying strictly on theoretical textbooks, I am highly passionate about <span className="text-white font-medium">project-based learning</span>. I believe the best way to master networking protocols, security monitoring, or frontend libraries is to write the code, deploy the systems, monitor the endpoints, and fix the vulnerabilities.
            </p>

            <p>
              My toolkit spans across building full-stack applications with <span className="text-white font-medium">React & Node.js</span>, scripting security tools in <span className="text-white font-medium">Python</span>, and deep-diving into systems administration using <span className="text-white font-medium">Linux</span>. I actively build projects like SOC dashboards and endpoint monitoring tools to apply security concepts in real-world scenarios.
            </p>

            <div className="pt-2 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-txtSec">
              <div className="bg-bgCard border border-white/5 px-3 py-1.5 rounded">
                <span className="text-[#8B5CF6]">University:</span> KL University
              </div>
              <div className="bg-bgCard border border-white/5 px-3 py-1.5 rounded">
                <span className="text-accent">Focus:</span> Cybersecurity & Systems
              </div>
              <div className="bg-bgCard border border-white/5 px-3 py-1.5 rounded">
                <span className="text-primary">Graduation:</span> Class of 2028
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-lg border border-white/5 glass-panel-hover flex flex-col justify-between min-h-[160px] relative overflow-hidden"
              >
                {/* Visual top border glow for cyan/purple feel */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-transparent" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg shadow-inner">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-mono text-txtSec/40 uppercase tracking-widest">
                    STAT_0{idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-3xl md:text-4xl font-bold font-space text-white tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-sm font-semibold text-txtMain mt-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-txtSec mt-1 font-light">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
