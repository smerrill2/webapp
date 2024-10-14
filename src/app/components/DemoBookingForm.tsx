'use client'

import React from 'react';
import { Button } from "../components/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function BookingFormDemo() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-100 backdrop-blur-lg border border-gray-200 shadow-md rounded-lg"> {/* Updated with rounded corners */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Free Website Mockup Session</CardTitle>
        <CardDescription className="text-gray-600">Fill out the form below to get started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 space-y-2">
            <Label htmlFor="name" className="text-gray-800">Name</Label>
            <Input 
              id="name" 
              placeholder="Your full name" 
              className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500" // Added rounded and focus styles
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="phone" className="text-gray-800">Ph #</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Your phone number" 
              className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500" // Added rounded and focus styles
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-800">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500" // Added rounded and focus styles
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 space-y-2">
            <Label htmlFor="company" className="text-gray-800">Company</Label>
            <Input 
              id="company" 
              placeholder="Your company name" 
              className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500" // Added rounded and focus styles
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="state" className="text-gray-800">State</Label>
            <Input 
              id="state" 
              placeholder="Your state" 
              className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500" // Added rounded and focus styles
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition-colors">
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
// Remove the redundant export default line
