"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Cloud, 
  GitBranch, 
  Shield, 
  BarChart3, 
  Container, 
  Cog,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your applications and data to AWS, Azure, or GCP with zero downtime and optimized performance.",
    features: ["Assessment & Planning", "Data Migration", "Application Modernization"],
    color: "blue"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automate your development workflow with robust continuous integration and deployment pipelines.",
    features: ["Automated Testing", "Code Quality Gates", "Multi-Environment Deployment"],
    color: "blue"
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description: "Deploy and manage containerized applications using Docker, Kubernetes, and container orchestration platforms.",
    features: ["Docker Containerization", "Kubernetes Clusters", "Microservices Architecture"],
    color: "blue"
  },
  {
    icon: Cog,
    title: "Infrastructure as Code",
    description: "Manage infrastructure through code using Terraform, CloudFormation, and ARM templates for consistent deployments.",
    features: ["Terraform Scripts", "Version Control", "Automated Provisioning"],
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Monitoring & Analytics",
    description: "Comprehensive monitoring solutions with real-time alerts, logging, and performance analytics.",
    features: ["Real-time Monitoring", "Log Aggregation", "Performance Metrics"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices, compliance frameworks, and automated security scanning in your DevOps workflows.",
    features: ["Security Scanning", "Compliance Automation", "Access Management"],
    color: "blue"
  }
]

export function CloudDevOpsServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Cloud & DevOps Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your digital transformation with our comprehensive cloud infrastructure
            and DevOps solutions that scale with your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}>
                      <Icon className={`w-7 h-7 text-${service.color}-600`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* DevOps Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">DevOps Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">10x</div>
              <div className="text-blue-200">Faster Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-blue-200">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-blue-200">Error Reduction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact" className="flex items-center gap-2">
              Get Cloud Architecture Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
