import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:bg-gray-800 text-gray-400 py-4 text-center mt-[-2px]">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jennifer Hazard. <a href="mailto:info@jenniferhazard.com" className="text-gray-300 hover:text-white transition duration-300">info@jenniferhazard.com</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;