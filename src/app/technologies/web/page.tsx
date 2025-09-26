
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { WebTechHero } from '@/components/techweb/WebTechHero'
import { WebTechProjects } from '@/components/techweb/WebTechProjects'
import { WebTechServices } from '@/components/techweb/WebTechServices'
import { WebTechStack } from '@/components/techweb/WebTechStack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services | Modern React & Next.js Solutions',
  description: 'Professional web development services using React, Next.js, TypeScript, and modern frameworks. Build scalable, responsive web applications.',
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <WebTechHero />
      <WebTechServices />
      <WebTechStack />
      {/* <WebTechProjects /> */}
      <Newsletter />
    </main>
  )
}
