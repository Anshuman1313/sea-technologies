"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lightbulb, Target, Code, TestTube, Rocket, BarChart3 } from "lucide-react"

const productProcessStages = [
  {
    phase: "01",
    title: "Ideation & Validation",
    duration: "1-2 weeks",
    icon: Lightbulb,
    description: "Transform your idea into a validated product concept through market research and competitive analysis.",
    activities: [
      "Market research & analysis",
      "Competitor landscape study",
      "User persona development",
      "Business model validation"
    ],
    deliverables: ["Product Requirements Document", "Market Analysis Report", "User Journey Maps"],
    color: "blue",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    phase: "02", 
    title: "MVP Strategy & Design",
    duration: "2-3 weeks",
    icon: Target,
    description: "Design the minimum viable product with core features that deliver maximum value to early users.",
    activities: [
      "Feature prioritization matrix",
      "Technical architecture planning",
      "UI/UX design & prototyping",
      "Development roadmap creation"
    ],
    deliverables: ["MVP Feature Specification", "Technical Architecture", "Design System"],
    color: "indigo",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    phase: "03",
    title: "MVP Development", 
    duration: "6-10 weeks",
    icon: Code,
    description: "Build your MVP with agile methodology, focusing on core functionality and user experience.",
    activities: [
      "Agile sprint development",
      "API development & integration",
      "Database design & implementation",
      "Quality assurance testing"
    ],
    deliverables: ["Working MVP", "API Documentation", "QA Test Reports"],
    color: "purple",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    phase: "04",
    title: "User Testing & Validation",
    duration: "2-4 weeks", 
    icon: TestTube,
    description: "Validate your product with real users, gather feedback, and iterate based on insights.",
    activities: [
      "User testing sessions",
      "Analytics implementation",
      "Feedback collection & analysis",
      "Product iteration planning"
    ],
    deliverables: ["User Testing Report", "Analytics Dashboard", "Iteration Recommendations"],
    color: "pink",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    phase: "05",
    title: "Product Launch",
    duration: "2-3 weeks",
    icon: Rocket,
    description: "Execute a successful product launch with marketing support and performance monitoring.",
    activities: [
      "Launch strategy execution",
      "Marketing campaign setup",
      "Performance monitoring",
      "User onboarding optimization"
    ],
    deliverables: ["Live Product", "Marketing Materials", "Performance Dashboard"],
    color: "rose",
    gradient: "from-rose-500 to-orange-600"
  },
  {
    phase: "06",
    title: "Growth & Scaling",
    duration: "Ongoing",
    icon: BarChart3,
    description: "Scale your successful MVP with new features, optimizations, and market expansion.",
    activities: [
      "Feature development & expansion",
      "Performance optimization",
      "Market expansion planning",
      "Continuous improvement"
    ],
    deliverables: ["Feature Releases", "Performance Reports", "Growth Analytics"],
    color: "orange",
    gradient: "from-orange-500 to-amber-600"
  }
]

const methodologies = [
  {
    name: "Lean Startup",
    description: "Build-Measure-Learn approach for rapid validation",
    benefits: ["Faster validation", "Reduced waste", "Market-driven development"],
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    name: "Design Thinking", 
    description: "Human-centered approach to product development",
    benefits: ["User-centric design", "Creative solutions", "Iterative improvement"],
    gradient: "from-indigo-100 to-purple-100"
  },
  {
    name: "Agile Development",
    description: "Iterative development with continuous feedback",
    benefits: ["Flexible delivery", "Regular updates", "Risk mitigation"],
    gradient: "from-purple-100 to-pink-100"
  },
  {
    name: "Data-Driven Decisions",
    description: "Analytics-based product optimization", 
    benefits: ["Evidence-based choices", "Performance insights", "Growth optimization"],
    gradient: "from-pink-100 to-rose-100"
  }
]

export function ProductEngineeringProcess() {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm"
          >
            <Target size={16} />
            Proven Product Development Process
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Idea to Market Success
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our systematic approach transforms innovative ideas into market-leading products 
            through validated learning, agile development, and data-driven optimization.
          </p>
        </motion.div>

        {/* Enhanced Process Timeline */}
        <div className="space-y-12 mb-24">
          {productProcessStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Enhanced Phase Indicator */}
                <div className="flex-shrink-0 max-md:hidden flex flex-col items-center relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 bg-gradient-to-r ${stage.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10`}
                  >
                    {stage.phase}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className={`mt-6 p-4 bg-gradient-to-r ${stage.gradient.replace('500', '100').replace('600', '200')} rounded-xl shadow-lg`}
                  >
                    <Icon className={`w-8 h-8 text-${stage.color}-600`} />
                  </motion.div>
                  
                  {/* Connection Line */}
                  {index < productProcessStages.length - 1 && (
                    <div className={`absolute top-24 w-1 h-32 bg-gradient-to-b ${stage.gradient} opacity-30 hidden lg:block`} />
                  )}
                </div>

                {/* Enhanced Process Details */}
                <div className="flex-1">
                  <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    >
                      <CardContent className="p-10">
                        <div className="flex items-start justify-between mb-8">
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{stage.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{stage.description}</p>
                          </div>
                          <Badge variant="secondary" className={`bg-gradient-to-r ${stage.gradient.replace('500', '100').replace('600', '200')} text-${stage.color}-700 border-0 px-4 py-2`}>
                            {stage.duration}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Enhanced Activities */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className={`w-3 h-3 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
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

                          {/* Enhanced Deliverables */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className={`w-3 h-3 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
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
                                  className={`text-sm bg-gradient-to-r ${stage.gradient.replace('500', '50').replace('600', '100')} text-${stage.color}-700 px-4 py-3 rounded-xl border border-${stage.color}-200 font-medium`}
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

        {/* Enhanced Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Product Development Methodologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
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
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Why Our Process Delivers Results
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">85%</div>
              <div className="text-gray-600 font-medium">Market Success Rate</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">60%</div>
              <div className="text-gray-600 font-medium">Faster Time-to-Market</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
