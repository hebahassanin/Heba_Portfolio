import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full backdrop-blur-md
      bg-[#08071a]/80 border-b border-white/10
      transition-all z-50"
    >
      <div
        className="container mx-auto px-6 py-4
        flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold font-mono
          text-purple-400 tracking-wide
          hover:text-purple-300 transition"
        >
          &lt;Heba Hassanin /&gt;
        </a>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex items-center gap-8
          text-sm font-medium text-gray-300"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300
          hover:text-white transition focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-[#08071a]/95
          border-b border-white/10 px-6 py-4
          flex flex-col gap-4 text-gray-300
          backdrop-blur-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors ${
                activeSection === link.id
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}