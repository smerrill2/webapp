// src/app/pages/HeroSection.tsx

'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/app/components/button';
import Link from 'next/link';
import LearnMoreButton from './LearnMoreButton';
import BlinkingButton from '@/app/components/BlinkingButton';

// Dynamically import the HeroDeviceAnimation component
const HeroDeviceAnimation = dynamic(
  () => import('@/app/components/HeroDeviceAnimation'),
  { ssr: false }
);

// Dynamically import the PhoneDeviceAnimation component
const PhoneDeviceAnimation = dynamic(
  () => import('@/app/components/PhoneDeviceAnimation'),
  { ssr: false }
);

export default function HeroSection() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint (768px)
    };

    checkScreenSize(); // Initial check

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isLargeScreen === null) {
    return null; // Optionally, return a loader or placeholder
  }

  return (
    <section className="mt-16 sm:mt-12 md:mt-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 md:pr-8 text-left">
          
          {/* Mobile Heading */}
          <h1 className="md:hidden text-6xl font-bold text-white flex flex-col space-y-2">
            Where
            <span>
              Lawn Care
              <br />
              <span className="whitespace-nowrap">
                Solutions
                <br />
                Begin
                <BlinkingButton />
              </span>
            </span>
          </h1>
          
          {/* Desktop Heading */}
          <h1 className="hidden md:block text-5xl sm:text-6xl lg:text-7xl font-bold text-white items-center space-x-2">
            Where Lawn Care Solutions Begin<BlinkingButton />
          </h1>
          
          {/* Short Subheading for Mobile */}
          <p className="text-gray-300 font-light text-lg leading-relaxed sm:text-lg sm:leading-relaxed md:hidden">
          We are a modern lawn care solutions agency that works <br />with you to maximize the amount of revenue you get from customers coming in. We create websites that convert and funnels that ensure no customer ever gets away.
          </p>

          {/* Long Subheading for Desktop */}
          <p className="text-gray-300 font-light text-base leading-relaxed sm:text-lg sm:leading-relaxed hidden md:block">
            We are a modern lawn care solutions agency that works with you to maximize the amount of revenue you get from customers coming in. We create websites that convert and funnels that ensure no customer ever gets away.
          </p>

          <div className="flex flex-row space-x-4 items-center mt-4">
            <LearnMoreButton />

            {/* Testimonials Button - Hidden on Mobile */}
            <Link href="/testimonials" className="hidden md:block">
              <Button className="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-full text-base font-semibold transition-colors border-2 border-white">
                Testimonials
              </Button>
            </Link>
          </div>
        </div>

        {/* Device Animation */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          {isLargeScreen ? (
            <HeroDeviceAnimation />
          ) : (
            <PhoneDeviceAnimation />
          )}
        </div>
      </div>
    </section>
  );
}