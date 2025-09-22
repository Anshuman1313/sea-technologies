
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { MobileTechFrameworks } from '@/components/techmobile/MobileTechFrameworks'
import { MobileTechHero } from '@/components/techmobile/MobileTechHero'
import { MobileTechServices } from '@/components/techmobile/MobileTechServices'
import { MobileTechShowcase } from '@/components/techmobile/MobileTechShowcase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development | iOS & Android Apps with React Native & Flutter',
  description: 'Professional mobile app development services using React Native, Flutter, and native iOS/Android. Build cross-platform mobile applications.',
}

export default function MobileDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <MobileTechHero />
      <MobileTechServices />
      <MobileTechFrameworks />
      <MobileTechShowcase />
      <Newsletter />
    </main>
  )
}
