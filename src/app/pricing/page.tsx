// src/app/testimonials/WSUTestimonial.tsx

'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/card";
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header'; // Importing Header component
import Footer from '../components/Footer'; // Importing Footer component
import PricingTier from '@/app/components/PricingTier'; // Import the updated PricingTier component

// Define the props interface for SocialMetric
interface SocialMetricProps {
  platform: string;
  growth: number;
  icon: React.ReactNode;
}

const SocialMetric: React.FC<SocialMetricProps> = ({ platform, growth, icon }) => (
  <Card className="bg-white/10 backdrop-blur-lg">
    <CardContent className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <p className="text-lg font-semibold">{platform}</p>
          <p className="text-sm text-gray-400">Follower Growth</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-green-400">{growth}%</p>
        <p className="text-sm text-gray-400">Increase</p>
      </div>
    </CardContent>
  </Card>
);

export default function WSUTestimonial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white font-inter">
      <Header /> {/* Using Header component */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="space-y-12 py-12">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-start">
            <div className="md:w-full flex items-start">
              <Image
                src="/images/WichitaStateUniversity.png" // Replace with the actual image path
                alt="Wichita State University Logo"
                width={100}
                height={100}
                className="w-24 h-auto mr-4"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Wichita State University</h1>
                <p className="text-xl text-gray-300 mb-4">Elevating Academic Excellence through Digital Engagement</p>
              </div>
            </div>
          </section>

          {/* Social Metrics Section */}
          <section className="grid md:grid-cols-1 gap-0">
            <SocialMetric
              platform="Instagram"
              growth={35}
              icon={<Check className="h-8 w-8 text-pink-500" />}
            />
            {/* You can add more SocialMetric components here if needed */}
          </section>

          {/* Content Section */}
          <section className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Header Here</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Your first paragraph text here. Provide detailed information about the case study, highlighting key points and insights that showcase the success achieved.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your second paragraph text here. Continue elaborating on the case study, offering more context, data, and anecdotes that support the narrative.
            </p>
          </section>

          {/* Additional Content (Optional) */}
          {/* You can add more sections or components as needed */}
        </main>
      </div>

      <Footer /> {/* Using Footer component */}
    </div>
  );
}