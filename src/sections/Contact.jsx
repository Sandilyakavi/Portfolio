import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiSend, FiLoader, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // =========================================================================
    // EMAILJS INTEGRATION PLACEHOLDER
    // To connect real EmailJS, follow these steps:
    // 1. Install emailjs: npm install @emailjs/browser
    // 2. Import emailjs in this file: import emailjs from '@emailjs/browser';
    // 3. Replace this block with:
    // 
    //    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    //      .then((result) => {
    //          setStatus('success');
    //          setFormData({ name: '', email: '', subject: '', message: '' });
    //      }, (error) => {
    //          setErrorMessage(error.text);
    //          setStatus('error');
    //      });
    // =========================================================================

    // Simulated Send Flow for recruiter demonstration
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sandilyakavi',
      icon: <FiGithub className="text-xl" />,
      color: 'hover:text-[#06B6D4] hover:border-[#06B6D4]/30',
      handle: '@Sandilyakavi'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kavi-sandilya-86a66831b/?skipRedirect=true',
      icon: <FiLinkedin className="text-xl" />,
      color: 'hover:text-[#2563EB] hover:border-[#2563EB]/30',
      handle: 'Kavi Sandilya'
    },
    {
      name: 'Email',
      url: 'mailto:kavi.sai.venkata.naga.sandilya@gmail.com',
      icon: <FiMail className="text-xl" />,
      color: 'hover:text-[#8B5CF6] hover:border-[#8B5CF6]/30',
      handle: 'kavi.sai...[click]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kavisandilya/',
      icon: <FiInstagram className="text-xl" />,
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/30',
      handle: '@kavisandilya'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bgDark">
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
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-space text-white tracking-wide">
                Let's <span className="text-accent">Connect</span>
              </h3>
              <p className="text-txtSec text-sm md:text-base font-light leading-relaxed">
                Have an internship opportunity, a project idea, or simply want to chat about cybersecurity, Linux configurations, or React frontend layouts? Drop a message or find me on my social accounts!
              </p>
            </div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass-panel p-4 rounded-lg border border-white/5 flex flex-col items-start space-y-3 transition-all duration-300 ${soc.color}`}
                >
                  <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-lg text-white">
                    {soc.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{soc.name}</h4>
                    <p className="text-[10px] text-txtSec font-mono mt-0.5 tracking-tight truncate max-w-[120px]">
                      {soc.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-[10px] font-mono text-txtSec/30">
              SECURE_MAIL_GATEWAY: ENCRYPTED_TLS_V1.3
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-lg border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-txtSec">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="John Doe"
                      className="w-full bg-bgDark border border-white/5 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-txtSec">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="john@example.com"
                      className="w-full bg-bgDark border border-white/5 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-txtSec">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Internship Inquiry"
                    className="w-full bg-bgDark border border-white/5 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-txtSec">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Hi Kavi, I came across your portfolio..."
                    className="w-full bg-bgDark border border-white/5 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {/* Status Messages */}
                {status === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded font-mono">
                    {errorMessage}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs rounded font-mono flex items-center space-x-2">
                    <FiCheckCircle />
                    <span>Message sent successfully! (Demonstration mock)</span>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full py-3 rounded bg-primary text-white font-semibold font-space tracking-wide text-sm flex items-center justify-center space-x-2 hover:bg-primary/95 transition-all duration-300 disabled:opacity-50 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                >
                  {status === 'submitting' ? (
                    <>
                      <FiLoader className="animate-spin text-lg" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
