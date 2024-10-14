// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-green-950 text-white py-12 mt-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold mb-2">Follow us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              </div>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">User Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-green-900">
            <div className="mb-4 md:mb-0">
              <div className="w-32 h-12 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LawnLogic-lj1xAFOu4alYkwH0Pv6mGowYbHJuL7.png"
                  alt="LawnLogic Logo"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left center"
                />
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              <span>© 2024 LawnLogic Inc.</span>
              <a href="#" className="ml-4 hover:text-white">Legal</a>
              <a href="#" className="ml-4 hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;