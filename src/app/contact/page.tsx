'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/app/components/card"
import { Mail, Phone, MapPin } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import DemoBookingForm from '@/app/components/DemoBookingForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-green-500/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-400" />
                    <a href="mailto:hello@lawnlogicusa.com" className="text-white hover:text-green-400 transition-colors">
                      hello@lawnlogicusa.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-400" />
                    <a href="tel:+13162850109" className="text-white hover:text-green-400 transition-colors">
                      +1 316-285-0109
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-green-400" />
                    <span className="text-white">Wichita, KS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DemoBookingForm />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}