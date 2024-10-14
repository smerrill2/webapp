// src/app/about/page.tsx

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import AboutUsSection from '@/app/components/AboutUsSsection'; // Corrected spelling
import { Button } from '@/app/components/button';
import Image from 'next/image';
import { CheckIcon } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white font-inter">
      <Header />

      <main className="container mx-auto px-4 sm:px-8">
        {/* About Us Section */}
        <AboutUsSection />

        {/* Additional Section: Our Mission */}
        <section className="mt-16 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/TeamMembers.png" // Replace with your image path
                alt="Our Mission Visualization"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-300 font-lato">
                  To empower lawn care businesses with innovative digital solutions that drive growth, enhance customer engagement, and streamline operations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Committed to Excellence
              </h2>
              <p className="text-gray-300 font-lato text-lg">
                At LawnLogic, our mission is to provide top-tier digital marketing services tailored specifically for the lawn care industry. We believe in fostering long-term partnerships with our clients by delivering measurable results and exceptional support.
              </p>
              <ul className="space-y-4">
                {[
                  "Innovative Digital Strategies",
                  "Personalized Client Support",
                  "Data-Driven Decision Making",
                  "Sustainable Growth Solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <CheckIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-lato">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                  Our Services
                </Button>
                <Button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Example: Our Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-900/30  rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Face of the Company</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {/* Team Member */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/SpencerM.png" // Replace with team member image
                alt="Spencer M faceshot"
                width={150}
                height={150}
                className="rounded-full mb-4 opacity-100" // Ensure full opacity
              />
              <h3 className="text-xl font-semibold">Spencer M.</h3>
              <p className="text-gray-300">CEO & Founder</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}