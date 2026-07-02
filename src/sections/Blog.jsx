import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiArrowRight, FiClock } from 'react-icons/fi';

const blogPosts = [
  {
    title: 'Learning Linux: A Command-Line Journey',
    excerpt: 'An introductory guide outlining how operating system kernels manage file directory trees, user privilege permissions, and core shell automation scripts in security setups.',
    category: 'Systems',
    readTime: '4 min read',
    date: 'June 2026',
    border: 'hover:border-accent/30'
  },
  {
    title: 'Journey into Cybersecurity: Entry Ethical Hacking',
    excerpt: 'My early learnings regarding network protocol security, host vulnerability analysis using scanner utilities, and configuring simple sandboxed penetration testing labs.',
    category: 'Security',
    readTime: '6 min read',
    date: 'May 2026',
    border: 'hover:border-primary/30'
  },
  {
    title: 'Building Interactive Apps with React & Vite',
    excerpt: 'A review of component-driven frontend architecture, managing client state properties, and deploying modular production bundles to server distributions like Vercel and Render.',
    category: 'Web Dev',
    readTime: '5 min read',
    date: 'April 2026',
    border: 'hover:border-highlight/30'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-bgDark">
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
            Technical <span className="text-accent">Blog</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
          <p className="text-txtSec text-sm mt-4 max-w-md mx-auto font-light">
            Sharing insights, research guides, and walkthroughs from my development and cybersecurity exploration.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-panel p-6 rounded-lg border border-white/5 flex flex-col justify-between glass-panel-hover ${post.border}`}
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                  
                  <div className="flex items-center text-txtSec/60 space-x-1">
                    <FiClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold font-space text-white tracking-wide leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-txtSec text-sm mt-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button & Date */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-txtSec/40">
                  {post.date}
                </span>

                <button 
                  disabled
                  className="text-xs font-mono font-bold tracking-wider text-accent hover:text-accent/80 flex items-center space-x-1 cursor-not-allowed opacity-70"
                >
                  <span>READ ARTICLE</span>
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
