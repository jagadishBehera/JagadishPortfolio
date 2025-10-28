import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const data = [
    "a Web Developer",
    "a Freelancer",
    "a UI/UX Enthusiast",
    "a React.js Specialist",
    "a Frontend Engineer",
    "helping businesses grow online",
    "building digital experiences",
    "crafting responsive websites",
    "turning ideas into reality",
    "creating modern web solutions",
    "empowering startups with tech",
    "your next tech partner",
    "the developer who cares about results"
  ];
  

  const [index, setIndex] = useState(0);
  const [identity, setIdentity] = useState(data[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    setIdentity(data[index]);
  }, [index, data]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white text-[rgb(60,60,80)] font-extrabold text-5xl overflow-hidden">
      {/* Main Section */}
      <section
        data-identity={identity}
        className="relative z-10 after:content-[attr(data-identity)] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:uppercase after:text-[#EAEAF2] after:text-[2.5em] after:tracking-[0.5em] after:z-[-1] after:animate-[letterAnim_4.5s_ease-in-out_infinite]"
      >
        <blockquote className="text-center">
          I am <span className="font-[Libre_Baskerville] italic text-yellow-400 inline-block">{identity}</span>
        </blockquote>
      </section>

      {/* Animated Background Lines */}
      <div className="fixed top-0 left-0 w-full h-full -z-1 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 border-r border-[#EAEAF2] opacity-80 relative"
          ></div>
        ))}
      </div>

      {/* Custom Keyframes */}
      <style>
        {`
          @keyframes letterAnim {
            0% {
              letter-spacing: 2.5em;
              opacity: 0;
            }
            40% {
              opacity: 1;
              letter-spacing: 0.5em;
            }
            70% {
              letter-spacing: 0.75em;
            }
            100% {
              letter-spacing: 2.5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
