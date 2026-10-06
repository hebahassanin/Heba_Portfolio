import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function About() {

  // Statistics data for the bottom section
  const stats = [
    { number: '10+', label: 'Projects Built' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Passion' },
  ];

  return (
     <section id="about" className="relative py-24 px-6 max-w-4xl mx-auto text-white">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] 
       h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 
         mb-3 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
          ABOUT ME
        </span>
        
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white flex items-center
         justify-center gap-3">
          Hi, I'm Heba <span className="animate-bounce">👋</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
          I'm a Frontend Developer passionate about building responsive and user-friendly web applications
          with React.js and JavaScript.
          I enjoy turning ideas into interactive digital experiences and continuously improving 
          my frontend skills.
        </p>

        <a href="#contact" className="inline-flex items-center gap-2 border border-white/15
         bg-white/5 hover:bg-white/10 px-7 py-3.5 rounded-xl text-sm font-medium transition
         backdrop-blur-md text-white group shadow-lg shadow-purple-950/30">
          Get in Touch
          <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-white/5 border 
      border-white/10 backdrop-blur-md text-center shadow-xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text 
            bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 mb-2">
              {stat.number}
            </span>
            <span className="text-xs sm:text-lg text-gray-400 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}