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

  // Track scroll position → active link + navbar background
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo → Rounded Image with Name */}
        <a
          href="#hero"
          onClick={() => setActive("hero")}
          className="cursor-pointer flex items-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={LogoImg}
            alt="Portfolio Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          />
          <span className="text-white font-semibold text-lg">Jagadish</span>
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
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </a>
                {/* Yellow underline */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 px-6 font-medium">
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
      )}
    </nav>
  );
};

export default Navbar;
