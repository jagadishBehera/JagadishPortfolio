import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    desc: "A scalable online store built with MERN stack and Stripe integration.",
    img:"https://images.unsplash.com/photo-1645070858656-816d780df8e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZyUyMHByb2plY3R8ZW58MHx8MHx8fDA%3D",
    link: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio with animations and theme support.",
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&auto=format&fit=crop&q=80",
    link: "#",
    code: "#",
  },
  {
    title: "Dashboard App",
    desc: "An admin dashboard with charts, dark mode, and dynamic content.",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&auto=format&fit=crop&q=80",
    link: "#",
    code: "#",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [direction, setDirection] = useState(0); // track slide direction
  const [touchStart, setTouchStart] = useState(null);

  // swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleNext(); // swipe left → next
    if (touchEnd - touchStart > 50) handlePrev(); // swipe right → prev
    setTouchStart(null);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Slide variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-10 text-center text-gray-900 dark:text-white"
        >
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-1 w-16 sm:w-20 bg-yellow-500 mx-auto mb-10 sm:mb-16 rounded-full"
        ></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
              onClick={() => {
                setCurrentIndex(idx);
                setDirection(0);
              }}
              className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-500">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with slide transition */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden">
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* AnimatePresence for smooth slides */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                <img
                  src={projects[currentIndex].img}
                  alt={projects[currentIndex].title}
                  className="w-full h-56 sm:h-72 object-cover"
                />

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                    {projects[currentIndex].desc}
                  </p>

                  <div className="flex justify-center gap-4 mb-6">
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={projects[currentIndex].code}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition"
                    >
                      Code
                    </a>
                  </div>

                  {/* Prev/Next buttons */}
                  <div className="flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      ◀ Prev
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      Next ▶
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
