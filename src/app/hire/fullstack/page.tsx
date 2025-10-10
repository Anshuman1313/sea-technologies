import { FullStackDevsHero } from '@/components/hire-fullstack/FullStackDevsHero'
import { FullStackDevsShowcase } from '@/components/hire-fullstack/FullStackDevsShowcase'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Full Stack Developers | End-to-End Development Expertise - Sea Technologies',
  description: 'Hire expert full stack developers with end-to-end development expertise. Frontend, backend, and database specialists ready to build complete solutions.',
}

export default function FullStackDevsPage() {
  return (
    <main className="min-h-screen bg-white">
      <FullStackDevsHero />
      <FullStackDevsShowcase />
      <Newsletter />
    </main>
  )
}
