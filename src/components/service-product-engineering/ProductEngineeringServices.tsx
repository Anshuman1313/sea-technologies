"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  TrendingUp, 
  Users, 
  BarChart3,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const productServices = [
  {
    icon: Lightbulb,
    title: "MVP Development",
    description: "Build your minimum viable product with core features that validate your business idea and attract early adopters.",
    features: ["Rapid Prototyping", "Core Feature Development", "User Testing Framework"],
    benefits: ["Faster Time-to-Market", "Risk Mitigation", "Early User Feedback"],
    timeframe: "4-8 weeks",
    color: "blue",
    gradient: "from-blue-100 via-blue-50 to-indigo-50"
  },
  {
    icon: Target,
    title: "Product Validation",
    description: "Validate your product-market fit through data-driven analysis, user research, and market testing strategies.",
    features: ["Market Research", "User Journey Mapping", "A/B Testing"],
    benefits: ["Market Validation", "User Insights", "Feature Prioritization"],
    timeframe: "2-4 weeks",
    color: "indigo",
    gradient: "from-indigo-100 via-indigo-50 to-purple-50"
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "Execute a comprehensive product launch strategy with marketing integration, user onboarding, and performance monitoring.",
    features: ["Launch Strategy", "User Onboarding", "Performance Monitoring"],
    benefits: ["Market Penetration", "User Acquisition", "Brand Awareness"],
    timeframe: "6-10 weeks",
    color: "purple",
    gradient: "from-purple-100 via-purple-50 to-blue-50"
  },
  {
    icon: TrendingUp,
    title: "Product Scaling",
    description: "Scale your successful MVP into a full-featured product with enhanced performance, new features, and expanded capabilities.",
    features: ["Architecture Scaling", "Feature Expansion", "Performance Optimization"],
    benefits: ["Increased Capacity", "Enhanced Features", "Better Performance"],
    timeframe: "12-24 weeks",
    color: "green",
    gradient: "from-green-100 via-green-50 to-emerald-50"
  },
  {
    icon: Users,
    title: "User Experience Design",
    description: "Create intuitive, engaging user experiences that drive adoption, retention, and customer satisfaction.",
    features: ["UX Research", "Interface Design", "Usability Testing"],
    benefits: ["Higher Engagement", "Better Retention", "User Satisfaction"],
    timeframe: "3-6 weeks",
    color: "orange",
    gradient: "from-orange-100 via-orange-50 to-amber-50"
  },
  {
    icon: BarChart3,
    title: "Product Analytics",
    description: "Implement comprehensive analytics to track user behavior, measure performance, and guide product decisions.",
    features: ["Analytics Setup", "KPI Tracking", "Insights Dashboard"],
    benefits: ["Data-Driven Decisions", "Performance Insights", "Growth Optimization"],
    timeframe: "2-4 weeks",
    color: "teal",
    gradient: "from-teal-100 via-teal-50 to-cyan-50"
  }
]

export function ProductEngineeringServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm"
          >
            <Rocket size={16} />
            Complete Product Engineering Suite
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            End-to-End Product Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From initial concept validation to market-leading products, we provide comprehensive 
            engineering services that transform your ideas into successful digital solutions.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                      <Icon className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className={`bg-${service.color}-100 text-${service.color}-700 border-0`}>
                        {service.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Enhanced Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 bg-${service.color}-500 rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced Benefits */}
                    <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl border border-${service.color}-100`}>
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-700">
                            <TrendingUp className={`w-4 h-4 text-${service.color}-600 mr-2`} />
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

        {/* Enhanced Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white text-center mb-20 shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-8">Product Engineering Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold mb-3"
              >
                85%
              </motion.div>
              <div className="text-blue-100">Market Success Rate</div>
            </div>
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold mb-3"
              >
                3.2M
              </motion.div>
              <div className="text-indigo-100">Users Acquired</div>
            </div>
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-bold mb-3"
              >
                420%
              </motion.div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold mb-3"
              >
                6 months
              </motion.div>
              <div className="text-blue-100">Avg. Time to Market</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Modern Product Engineering Stack
          </h3>
          
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                Frontend
              </h4>
              <div className="space-y-4">
                {["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">Expert</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                Backend
              </h4>
              <div className="space-y-4">
                {["Node.js & Express", "Python & Django", "GraphQL APIs", "Microservices"].map((tech, i) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 text-xs">Advanced</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                Database
              </h4>
              <div className="space-y-4">
                {["PostgreSQL", "MongoDB", "Redis Cache", "Elasticsearch"].map((tech, i) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
                    className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">Expert</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                Analytics
              </h4>
              <div className="space-y-4">
                {["Google Analytics", "Mixpanel", "Amplitude", "Custom Dashboards"].map((tech, i) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.6 }}
                    className="flex items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">{tech}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">Advanced</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
            <Link href="/contactus" className="flex items-center gap-2">
              Start Your Product Engineering Journey
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
