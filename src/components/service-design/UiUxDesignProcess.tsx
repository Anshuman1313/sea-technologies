"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Palette, Eye, TestTube, Rocket, Repeat } from "lucide-react"

const designProcessStages = [
  {
    phase: "01",
    title: "Discover & Research",
    duration: "1-2 weeks",
    icon: Users,
    description: "Deep dive into user needs, business goals, and market landscape through comprehensive research and analysis.",
    activities: [
      "User interviews & surveys",
      "Competitive analysis",
      "Stakeholder workshops",
      "Market research"
    ],
    deliverables: ["User Personas", "Research Report", "Project Brief"],
    color: "purple",
    gradient: "from-purple-500 via-purple-600 to-pink-500",
    artElement: "🔍"
  },
  {
    phase: "02", 
    title: "Ideate & Strategy",
    duration: "1-2 weeks",
    icon: Palette,
    description: "Transform insights into creative concepts and strategic design direction that aligns with user needs and business objectives.",
    activities: [
      "Brainstorming sessions",
      "Information architecture",
      "User journey mapping",
      "Design strategy formulation"
    ],
    deliverables: ["Site Map", "User Flows", "Design Strategy"],
    color: "pink",
    gradient: "from-pink-500 via-pink-600 to-orange-500"
  },
  {
    phase: "03",
    title: "Design & Prototype", 
    duration: "3-5 weeks",
    icon: Eye,
    description: "Create beautiful, functional designs through iterative wireframing, visual design, and interactive prototyping.",
    activities: [
      "Wireframing & sketching",
      "Visual design creation",
      "Interactive prototyping",
      "Design system development"
    ],
    deliverables: ["Wireframes", "Visual Designs", "Interactive Prototypes"],
    color: "orange",
    gradient: "from-orange-500 via-orange-600 to-red-500"
  },
  {
    phase: "04",
    title: "Test & Validate",
    duration: "1-2 weeks", 
    icon: TestTube,
    description: "Validate design decisions through user testing, feedback collection, and iterative refinement.",
    activities: [
      "Usability testing sessions",
      "A/B testing setup",
      "Feedback analysis",
      "Design iteration"
    ],
    deliverables: ["Testing Report", "Refined Designs", "Recommendations"],
    color: "red",
    gradient: "from-red-500 via-red-600 to-pink-500"
  },
  {
    phase: "05",
    title: "Launch & Deliver",
    duration: "1-2 weeks",
    icon: Rocket,
    description: "Prepare final designs for development with comprehensive specifications and seamless handoff process.",
    activities: [
      "Design specifications",
      "Developer handoff",
      "Asset preparation",
      "Documentation creation"
    ],
    deliverables: ["Design Specs", "Asset Library", "Style Guide"],
    color: "indigo",
    gradient: "from-indigo-500 via-indigo-600 to-purple-500"
  },
  {
    phase: "06",
    title: "Iterate & Improve",
    duration: "Ongoing",
    icon: Repeat,
    description: "Continuous optimization based on user feedback, analytics, and evolving business needs.",
    activities: [
      "Performance monitoring",
      "User feedback collection",
      "Design updates",
      "Continuous improvement"
    ],
    deliverables: ["Analytics Reports", "Updated Designs", "Optimization Plan"],
    color: "teal",
    gradient: "from-teal-500 via-teal-600 to-cyan-500"
  }
]

const designPrinciples = [
  {
    name: "User-Centered Design",
    description: "Every decision starts with the user's needs and goals",
    benefits: ["Better usability", "Higher satisfaction", "Reduced support costs"],
    gradient: "from-purple-100 to-pink-100",
    artElement: "👤"
  },
  {
    name: "Accessibility First", 
    description: "Design for everyone, regardless of abilities or limitations",
    benefits: ["Inclusive design", "Legal compliance", "Wider reach"],
    gradient: "from-pink-100 to-orange-100",
    artElement: "♿"
  },
  {
    name: "Data-Driven Decisions",
    description: "Use analytics and testing to guide design choices",
    benefits: ["Evidence-based design", "Reduced assumptions", "Better outcomes"],
    gradient: "from-orange-100 to-red-100",
    artElement: "📊"
  },
  {
    name: "Iterative Improvement",
    description: "Continuous testing and refinement for optimal results", 
    benefits: ["Constant optimization", "Reduced risk", "Better performance"],
    gradient: "from-red-100 to-purple-100",
    artElement: "🔄"
  }
]

export function UiUxDesignProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50/30">
      <div className="container mx-auto px-6">
        {/* Creative Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm border border-purple-100"
          >
            <Eye size={16} />
            Human-Centered Design Process
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Research to Beautiful Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proven design process combines user research, creative innovation, and data-driven 
            optimization to create experiences that users love and businesses value.
          </p>
        </motion.div>

        {/* Creative Process Timeline */}
        <div className="space-y-16 mb-24">
          {designProcessStages.map((stage, index) => {
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
                {/* Creative Phase Indicator */}
                <div className="flex-shrink-0 max-md:hidden flex flex-col items-center relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-28 h-28 bg-gradient-to-r ${stage.gradient} rounded-3xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl relative z-10 border-4 border-white`}
                  >
                    {stage.phase}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="mt-8 p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 relative"
                  >
                    <Icon className={`w-10 h-10 text-${stage.color}-600`} />
                    <div className="absolute -top-2 -right-2 text-2xl">
                      {stage.artElement}
                    </div>
                  </motion.div>
                  
                  {/* Creative Connection Line */}
                  {index < designProcessStages.length - 1 && (
                    <div className={`absolute top-28 w-2 h-40 bg-gradient-to-b ${stage.gradient} opacity-20 rounded-full hidden lg:block`} />
                  )}
                </div>

                {/* Creative Process Details */}
                <div className="flex-1">
                  <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 bg-white/95 backdrop-blur-sm overflow-hidden relative">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
                    >
                      {/* Creative card header */}
                      <div className={`bg-gradient-to-r ${stage.gradient} p-2 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                          <div className="text-4xl text-white">{stage.artElement}</div>
                        </div>
                      </div>
                      
                      <CardContent className="p-10 relative">
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
                          {/* Creative Activities */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className={`w-4 h-4 bg-gradient-to-r ${stage.gradient} rounded-full`}></div>
                              Activities
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

                          {/* Creative Deliverables */}
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
                                  className={`text-sm bg-gradient-to-r ${stage.gradient.replace('500', '50').replace('600', '100')} text-${stage.color}-700 px-4 py-3 rounded-2xl border border-${stage.color}-200 font-medium relative overflow-hidden`}
                                >
                                  <div className="relative z-10">{deliverable}</div>
                                  <div className="absolute top-0 right-0 w-8 h-8 opacity-20">
                                    <div className="text-lg">{stage.artElement}</div>
                                  </div>
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

        {/* Creative Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-purple-50/50 rounded-3xl p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="text-9xl absolute top-8 left-8">🎨</div>
            <div className="text-7xl absolute bottom-8 right-8">✨</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Our Design Principles
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${principle.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50 relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 text-3xl opacity-50">
                    {principle.artElement}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl pr-12">{principle.name}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{principle.description}</p>
                  <div className="space-y-2">
                    {principle.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Creative Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Why Our Process Creates Award-Winning Designs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">🏆</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600 font-medium">User Satisfaction Score</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">⚡</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">3x</div>
              <div className="text-gray-600 font-medium">Faster User Onboarding</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">💰</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">165%</div>
              <div className="text-gray-600 font-medium">Conversion Rate Increase</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
