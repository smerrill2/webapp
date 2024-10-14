// LearnMoreButton.tsx

'use client';

import React from 'react';
import { Button } from '@/app/components/button';

export default function LearnMoreButton() {
  const scrollToElement = (element: HTMLElement, duration: number) => {
    const startingY = window.pageYOffset;
    const elementY = element.getBoundingClientRect().top + window.pageYOffset;
    const diff = elementY - startingY;
    let startTime: number | null = null;

    // Easing function for smooth scrolling
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startingY + diff * ease);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToForm = () => {
    const form = document.getElementById('booking-form');
    if (form) {
      scrollToElement(form, 2000); // Scroll over 2 seconds (2000 milliseconds)
    }
  };

  return (
    <Button
      onClick={scrollToForm}
      variant="default" // or another variant as needed
      className="bg-pink-500 hover:bg-pink-600 font-semibold transition-colors rounded-full" // Ensure rounded corners
    >
      Start Your Free Web Mockup!
    </Button>
  );
}