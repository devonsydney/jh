import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jennifer Hazard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;