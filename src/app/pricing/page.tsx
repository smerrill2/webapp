'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/app/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/card"
import { Check, X } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const PricingTier = ({ title, price, monthlyFee, features, cta }) => (
  <Card className="bg-white/10 backdrop-blur-lg border-green-500/20">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      <div className="text-3xl font-bold text-green-400">${price}</div>
      {monthlyFee && <div className="text-sm text-gray-300">+ ${monthlyFee}/month</div>}
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="text-green-400" />
            <span className="text-white">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white">
        {cta}
      </Button>
    </CardContent>
  </Card>
)

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transparent Pricing
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the perfect plan for your business needs. Start with a free consultation and scale as you grow.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              cta="Book Free Consultation"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PricingTier
              title="Starter"
              price="1,500"
              monthlyFee="100"
              features={[
                "Up to 15 pages",
                "Professional design",
                "Mobile responsive",
                "Basic SEO optimization",
                "Monthly maintenance"
              ]}
              cta="Get Started"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PricingTier
              title="Pro"
              price="2,500"
              monthlyFee="200"
              features={[
                "Everything in Starter",
                "White-labeled application",
                "Watermark removal",
                "Advanced SEO optimization",
                "Priority support"
              ]}
              cta="Upgrade to Pro"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PricingTier
              title="Platinum"
              price="Custom"
              features={[
                "Fully reactive website",
                "Custom animations",
                "White-labeled app with CMS",
                "Advanced analytics integration",
                "Dedicated account manager",
                "24/7 premium support"
              ]}
              cta="Contact for Custom Quote"
            />
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose LawnLogic?</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-2">
            <li className="flex items-center space-x-2">
              <Check className="text-green-400 flex-shrink-0" />
              <span>Competitive pricing with immediate value and ongoing support</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-green-400 flex-shrink-0" />
              <span>Well-defined services aligned with client needs</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-green-400 flex-shrink-0" />
              <span>Scalable solutions that grow with your business</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="text-green-400 flex-shrink-0" />
              <span>Expert team with a focus on modern, effective web design</span>
            </li>
          </ul>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}