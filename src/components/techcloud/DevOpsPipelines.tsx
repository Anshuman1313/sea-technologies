"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, CheckCircle, AlertTriangle, Play } from "lucide-react"
import Link from "next/link"

const pipelineStages = [
  {
    name: "Source Control",
    icon: GitBranch,
    description: "Code commits trigger automated workflows",
    tools: ["Git", "GitHub", "GitLab"],
    status: "active",
    duration: "< 1 min"
  },
  {
    name: "Build & Test",
    icon: Play,
    description: "Automated building and comprehensive testing",
    tools: ["Jest", "Cypress", "SonarQube"],
    status: "active",
    duration: "5-10 min"
  },
  {
    name: "Security Scan",
    icon: AlertTriangle,
    description: "Vulnerability scanning and security checks",
    tools: ["OWASP", "Snyk", "Checkmarx"],
    status: "active",
    duration: "2-5 min"
  },
  {
    name: "Deploy Staging",
    icon: CheckCircle,
    description: "Deployment to staging environment",
    tools: ["Docker", "Kubernetes", "Helm"],
    status: "active",
    duration: "3-7 min"
  },
  {
    name: "Integration Tests",
    icon: CheckCircle,
    description: "End-to-end testing in staging",
    tools: ["Selenium", "Postman", "K6"],
    status: "active",
    duration: "10-15 min"
  },
  {
    name: "Production Deploy",
    icon: CheckCircle,
    description: "Blue-green deployment to production",
    tools: ["Kubernetes", "AWS ELB", "Istio"],
    status: "success",
    duration: "5-10 min"
  }
]

const pipelineExamples = [
  {
    title: "Web Application CI/CD",
    description: "Complete pipeline for React/Node.js applications with automated testing and deployment.",
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "AWS"],
    features: ["Automated Testing", "Code Quality Gates", "Blue-Green Deployment", "Rollback Capability"],
    deploymentTime: "15 minutes",
    successRate: "99.2%"
  },
  {
    title: "Microservices Pipeline",
    description: "Multi-service deployment pipeline with dependency management and service mesh integration.",
    technologies: ["Docker", "Kubernetes", "Istio", "Helm", "ArgoCD"],
    features: ["Service Dependencies", "Canary Deployments", "Traffic Splitting", "Observability"],
    deploymentTime: "8 minutes",
    successRate: "98.7%"
  },
  {
    title: "Mobile App CI/CD",
    description: "Cross-platform mobile deployment with app store automation and device testing.",
    technologies: ["React Native", "Fastlane", "Firebase", "App Center"],
    features: ["Device Testing", "App Store Automation", "Crash Reporting", "A/B Testing"],
    deploymentTime: "25 minutes",
    successRate: "97.5%"
  }
]

export function DevOpsPipelines() {
  return (
    <section className="py-20 bg-gray-50">
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
            CI/CD Pipeline Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your development workflow with automated pipelines that ensure
            consistent, reliable, and secure deployments across all environments.
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Automated CI/CD Pipeline Flow
          </h3>
          
          <div className="grid md:grid-cols-6 gap-4">
            {pipelineStages.map((stage, index) => {
              const Icon = stage.icon
              const isLast = index === pipelineStages.length - 1
              
              return (
                <div key={stage.name} className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    {/* Stage Icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      stage.status === 'success' ? 'bg-green-100' : 
                      stage.status === 'active' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        stage.status === 'success' ? 'text-green-600' : 
                        stage.status === 'active' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>

                    {/* Stage Info */}
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">{stage.name}</h4>
                    <p className="text-xs text-gray-600 mb-3">{stage.description}</p>
                    
                    {/* Duration */}
                    <div className="text-xs text-blue-600 font-medium mb-2">{stage.duration}</div>
                    
                    {/* Tools */}
                    <div className="space-y-1">
                      {stage.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs mr-1">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow to next stage */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Pipeline Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">25-40min</div>
              <div className="text-sm text-gray-600">Total Pipeline Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">99.2%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Quality Checks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Zero</div>
              <div className="text-sm text-gray-600">Downtime Deploys</div>
            </div>
          </div>
        </motion.div>

        {/* Pipeline Examples */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pipelineExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-blue-100 text-sm">{example.description}</p>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {example.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {example.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{example.deploymentTime}</div>
                      <div className="text-xs text-gray-500">Deploy Time</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{example.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            DevOps Best Practices We Follow
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Infrastructure as Code", description: "Version-controlled infrastructure management" },
              { title: "Automated Testing", description: "Comprehensive test coverage at every stage" },
              { title: "Security Integration", description: "Built-in security scanning and compliance" },
              { title: "Monitoring & Observability", description: "Real-time insights and alerting" },
              { title: "Blue-Green Deployments", description: "Zero-downtime deployment strategies" },
              { title: "Rollback Capabilities", description: "Quick recovery from failed deployments" }
            ].map((practice, index) => (
              <div key={practice.title} className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{practice.title}</h4>
                <p className="text-sm text-gray-600">{practice.description}</p>
              </div>
            ))}
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
          <p className="text-gray-600 mb-6">
            Ready to accelerate your development with automated CI/CD pipelines?
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contactus" className="flex items-center gap-2">
              Setup DevOps Pipeline
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
