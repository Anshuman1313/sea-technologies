
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { CustomSoftwareExamples } from '@/components/service-custom-software/CustomSoftwareExamples'
import { CustomSoftwareHero } from '@/components/service-custom-software/CustomSoftwareHero'
import { CustomSoftwareProcess } from '@/components/service-custom-software/CustomSoftwareProcess'
import { CustomSoftwareServices } from '@/components/service-custom-software/CustomSoftwareServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Tailored Business Solutions',
  description: 'Professional custom software development services. Build scalable, tailored solutions designed specifically for your business needs and workflows.',
}

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-white contain-content">
      <CustomSoftwareHero />
      <CustomSoftwareServices />
      <CustomSoftwareProcess />
      {/* <CustomSoftwareExamples /> */}
      <Newsletter />
    </main>
  )
}
