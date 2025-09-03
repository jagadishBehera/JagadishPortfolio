import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
