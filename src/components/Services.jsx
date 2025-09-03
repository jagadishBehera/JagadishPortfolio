import React from "react";
import { Code, Palette, Briefcase } from "lucide-react"; // icons

const services = [
  {
    title: "Web Development",
    desc: "Full-stack websites with React, Node.js, and MongoDB.",
    icon: (
      <Code className="w-12 h-12 text-yellow-400 floating group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Modern and responsive UI with Tailwind CSS & animations.",
    icon: (
      <Palette className="w-12 h-12 text-yellow-400 floating group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
    ),
  },
  {
    title: "Freelancing Projects",
    desc: "Custom solutions tailored to your business needs.",
    icon: (
      <Briefcase className="w-12 h-12 text-yellow-400 floating group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
    ),
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-24 flex items-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1697899001862-59699946ea29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white"
        >
          My <span className="text-yellow-400">Services</span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mb-8 sm:mb-12 rounded-full"
        ></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-yellow-400 transition">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
