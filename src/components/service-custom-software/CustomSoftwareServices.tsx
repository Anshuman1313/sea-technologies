"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Building, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const customSoftwareTypes = [
  {
    icon: Building,
    title: "Enterprise Resource Planning (ERP)",
    description: "Comprehensive business management systems that integrate finance, HR, supply chain, and operations into one unified platform.",
    features: ["Financial Management", "HR & Payroll", "Supply Chain Integration"],
    benefits: ["Streamlined Operations", "Real-time Reporting", "Cost Reduction"],
    industries: ["Manufacturing", "Retail", "Healthcare"],
    color: "blue"
  },
  {
    icon: Users,
    title: "Customer Relationship Management (CRM)",
    description: "Tailored CRM systems that match your sales processes, customer interactions, and business workflows perfectly.",
    features: ["Lead Management", "Sales Automation", "Customer Analytics"],
    benefits: ["Improved Sales", "Better Customer Service", "Data-Driven Decisions"],
    industries: ["Sales", "Marketing", "Service"],
    color: "blue"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Custom online stores with specialized features, unique user experiences, and advanced payment processing capabilities.",
    features: ["Custom Catalogs", "Payment Integration", "Inventory Management"],
    benefits: ["Unique Shopping Experience", "Scalability", "Brand Differentiation"],
    industries: ["Retail", "B2B", "Marketplace"],
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    description: "Data visualization and analytics platforms that transform your business data into actionable insights and reports.",
    features: ["Custom Dashboards", "Real-time Analytics", "Automated Reporting"],
    benefits: ["Better Decision Making", "Performance Tracking", "Competitive Advantage"],
    industries: ["Finance", "Operations", "Marketing"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Mobile Business Applications",
    description: "Custom mobile apps designed for your specific business processes, employee workflows, and customer engagement needs.",
    features: ["Employee Apps", "Customer Portals", "Field Service Tools"],
    benefits: ["Increased Productivity", "Better Engagement", "Remote Access"],
    industries: ["Field Service", "Sales", "Customer Service"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Healthcare Management Systems",
    description: "HIPAA-compliant healthcare solutions including patient records, appointment scheduling, and billing systems.",
    features: ["Patient Records", "Appointment Scheduling", "Billing Integration"],
    benefits: ["Regulatory Compliance", "Improved Patient Care", "Operational Efficiency"],
    industries: ["Healthcare", "Medical", "Insurance"],
    color: "blue"
  }
]

export function CustomSoftwareServices() {
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
            Custom Software Solutions We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From enterprise systems to specialized business tools, we create custom software 
            that perfectly fits your organization's unique requirements and workflows.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {customSoftwareTypes.map((service, index) => {
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
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-green-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry) => (
                          <span key={industry} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Custom Software Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-blue-200">Faster Processes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <div className="text-blue-200">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-blue-200">ROI Within 2 Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technologies We Use for Custom Software
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Frontend</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>React & Next.js</div>
                <div>Angular & Vue.js</div>
                <div>TypeScript</div>
                <div>Tailwind CSS</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Backend</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Node.js & Express</div>
                <div>Python & Django</div>
                <div>.NET Core</div>
                <div>Java & Spring</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Database</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>PostgreSQL</div>
                <div>MongoDB</div>
                <div>MySQL</div>
                <div>Redis Cache</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Cloud & DevOps</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>AWS & Azure</div>
                <div>Docker & Kubernetes</div>
                <div>CI/CD Pipelines</div>
                <div>Monitoring & Logs</div>
              </div>
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
              Discuss Your Custom Software Needs
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
