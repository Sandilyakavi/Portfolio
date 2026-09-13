import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiLock, FiCalendar, FiExternalLink, FiChevronRight } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-bgDark">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-space">
            Certifications & <span className="text-accent">Credentials</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Microsoft Azure Certification */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 sm:p-8 rounded-lg border border-white/5 glass-panel-hover relative overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-primary shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                  <FiAward className="text-2xl" />
                </div>
                <span className="text-[9px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider">
                  Active
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-space">
                  Microsoft Certified: Azure Fundamentals
                </h3>
                <p className="text-txtSec text-xs font-mono mt-1">
                  Microsoft
                </p>
              </div>

              <p className="text-txtSec text-sm font-light leading-relaxed">
                Demonstrates foundational knowledge of cloud concepts, Azure architecture, Azure services, and core governance, privacy, and compliance resources.
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center text-xs text-txtSec font-mono">
                  <FiCalendar className="mr-2 text-accent" />
                  <span>Issued: March 2025</span>
                </div>
                <div className="text-xs text-txtSec font-mono">
                  <span className="text-white/60">Credential ID:</span> AZ900-PENDING
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                disabled 
                className="w-full py-2.5 rounded border border-white/5 bg-white/[0.01] text-xs font-mono font-semibold tracking-wider text-txtSec/50 flex items-center justify-center space-x-1.5 cursor-not-allowed"
              >
                <span>VERIFICATION LINK PENDING</span>
              </button>
            </div>
          </motion.div>



        </div>

      </div>
    </section>
  );
}
