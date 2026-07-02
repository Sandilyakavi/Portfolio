import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terminalLines = [
  { text: 'Initializing Portfolio...', delay: 600, speed: 30 },
  { text: 'Loading Assets (textures, shaders, fonts)...', delay: 1400, speed: 20 },
  { text: 'Connecting Experience & Certification databases...', delay: 2200, speed: 20 },
  { text: 'Deploying Creativity and Cyber aesthetics...', delay: 3000, speed: 25 },
  { text: 'Welcome, Recruiter.', delay: 3800, speed: 40, highlight: true }
];

export default function TerminalLoader({ onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [systemInfo, setSystemInfo] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Set system metadata info
    const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setSystemInfo(`KAVI_OS v2.8.0 (kernel_time: ${dateStr}) - Connection: SECURE`);

    // Type out each line sequentially
    const timeouts = [];
    
    terminalLines.forEach((line, index) => {
      const startTimeout = setTimeout(() => {
        let currentText = '';
        let charIndex = 0;
        
        // Add placeholder line that we will fill character by character
        setDisplayedLines(prev => [...prev, { text: '', status: 'pending', highlight: line.highlight }]);
        
        const typeInterval = setInterval(() => {
          if (charIndex < line.text.length) {
            currentText += line.text[charIndex];
            setDisplayedLines(prev => {
              const updated = [...prev];
              updated[index] = { ...updated[index], text: currentText };
              return updated;
            });
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setDisplayedLines(prev => {
              const updated = [...prev];
              updated[index] = { 
                ...updated[index], 
                status: line.highlight ? 'done' : 'success' 
              };
              return updated;
            });
            
            // If it's the last line, wait a bit and complete
            if (index === terminalLines.length - 1) {
              const completeTimeout = setTimeout(() => {
                onComplete();
              }, 1200);
              timeouts.push(completeTimeout);
            }
          }
        }, line.speed);
        
      }, line.delay);
      
      timeouts.push(startTimeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#09090B] z-[9999] flex items-center justify-center p-4 font-mono select-none"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 radial-glow-cyan opacity-40 pointer-events-none" />

      {/* Terminal Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl rounded-lg overflow-hidden border border-[#06B6D4]/30 bg-black/90 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
      >
        {/* Terminal Header */}
        <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-[#06B6D4]/20">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-xs text-txtSec font-semibold tracking-wider">sh sandilya_portfolio.sh</span>
          <div className="w-10" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 min-h-[300px] text-sm text-[#06B6D4] space-y-4">
          <div className="text-xs text-txtSec border-b border-white/5 pb-2 mb-4">
            {systemInfo}
          </div>

          <div className="space-y-3">
            {displayedLines.map((line, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="text-[#8B5CF6] mr-1">&gt;</span>
                  <span className={line.highlight ? "text-white font-bold text-base" : "text-gray-100"}>
                    {line.text}
                  </span>
                  {idx === displayedLines.length - 1 && line.status === 'pending' && (
                    <span className="inline-block w-2 h-4 bg-white animate-pulse" />
                  )}
                </div>
                
                {line.status === 'success' && (
                  <span className="text-[#10B981] text-xs font-semibold sm:mt-0 mt-1 self-start sm:self-auto bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                    [ SUCCESS ]
                  </span>
                )}
                {line.status === 'pending' && line.text && !line.highlight && (
                  <span className="text-[#F59E0B] text-xs font-semibold sm:mt-0 mt-1 self-start sm:self-auto bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20 animate-pulse">
                    [ LOAD ]
                  </span>
                )}
                {line.status === 'done' && (
                  <span className="text-[#8B5CF6] text-xs font-semibold sm:mt-0 mt-1 self-start sm:self-auto bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/20 animate-pulse">
                    [ READY ]
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-[#111827]/30 px-6 py-2 border-t border-white/5 flex items-center justify-between text-[11px] text-txtSec">
          <span>Status: Executing Bootscripts</span>
          <span>Security: TLS_AES_256_GCM</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
