"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, Target, Settings, TrendingUp, Shield, Users } from "lucide-react"

const consultingProcessStages = [
  {
    phase: "01",
    title: "Strategic Assessment",
    duration: "2-3 weeks",
    icon: Search,
    description: "Comprehensive analysis of current technology landscape, business processes, and strategic objectives to identify opportunities.",
    activities: [
      "Technology audit & assessment",
      "Business process analysis",
      "Stakeholder interviews",
      "Gap analysis & benchmarking"
    ],
    deliverables: ["Assessment Report", "Gap Analysis", "Strategic Recommendations"],
    color: "slate",
    gradient: "from-slate-500 via-slate-600 to-blue-500"
  },
  {
    phase: "02", 
    title: "Strategic Planning",
    duration: "3-4 weeks",
    icon: Target,
    description: "Develop comprehensive strategic roadmap aligned with business objectives and technology best practices.",
    activities: [
      "Strategic roadmap development",
      "Technology architecture design",
      "Implementation planning",
      "Risk assessment & mitigation"
    ],
    deliverables: ["Strategic Roadmap", "Architecture Blueprint", "Implementation Plan"],
    color: "blue",
    gradient: "from-blue-500 via-blue-600 to-indigo-500"
  },
  {
    phase: "03",
    title: "Solution Design", 
    duration: "4-6 weeks",
    icon: Settings,
    description: "Design detailed technical solutions and implementation strategies tailored to your specific requirements.",
    activities: [
      "Solution architecture design",
      "Technology selection",
      "Integration planning",
      "Security framework design"
    ],
    deliverables: ["Solution Architecture", "Technical Specifications", "Security Framework"],
    color: "indigo",
    gradient: "from-indigo-500 via-indigo-600 to-purple-500"
  },
  {
    phase: "04",
    title: "Implementation Oversight",
    duration: "3-12 months", 
    icon: TrendingUp,
    description: "Guide and oversee implementation with project management, quality assurance, and performance monitoring.",
    activities: [
      "Project management oversight",
      "Quality assurance reviews",
      "Performance monitoring",
      "Risk mitigation"
    ],
    deliverables: ["Implementation Guidance", "Quality Reports", "Performance Metrics"],
    color: "purple",
    gradient: "from-purple-500 via-purple-600 to-pink-500"
  },
  {
    phase: "05",
    title: "Security & Compliance",
    duration: "2-4 weeks",
    icon: Shield,
    description: "Ensure robust security implementation and regulatory compliance throughout the transformation process.",
    activities: [
      "Security implementation review",
      "Compliance validation",
      "Risk assessment updates",
      "Security training"
    ],
    deliverables: ["Security Assessment", "Compliance Report", "Training Materials"],
    color: "pink",
    gradient: "from-pink-500 via-pink-600 to-red-500"
  },
  {
    phase: "06",
    title: "Optimization & Support",
    duration: "Ongoing",
    icon: Users,
    description: "Continuous optimization, performance monitoring, and strategic guidance for sustained success.",
    activities: [
      "Performance optimization",
      "Strategic reviews",
      "Technology updates",
      "Ongoing consultation"
    ],
    deliverables: ["Optimization Reports", "Strategic Updates", "Support Documentation"],
    color: "red",
    gradient: "from-red-500 via-red-600 to-slate-500"
  }
]

const consultingMethodologies = [
  {
    name: "Strategic Alignment",
    description: "Technology decisions aligned with business objectives",
    benefits: ["Business-IT alignment", "Strategic focus", "Measurable outcomes"],
    gradient: "from-slate-100 to-blue-100"
  },
  {
    name: "Risk Management", 
    description: "Comprehensive risk assessment and mitigation strategies",
    benefits: ["Risk mitigation", "Compliance assurance", "Security focus"],
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    name: "Agile Implementation",
    description: "Iterative approach with continuous feedback and improvement",
    benefits: ["Flexible delivery", "Quick wins", "Continuous improvement"],
    gradient: "from-indigo-100 to-purple-100"
  },
  {
    name: "Change Management",
    description: "Structured approach to organizational and cultural change", 
    benefits: ["Smooth transitions", "User adoption", "Cultural alignment"],
    gradient: "from-purple-100 to-pink-100"
  }
]

export function ItConsultingProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50/50">
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
            <Target size={16} />
            Strategic Consulting Methodology
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Strategic Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic consulting methodology ensures strategic alignment, risk mitigation, 
            and measurable business outcomes through every phase of digital transformation.
          </p>
        </motion.div>

        {/* Professional Process Timeline */}
        <div className="space-y-16 mb-24">
          {consultingProcessStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Professional Phase Indicator */}
                <div className="flex-shrink-0 max-md:hidden flex flex-col items-center relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-28 h-28 bg-gradient-to-r ${stage.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl relative z-10 border-2 border-white`}
                  >
                    {stage.phase}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="mt-8 p-5 bg-white rounded-2xl shadow-xl border border-gray-100"
                  >
                    <Icon className={`w-10 h-10 text-${stage.color}-600`} />
                  </motion.div>
                  
                  {/* Professional Connection Line */}
                  {index < consultingProcessStages.length - 1 && (
                    <div className={`absolute top-28 w-2 h-40 bg-gradient-to-b ${stage.gradient} opacity-20 rounded-full hidden lg:block`} />
                  )}
                </div>

                {/* Professional Process Details */}
                <div className="flex-1">
                  <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
                    >
                      <CardContent className="p-10">
                        <div className="flex items-start justify-between mb-8">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{stage.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{stage.description}</p>
                          </div>
                          <Badge variant="secondary" className={`bg-gradient-to-r ${stage.gradient.replace('500', '100').replace('600', '200')} text-${stage.color}-700 border-0 px-4 py-2 text-sm`}>
                            {stage.duration}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Professional Activities */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className={`w-4 h-4 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
                              Key Activities
                            </h4>
                            <ul className="space-y-3">
                              {stage.activities.map((activity) => (
                                <motion.li 
                                  key={activity} 
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4 }}
                                  className="flex items-start text-gray-600"
                                >
                                  <CheckCircle className={`w-5 h-5 text-${stage.color}-500 mr-3 mt-0.5 flex-shrink-0`} />
                                  {activity}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Professional Deliverables */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className={`w-4 h-4 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
                              Deliverables
                            </h4>
                            <div className="space-y-3">
                              {stage.deliverables.map((deliverable) => (
                                <motion.div 
                                  key={deliverable}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4 }}
                                  className={`text-sm bg-gradient-to-r ${stage.gradient.replace('500', '50').replace('600', '100')} text-${stage.color}-700 px-4 py-3 rounded-2xl border border-${stage.color}-200 font-medium`}
                                >
                                  {deliverable}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Professional Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Consulting Methodologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingMethodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${methodology.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50`}
              >
                <h4 className="font-bold text-gray-900 mb-4 text-xl">{methodology.name}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{methodology.description}</p>
                <div className="space-y-3">
                  {methodology.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Why Our Methodology Delivers Results
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600 font-medium">Project Success Rate</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">285%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent mb-2">6 months</div>
              <div className="text-gray-600 font-medium">Average Implementation</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
