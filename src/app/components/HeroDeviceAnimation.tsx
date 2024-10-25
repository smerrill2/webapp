// src/app/components/HeroDeviceAnimation.tsx

'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDeviceAnimation() {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh]">
      {/* Image Wrapper */}
      <div className="absolute inset-0 md:w-[160%] md:h-full transform md:translate-x-[5%]">
        <Image 
          src="/images/heroimage.png" // Ensure this path is correct
          alt="Screenshot of our lawn care solutions website interface"
          fill
          className="rounded-lg object-cover object-left md:object-center"
          priority={false}
          loading="eager"
        />
      </div>
    </div>
  );
}
