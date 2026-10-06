import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <nav className='fixed top-0 left-0 w-full backdrop-blur-md bg-[#08071a]/80 border-b 
          border-white/10 transition-all z-50'>
            <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
                <a href='#home' className='text-2xl font-bold font-mono text-purple-400 tracking-wide
                 hover:text-purple-300 transition'>
                   &lt;Heba Hassanin /&gt;
                </a>

                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
                    <li>
                        <a href='#home' className='hover:text-purple-400 transition-colors'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className=' hover:text-purple-400 transition-colors'>About</a>
                    </li>
                    <li>
                        <a href='#skills' className='hover:text-purple-400 transition-colors'>Skills</a>
                    </li>
                    <li>
                        <a href='#projects' className='hover:text-purple-400 transition-colors'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='hover:text-purple-400 transition'>Contact</a>
                    </li>
                </ul>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-gray-300 hover:text-white transition focus:outline-none p-1'
                aria-label="Toggle Menu">
                {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-[#08071a]/95 border-b border-white/10 px-6 py-4 
                 flex flex-col gap-4 text-gray-300 backdrop-blur-lg'>
                    <a href='#home' onClick={() => setIsMenuOpen(false)} 
                     className='hover:text-purple-400 transition'>
                        Home
                    </a>
                    <a href='#about' onClick={() => setIsMenuOpen(false)}
                     className='hover:text-purple-400 transition'>
                        About
                    </a>
                    <a href='#skills' onClick={() => setIsMenuOpen(false)}
                     className='hover:text-purple-400 transition'>
                        Skills
                    </a>
                    <a href='#projects' onClick={() => setIsMenuOpen(false)}
                     className='hover:text-purple-400 transition'>
                        Projects
                    </a>
                    <a href='#contact' onClick={() => setIsMenuOpen(false)}
                     className='hover:text-purple-400 transition'>
                        Contact
                    </a>
                </div>
            )}

            
        </nav>
    </>
  )
}
