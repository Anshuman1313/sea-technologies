
import { DedicatedTeamsHero } from '@/components/hire-dedicated-teams/DedicatedTeamsHero'
import { DedicatedTeamsShowcase } from '@/components/hire-dedicated-teams/DedicatedTeamsShowcase'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Dedicated Development Teams | Scale Fast with Full Project Teams - Sea Technologies',
  description: 'Hire dedicated software development teams. Get full-stack teams of developers, designers, and project managers working exclusively on your project.',
}

export default function DedicatedTeamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <DedicatedTeamsHero />
      <DedicatedTeamsShowcase />
      <Newsletter />
    </main>
  )
}
