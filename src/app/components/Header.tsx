// src/app/components/Header.tsx

'use client';

import Link from 'next/link';
import { Button } from './button'; // Adjust the path according to your project structure
import Image from 'next/image';
import { PhoneIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="container mx-auto px-8 py-4">
      <nav className="flex justify-between items-center">
        {/* Logo Container with Responsive Left Margin */}
        <div className="flex items-center ml-0 lg:ml-9">
          <Link href="/" passHref>
            <div className="w-60 h-20 relative cursor-pointer">
              <Image
                src="/images/LawnLogic.png"
                alt="LawnLogic Logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left center"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="/about">
              <Button className="text-lg px-4 py-2 hover:bg-white/10 transition-colors">
                About Us
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <Button className="text-lg px-4 py-2 hover:bg-white/10 transition-colors">
                Testimonials
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </nav>
    </header>
  );
};

export default Header;