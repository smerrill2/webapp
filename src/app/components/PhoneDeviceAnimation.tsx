// src/app/components/PhoneDeviceAnimation.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PhoneDeviceAnimation() {
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    const handleMediaChange = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    let requestId = 0;

    const handleScroll = () => {
      if (prefersReducedMotionRef.current) return;

      if (requestId) return;

      requestId = window.requestAnimationFrame(() => {
        if (imageRef.current) {
          const scrollY = window.scrollY;
          const windowWidth = window.innerWidth;
          const maxTranslateX = windowWidth; // Maximum translation to move off-screen
          const translateX = Math.min(scrollY * 0.5, maxTranslateX);
          imageRef.current.style.transform = `translateX(-${translateX}px)`;
        }
        requestId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('scroll', handleScroll);
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className="w-full h-auto mx-auto"
      style={{
        willChange: 'transform',
        transition: 'transform 0.1s linear',
      }}
    >
      <Image
        src="/images/image4.png"
        alt="Hero Image for Mobile"
        width={400}
        height={300}
        className="mx-auto"
      />
    </div>
  );
}