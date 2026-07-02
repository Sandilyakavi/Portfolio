import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socials = [
    { name: 'GitHub', url: 'https://github.com/Sandilyakavi', icon: <FiGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kavi-sandilya-86a66831b/?skipRedirect=true', icon: <FiLinkedin /> },
    { name: 'Email', url: 'mailto:kavi.sai.venkata.naga.sandilya@gmail.com', icon: <FiMail /> },
    { name: 'Instagram', url: 'https://www.instagram.com/kavisandilya/', icon: <FiInstagram /> }
  ];

  return (
    <footer className="bg-[#09090B] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Name and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold text-lg font-space tracking-wider text-white">
            KAVI SANDILYA
          </span>
          <span className="text-xs text-txtSec font-mono mt-1">
            B.Tech CSE Student | Cybersecurity Enthusiast
          </span>
        </div>

        {/* Made With Attribution */}
        <div className="text-center text-xs text-txtSec font-light">
          <span>Made with React, Tailwind CSS, & ❤️</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> • </span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="text-txtSec hover:text-accent transition-colors text-lg p-1"
                aria-label={soc.name}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <span className="h-5 w-[1px] bg-white/10 hidden md:block" />

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-[#111827] border border-white/5 hover:border-accent/40 rounded-full text-txtSec hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
