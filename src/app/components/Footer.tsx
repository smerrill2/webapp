// src/app/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 border-t border-gray-400">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/yourpage"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/FAQ" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="w-24 h-12 relative">
            <Image
              src="/images/LawnLogicFooter.png" // Ensure the path is correct
              alt="LawnLogic Logo"
              fill
              style={{ objectFit: 'contain', objectPosition: 'right center' }}
            />
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <span className="text-gray-400 text-sm">© 2024 LawnLogic Inc.</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
