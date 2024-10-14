// src/app/components/AboutUsSection.tsx

import React from 'react';
import { Card, CardContent } from "@/app/components/card";
import { MapPin, Target, Users } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8bg-gradient-to-br from-black via-green-950 to-black text-white font:inter">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Who we are
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              We help solve problems for the lawn care industry using market reports, industry insights, and customer validation in order to make sure your brand is being heard and purchased. Based out of Wichita, KS, we strive for excellency and making sure you get the best hands-on approach.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              We are not a one-size-fits-all kind of company. We are tailored marketers that help ensure the best route that aligns with your company goals.
            </p>
          </div>
          <div className="grid gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Local Expertise</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Based in Wichita, KS, with deep understanding of the local and national lawn care market.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start space-x-4">
                <Target className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tailored Approach</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Customized marketing strategies aligned with your specific company goals.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start space-x-4">
                <Users className="text-primary h-6 w-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customer-Centric</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Focused on customer validation and ensuring your brand resonates with your target audience.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}