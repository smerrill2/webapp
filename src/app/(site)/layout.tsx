// src/app/(site)/layout.tsx

'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <div className="fixed w-full z-50 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)]">
  <Header />
</div>

      {/* Main Content with Gradient Background */}
      <div
        className="min-h-screen flex flex-col pt-24" // Added padding-top to account for fixed header
        style={{
          background: 'white',
        }}
      >
        <main className="flex-grow container mx-auto px-4 sm:px-8">
          {children}
          <Analytics />
        </main>

        <Footer />
      </div>
    </>
  );
}
