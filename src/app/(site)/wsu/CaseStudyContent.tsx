// src/app/(site)/wsu/case-study-content.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/app/components/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, Target, TrendingUp, Users, Clock, Instagram } from 'lucide-react';
import Image from 'next/image';

interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  digest: string
}

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}
const StorySection = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center mb-8">The Story</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6">
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-green-800">The Beginning</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When WSU's graduate program first approached us, their social media presence was minimal. 
            Despite having excellent programs and successful alumni, their digital footprint didn't 
            reflect their true potential. Initial analytics showed sporadic posting and limited engagement, 
            with most posts reaching only a fraction of their target audience.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "We knew we had great stories to tell, but we weren't reaching the right people at the right time."
              <br />- Program Director
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-green-800">The Turning Point</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our first major breakthrough came when we implemented a content calendar focused on 
            student success stories. By highlighting real experiences and achievements, we saw 
            immediate improvements in engagement. The authentic storytelling approach resonated 
            with prospective students and began generating organic sharing within the academic community.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "The moment we started sharing real student stories, everything changed. People started 
              seeing themselves in our content."
              <br />- Social Media Manager
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 md:col-span-2">
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-green-800">The Journey</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Over the next three months, we implemented a comprehensive strategy that included:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Phase 1: Research</h4>
                <p className="text-gray-600 text-sm">
                  Deep dive into audience behavior, competitor analysis, and content audit to 
                  establish baseline metrics and identify opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Phase 2: Implementation</h4>
                <p className="text-gray-600 text-sm">
                  Developed content guidelines, established posting schedules, and trained team 
                  members on new tools and processes.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Phase 3: Optimization</h4>
                <p className="text-gray-600 text-sm">
                  Continuous monitoring and adjustment of strategy based on performance metrics 
                  and audience feedback.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 md:col-span-2">
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-green-800">Key Learnings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What Worked Well</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Student-centered content strategy</li>
                <li>Consistent posting schedule</li>
                <li>Data-driven decision making</li>
                <li>Authentic storytelling approach</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Challenges Overcome</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Initial content creation bottlenecks</li>
                <li>Coordinating with multiple departments</li>
                <li>Building a consistent brand voice</li>
                <li>Maintaining engagement during off-peak periods</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);



export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const analyticsData = [
    { month: 'Aug', views: 1200, interactions: 80, reach: 400 },
    { month: 'Sep', views: 2400, interactions: 150, reach: 800 },
    { month: 'Oct', views: 3521, interactions: 208, reach: 1155 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 mb-12">
        <Image 
          src="/images/standard.png" 
          alt="Company Logo" 
          width={200}
          height={100}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-4xl font-bold">{caseStudy.title}</h1>
        <p className="text-xl text-gray-600">{caseStudy.description}</p>
      </div>

      {/* Challenge & Strategy Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-pink-600" />
                Challenge
              </h2>
              <p className="text-gray-700">
                Increase graduate program applications through improved social media engagement and reach while establishing industry leadership position.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-pink-600" />
                Approach
              </h2>
              <p className="text-gray-700">
                Implement data-driven content strategy focusing on student success stories and strategic posting schedules.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <StorySection />

      {/* Methodology Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Methodology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <FileText className="text-pink-600" size={24} />
              <div>
                <h3 className="font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-600">Real-time data analysis to identify optimal engagement channels.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Users className="text-pink-600" size={24} />
              <div>
                <h3 className="font-bold mb-2">Content Strategy</h3>
                <p className="text-gray-600">Increased posting frequency to 4x weekly.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Clock className="text-pink-600" size={24} />
              <div>
                <h3 className="font-bold mb-2">Timing Optimization</h3>
                <p className="text-gray-600">Strategic post timing based on audience activity analysis.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Implementation Tools */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Implementation Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">Canva</h3>
            <p className="text-gray-600">Visual content creation and templates</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">Adobe Suite</h3>
            <p className="text-gray-600">Professional media editing and design</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">Excel</h3>
            <p className="text-gray-600">Content calendar and analytics tracking</p>
          </div>
        </div>
      </Card>

      {/* Results Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Growth Metrics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#E1306C" name="Views" />
                  <Line type="monotone" dataKey="reach" stroke="#833AB4" name="Reach" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Instagram className="text-pink-600" />
                <div>
                  <p className="font-bold">40% Increase</p>
                  <p className="text-gray-600">In accounts reached</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="text-pink-600" />
                <div>
                  <p className="font-bold">80% Follower Engagement</p>
                  <p className="text-gray-600">Of total interactions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TrendingUp className="text-pink-600" />
                <div>
                  <p className="font-bold">120% Growth</p>
                  <p className="text-gray-600">In total views</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}