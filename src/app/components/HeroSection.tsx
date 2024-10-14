// src/app/components/HeroSection.tsx

'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/app/components/button";
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
    <section className="space-y-8 mt-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 md:pr-8">
          <h1 className="
            text-4xl
            leading-tight
            sm:text-5xl sm:leading-snug
            md:text-5xl md:leading-snug
            lg:text-6xl lg:leading-tight
            xl:text-7xl xl:leading-tight
            font-bold
            text-white
          ">
            Website Solutions to <br />Power Lawn Care Success<BlinkingButton /> <br />
          </h1>
          <p className="
            text-gray-300
            font-light
            text-base
            leading-relaxed
            sm:text-lg sm:leading-relaxed
            md:text-xl md:leading-relaxed
            lg:text-2xl lg:leading-relaxed
            max-w-md
          ">
            We are a modern web agency dedicated to enhancing user engagement, driving sales through targeted advertising, and leveraging online markets to maximize your revenue.
          </p>
          <div className="flex flex-wrap justify-start space-x-2 items-center">
            <LearnMoreButton />
            <Link href="/testimonials">
              <Button className="bg-transparent hover:bg-white/10 text-white px-5 py-3 rounded-full text-sm sm:text-base font-semibold transition-colors border-2 border-white">
                Testimonials
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
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