
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { ProductEngineeringHero } from '@/components/service-product-engineering/ProductEngineeringHero'
import { ProductEngineeringProcess } from '@/components/service-product-engineering/ProductEngineeringProcess'
import { ProductEngineeringServices } from '@/components/service-product-engineering/ProductEngineeringServices'
import { ProductEngineeringShowcase } from '@/components/service-product-engineering/ProductEngineeringShowcase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Engineering Services | From MVP to Full-Scale Product',
  description: 'Complete product engineering services from MVP development to full-scale products. Build, launch, and scale your digital product with expert engineering.',
}

export default function ProductEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductEngineeringHero />
      <ProductEngineeringServices />
      <ProductEngineeringProcess />
      {/* <ProductEngineeringShowcase /> */}
      <Newsletter />
    </main>
  )
}
