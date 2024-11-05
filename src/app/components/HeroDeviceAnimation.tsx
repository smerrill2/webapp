'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroDeviceAnimation() {
  return (
    <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] -mt-20 sm:-mt-16 md:mt-0">
      <div className="absolute inset-0 w-[180%] md:w-[170%] lg:w-[185%] h-full">
        <div className="relative w-full h-full transform translate-x-[5%] -translate-y-[15%] sm:-translate-y-[8%] md:-translate-x-[12%] lg:-translate-x-[20%] z-10">
          <Image
            src="/images/HeroImage.png"
            alt="Screenshot of our lawn care solutions website interface"
            width={1920}
            height={1080}
            priority={true}
            quality={85}
            className="rounded-lg object-cover object-center scale-110 sm:scale-100"
            sizes="(max-width: 640px) 180vw,
                   (max-width: 768px) 170vw,
                   185vw"
          />
        </div>
      </div>
    </div>
  );
}