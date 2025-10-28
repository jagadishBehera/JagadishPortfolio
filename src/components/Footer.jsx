import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-yellow-400 z-99 text-gray-400 text-center">
      <p>© {new Date().getFullYear()} Jagadish. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
