"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cloudPlatforms = [
  {
    name: "Amazon Web Services",
    shortName: "AWS",
    description: "Leading cloud platform with comprehensive services for compute, storage, databases, and machine learning.",
    services: [
      { name: "EC2", category: "Compute" },
      { name: "S3", category: "Storage" },
      { name: "RDS", category: "Database" },
      { name: "Lambda", category: "Serverless" },
      { name: "ECS/EKS", category: "Containers" },
      { name: "CloudFormation", category: "IaC" }
    ],
    advantages: ["Market Leader", "Extensive Services", "Global Reach", "Enterprise Ready"],
    logo: "AWS",
    color: "orange",
    marketShare: 32
  },
  {
    name: "Microsoft Azure",
    shortName: "Azure",
    description: "Enterprise-focused cloud platform with strong integration with Microsoft ecosystem and hybrid cloud capabilities.",
    services: [
      { name: "Virtual Machines", category: "Compute" },
      { name: "Blob Storage", category: "Storage" },
      { name: "SQL Database", category: "Database" },
      { name: "Functions", category: "Serverless" },
      { name: "AKS", category: "Containers" },
      { name: "ARM Templates", category: "IaC" }
    ],
    advantages: ["Microsoft Integration", "Hybrid Cloud", "Enterprise Focus", "Strong Security"],
    logo: "AZ",
    color: "blue",
    marketShare: 23
  },
  {
    name: "Google Cloud Platform",
    shortName: "GCP",
    description: "Innovation-driven cloud platform with strong AI/ML capabilities and developer-friendly tools.",
    services: [
      { name: "Compute Engine", category: "Compute" },
      { name: "Cloud Storage", category: "Storage" },
      { name: "Cloud SQL", category: "Database" },
      { name: "Cloud Functions", category: "Serverless" },
      { name: "GKE", category: "Containers" },
      { name: "Cloud Deployment Manager", category: "IaC" }
    ],
    advantages: ["AI/ML Leadership", "Innovation Focus", "Developer Tools", "Competitive Pricing"],
    logo: "GCP",
    color: "green",
    marketShare: 11
  }
]

const devopsTools = {
  "Version Control": [
    { name: "Git", description: "Distributed version control system" },
    { name: "GitHub", description: "Git hosting with collaboration features" },
    { name: "GitLab", description: "Complete DevOps platform" },
    { name: "Azure DevOps", description: "Microsoft's DevOps solution" }
  ],
  "CI/CD Tools": [
    { name: "Jenkins", description: "Open-source automation server" },
    { name: "GitHub Actions", description: "Native GitHub CI/CD" },
    { name: "Azure Pipelines", description: "Cloud-based CI/CD service" },
    { name: "AWS CodePipeline", description: "AWS native CI/CD service" }
  ],
  "Container Technology": [
    { name: "Docker", description: "Container platform" },
    { name: "Kubernetes", description: "Container orchestration" },
    { name: "Helm", description: "Kubernetes package manager" },
    { name: "Istio", description: "Service mesh platform" }
  ],
  "Infrastructure as Code": [
    { name: "Terraform", description: "Multi-cloud infrastructure tool" },
    { name: "AWS CloudFormation", description: "AWS native IaC" },
    { name: "Azure ARM", description: "Azure resource templates" },
    { name: "Pulumi", description: "Modern IaC platform" }
  ]
}

export function CloudPlatforms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Multi-Cloud Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with all major cloud platforms to provide you with the best solution
            for your specific requirements and business goals.
          </p>
        </motion.div>

        {/* Cloud Platforms Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {cloudPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-${platform.color}-100 rounded-xl flex items-center justify-center`}>
                      <span className={`text-${platform.color}-600 font-bold text-lg`}>{platform.logo}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {platform.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-${platform.color}-500 h-2 rounded-full`}
                            style={{ width: `${platform.marketShare * 3}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{platform.marketShare}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Core Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.services.map((service) => (
                        <div key={service.name} className="text-xs">
                          <div className="font-medium text-gray-700">{service.name}</div>
                          <div className="text-gray-500">{service.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Advantages</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.advantages.map((advantage) => (
                        <Badge key={advantage} variant="outline" className="text-xs">
                          {advantage}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* DevOps Tools Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            DevOps Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(devopsTools).map(([category, tools]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div key={tool.name}>
                      <div className="font-medium text-gray-700 text-sm">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Migration Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Cloud Migration Process
          </h3>
          
          <div className="grid md:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Assess", description: "Current infrastructure audit" },
              { step: "02", title: "Plan", description: "Migration strategy design" },
              { step: "03", title: "Design", description: "Cloud architecture planning" },
              { step: "04", title: "Migrate", description: "Phased migration execution" },
              { step: "05", title: "Optimize", description: "Performance optimization" },
              { step: "06", title: "Monitor", description: "Ongoing management" }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">{process.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{process.title}</h4>
                <p className="text-xs text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
