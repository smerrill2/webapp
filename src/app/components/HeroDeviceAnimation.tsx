'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, useAnimation } from 'framer-motion';

const imageSet = [
  '/images/image9.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',
];

export default function HeroDeviceAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  const totalDuration = 1 + 30 + 9; // durationIn + durationDrift + durationOut

  const gridVariants: Variants = {
    animate: {
      y: ['50%', '0%', '-50%', '-100%'],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: totalDuration,
        times: [0, 1 / totalDuration, (1 + 30) / totalDuration, 1],
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-blue-3">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8"
        variants={gridVariants}
        initial={{ y: '50%', opacity: 0 }}
        animate={controls}
      >
        {imageSet.map((imageSource, index) => (
          <div
            key={index}
            className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
          >
            <Image
              src={imageSource}
              alt={`Device frame showing ${getImageDescription(index)}`}
              fill
              loading="lazy"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              className="shadow-sm"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

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
  ];

  return descriptions[index % descriptions.length] || 'device frame';
}