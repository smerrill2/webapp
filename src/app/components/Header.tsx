'use client';

import React, { useState, useEffect, } from 'react';
import Link from 'next/link';
import { Button } from './button';
import Image from 'next/image';
import { PhoneIcon, MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header 
      style={{ background: 'linear-gradient(to right, black, #006400)' }}
      className="text-white"
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="flex justify-between items-center relative">
        {/* Logo Container */}
        <div className="flex items-center ml-0 lg:ml-4">
          <Link href="/" className="relative">
            <Image
              src="/images/LawnLogic.png"
              alt="LawnLogic Logo"
              width={175}  // Slightly reduced from 180
              height={58}  // Slightly reduced from 60
              priority={true}
              quality={85}
              sizes="(max-width: 768px) 150px, 175px"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/about">
              <Button className="text-lg px-4 py-1.5 hover:bg-white/10 transition-colors">
                About Us
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <Button className="text-lg px-4 py-1.5 hover:bg-white/10 transition-colors">
                Portfolio
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <Button className="text-lg px-4 py-1.5 hover:bg-white/10 transition-colors">
                Testimonials
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-full font-semibold transition-colors flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" />Call Us
              </Button>
            </Link>
          </li>
        </ul>

        {/* Rest of the code remains the same */}
        <div className="md:hidden">
          <Button
            variant="outline"
            className="flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <Button
            variant="outline"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <XIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
          </Button>
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center text-gray-800 hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Us
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </header>
  );
};

export default Header;