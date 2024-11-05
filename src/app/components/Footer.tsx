// src/app/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-32 h-16 relative mb-4">
              <Image
                src="/images/LawnLogicFooter.png"
                alt="LawnLogic Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-200"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering lawn care businesses with modern digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/LawnLogicUSA"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/spencermerrill"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Business Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/FAQ" className="text-gray-400 hover:text-pink-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>info@lawnlogic.agency</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Wichita, Kansas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LawnLogic Inc. All rights reserved.
            </span>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
