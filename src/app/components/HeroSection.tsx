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
    <section className="px-4 sm:px-6 lg:px-8 mt-12 md:mt-6">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 md:pr-8 text-left">
          <h1
            className="
              text-3xl
              leading-snug
              tracking-tight
              sm:text-4xl sm:leading-snug
              md:text-5xl md:leading-snug
              lg:text-6xl lg:leading-tight
              xl:text-7xl xl:leading-tight
              font-bold
              text-white
            "
            style={{ letterSpacing: '-0.5px' }}
          >
            Where Lawn Care Solutions <br />Begin
            <BlinkingButton />
          </h1>
          <p
            className="
              text-gray-300
              font-light
              text-base
              leading-relaxed
              sm:text-lg sm:leading-relaxed
              md:text-lg md:leading-relaxed
              lg:text-xl lg:leading-relaxed
              max-w-md
            "
          >
We are a modern lawn care solutions agency that works with you to maximize the amount revenue you get from customers coming in. We create websites that convert and funnels that ensure no customer ever gets away.          </p>
          <div className="flex flex-row space-x-4 items-center mt-4">
            <LearnMoreButton />
            <Link href="/testimonials">
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