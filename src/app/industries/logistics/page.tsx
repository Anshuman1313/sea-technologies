import { LogisticsHero } from '@/components/industries-logistics/LogisticsHero'
import { LogisticsTrust } from '@/components/industries-logistics/LogisticsTrust'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logistics Solutions | Supply Chain & Transport Management Systems',
  description: 'Advanced logistics and supply chain management solutions for transport companies, warehouses, and distribution networks. Optimize operations and reduce costs.',
}

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <LogisticsHero />
      <LogisticsTrust />
      <Newsletter />
    </main>
  )
}
