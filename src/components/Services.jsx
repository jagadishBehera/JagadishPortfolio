import React from "react";
import { Code, Palette, Briefcase } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Full-stack websites with React, Node.js, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1761386017822-0d9d41fd5725?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800",
    icon: <Code className="w-12 h-12 text-yellow-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Modern and responsive UI with Tailwind CSS & animations.",
    image:
      "https://images.unsplash.com/photo-1761386017822-0d9d41fd5725?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800",
    icon: <Palette className="w-12 h-12 text-yellow-400" />,
  },
  {
    title: "Freelancing Projects",
    desc: "Custom solutions tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1761386017822-0d9d41fd5725?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800",
    icon: <Briefcase className="w-12 h-12 text-yellow-400" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-24 flex items-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1697899001862-59699946ea29?q=80&w=1932&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold mb-4 text-white"
        >
          My <span className="text-yellow-400">Services</span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="h-1 w-20 bg-yellow-400 mx-auto mb-12 rounded-full"
        ></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="relative group w-[320px] h-[360px] rounded-md overflow-hidden shadow-lg transform-gpu transition-all"
            >
              {/* Image Section */}
              <div
                className="h-[440px] bg-cover bg-center rounded-md transition-all duration-500 ease-[cubic-bezier(.17,.67,.5,1.03)]"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Info Section */}
              <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 p-6 text-left rounded-md transition-transform duration-[400ms] ease-[cubic-bezier(.17,.67,.5,1.03)] md:group-hover:-translate-y-[240px]">
                {/* Icon */}
                <div className="mb-4 flex justify-center">{service.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-center uppercase tracking-widest text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                {/* Description (Visible on mobile, hover on desktop) */}
                <p className="text-sm text-gray-700 dark:text-gray-300 transition-opacity duration-[500ms] delay-[250ms] leading-relaxed opacity-100 ">
                  {service.desc}
                </p>

                {/* "Explore more" */}
                <div className="absolute left-0 bottom-0 w-full px-6 py-4">
                  <h4 className="text-yellow-500 uppercase font-extrabold text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-[500ms] delay-[250ms] cursor-pointer">
                    explore more
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
