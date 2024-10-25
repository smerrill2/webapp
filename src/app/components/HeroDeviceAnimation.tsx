'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDeviceAnimation() {
  return (
    <div className="relative w-full h-[75vh] md:h-[75vh] lg:h-[80vh] -mt-20 sm:-mt-16 md:mt-0"> {/* Reduced negative margin slightly */}
      {/* Image Wrapper */}
      <div className="absolute inset-0 w-full md:w-[170%] lg:w-[185%] h-full transform 
                      translate-x-[-5%] translate-y-[-10%] md:translate-y-0 md:translate-x-[-12%] lg:translate-x-[-20%]">
        {/* Adjusted translate-x for left movement and reduced translate-y to move down */}
        <Image 
          src="/images/HeroImage.png"
          alt="Screenshot of our lawn care solutions website interface"
          fill
          className="rounded-lg object-cover object-left md:object-center scale-125 md:scale-100"
          priority={true}
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 185vw"
        />
      </div>
    </div>
  );
}