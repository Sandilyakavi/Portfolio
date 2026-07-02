import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const placeholderTestimonials = [
  {
    // ==========================================
    // PLACEHOLDER 1: Replace these values later
    // ==========================================
    name: 'Dr. Ramesh Kumar',
    role: 'Computer Science Professor',
    company: 'KL University',
    avatarInitials: 'RK',
    text: 'Kavi is a dedicated student who consistently shows curiosity and technical skills in our labs. He displays high competence in React web builds and a strong drive to study networking and Kali Linux protocols.'
  },
  {
    // ==========================================
    // PLACEHOLDER 2: Replace these values later
    // ==========================================
    name: 'Siddharth Sen',
    role: 'Cybersecurity Mentor',
    company: 'Eduskills Foundation',
    avatarInitials: 'SS',
    text: 'During the Ethical Hacking internship program, Kavi stood out for his analytical approach during sandboxed penetration testing labs. He writes clean documentation and grasps threat vectors very quickly.'
  },
  {
    // ==========================================
    // PLACEHOLDER 3: Replace these values later
    // ==========================================
    name: 'Anjali Sharma',
    role: 'Senior Project Guide',
    company: 'Academic FED Project',
    avatarInitials: 'AS',
    text: 'Kavi Sandilya is a solid collaborator who built the key UI layouts for our sustainable living project. He keeps the code neat, handles state cleanly, and always works to make pages load quickly.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-bgDark">
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
            Mentors & <span className="text-accent">Testimonials</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          <p className="text-txtSec text-sm mt-4 max-w-md mx-auto font-light">
            Recommendations from academic professors, project guides, and internship mentors.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderTestimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel p-6 rounded-lg border border-white/5 flex flex-col justify-between glass-panel-hover"
            >
              {/* Comment for User: REPLACE WITH REAL TESTIMONIAL HERE */}
              {/* NOTE: You can replace the fields inside the placeholderTestimonials array above */}
              
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-center">
                  <FiMessageSquare className="text-accent text-lg opacity-40" />
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-[#F59E0B] text-xs">★</span>
                    ))}
                  </div>
                </div>

                <p className="text-txtSec text-xs sm:text-sm font-light italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-space">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-txtSec font-light">
                    {t.role}, <span className="text-[#06B6D4]">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
