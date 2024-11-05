'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/app/components/card"
import { Mail, Phone, MapPin } from 'lucide-react'
import DemoBookingForm from '@/app/components/BookingForm'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-5xl font-bold mb-8 text-center text-gray-900"
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
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600" />
                  <a href="mailto:spencer@lawnlogicusa.com" className="text-gray-700 hover:text-green-600 transition-colors">
                    spencer@lawnlogicusa.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" />
                  <a href="tel:+13162850109" className="text-gray-700 hover:text-green-600 transition-colors">
                    +1 316-285-0109
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" />
                  <span className="text-gray-700">Wichita, KS</span>
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
  )
}