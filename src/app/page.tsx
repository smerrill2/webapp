// src/app/page.tsx

'use client';

import React, { lazy, Suspense } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroSection from '@/app/components/HeroSection';

// Lazy load non-critical components
const ServiceShowcase = lazy(() => import('@/app/components/ServiceSection'));
const SuccessShowcase = lazy(() => import('@/app/components/SuccessShowcase'));
const SlidingTestimonials = lazy(() => import('@/app/components/SlidingTestimonials'));
const BookingForm = lazy(() => import('@/app/components/BookingForm'));
const GuaranteesSection = lazy(() => import('@/app/components/Guarantees').then(mod => ({ default: mod.GuaranteesSection })));
const PricingSection = lazy(() => import('@/app/components/PricingSection').then(mod => ({ default: mod.PricingSection })));

// Move static data outside the component
const TESTIMONIALS = [
  {
    name: "Stephan C.",
    role: "Owner of Elite Lawn Maintenance",
    content: "As a lawn care business owner for 15 years, I've never seen such an effective digital solution. LawnLogic truly understands what we need to grow and succeed in this industry.",
    image: "/images/StephanC.jpg"
  },
  {
    name: "Tom L.", 
    role: "Founder of Premier Lawn Services",
    content: "The difference in our business operations before and after LawnLogic is night and day. Their technology made scaling our lawn care company so much easier than we thought possible.",
    image: "/images/TomL.jpg"
  },
  {
    name: "Dave L.",
    role: "Owner of HedgeHog Lawn Care",
    content: "LawnLogic's ability to put together a unique design while transferring visitors into customers has helped immensely. I'm happy we chose him for our website!",
    image: "/images/plc-owner.png"
  },
];

// Memoize the gradient styles
const gradientStyle = {
  background: 'linear-gradient(to right, black, #006400)',
};

const mobileSliceStyle = {
  clipPath: 'polygon(0% 95%, 100% 65%, 100% 100%, 0% 100%)',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), white)'
};

const desktopSliceStyle = {
  clipPath: 'polygon(0% 90%, 100% 70%, 100% 100%, 0% 100%)',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), white)'
};

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={gradientStyle} />
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 transform origin-bottom-left" style={mobileSliceStyle} />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute inset-0 transform origin-bottom-left" style={desktopSliceStyle} />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ServiceShowcase />
        <GuaranteesSection />
        <PricingSection />
        
        <div className="bg-gray-50 py-16">
          <SuccessShowcase />
        </div>

        <div id="booking-form">
          <div className="bg-white">
            <BookingForm />
          </div>
        </div>

        <div className="bg-gray-50">
          <SlidingTestimonials testimonials={TESTIMONIALS} />
        </div>
      </Suspense>

      <Footer />
    </>
  );
}
