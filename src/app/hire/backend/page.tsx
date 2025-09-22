
import { BackendDevsHero } from '@/components/hire-backend/BackendDevsHero'
import { BackendDevsShowcase } from '@/components/hire-backend/BackendDevsShowcase'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Backend Developers | Node.js, .NET, Java & More Experts',
  description: 'Hire expert backend developers specializing in Node.js, .NET, Java, Python, and modern server-side technologies. Start in 48 hours.',
}

export default function BackendDevsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BackendDevsHero />
      <BackendDevsShowcase />
      <Newsletter />
    </main>
  )
}
