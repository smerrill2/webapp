// src/app/page.tsx

'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServiceShowcase from '@/app/components/ServiceSection';
import SuccessShowcase from '@/app/components/SuccessShowcase';
import SlidingTestimonials from '@/app/components/SlidingTestimonials';
import BookingForm from '@/app/components/BookingForm';
import { GuaranteesSection } from '@/app/components/Guarantees';
import { PricingSection } from '@/app/components/PricingSection';

const testimonials = [
  // Add your testimonials data here
  { id: 1, name: 'John Doe', text: 'Great service!' },
  { id: 2, name: 'Jane Smith', text: 'Highly recommend!' },
];

export default function HomePage() {

  return (
    <>
      <Header />
      <section className="relative overflow-hidden">
        {/* Original Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, black, #006400)',
          }}
        />
        
        {/* Mobile Diagonal Slice */}
        <div className="absolute inset-0 md:hidden">
          <div 
            className="absolute inset-0 transform origin-bottom-left"
            style={{
              clipPath: 'polygon(0% 95%, 100% 65%, 100% 100%, 0% 100%)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), white)'
            }}
          />
        </div>

        {/* Desktop Diagonal Slice */}
        <div className="absolute inset-0 hidden md:block">
          <div 
            className="absolute inset-0 transform origin-bottom-left"
            style={{
              clipPath: 'polygon(0% 90%, 100% 70%, 100% 100%, 0% 100%)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), white)'
            }}
          />
        </div>
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
      
      <ServiceShowcase />
      <GuaranteesSection />
<PricingSection/>
      {/* Success Showcase Section */}
      <div className="bg-gray-50 py-16">
        <SuccessShowcase />
      </div>

      {/* Booking Form Section */}
      <div id="booking-form" >
        <div className="bg-white">
        <BookingForm />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <SlidingTestimonials testimonials={testimonials} />
      </div>

      <Footer />
    </>
  );
}
