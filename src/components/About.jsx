import React from "react";
import LogoImg from "../Assests/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 transition-colors duration-500"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white drop-shadow-lg"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/80 dark:bg-white/10 dark:backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 transition-colors duration-500">
          
          {/* Profile Image */}
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="900"
          >
            <img
              src={LogoImg}
              alt="Profile"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Description */}
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-100 text-center md:text-left"
          >
            I’m a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              MERN Stack Developer
            </span>{" "}
            with experience building modern web apps. I love creating clean,
            fast, and scalable applications with a focus on user experience.
            <span className="block mt-4 font-semibold text-blue-500 dark:text-blue-300">
              Let’s work together to bring your ideas to life!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
