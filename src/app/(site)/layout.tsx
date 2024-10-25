// src/app/(site)/layout.tsx

'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Analytics } from '@vercel/analytics/react';
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header without isHomePage prop */}
      <Header />

      {/* Main Content with Gradient Background */}
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: 'linear-gradient(to right, black, #006400)',
        }}
      >
        <main className="flex-grow container mx-auto px-4 sm:px-8">
          {children}
          <Analytics />

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
