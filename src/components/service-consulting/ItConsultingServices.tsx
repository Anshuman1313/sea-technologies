"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  Shield, 
  Cloud, 
  Settings, 
  BarChart3, 
  Users,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const consultingServices = [
  {
    icon: TrendingUp,
    title: "Digital Transformation Strategy",
    description: "Comprehensive strategic planning to modernize your technology infrastructure and optimize business processes for competitive advantage.",
    features: ["Strategic Roadmapping", "Technology Assessment", "Change Management"],
    benefits: ["Increased Efficiency", "Competitive Advantage", "Future-Ready Operations"],
    timeline: "3-6 months",
    color: "slate",
    gradient: "from-slate-100 via-slate-50 to-blue-50",
    metric: "285% ROI Average"
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Optimization",
    description: "Expert guidance for migrating to cloud platforms with optimized architecture, security, and cost management strategies.",
    features: ["Cloud Strategy", "Migration Planning", "Cost Optimization"],
    benefits: ["Reduced Infrastructure Costs", "Scalable Solutions", "Enhanced Security"],
    timeline: "2-4 months",
    color: "blue",
    gradient: "from-blue-100 via-blue-50 to-indigo-50",
    metric: "40% Cost Reduction"
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Comprehensive security assessments, compliance frameworks, and risk management strategies to protect your digital assets.",
    features: ["Security Audits", "Compliance Planning", "Risk Assessment"],
    benefits: ["Enhanced Security", "Regulatory Compliance", "Risk Mitigation"],
    timeline: "1-3 months",
    color: "indigo",
    gradient: "from-indigo-100 via-indigo-50 to-purple-50",
    metric: "99.9% Security Rating"
  },
  {
    icon: Settings,
    title: "IT Infrastructure Optimization",
    description: "Analyze and optimize your existing IT infrastructure for performance, reliability, and cost-effectiveness.",
    features: ["Performance Analysis", "Infrastructure Design", "Optimization Planning"],
    benefits: ["Improved Performance", "Reduced Downtime", "Cost Efficiency"],
    timeline: "2-3 months",
    color: "purple",
    gradient: "from-purple-100 via-purple-50 to-pink-50",
    metric: "65% Performance Gain"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    description: "Transform data into actionable insights with strategic BI implementations and analytics frameworks.",
    features: ["Data Strategy", "BI Implementation", "Analytics Frameworks"],
    benefits: ["Data-Driven Decisions", "Business Insights", "Operational Intelligence"],
    timeline: "3-5 months",
    color: "pink",
    gradient: "from-pink-100 via-pink-50 to-red-50",
    metric: "150% Decision Speed"
  },
  {
    icon: Users,
    title: "Change Management & Training",
    description: "Comprehensive change management strategies and training programs to ensure successful technology adoption.",
    features: ["Change Strategy", "User Training", "Adoption Planning"],
    benefits: ["Smooth Transitions", "User Adoption", "Productivity Gains"],
    timeline: "1-4 months",
    color: "red",
    gradient: "from-red-100 via-red-50 to-slate-50",
    metric: "92% Adoption Rate"
  }
]

export function ItConsultingServices() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-slate-50/30 via-blue-50/20 to-indigo-50/30">
      <div className="container mx-auto px-6">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm border border-slate-200"
          >
            <TrendingUp size={16} />
            Strategic IT Consulting Expertise
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Strategic Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Drive digital transformation with strategic IT consulting that aligns technology 
            investments with business objectives and delivers measurable results.
          </p>
        </motion.div>

        {/* Professional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {consultingServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.01 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow border border-${service.color}-200`}
                    >
                      <Icon className={`w-8 h-8 text-${service.color}-600`} />
                    </motion.div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className={`bg-gradient-to-r ${service.gradient} text-${service.color}-700 border-0 text-xs`}>
                        {service.timeline}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Professional Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-full`}></div>
                        Key Services
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r from-${service.color}-400 to-${service.color}-500 rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Benefits */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl border border-${service.color}-100`}>
                      <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
                      <div className="space-y-2 mb-3">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-700">
                            <TrendingUp className={`w-4 h-4 text-${service.color}-600 mr-2`} />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      <div className={`text-center p-2 bg-white/70 rounded-lg border border-${service.color}-200`}>
                        <div className={`text-lg font-bold text-${service.color}-700`}>{service.metric}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Professional Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white text-center mb-20 shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-8">Consulting Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-3">500+</div>
              <div className="text-slate-200">Projects Delivered</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-3">$50M+</div>
              <div className="text-blue-200">Cost Savings</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-3">98%</div>
              <div className="text-indigo-200">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-3">285%</div>
              <div className="text-slate-200">Average ROI</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all">
            <Link href="/contact" className="flex items-center gap-2">
              Schedule Strategic Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
