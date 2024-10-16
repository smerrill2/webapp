// src/app/components/PricingTier.tsx

'use client';

import React from 'react';
import { Button } from "@/app/components/button"; // Adjust the import path as necessary
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/card"; // Adjust the import path as necessary
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string | number;
  monthlyFee?: string | number;
  features: string[];
  cta: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, monthlyFee, features, cta }) => (
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
);

export default PricingTier;