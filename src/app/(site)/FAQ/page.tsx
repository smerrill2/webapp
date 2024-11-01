'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Add FAQ data structure
const faqData = {
  seo: [
    {
      question: "What's included in your SEO package?",
      answer: "We include technical SEO optimization (site speed, mobile-friendliness, structured data), on-page SEO (meta tags, content optimization, internal linking), and monthly reporting. Off-page SEO like link building is available as an add-on service."
    },
    {
      question: "How long until I see SEO results?",
      answer: "Typically, you'll start seeing movement in rankings within 3-6 months, with significant results in 6-12 months. This varies based on competition and your starting position."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "No reputable SEO company can guarantee rankings since search algorithms constantly change. We focus on sustainable, white-hat SEO practices that build long-term visibility."
    }
  ],
  contracts: [
    {
      question: "So what's the difference between lump sum and subscription?",
      answer: "The biggest difference comes down to long term vs short term costs. With subscription, you'll pay more over time but get manageable monthly payments of $149. The lump sum ($1,500) gets everything out of the way upfront, saving you money long-term since you're paying for design and development upfront. Choose based on your cash flow and goals - if you want lower upfront costs and value ongoing service, go monthly. If you want to save in the long run and don't need monthly support, go lump sum."
    },
    {
      question: "Can I add unlimited edits to the lump sum package?",
      answer: "Absolutely! For $50 a month, you can add unlimited edits and support. Like our other packages, this needs a 12-month commitment - no switching it on and off monthly. If you cancel and want to restart later, you'll need another 12-month commitment."
    },
    {
      question: "What happens after the 12-month minimum on subscriptions?",
      answer: "The subscription continues month-to-month. Typically it takes 2-3 years to match what we'd make on a lump sum site, so ideally we'd love to have clients stay 5+ years. By that point, your site should be generating way more than $149/month in value, essentially paying for itself. We hope you'll continue seeing the value in our ongoing work and support."
    },
    {
      question: "Can I buy out my subscription after the minimum period?",
      answer: "There's no buyout option for the monthly package. This model works because we need long-term clients (5+ years) to make it financially viable. If everyone bought out early, we'd be constantly selling instead of focusing on providing great service to our existing clients."
    }
  ],
  technical: [
    {
      question: "What hosting provider do you recommend?",
      answer: "We recommend SiteGround for most clients. They offer great performance, customer service, and security at a reasonable price. If you have specific needs, we can recommend other providers as well."
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes, we offer maintenance packages starting at $50/month. This includes regular updates, backups, and security monitoring. We also offer unlimited edits for $50/month, which includes maintenance."
    },
    {
      question: "What's the difference between maintenance and unlimited edits?",
      answer: "Maintenance includes regular updates, backups, and security monitoring. Unlimited edits include all maintenance tasks plus any content or design changes you need on your site. Maintenance is required for unlimited edits."
    }
  ],
  business:[
    {
      question: "Do I keep my site if I cancel?",
      answer: "No - but you keep your domain and assets! This might sound harsh, but if everyone kept their sites after canceling, we couldn't stay in business. The monthly fee covers ongoing hosting and maintenance too."
    },
    {
      question: "Do I own my domain?",
      answer: "Absolutely! Even if we help purchase it, the domain is yours. When you cancel, we transfer it to you - we don't take hostages:) "
    },
    {
      question: "What happens if something happens to you? Any backup plan?",
      answer: "Don't worry - I've got partners in place who know exactly how everything works. If anything happens, my employees know what to do. If something happens to them, my brother Matt steps in. If something happens to him... I'm sorry."
    }
  ]
};

// Export for use in other components
export { faqData };

const FAQPage = () => {
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
};

export default FAQPage;