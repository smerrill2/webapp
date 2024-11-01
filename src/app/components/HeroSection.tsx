import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/app/components/button';
import Link from 'next/link';
import LearnMoreButton from './LearnMoreButton';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const HeroDeviceAnimation = dynamic(
  () => import('@/app/components/HeroDeviceAnimation'),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <div className={`w-full overflow-hidden ${inter.className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start py-12 lg:py-20">
          <div className="w-full lg:w-1/2 ml-0 lg:ml-4 z-10">
            {/* Mobile & Tablet Heading */}
            <h1 className="lg:hidden text-[56px] leading-[1.1] sm:text-[64px] md:text-[72px] font-bold text-white tracking-[-0.02em]">
              Websites
              <br />
              for increasing
              <br />
              revenue in
              <br />
              lawn care
            </h1>

            {/* Desktop Heading */}
            <h1 className="hidden lg:block text-[72px] xl:text-[86px] font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-[840px]">
              Websites for increasing revenue in lawn care
            </h1>

            {/* Subheading with Stripe-like spacing and style */}
            <p className="text-gray-300 text-xl sm:text-2xl leading-[1.4] mt-12 max-w-[540px] font-normal">
              We craft high-converting websites and sales funnels exclusively for lawn care professionals, helping you focus on what matters - growing your business and maintaining beautiful lawns.
            </p>

            {/* Buttons with Stripe-like spacing */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start sm:items-center mt-14">
              <LearnMoreButton />
              <Link href="/testimonials" className="hidden md:block">
                <Button className="bg-transparent hover:bg-green-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-green-600">
                  Testimonials
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative -mx-6 lg:mx-0 lg:-mr-[15vw]">
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