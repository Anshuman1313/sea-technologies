
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { AiDataScienceHero } from '@/components/techai/AiDataScienceHero'
import { AiDataScienceServices } from '@/components/techai/AiDataScienceServices'
import { DataAnalyticsProjects } from '@/components/techai/DataAnalyticsProjects'
import { MlModelsShowcase } from '@/components/techai/MlModelsShowcase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Data Science Solutions | ML Models, AI Integration & Data Analytics',
  description: 'Professional AI and data science services. Build machine learning models, integrate AI solutions, and perform advanced data analytics.',
}

export default function AiDataSciencePage() {
  return (
    <main className="min-h-screen bg-white">
      <AiDataScienceHero />
      <AiDataScienceServices />
      {/* <MlModelsShowcase /> */}
      {/* <DataAnalyticsProjects /> */}
      <Newsletter />
    </main>
  )
}
