'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/app/components/button';
import Link from 'next/link';
import LearnMoreButton from './LearnMoreButton';

const HeroDeviceAnimation = dynamic(
  () => import('@/app/components/HeroDeviceAnimation'),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-6"> {/* Match header's container and padding */}
        <div className="flex flex-col lg:flex-row items-start py-12 lg:py-20">
          {/* Text Content - Aligned with logo */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-4 z-10"> {/* Match logo's ml-0 lg:ml-4 */}
            {/* Mobile & Tablet Heading */}
            <h1 className="lg:hidden text-[64px] leading-[1.2] sm:text-[64px] md:text-[72px] font-bold text-white tracking-tight">
              Where
              <br />
              Lawn Care
              <br />
              Solutions
              <br />
              Begin
            </h1>

            {/* Desktop Heading */}
            <h1 className="hidden lg:block text-[72px] xl:text-[86px] font-bold text-white leading-[1.1] tracking-tight">
              Where Lawn Care Solutions Begin
            </h1>

            {/* Subheading with proper spacing */}
            <p className="text-gray-300 font-light text-l sm:text-2xl leading-relaxed mt-8 max-w-[540px]">
              We craft high-converting websites and sales funnels exclusively for lawn care professionals, helping you focus on what matters - growing your business and maintaining beautiful lawns.
            </p>

            {/* Buttons with proper spacing */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start sm:items-center mt-10">
              <LearnMoreButton />
              <Link href="/testimonials" className="hidden md:block">
                <Button className="bg-transparent hover:bg-white/10 text-black px-6 py-3 rounded-full text-base font-semibold transition-colors border-2 border-black">
                  Testimonials
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section - Modified for edge-to-edge on mobile */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative -mx-6 lg:mx-0 lg:-mr-[15vw]"> {/* Negative margin to counteract container padding */}
              <div className="w-full transform scale-100 sm:scale-130 md:scale-110 lg:scale-100 
                          transition-transform duration-300">
                <HeroDeviceAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}