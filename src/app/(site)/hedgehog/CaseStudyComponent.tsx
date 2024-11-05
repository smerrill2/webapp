// src/app/(site)/hedgehog-case-study/case-study-content.tsx
'use client';

import React from 'react';
import { Card, } from '@/app/components/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';
import {  Users, Smartphone, PhoneCall, Leaf } from 'lucide-react';
import Image from 'next/image';

export function CaseStudyContent() {
  const leadData = [
    { month: 'Before', leads: 8, conversions: 3 },
    { month: 'Month 1', leads: 15, conversions: 6 },
    { month: 'Month 2', leads: 22, conversions: 10 },
    { month: 'Month 3', leads: 31, conversions: 14 }
  ];



  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 bg-white">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Image
          src="/images/HedgeHoglawncare.png"
          alt="HedgeHog Lawn Care Logo"
          width={200}
          height={80}
          className="mx-auto"
          priority
        />
        <h1 className="text-4xl font-bold text-gray-900">Digital Transformation Case Study</h1>
        <p className="text-xl text-gray-600">Modernizing Lawn Care Services in Louisiana</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: PhoneCall, stat: '30%', label: 'More Quality Leads' },
          { icon: Users, stat: '89%', label: 'Customer Retention' },
          { icon: Smartphone, stat: '99', label: 'Mobile Score' },
          { icon: Leaf, stat: '18', label: 'New Monthly Clients During Peak Season' }
        ].map((item, index) => (
          <Card key={index} className="p-6 text-center">
            <item.icon className="w-8 h-8 mx-auto mb-4 text-green-600" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</h3>
            <p className="text-gray-600">{item.label}</p>
          </Card>
        ))}
      </div>

      {/* Challenge Section */}
      <Card className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-800">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              HedgeHog Lawn Care had built a strong local reputation but was limited by outdated 
              digital infrastructure. With a basic website and manual booking system, they were 
              missing opportunities and spending too much time on administrative tasks.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                "We needed a website that could work as hard as we do."
                <br />- David L., Owner
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-800">The Solution</h2>
            <ul className="space-y-2">
              {[
                'Modern, mobile-optimized website',
                'Automated quote calculator',
                'Streamlined booking system',
                'SEO optimization for local searches',
                'Integrated photo gallery'
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

     {/* Technical Results */}
<Card className="p-8">
  <h2 className="text-2xl font-bold mb-6 text-green-800">Performance Improvements</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-bold mb-4">Page Speed Insights</h3>
      <div className="space-y-6">
        {/* Desktop Score */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Desktop Performance</h4>
          <div className="relative">
            <Image
              src="/images/hedgehog_page_speeds.png"  // Add your desktop screenshot here
              alt="Desktop PageSpeed Score"
              width={600}
              height={300}
              className="rounded-lg border border-gray-200"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              99
            </div>
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'LCP', value: '1.8s', target: '< 2.5s' },
            { label: 'FID', value: '10ms', target: '< 100ms' },
            { label: 'CLS', value: '0.02', target: '< 0.1' }
          ].map((metric, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 text-center">
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-lg font-bold text-green-600">{metric.value}</p>
              <p className="text-xs text-gray-500">Target: {metric.target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Growth in Leads</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={leadData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="leads" name="Total Leads" stroke="#059669" strokeWidth={2} />
            <Line type="monotone" dataKey="conversions" name="Conversions" stroke="#9333EA" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
</Card>

      {/* SEO Results */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-800">SEO & Mobile Optimization</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Local SEO',
              stats: 'Top 3 ranking for local lawn care searches',
              detail: 'Optimized for Louisiana service areas'
            },
            {
              title: 'Mobile Performance',
              stats: '99/100 Mobile Score',
              detail: 'Touch-optimized interface and fast loading'
            },
            {
              title: 'Technical SEO',
              stats: '15+ first page rankings',
              detail: 'Enhanced site structure and meta data'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-gray-900 mb-2">{item.stats}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Final Testimonial */}
      <Card className="p-8 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <Leaf className="w-12 h-12 mx-auto mb-6 text-green-600" />
          <p className="text-xl text-gray-700 italic mb-6">
            "The new website has transformed how we do business. It's easier for customers 
            to find and book us, and we can focus more on delivering quality service. The 
            results have exceeded our expectations."
          </p>
          <p className="font-semibold text-green-800">David L.</p>
          <p className="text-gray-600">Owner, HedgeHog Lawn Care</p>
        </div>
      </Card>
    </div>
  );
}