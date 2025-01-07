import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:bg-gray-800 text-gray-400 py-4 text-center mt-[-8px]">
      <div className="container mx-auto text-center">
        <p>
          <a href="https://acctcounsellor.com" target="_blank" rel="noopener">
            <Image
              src="https://acctcounsellor.com/images/badge3.png"
              alt="ACCT &#8211; Association of Cooperative Counselling Therapists of Canada"
              width={308}
              height={136}
              className="inline-block ml-2 w-[200px] md:w-[280px] h-auto"
            />
          </a>
        </p>
        <p><a href="mailto:info@jenniferhazard.com" className="text-gray-300 hover:text-white transition duration-300">info@jenniferhazard.com</a></p>
        <p>&copy;{new Date().getFullYear()} Jennifer Hazard</p>
      </div>
    </footer>
  );
};

export default Footer;