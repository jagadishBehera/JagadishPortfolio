import React, { useState } from "react";
import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col lg:flex-row items-center justify-center py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-white/50 to-yellow-200/30 dark:from-yellow-900/20 dark:via-black/60 dark:to-yellow-800/10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-20 px-6 z-10">
        {/* Rotating Cube */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative flex justify-center items-center w-full lg:w-1/2 h-[400px] sm:h-[500px]"
        >
          <div className="relative" style={{ perspective: "2000px" }}>
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                animation: "rotate 30s infinite linear",
              }}
            >
              <CubeFace
                transform="translateX(-140px) translateY(-140px) translateZ(140px)"
                href="mailto:youremail@example.com"
                icon={<FaGoogle size={80} className="text-gray-700 hover:text-yellow-600 transition-all duration-500" />}
                delay="0s"
              />
              <CubeFace
                transform="translateY(-140px) rotateY(90deg)"
                href="https://www.linkedin.com/in/yourusername/"
                icon={<FaLinkedin size={80} className="text-gray-700 hover:text-blue-600 transition-all duration-500" />}
                delay="1s"
              />
              <CubeFace
                transform="translateX(-140px) translateY(-140px) translateZ(-140px)"
                href="https://github.com/yourusername"
                icon={<FaGithub size={80} className="text-gray-700 hover:text-gray-900 transition-all duration-500" />}
                delay="2s"
              />
              <CubeFace
                transform="translateY(-140px) translateX(-280px) rotateY(90deg)"
                href="https://wa.me/919999999999"
                icon={<FaWhatsapp size={80} className="text-gray-700 hover:text-green-500 transition-all duration-500" />}
                delay="3s"
              />

              {/* Glow plane */}
              <div
                className="absolute w-[280px] h-[280px] rounded-lg"
                style={{
                  transform: "translateX(-140px) rotateX(90deg)",
                  background:
                    "linear-gradient(45deg, rgba(255,196,0,0.3), rgba(255,221,0,0.2))",
                  boxShadow: "0 30px 60px rgba(234, 179, 8, 0.4)",
                  filter: "blur(80px)",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>
            </div>
          </div>

          <style>
            {`
              @keyframes rotate {
                0% { transform: rotate3d(0.5, 1, 0.5, 0deg); }
                100% { transform: rotate3d(0.5, 1, 0.5, 360deg); }
              }
              @keyframes pulse {
                0%, 100% { opacity: 0.6; transform: translateX(-140px) rotateX(90deg) scale(1); }
                50% { opacity: 0.8; transform: translateX(-140px) rotateX(90deg) scale(1.1); }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}
          </style>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="w-full lg:w-1/2 max-w-lg"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl backdrop-blur-md border border-yellow-100 dark:border-gray-700"
          >
            <FloatingInput label="Your Name" type="text" icon={<FaUser />} required />
            <FloatingInput label="Your Email" type="email" icon={<FaEnvelope />} required />
            <FloatingTextarea label="Your Message" rows="5" icon={<FaCommentDots />} required />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full group relative overflow-hidden bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-5 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
                <span className="text-lg">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                <div className="w-20 h-full bg-white/20 skew-x-12 -translate-x-40 group-hover:translate-x-96 transition-transform duration-1000" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* Floating Input */
const FloatingInput = ({ label, type, icon, required }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-center space-x-3">
        <span className="text-2xl text-gray-400 group-focus-within:text-yellow-500 transition-colors duration-300">
          {icon}
        </span>
        <div className="flex-1 relative">
          <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className={`peer w-full p-4 bg-transparent border-b-2 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-500
              border-gray-300 dark:border-gray-600 focus:border-yellow-500 group-hover:border-yellow-400
              ${value || isFocused ? "border-yellow-500" : ""}`}
            placeholder={label}
          />
          <label
            className={`absolute left-0 top-4 text-gray-500 dark:text-gray-400 transition-all duration-500 pointer-events-none
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-600
              ${value || isFocused ? "top-0 text-sm text-yellow-600" : ""}`}
          >
            {label}
          </label>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500 group-focus-within:w-full" />
    </div>
  );
};

/* Floating Textarea */
const FloatingTextarea = ({ label, rows, icon, required }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-start space-x-3">
        <span className="text-2xl text-gray-400 group-focus-within:text-yellow-500 transition-colors duration-300 mt-4">
          {icon}
        </span>
        <div className="flex-1 relative">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={rows}
            required={required}
            className={`peer w-full p-4 bg-transparent border-b-2 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-500
              border-gray-300 dark:border-gray-600 focus:border-yellow-500 group-hover:border-yellow-400 resize-none
              ${value || isFocused ? "border-yellow-500" : ""}`}
            placeholder={label}
          />
          <label
            className={`absolute left-0 top-4 text-gray-500 dark:text-gray-400 transition-all duration-500 pointer-events-none
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-600
              ${value || isFocused ? "top-0 text-sm text-yellow-600" : ""}`}
          >
            {label}
          </label>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500 group-focus-within:w-full" />
    </div>
  );
};

/* Cube Face */
const CubeFace = ({ transform, href, icon, delay }) => (
  <div
    className="absolute w-[280px] h-[280px]"
    style={{
      transform,
      animationDelay: delay,
    }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center w-full h-full bg-white/80 backdrop-blur-md rounded-2xl transition-all duration-700 hover:bg-gradient-to-br hover:from-white hover:to-yellow-50 hover:shadow-2xl hover:scale-110 border border-white/50 hover:border-yellow-200/50 group"
    >
      <div className="transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-500" />
    </a>
  </div>
);

export default Contact;
