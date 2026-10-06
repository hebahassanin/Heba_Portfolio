import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `Hello Heba,

You received a message from your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hebahassanin20@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative pt-20 pb-10 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2
        w-96 h-96 bg-purple-600/15 blur-[120px]
        rounded-full pointer-events-none -z-10"
      />

      {/* Contact Card */}
      <div
        className="p-8 sm:p-12 rounded-3xl bg-white/5
        border border-white/10 backdrop-blur-xl
        shadow-2xl mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest
              text-purple-400 mb-3 block"
            >
              LET'S CONNECT
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold mb-5">
              Get In Touch
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              I'm currently open to Junior Frontend Developer opportunities
              and would love to connect. Feel free to reach out!
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/heba-hassanin-33b28429a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10
                text-gray-300 hover:text-white hover:border-purple-500/50
                hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hebahassanin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10
                text-gray-300 hover:text-white hover:border-purple-500/50
                hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hebahassanin20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10
                text-gray-300 hover:text-white hover:border-purple-500/50
                hover:bg-purple-600/20 transition-all duration-300"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/5
              border border-white/10 text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500
              focus:bg-white/10 transition-all text-sm"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/5
              border border-white/10 text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500
              focus:bg-white/10 transition-all text-sm"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-white/5
              border border-white/10 text-white placeholder-gray-400
              focus:outline-none focus:border-purple-500
              focus:bg-white/10 transition-all text-sm resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r
              from-purple-600 to-indigo-600
              hover:from-purple-500 hover:to-indigo-500
              text-white font-medium rounded-xl transition-all
              shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex flex-col sm:flex-row items-center
        justify-between gap-4 pt-8 border-t border-white/10
        text-xs text-gray-400"
      >
        <p>
          © {new Date().getFullYear()} Heba Hassanin. All rights reserved.
        </p>

        <p>
          Built with React.js & Tailwind css
        </p>

        <a
          href="#home"
          aria-label="Scroll to top"
          className="p-2.5 rounded-lg bg-white/5 border border-white/10
          text-gray-300 hover:text-white hover:border-purple-500
          transition-all"
        >
          <HiOutlineArrowUp size={16} />
        </a>
      </footer>
    </section>
  );
}