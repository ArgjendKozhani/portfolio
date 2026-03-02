import React, { useState, useEffect } from "react";
import CV from "../assets/CV-argjend-kozhani.pdf";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUser, HiOutlineLightningBolt, HiOutlineCollection, HiOutlineMail } from "react-icons/hi";
import { FiDownload, FiGithub } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNav = () => {
    setNav(prev => !prev);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about",    label: "About",    icon: HiOutlineUser },
    { href: "#skills",   label: "Skills",   icon: HiOutlineLightningBolt },
    { href: "#projects", label: "Projects", icon: HiOutlineCollection },
    { href: "#contact",  label: "Contact",  icon: HiOutlineMail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-purple-500/20 border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-6">
        {/* Logo */}
        <a href="#hero" className="cursor-pointer" style={{ textDecoration: 'none' }}>
          <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold hover:from-purple-300 hover:to-blue-300 transition-all" style={{ textDecoration: 'none' }}>
            Argjend Kozhani
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-5 py-2 rounded-lg transition-all duration-300 relative group ${
                  activeSection === link.href.slice(1)
                    ? "text-purple-400"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            </li>
          ))}
          <li className="ml-4 pl-4 border-l border-purple-500/30">
            <a
              href={CV}
              download
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg 
                       hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 
                       transition-all duration-300 shadow-md shadow-purple-500/30 inline-block text-sm tracking-wide"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={handleNav}
          className="block md:hidden cursor-pointer hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>

        {/* Overlay */}
        <div
          onClick={() => setNav(false)}
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            nav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 55 }}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed md:hidden left-0 top-0 h-full w-72 max-w-[82vw]
                    bg-[#07071a] overflow-hidden
                    transition-transform duration-500 ease-in-out ${
                      nav ? "translate-x-0" : "-translate-x-full"
                    }`}
          style={{ zIndex: 60 }}
        >
          {/* Glowing orbs in drawer background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-purple-600 rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-20 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[70px] opacity-15"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-600 rounded-full blur-[60px] opacity-10"></div>
          </div>

          {/* Drawer Hero / Profile */}
          <div className="relative px-6 pt-8 pb-6 border-b border-white/5">
            {/* Close button */}
            <button
              onClick={() => setNav(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all duration-200"
              aria-label="Close menu"
            >
              <AiOutlineClose size={16} />
            </button>

            {/* Avatar circle with initials */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30 mb-4">
              <span className="text-white font-bold text-lg tracking-tight">AK</span>
            </div>

            <h2 className="text-white font-bold text-lg leading-tight">Argjend Kozhani</h2>
            <p className="text-gray-400 text-sm mt-0.5">Frontend Developer</p>

            {/* Status badge */}
            <div className="flex items-center gap-1.5 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-green-400 text-xs font-medium">Available for work</span>
            </div>
          </div>

          {/* Nav links */}
          <ul className="px-3 py-5 space-y-1 relative">
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setNav(false)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600/30 to-blue-600/10 text-white shadow-inner"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {/* Icon box */}
                    <span className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/30"
                        : "bg-white/5 text-gray-500 group-hover:bg-purple-500/20 group-hover:text-purple-400"
                    }`}>
                      <Icon size={15} />
                    </span>
                    {link.label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="mx-5 border-t border-white/5"></div>

          {/* GitHub link */}
          <div className="px-3 py-4 relative">
            <a
              href="https://github.com/ArgjendKozhani"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNav(false)}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-gray-500 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-200">
                <FiGithub size={14} />
              </span>
              GitHub
              <span className="ml-auto">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>

          {/* CV button pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-7 pt-4 border-t border-white/5 bg-[#07071a]/80 backdrop-blur-sm">
            <a
              href={CV}
              download
              className="flex items-center justify-center gap-2 w-full py-3 
                       bg-gradient-to-r from-purple-600 to-blue-600 
                       hover:from-purple-500 hover:to-blue-500
                       text-white font-semibold rounded-xl text-sm tracking-wide
                       shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
                       transition-all duration-300"
            >
              <FiDownload size={15} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;