import React from 'react'

export default function Home() {
  return (
    <>
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20
         overflow-hidden">

      {/* (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px]
       sm:w-[550px] h-[350px] sm:h-[550px] bg-purple-600/20 blur-[120px] rounded-full 
       pointer-events-none -z-10" />

      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 border
         border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full uppercase tracking-wider
          backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          FRONTEND DEVELOPER
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
          Crafting Digital <br className="hidden sm:block" />
          <span className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
          I build responsive, accessible, and user-friendly web applications using
          React.js, JavaScript, and modern frontend technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects"className="capitalize bg-purple-600/50 hover:bg-purple-500/30 text-white
           font-medium py-3 px-7 rounded-xl transition-all duration-200 shadow-md shadow-purple-600/30
            flex items-center justify-center gap-2 group">
            View My Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a href="/Heba_Hassanin_Frontend_Developer_ CV.pdf" target="_blank" rel="noopener noreferrer"
           className="capitalize border border-white/15 bg-white/5
            hover:bg-white/10 text-white font-medium py-3 px-7 rounded-xl transition-all
            duration-200 backdrop-blur-md flex items-center justify-center gap-2">
            View CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 
              3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    </>
  )
}
