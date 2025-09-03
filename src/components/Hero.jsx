import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background - Light Mode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-700 opacity-100 dark:opacity-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
          transform: `translateY(${offsetY * 0.4}px) scale(${1 + offsetY * 0.0005})`,
        }}
      ></div>

      {/* Background - Dark Mode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-700 opacity-0 dark:opacity-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975918318-3cc9c3f2ad8b?auto=format&fit=crop&w=1600&q=80')",
          transform: `translateY(${offsetY * 0.4}px) scale(${1 + offsetY * 0.0005})`,
        }}
      ></div>

      {/* Yellow Glow Overlay (subtle in dark mode so image stays visible) */}
      <div className="absolute inset-0 bg-yellow-300/15 dark:bg-yellow-200/5 mix-blend-overlay transition-colors duration-700"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl text-white dark:text-yellow-100"
        >
          Hi, I’m{" "}
          <span className="text-yellow-300 dark:text-yellow-400">Jagadish</span>
        </h1>

        {/* Typing Animation */}
        <ReactTyped
          strings={[
            "MERN Stack Developer",
            "Freelancer",
            "UI/UX Designer",
          ]}
          typeSpeed={70}
          backSpeed={40}
          backDelay={1600}
          loop
          className="text-2xl md:text-3xl font-medium mb-8 block text-gray-100 dark:text-yellow-100 drop-shadow-lg"
        />

        {/* Call To Action */}
        <a
          href="#projects"
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-yellow-300 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
