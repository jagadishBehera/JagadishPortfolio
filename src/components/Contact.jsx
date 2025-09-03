import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 flex items-center justify-center bg-yellow-100 dark:bg-gray-900"
    >
      {/* Overlay with yellowish tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/70 via-white/70 to-yellow-200/60 dark:from-yellow-900/40 dark:via-black/80 dark:to-yellow-800/30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-10 text-gray-900 dark:text-white"
        >
          Get <span className="text-yellow-600 dark:text-yellow-400">In Touch</span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-1 w-16 sm:w-20 bg-yellow-500 mx-auto mb-8 sm:mb-12 rounded-full"
        ></div>

        {/* Contact Form */}
        <form
          data-aos="zoom-in"
          className="max-w-lg mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:border-yellow-500 focus:ring focus:ring-yellow-200 dark:focus:ring-yellow-600 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:border-yellow-500 focus:ring focus:ring-yellow-200 dark:focus:ring-yellow-600 outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mb-4 p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:border-yellow-500 focus:ring focus:ring-yellow-200 dark:focus:ring-yellow-600 outline-none transition"
          ></textarea>
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-yellow-400/40 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="p-3 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
