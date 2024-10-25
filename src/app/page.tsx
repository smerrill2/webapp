// src/app/page.tsx

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import BookingForm from '@/app/components/BookingForm';
import { Button } from '@/app/components/button';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';

const TestimonialCard = dynamic(() => import('@/app/components/ui/TestimonialCard'), {
  loading: () => <p>Loading testimonials...</p>,
  ssr: true,
});

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Gradient Header and Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, black, #006400)',
          }}
        >
          <div className="absolute inset-0 bg-white [clip-path:polygon(0%_80%,100%_60%,100%_100%,0%_100%)]"></div>
        </div>

        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* Main Content with White Background */}
      <div className="bg-white">
        <main className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Features Section */}
          <section className="py-16 lg:py-24">
            <div className="border border-gray-200/60 rounded-2xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column: Text Content */}
                <div className="space-y-8 text-left">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Boosting Your Online Success
                  </h2>
                  <p className="text-gray-700 font-semi-bold text-xl leading-relaxed max-w-[540px]">
                    At LawnLogic, we use a customer-centric approach to deliver maximum value to your customers. Transparency and usability are the core of our business.
                  </p>
<ul className="space-y-6">
  {[
    'Converting website visitors into booked lawn care clients',
    'Smart scheduling systems that work while you sleep',
    'Dominating local search results in your service area',
    'AI-powered lead capture - never miss an opportunity',
  ].map((item, index) => (
    <li key={index} className="flex items-start space-x-4">
      <CheckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
      <span className="text-gray-700 text-lg">{item}</span>
    </li>
  ))}
</ul>
                  <div className="flex flex-row gap-4 pt-4">
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

                {/* Right Column: Image */}
                <div className="relative h-[500px]">
                  <Image
                    src="/images/asset12.jpg"
                    alt="Digital success visualization"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold mb-3">Smart Online Growth</h3>
                    <p className="text-gray-700 text-xl">
                      Watch your business bloom with our easy-to-understand digital strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-left">What Our Customers Say</h2>
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
          <section className="mb-24 px-6">
            <div className="bg-green-50 rounded-xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Revolutionize Your Digital Presence?
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Join the ranks of businesses that have transformed their online success with our cutting-edge web solutions and strategies.
              </p>
              <div className="flex justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Get Started
                </Button>
              </div>
            </div>
          </section>

          {/* Booking Form Section */}
          <div id="booking-form" className="px-6 mb-24"> {/* Added id="booking-form" here */}
  <BookingForm />
          </div>
                  </main>
      </div>
      <Footer />
    </>
  );
}
