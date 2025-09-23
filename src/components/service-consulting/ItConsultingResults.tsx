"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Award, Users, Star } from "lucide-react"
import Link from "next/link"

const clientResults = [
  {
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Legacy systems hampering digital transformation and operational efficiency across 50+ locations worldwide.",
    solution: "Comprehensive digital transformation strategy with cloud migration, process automation, and data analytics implementation.",
    results: {
      costReduction: "45%",
      efficiencyGain: "78%",
      implementationTime: "8 months",
      roi: "320%"
    },
    testimonial: "Their strategic guidance transformed our entire technology landscape. The ROI exceeded all expectations.",
    clientName: "Sarah Johnson, CTO",
    gradient: "from-slate-500 to-blue-600"
  },
  {
    company: "TechForward Solutions",
    industry: "Technology Services",
    challenge: "Rapid growth created security vulnerabilities and compliance gaps requiring immediate strategic intervention.",
    solution: "Cybersecurity strategy implementation with compliance framework design and risk management protocols.",
    results: {
      securityImprovement: "99.9%",
      complianceScore: "100%",
      riskReduction: "85%",
      roi: "280%"
    },
    testimonial: "Exceptional strategic insight that secured our infrastructure while enabling continued rapid growth.",
    clientName: "Michael Chen, CEO",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    company: "Healthcare Innovations Inc",
    industry: "Healthcare",
    challenge: "Complex regulatory requirements and data security needs while modernizing patient care systems.",
    solution: "HIPAA-compliant digital transformation with secure cloud migration and integrated analytics platforms.",
    results: {
      patientSatisfaction: "94%",
      operationalEfficiency: "65%",
      complianceRating: "100%",
      roi: "245%"
    },
    testimonial: "Their expertise in healthcare compliance made our digital transformation seamless and secure.",
    clientName: "Dr. Lisa Rodriguez, CMO",
    gradient: "from-indigo-500 to-purple-600"
  }
]

const industryStats = [
  { industry: "Manufacturing", projects: 85, avgROI: "310%" },
  { industry: "Healthcare", projects: 62, avgROI: "275%" }, 
  { industry: "Financial Services", projects: 78, avgROI: "295%" },
  { industry: "Technology", projects: 94, avgROI: "340%" },
  { industry: "Retail", projects: 41, avgROI: "260%" },
  { industry: "Government", projects: 29, avgROI: "220%" }
]

const certifications = [
  { name: "AWS Partner", level: "Advanced Consulting Partner" },
  { name: "Microsoft", level: "Gold Cloud Platform Partner" },
  { name: "Google Cloud", level: "Premier Partner" },
  { name: "ISO 27001", level: "Certified Security Management" }
]

export function ItConsultingResults() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50/30 via-blue-50/20 to-indigo-50/30">
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
            <Award size={16} />
            Proven Strategic Results
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transformational Business Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our strategic IT consulting delivers measurable results that drive competitive advantage, 
            operational excellence, and sustainable growth for enterprise clients.
          </p>
        </motion.div>

        {/* Client Success Stories */}
        <div className="grid lg:grid-cols-1 gap-12 mb-24">
          {clientResults.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm">
                {/* Professional Header */}
                <div className={`bg-gradient-to-r ${result.gradient} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{result.company}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {result.industry}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          Strategic Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{result.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          Strategic Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{result.solution}</p>
                      </div>
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-100">
                        <blockquote className="text-gray-700 italic mb-4">"{result.testimonial}"</blockquote>
                        <div className="font-semibold text-gray-900">{result.clientName}</div>
                      </div>
                    </div>

                    {/* Results Metrics */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        Business Impact
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(result.results).map(([metric, value]) => (
                          <motion.div 
                            key={metric} 
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                          >
                            <div className="text-2xl font-bold text-blue-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {metric.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Industry Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Expertise & Results
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.projects}</div>
                <div className="text-sm font-medium text-gray-900 mb-2">{stat.industry}</div>
                <div className="text-xs text-gray-500 mb-3">Projects</div>
                <div className="text-lg font-bold text-green-600">{stat.avgROI}</div>
                <div className="text-xs text-gray-500">Avg ROI</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 rounded-3xl p-12 text-white mb-20 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Certified Expertise & Strategic Partnerships</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold mb-2">{cert.name}</div>
                <div className="text-sm text-blue-100">{cert.level}</div>
              </motion.div>
            ))}
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Technology Strategy?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Partner with our strategic IT consultants to unlock competitive advantages, 
            optimize operations, and drive measurable business growth through technology excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/contactus" className="flex items-center gap-2">
                Schedule Strategic Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:bg-slate-50 text-slate-700">
              <Link href="/case-studies">View Detailed Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
