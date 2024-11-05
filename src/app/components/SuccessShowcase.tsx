import React, { memo } from 'react';
import { Inter } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const PortfolioItem = memo(({ image }: { image: any }) => (
  <Link href={image.link} className="block group relative">
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-8">
        <h3 className="text-white text-xl font-semibold flex items-center">
          {image.title}
          <ArrowRight className="ml-2 h-5 w-5" />
        </h3>
      </div>
    </div>
  </Link>
));

export default function PortfolioSection() {
  const portfolioImages = [
    {
      src: "/images/PLC-Success.png",
      alt: "Website for Hedgehog Lawn Care",
      title: "HedgeHog Lawn Care",
      link: "/portfolio/porcupinelawncare"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100"> {/* Added grey gradient background */}
      <div className={`container mx-auto px-6 ${inter.className}`}>
        <div className="py-16">
          {/* Label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
              <span className="text-green-600 text-sm">📁</span>
            </div>
            <span className="text-gray-600 text-xl">Our Portfolio</span>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                We've done projects internationally and locally
              </h2>
              <p className="text-xl text-gray-600">
                Where can we help you today?
              </p>
              <Link href="/contact">
                <button className="mt-4 inline-flex items-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold transition-colors">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {portfolioImages.map((image, index) => (
                <PortfolioItem image={image} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}