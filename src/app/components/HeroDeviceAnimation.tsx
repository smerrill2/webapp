'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDeviceAnimation() {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] -mt-20 sm:-mt-16 md:mt-0">
      <div className="absolute inset-0 w-full md:w-[170%] lg:w-[185%] h-full">
        <div className="relative w-full h-full transform -translate-x-[5%] -translate-y-[10%] md:translate-y-0 md:-translate-x-[12%] lg:-translate-x-[20%]">
          <Image 
            src="/images/HeroImage.png"
            alt="Screenshot of our lawn care solutions website interface"
            width={1920}
            height={1080}
            priority={true}
            quality={85}
            className="rounded-lg object-cover object-left md:object-center"
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 170vw, 
                   185vw"
          />
        </div>
      </div>
    </div>
  );
}