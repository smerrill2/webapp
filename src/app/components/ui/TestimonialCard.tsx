'use client'

import React from 'react'
import { Card, CardContent } from '@/app/components/card'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <Card className="bg-white text-green-950 rounded-lg overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <p className="text-lg font-medium italic">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={`${name}'s profile`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-green-700">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}