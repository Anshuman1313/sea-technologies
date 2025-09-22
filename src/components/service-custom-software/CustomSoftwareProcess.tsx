"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Code, TestTube, Rocket, Headphones } from "lucide-react"

const developmentProcess = [
  {
    phase: "01",
    title: "Discovery & Analysis",
    duration: "1-2 weeks",
    icon: Users,
    description: "We dive deep into your business requirements, analyze existing systems, and identify pain points.",
    activities: [
      "Stakeholder interviews",
      "Business process mapping", 
      "Technical requirements gathering",
      "Feasibility analysis"
    ],
    deliverables: ["Requirements Document", "Technical Specification", "Project Timeline"],
    color: "blue"
  },
  {
    phase: "02", 
    title: "Design & Architecture",
    duration: "2-3 weeks",
    icon: Code,
    description: "Create detailed system architecture, database design, and user interface mockups.",
    activities: [
      "System architecture design",
      "Database schema planning",
      "UI/UX wireframes",
      "Technology stack selection"
    ],
    deliverables: ["Architecture Diagrams", "UI Mockups", "Technical Design Document"],
    color: "blue"
  },
  {
    phase: "03",
    title: "Development & Implementation", 
    duration: "6-12 weeks",
    icon: Code,
    description: "Agile development with regular sprints, continuous integration, and weekly progress reviews.",
    activities: [
      "Sprint-based development",
      "Code reviews & quality checks",
      "API development & integration",
      "Database implementation"
    ],
    deliverables: ["Working Software Modules", "API Documentation", "Progress Reports"],
    color: "blue"
  },
  {
    phase: "04",
    title: "Testing & Quality Assurance",
    duration: "2-3 weeks", 
    icon: TestTube,
    description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
    activities: [
      "Automated testing setup",
      "Performance optimization",
      "Security vulnerability testing",
      "User acceptance testing"
    ],
    deliverables: ["Test Reports", "Performance Benchmarks", "Security Audit"],
    color: "blue"
  },
  {
    phase: "05",
    title: "Deployment & Launch",
    duration: "1 week",
    icon: Rocket,
    description: "Smooth deployment to production with monitoring, backup systems, and go-live support.",
    activities: [
      "Production environment setup",
      "Data migration & validation",
      "Go-live support",
      "Performance monitoring"
    ],
    deliverables: ["Live System", "Deployment Guide", "Monitoring Dashboard"],
    color: "blue"
  },
  {
    phase: "06",
    title: "Support & Maintenance",
    duration: "Ongoing",
    icon: Headphones,
    description: "Continuous support, updates, and enhancements to keep your system running optimally.",
    activities: [
      "24/7 technical support",
      "Regular updates & patches",
      "Performance optimization",
      "Feature enhancements"
    ],
    deliverables: ["Support Portal", "Monthly Reports", "Update Releases"],
    color: "blue"
  }
]

const developmentMethodologies = [
  {
    name: "Agile Development",
    description: "Iterative development with 2-week sprints",
    benefits: ["Faster delivery", "Regular feedback", "Flexibility"]
  },
  {
    name: "DevOps Integration", 
    description: "Continuous integration and deployment",
    benefits: ["Automated testing", "Quick deployments", "High quality"]
  },
  {
    name: "User-Centered Design",
    description: "Focus on user experience and usability",
    benefits: ["Better adoption", "Intuitive interface", "User satisfaction"]
  },
  {
    name: "Quality Assurance",
    description: "Comprehensive testing at every stage", 
    benefits: ["Bug-free software", "Performance optimization", "Security compliance"]
  }
]

export function CustomSoftwareProcess() {
  return (
    <section id="process" className="py-20 bg-white">
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
            Our Proven Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured, iterative approach that ensures your custom software 
            is delivered on time, within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Development Process Timeline */}
        <div className="space-y-8 mb-20">
          {developmentProcess.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Phase Number & Icon */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {phase.phase}
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Process Details */}
                <div className="flex-1">
                  <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          {phase.duration}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Activities */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable) => (
                              <div key={deliverable} className="text-sm bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Line */}
                {index < developmentProcess.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-blue-200 mt-32 hidden lg:block" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Development Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Development Methodologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentMethodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-3">{methodology.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{methodology.description}</p>
                <div className="space-y-2">
                  {methodology.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Our Process Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600">Faster Than Average</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
