
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { UiUxDesignHero } from '@/components/service-design/UiUxDesignHero'
import { UiUxDesignPortfolio } from '@/components/service-design/UiUxDesignPortfolio'
import { UiUxDesignProcess } from '@/components/service-design/UiUxDesignProcess'
import { UiUxDesignServices } from '@/components/service-design/UiUxDesignServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Services | User-Centric Interfaces & Experiences - Sea Technologies',
  description: 'Professional UI/UX design services. Create intuitive, engaging user interfaces and exceptional user experiences that drive engagement and conversion.',
}

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <UiUxDesignHero />
      <UiUxDesignServices />
      <UiUxDesignProcess />
      <UiUxDesignPortfolio />
      <Newsletter />
    </main>
  )
}
