
import { ECommerceHero } from '@/components/industries-ecommerce/ECommerceHero'
import { ECommerceTrust } from '@/components/industries-ecommerce/ECommerceTrust'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Commerce Solutions | Online Stores & Marketplaces Development - Sea Technologies',
  description: 'Custom e-commerce solutions for online stores and marketplaces. Scalable platforms that drive sales and enhance customer experience.',
}

export default function ECommercePage() {
  return (
    <main className="min-h-screen bg-white">
      <ECommerceHero />
      <ECommerceTrust />
      <Newsletter />
    </main>
  )
}
