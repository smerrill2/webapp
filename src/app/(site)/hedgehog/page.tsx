import { Metadata } from 'next'
import { CaseStudyContent } from '@/app/(site)/hedgehog/CaseStudyComponent'

export const metadata: Metadata = {
  title: 'HedgeHog Lawn Care Case Study | Digital Transformation Success',
  description: 'Learn how HedgeHog Lawn Care improved their digital presence and grew their business with our modern web solutions.',
  openGraph: {
    title: 'HedgeHog Lawn Care Success Story',
    description: 'Digital transformation case study showing real results for a Louisiana lawn care business.',
    type: 'article',
  },
}

export default function HedgeHogPage() {
  return <CaseStudyContent />
}