"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building, ShoppingCart, Heart, Users, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

const successStories = [
  {
    title: "Healthcare Management System",
    industry: "Healthcare",
    icon: Heart,
    client: "Regional Medical Center",
    challenge: "Manual patient records and appointment scheduling causing delays and errors",
    solution: "Integrated HIPAA-compliant system with patient portal, automated scheduling, and billing integration",
    results: {
      "Patient wait time": "60% reduction",
      "Administrative errors": "85% decrease", 
      "Staff productivity": "40% increase",
      "Patient satisfaction": "92% rating"
    },
    technologies: ["React", "Node.js", "PostgreSQL", "HL7 FHIR"],
    timeline: "8 months",
    roi: "280% in 18 months"
  },
  {
    title: "Manufacturing Resource Planning",
    industry: "Manufacturing", 
    icon: Building,
    client: "Industrial Equipment Manufacturer",
    challenge: "Disconnected systems for inventory, production, and quality control leading to inefficiencies",
    solution: "Comprehensive ERP system integrating all manufacturing processes with real-time monitoring",
    results: {
      "Production efficiency": "35% improvement",
      "Inventory costs": "25% reduction",
      "Quality defects": "70% decrease", 
      "Order fulfillment": "50% faster"
    },
    technologies: [".NET Core", "SQL Server", "Azure", "IoT Sensors"],
    timeline: "12 months",
    roi: "320% in 2 years"
  },
  {
    title: "Customer Portal & CRM",
    industry: "Financial Services",
    icon: Users,
    client: "Credit Union Network",
    challenge: "Members unable to access services online, high call center volume, manual processes",
    solution: "Member portal with account management, loan applications, and integrated CRM for staff",
    results: {
      "Online adoption": "78% of members",
      "Call center volume": "45% reduction",
      "Loan processing": "60% faster",
      "Member satisfaction": "4.8/5 rating"
    },
    technologies: ["Vue.js", "Python Django", "MySQL", "AWS"],
    timeline: "6 months",
    roi: "195% in 12 months"
  },
  {
    title: "E-commerce & Inventory System",
    industry: "Retail",
    icon: ShoppingCart,
    client: "Specialty Electronics Retailer", 
    challenge: "Outdated e-commerce platform couldn't handle growth, inventory sync issues",
    solution: "Modern e-commerce platform with real-time inventory, multi-channel integration, and analytics",
    results: {
      "Online sales": "150% increase",
      "Inventory accuracy": "99.5%",
      "Order processing": "80% faster",
      "Customer retention": "65% improvement"
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    timeline: "10 months", 
    roi: "450% in 18 months"
  },
  {
    title: "Field Service Management",
    industry: "Utilities",
    icon: TrendingUp,
    client: "Regional Utility Company",
    challenge: "Inefficient field service scheduling, poor communication, manual reporting",
    solution: "Mobile-first field service system with GPS tracking, real-time updates, and automated reporting",
    results: {
      "Service response time": "40% faster",
      "First-call resolution": "85% rate",
      "Paperwork reduction": "90%",
      "Customer satisfaction": "4.7/5 rating"
    },
    technologies: ["React Native", "Express.js", "PostgreSQL", "Google Maps API"],
    timeline: "7 months",
    roi: "240% in 15 months"
  },
  {
    title: "Compliance Management Platform",
    industry: "Financial",
    icon: Shield,
    client: "Investment Advisory Firm",
    challenge: "Complex regulatory compliance tracking, manual reporting, audit preparation difficulties",
    solution: "Automated compliance platform with document management, workflow automation, and reporting",
    results: {
      "Compliance time": "70% reduction",
      "Audit preparation": "5 days vs 3 weeks",
      "Regulatory accuracy": "100%",
      "Staff efficiency": "60% increase"
    },
    technologies: ["Angular", "C# .NET", "SQL Server", "Azure"],
    timeline: "9 months",
    roi: "385% in 2 years"
  }
]

const industryStats = [
  { industry: "Healthcare", projects: 45, avgROI: "280%" },
  { industry: "Manufacturing", projects: 38, avgROI: "320%" }, 
  { industry: "Financial", projects: 52, avgROI: "295%" },
  { industry: "Retail", projects: 29, avgROI: "380%" },
  { industry: "Education", projects: 23, avgROI: "210%" },
  { industry: "Logistics", projects: 31, avgROI: "250%" }
]

export function CustomSoftwareExamples() {
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
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our custom software solutions have transformed businesses across 
            various industries, delivering measurable results and substantial ROI.
          </p>
        </motion.div>

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {industryStats.map((stat, index) => (
            <motion.div
              key={stat.industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">{stat.projects}</div>
              <div className="text-sm font-medium text-gray-900 mb-2">{stat.industry}</div>
              <div className="text-xs text-gray-500">Projects</div>
              <div className="mt-3 text-lg font-bold text-green-600">{stat.avgROI}</div>
              <div className="text-xs text-gray-500">Avg ROI</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.div
                key={story.title}
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{story.title}</h3>
                          <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 mt-1">
                            {story.industry}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{story.roi}</div>
                        <div className="text-sm opacity-80">ROI</div>
                      </div>
                    </div>
                    <div className="text-blue-100 text-sm">
                      <strong>Client:</strong> {story.client}
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-1 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-sm text-gray-600">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-sm text-gray-600">{story.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(story.results).map(([metric, value]) => (
                          <div key={metric} className="bg-green-50 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-green-600">{value}</div>
                            <div className="text-xs text-gray-600">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {story.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Timeline: </span>
                        <span className="text-gray-600">{story.timeline}</span>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "The custom ERP system has revolutionized our operations. We've seen immediate improvements in efficiency and cost savings."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">COO, Manufacturing Inc.</div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "Their development process was transparent and collaborative. The final product exceeded our expectations."
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">CTO, Healthcare Solutions</div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-gray-600 mb-4 italic">
                "The ROI was incredible. The system paid for itself within 8 months and continues to drive growth."
              </p>
              <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
              <div className="text-sm text-gray-500">CEO, Retail Innovations</div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Why Businesses Choose Our Custom Software</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">218</div>
              <div className="text-blue-200">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">285%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
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
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your business with custom software?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
