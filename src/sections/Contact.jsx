import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { HiOutlineArrowUp } from 'react-icons/hi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك ربط النموذج بمكتبة مثل EmailJS أو Formspree
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative pt-20 pb-10 px-6 max-w-6xl mx-auto text-white">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* (Glassmorphism Card) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* right side: contact info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
              LET'S CONNECT
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind or want to say hello? I'd love to hear from you.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="mailto:example@gmail.com"
                aria-label="Email"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* right side: contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all text-sm"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all text-sm"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 group mt-2"
            >
              Send Message
              <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>

      {/* (Footer) */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Heba Hassanin. All rights reserved.</p>

        <p className="flex items-center gap-1">
          Built with <span className="text-red-500">❤️</span> and React
        </p>

        <a href="#home" aria-label="Scroll to top"
          className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300
          hover:text-white hover:border-purple-500 transition-all">
          <HiOutlineArrowUp size={16} />
        </a>
      </footer>

    </section>
  );
}