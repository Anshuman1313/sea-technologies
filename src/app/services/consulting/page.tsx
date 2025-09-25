
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { ItConsultingHero } from '@/components/service-consulting/ItConsultingHero'
import { ItConsultingProcess } from '@/components/service-consulting/ItConsultingProcess'
import { ItConsultingResults } from '@/components/service-consulting/ItConsultingResults'
import { ItConsultingServices } from '@/components/service-consulting/ItConsultingServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Consulting Services | Strategic Guidance for Digital Transformation',
  description: 'Expert IT consulting services for digital transformation. Strategic technology guidance, implementation planning, and business optimization.',
}

export default function ItConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <ItConsultingHero />
      <ItConsultingServices />
      <ItConsultingProcess />
      {/* <ItConsultingResults /> */}
      <Newsletter />
    </main>
  )
}
