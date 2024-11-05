// src/app/(site)/wsu/page.tsx
import { Metadata } from 'next'
import { CaseStudyContent } from '@/app/(site)/wsu/CaseStudyContent'

interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  digest: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'wsu',
    slug: 'wsu', // Changed to lowercase
    title: 'WSU Social Media Growth Strategy',
    description: 'Maximizing Graduate Program Applications through Digital Marketing',
    digest: '3105442530'
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = caseStudies.find(study => study.slug === params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found'
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function WSUPage() {
  const caseStudy = caseStudies[0]
  return <CaseStudyContent caseStudy={caseStudy} />
}