// src/app/testimonials/PricingPage.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PricingTier from '@/app/components/PricingTier'; // Adjust the import path as necessary

const PricingPage: React.FC = () => {
  return (
      <main className="container mx-auto px-4 py-16">
        {/* Page Title */}
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-white" // Added "text-white" class
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          Transparent Pricing
        </motion.h1>
        
        {/* Page Description */}
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-white" // Added "text-white" class
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the perfect plan for your business needs. Start with a free consultation and scale as you grow.
        </motion.p>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Consultation Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PricingTier
                title="Consultation"
                price="0"
                features={[
                    "1-hour website review",
                    "Free mock-up design",
                    "Expert recommendations",
                    "No obligation"
                ]}
                cta="Book Now"
            />
          </motion.div>

          {/* Starter Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PricingTier
              title="Starter"
              price="199/month"
              features={[
                "Up to 7 pages",
                "Professional design",
                "Mobile responsive",
                "Basic SEO optimization",
                "Monthly maintenance",
                "Google Analytics integration"
              ]}
              cta="Get Started"
            />
          </motion.div>

          {/* Pro Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PricingTier
              title="Pro"
              price="299/month"
              features={[
                "Everything in Starter",
                "Up to 15 pages",
                "White-labeled application",
                "Watermark removal",
                "Advanced SEO optimization",
                "Google Analytics "
              ]}
              cta="Contact Us"
            />
          </motion.div>

          {/* Platinum Tier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PricingTier
              title="Platinum"
              price="499/month"
              features={[
                "Everything in Pro",
                "Up to 50 pages",
                "Fully reactive website",
                "Custom animations",
                "White-labeled app with CMS",
                "Advanced analytics integration",
                "Dedicated account manager",
                "24/7 premium support"
              ]}
              cta="Contact Us"
            />
          </motion.div>
        </div>

        {/* Additional Content Section */}
       
      </main>
  )
}

export default PricingPage;