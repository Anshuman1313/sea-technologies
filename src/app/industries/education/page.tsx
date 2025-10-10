
import { EducationHero } from '@/components/industies-education/EducationHero'
import { EducationTrust } from '@/components/industies-education/EducationTrust'
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Solutions | E-learning & EdTech Platform Development - Sea Technologies',
  description: 'Custom e-learning and EdTech solutions for schools, universities, and online education providers. Engaging platforms that transform learning experiences.',
}

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <EducationHero />
      <EducationTrust />
      <Newsletter />
    </main>
  )
}
