import { FinTechHero } from '@/components/industries-fintech/FinTechHero'
import { FinTechTrust } from '@/components/industries-fintech/FinTechTrust'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FinTech Solutions | Banking, Payments & Blockchain Development - Sea Technologies',
  description: 'Secure, scalable FinTech solutions for banking, payments, and blockchain. Trusted by financial institutions worldwide.',
}

export default function FinTechPage() {
  return (
    <main className="min-h-screen bg-white">
      <FinTechHero />
      <FinTechTrust />
      <Newsletter />
    </main>
  )
}
