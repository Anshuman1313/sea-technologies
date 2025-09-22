

import { HealthcareHero } from '@/components/industries-healthcare/HealthcareHero'
import { HealthcareTrust } from '@/components/industries-healthcare/HealthcareTrust'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Solutions | HIPAA Compliant Health Tech Apps',
  description: 'HIPAA compliant healthcare applications for hospitals, clinics, and health tech companies. Secure, scalable, and regulatory-compliant solutions.',
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <HealthcareHero />
      <HealthcareTrust />
      <Newsletter />
    </main>
  )
}
