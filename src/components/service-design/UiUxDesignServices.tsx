"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Palette, 
  Smartphone, 
  Monitor, 
  Eye, 
  TestTube,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const designServices = [
  {
    icon: Users,
    title: "User Research & Analysis",
    description: "Deep dive into user behavior, needs, and pain points through comprehensive research methodologies and data analysis.",
    features: ["User Interviews", "Persona Development", "Journey Mapping"],
    benefits: ["User-Centered Design", "Reduced Development Risk", "Higher Conversion Rates"],
    timeframe: "2-3 weeks",
    color: "purple",
    gradient: "from-purple-100 via-purple-50 to-pink-50",
    artElement: "🔍"
  },
  {
    icon: Palette,
    title: "Visual Design & Branding",
    description: "Create stunning visual identities and design systems that reflect your brand personality and resonate with users.",
    features: ["Brand Identity", "Color Schemes", "Typography Systems"],
    benefits: ["Brand Recognition", "Visual Consistency", "Emotional Connection"],
    timeframe: "3-4 weeks",
    color: "pink",
    gradient: "from-pink-100 via-pink-50 to-orange-50",
    artElement: "🎨"
  },
  {
    icon: Monitor,
    title: "Web Interface Design",
    description: "Design responsive, accessible web interfaces that provide exceptional user experiences across all devices and platforms.",
    features: ["Responsive Design", "Accessibility Standards", "Interactive Prototypes"],
    benefits: ["Cross-Platform Compatibility", "Better Accessibility", "Enhanced Usability"],
    timeframe: "4-6 weeks",
    color: "orange",
    gradient: "from-orange-100 via-orange-50 to-red-50",
    artElement: "💻"
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Craft intuitive mobile experiences that feel native to each platform while maintaining your brand identity.",
    features: ["Native UI Patterns", "Gesture Design", "Performance Optimization"],
    benefits: ["Native Feel", "Intuitive Navigation", "High Engagement"],
    timeframe: "5-7 weeks",
    color: "red",
    gradient: "from-red-100 via-red-50 to-purple-50",
    artElement: "📱"
  },
  {
    icon: Eye,
    title: "Prototyping & Wireframing",
    description: "Transform ideas into interactive prototypes that validate concepts before development begins.",
    features: ["Low-Fi Wireframes", "High-Fi Prototypes", "Interactive Demos"],
    benefits: ["Concept Validation", "Faster Development", "Stakeholder Buy-in"],
    timeframe: "1-2 weeks",
    color: "indigo",
    gradient: "from-indigo-100 via-indigo-50 to-blue-50",
    artElement: "🎯"
  },
  {
    icon: TestTube,
    title: "Usability Testing",
    description: "Validate designs through comprehensive testing with real users to ensure optimal user experiences.",
    features: ["A/B Testing", "User Testing Sessions", "Analytics Integration"],
    benefits: ["Data-Driven Decisions", "Improved Usability", "Higher Satisfaction"],
    timeframe: "1-3 weeks",
    color: "teal",
    gradient: "from-teal-100 via-teal-50 to-cyan-50",
    artElement: "🧪"
  }
]

export function UiUxDesignServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20">
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
            <Palette size={16} />
            Comprehensive Design Services
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Exceptional User Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From user research to final implementation, we create designs that not only look beautiful 
            but also solve real user problems and drive business results.
          </p>
        </motion.div>

        {/* Creative Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {designServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                {/* Creative Background Art */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.artElement}
                </div>
                
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden relative">
                  <CardHeader className="pb-4">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow relative`}
                    >
                      <Icon className={`w-8 h-8 text-${service.color}-600`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                    </motion.div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className={`bg-gradient-to-r ${service.gradient} text-${service.color}-700 border-0`}>
                        {service.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Creative Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-full`}></div>
                        What We Deliver
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

                    {/* Creative Benefits */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl border border-${service.color}-100 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                        <div className="text-3xl">{service.artElement}</div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">Impact</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-700">
                            <Eye className={`w-4 h-4 text-${service.color}-600 mr-2`} />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Creative Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-10 text-white text-center mb-20 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="text-9xl absolute top-4 left-4">🎨</div>
            <div className="text-7xl absolute bottom-4 right-4">✨</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">Design Impact Metrics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold mb-3">98%</div>
                <div className="text-purple-100">User Satisfaction</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-3">165%</div>
                <div className="text-pink-100">Conversion Increase</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold mb-3">2.5M</div>
                <div className="text-orange-100">Users Delighted</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold mb-3">4.9★</div>
                <div className="text-purple-100">Average Rating</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Creative Design Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="text-8xl">🛠️</div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Creative Toolkit
          </h3>
          
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Design Tools
              </h4>
              <div className="space-y-4">
                {["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite"].map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg cursor-pointer"
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">Expert</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                Prototyping
              </h4>
              <div className="space-y-4">
                {["InVision", "Marvel", "Principle", "Framer"].map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between bg-gradient-to-r from-pink-50 to-orange-50 p-3 rounded-lg cursor-pointer"
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">Advanced</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                Research
              </h4>
              <div className="space-y-4">
                {["Hotjar", "Google Analytics", "Maze", "UserTesting"].map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg cursor-pointer"
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">Expert</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                Collaboration
              </h4>
              <div className="space-y-4">
                {["Slack", "Notion", "Miro", "Zeplin"].map((tool, i) => (
                  <motion.div 
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between bg-gradient-to-r from-red-50 to-purple-50 p-3 rounded-lg cursor-pointer"
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">Advanced</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Creative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
            <Link href="/contact" className="flex items-center gap-2">
              Let's Create Something Beautiful
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
