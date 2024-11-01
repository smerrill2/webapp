
// src/app/(site)/FAQ/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '@/app/data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('contracts');

  const categories = {
    'contracts': 'CONTRACTS & PRICING',
    'seo': 'SEO SERVICES',
    'technical': 'TECHNICAL DETAILS',
    'business': 'BUSINESS OPERATIONS'
  };

  const handleClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-5xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      
      <motion.p 
        className="text-xl text-center mb-12 max-w-2xl mx-auto text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Find answers to common questions about our web development services.
      </motion.p>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              activeCategory === key 
                ? 'bg-white/10 text-white' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        {faqData[activeCategory as keyof typeof faqData].map((item, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={false}
          >
            <button
              onClick={() => handleClick(index)}
              className="flex justify-between items-center w-full text-left p-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg transition-colors duration-300"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-semibold text-white">{item.question}</span>
              {openIndex === index ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white/5 backdrop-blur-lg rounded-lg mt-2">
                    <p className="text-white/90 whitespace-pre-line">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
}