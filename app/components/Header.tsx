import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jennifer Hazard</h1>
        <nav>
          <Link href="/" className="px-4">Home</Link>
          <Link href="/about" className="px-4">About</Link>
          <Link href="/contact" className="px-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;