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
              <a
                href="https://www.facebook.com/yourpage"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/FAQ" className="text-gray-400 hover:text-white">
                  FAQ Page
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Help
                </Link>
              </li>
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
            <Link href="/legal" className="ml-4 hover:text-white">
              Legal
            </Link>
            <Link href="/privacy" className="ml-4 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;