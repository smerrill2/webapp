// src/app/page.tsx

'use client'; // Ensure this is a client component if using client-side features

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import BookingForm from '@/app/components/BookingForm';
import HeroSection from '@/app/components/HeroSection'; // Import HeroSection
import { Button } from '@/app/components/button';
import { CheckIcon } from 'lucide-react';

// Dynamically import TestimonialCard to optimize performance
const TestimonialCard = dynamic(() => import('@/app/components/ui/TestimonialCard'), {
  loading: () => <p>Loading testimonials...</p>,
  ssr: true, // Set to false if you want to disable server-side rendering for this component
});

export default function ModernLawnCareLanding() {
  useEffect(() => {
    console.log("ModernLawnCareLanding mounted");
  }, []);

  return (
      <section className="relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, black, #006400)',
          }}
        >
          {/* White Diagonal Cut */}
          <div
            className="absolute inset-0 bg-white opacity-90 [clip-path:polygon(0%_60%,100%_40%,100%_100%,0%_100%)]"
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
  );

  <div className="bg-white text-black">
    <main className="container mx-auto px-4 sm:px-8">
      {/* Your Content Sections */}
      <section className="relative overflow-hidden p-12">
        {/* Content Wrapper */}
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Boosting Your Online Success
              </h2>
              <p className="text-gray-700 font-lato text-lg">
                At LawnLogic, we use a customer-centric approach in order to deliver the maximum value to your customers. Transparency and usability are the core of our business.
              </p>
              <ul className="space-y-4">
                {[
                  "Expanding Reach Through Targeted Paid Advertising",
                  "Intelligent Predictions with AI-Powered Analytics",
                  "Elevating Search Rankings with SEO Expertise",
                  "24/7 Performance Monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <CheckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-lato">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <div className="flex justify-start space-x-4 items-center">
                  <Link href="/testimonials">
                    <Button className="bg-transparent hover:bg-green-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-green-600">
                      Testimonials
                    </Button>
                  </Link>
                  <Link href="/FAQ">
                    <Button className="bg-transparent hover:bg-green-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-green-600">
                      FAQ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px]">
              <Image
                src="/images/asset12.jpg"
                alt="Digital success visualization"
                fill // Replaced layout="fill" with fill prop
                style={{ objectFit: 'cover' }} // Replaced objectFit with style
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Smart Online Growth</h3>
                <p className="text-gray-700 font-lato">
                  Watch your business bloom with our easy-to-understand digital strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-40 mb-20">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Jonnie C."
            role="Owner Operator of Jonnie's Landscaping"
            content="LawnLogic transformed our online presence! Their innovative approach and use of technology made the entire process seamless and effective. Loved their realtime mockup demo!"
            image="/images/JonnieCruz.jpg"
          />
          <TestimonialCard
            name="Tom L"
            role="Landscaping Owner of Tom's Lawn Care"
            content="Scaling our digital operations is a breeze with LawnLogic. Their modern solutions have saved us time and significantly improved our online performance."
            image="/images/TomL.jpg"
          />
          <TestimonialCard
            name="Stephan C."
            role="Marketing Director at Wichita State University"
            content="As a marketing professional, I appreciate LawnLogic's determination and accuracy. They've consistently delivered outstanding results for our campaigns."
            image="/images/StephanC.jpg"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-green-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Revolutionize Your Digital Presence?
        </h2>
        <p className="text-gray-700 font-lato text-lg mb-8 max-w-2xl mx-auto">
          Join the ranks of businesses that have transformed their online success with our cutting-edge web solutions and strategies.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Get Started
          </Button>
        </div>
      </section>

      {/* Booking Form Section */}
      <div id="booking-form-wrapper" className="mt-12">
        {/* Booking Form */}
        <div id="booking-form" className="mt-12 px-4 sm:px-0">
          <BookingForm />
        </div>
      </div>
    </main>
  </div>
}