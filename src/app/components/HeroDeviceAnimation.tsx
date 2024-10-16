// src/app/components/HeroDeviceAnimation.tsx

'use client'; // Ensures this component is a Client Component

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, useAnimation, AnimatePresence } from 'framer-motion';

// Define multiple sets of image URLs
const imageSets = [
  [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image1.png',
  ],
  // Add more sets as desired
];

export default function HeroDeviceAnimation() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    async function animateSequence() {
      while (isMounted) {
        // Animate In: Slide from below into view
        await controls.start('animateIn');

        // Linger: Keep images in view for 30 seconds with a slow drift up
        await controls.start('driftUp');

        // Animate Out: Slide up and fade out
        await controls.start('animateOut');

        // Switch to next image set
        setCurrentSetIndex(prev => (prev + 1) % imageSets.length);
        controls.set('initial');
      }
    }

    animateSequence();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  const durationIn = 1; // Animation duration for animating in (1 second)
  const durationDrift = 30; // Drift up duration in seconds
  const durationOut = 9; // Animation duration for animating out (9 seconds)

  // Define animation variants for the grid
  const gridVariants: Variants = {
    initial: {
      y: '50%',   // Start below the container
      opacity: 0, // Initially invisible
    },
    animateIn: {
      y: '0%',   // Move to original position
      opacity: 1, // Fade in to fully visible
      transition: {
        duration: durationIn,
        ease: 'easeOut',
      },
    },
    driftUp: {
      y: '-50%',  // Slowly drift up
      transition: {
        duration: durationDrift,
        ease: 'linear',
      },
    },
    animateOut: {
      y: '-100%',  // Move above the container
      opacity: 0,   // Fade out to invisible
      transition: {
        duration: durationOut,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-blue-3">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSetIndex}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8" 
          variants={gridVariants}
          initial="initial"
          animate={controls}
          exit="animateOut"
        >
          {imageSets[currentSetIndex].map((imageSource, index) => {
            return (
              <motion.div
                key={index}
                className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
              >
                <Image
                  src={imageSource}
                  alt={`Device frame showing ${getImageDescription(index)}`}
                  layout="fill"
                  objectFit="contain"
                  className="shadow-sm"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Helper function to provide descriptive alt text based on index
function getImageDescription(index: number): string {
  const descriptions = [
    'LawnTimer Settings Example',
    'Family Photo of Connecting w/ Nature',
    'Lawn Timer Suggestions App',
    'Lawn Timer UI for website, CTA button',
    'LawnLogicUSA old homepage',
    'More settings for LawnTimer',
    'Porcupine Example',
    'LawnTimer Settings Example',
    // Add more descriptions as needed
  ];

  return descriptions[index % descriptions.length] || 'device frame';
}