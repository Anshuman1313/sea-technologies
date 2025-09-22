
import { Newsletter } from '@/components/landingpage/NewsLetter'
import { CloudDevOpsHero } from '@/components/techcloud/CloudDevOpsHero'
import { CloudDevOpsServices } from '@/components/techcloud/CloudDevOpsServices'
import { CloudPlatforms } from '@/components/techcloud/CloudPlatforms'
import { DevOpsPipelines } from '@/components/techcloud/DevOpsPipelines'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Solutions | AWS, Azure, GCP with CI/CD Pipelines',
  description: 'Professional cloud infrastructure and DevOps services using AWS, Azure, GCP. Build scalable CI/CD pipelines and automate your deployments.',
}

export default function CloudDevOpsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CloudDevOpsHero />
      <CloudDevOpsServices />
      <CloudPlatforms />
      <DevOpsPipelines />
      <Newsletter />
    </main>
  )
}
