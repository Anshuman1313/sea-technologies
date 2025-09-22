
import { MobileDevsHero } from '@/components/hire-mobile/MobileDevsHero'
import { MobileDevsShowcase } from '@/components/hire-mobile/MobileDevsShowcase'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Mobile App Developers | Native & Cross-Platform Specialists',
  description: 'Hire expert mobile app developers specializing in iOS, Android, React Native, and Flutter development. Build apps that users love.',
}

export default function MobileDevsPage() {
  return (
    <main className="min-h-screen bg-white">
      <MobileDevsHero />
      <MobileDevsShowcase />
      <Newsletter />
    </main>
  )
}
