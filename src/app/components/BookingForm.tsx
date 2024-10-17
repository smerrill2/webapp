// src/app/components/BookingForm.tsx

'use client';

import React, { useState } from 'react';
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { supabase } from '@/lib/supabaseClient'; // Import the Supabase client

export default function BookingForm() {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
  });

  // State variable for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { error } = await supabase.from('form_submissions').insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
        setErrorMessage('There was an error submitting the form. Please try again.');
      } else {
        setSuccessMessage('Your information has been submitted successfully!');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          state: '',
        });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-100 backdrop-blur-lg border border-gray-200 shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Free Website Mockup Session</CardTitle>
        <CardDescription className="text-gray-600">Fill out the form below to get started</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1 space-y-2">
              <Label htmlFor="name" className="text-gray-800">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="phone" className="text-gray-800">Ph #</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-800">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1 space-y-2">
              <Label htmlFor="company" className="text-gray-800">Company</Label>
              <Input
                id="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="state" className="text-gray-800">State</Label>
              <Input
                id="state"
                placeholder="Your state"
                value={formData.state}
                onChange={handleChange}
                required
                className="bg-gray-50 text-gray-800 placeholder:text-gray-400 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}