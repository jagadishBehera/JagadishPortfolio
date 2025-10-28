import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import LogoImg from "../Assests/img.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Handle scroll for active link & navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "services", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setActive("hero")}
            className="cursor-pointer flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={LogoImg}
              alt="Portfolio Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
            />
            <span className="text-yellow-400 font-semibold text-lg">
              Jagadish
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx} className="relative group">
                  <a
                    href={link.href}
                    className={`transition ${
                      active === link.id
                        ? "text-yellow-400 font-semibold"
                        : "text-yellow-300 hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </a>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                      active === link.id ? "w-full" : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-yellow-400 transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay (dark background behind sidebar) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-yellow-400/30">
          <span className="text-yellow-400 text-lg font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-yellow-400 hover:rotate-90 transition-transform duration-300"
          >
            <X size={26} />
          </button>
        </div>
        <ul className="flex flex-col space-y-5 py-8 px-6 font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block transition ${
                  active === link.id
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
