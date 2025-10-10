
import { FrontendDevsHero } from '@/components/hire-frontend/FrontendDevsHero'
import { FrontendDevsShowcase } from '@/components/hire-frontend/FrontendDevsShowcase'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Frontend Developers | React, Angular, Vue Experts - Sea Technologies',
  description: 'Hire expert frontend developers specializing in React, Angular, Vue.js, and modern JavaScript frameworks. Start in 48 hours.',
}

export default function FrontendDevsPage() {
  return (
    <main className="min-h-screen bg-white">
      <FrontendDevsHero />
      <FrontendDevsShowcase />
      <Newsletter />
    </main>
  )
}
