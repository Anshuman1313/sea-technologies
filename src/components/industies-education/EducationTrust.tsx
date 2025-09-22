"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Monitor, Smartphone, GraduationCap, ArrowRight, Star, Users, CheckCircle, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const educationSolutions = [
  {
    icon: Monitor,
    title: "Learning Management Systems",
    description: "Comprehensive LMS platforms with course management, student tracking, and interactive learning tools for schools and universities.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Course Management", "Student Tracking", "Assessment Tools"]
  },
  {
    icon: BookOpen,
    title: "Online Course Platforms",
    description: "E-learning platforms for course creators and educators with video streaming, quizzes, and certification management.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Video Streaming", "Quiz System", "Certification Management"]
  },
  {
    icon: Smartphone,
    title: "Mobile Learning Apps",
    description: "Engaging mobile educational apps with offline capabilities, gamification, and personalized learning paths for students.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Mobile Learning", "Offline Access", "Gamification"]
  }
]

const trustedClients = [
  { name: "EduTech Academy", logo: "🎓", metric: "100K+ students" },
  { name: "Online University", logo: "🏫", metric: "500+ courses" },
  { name: "SkillsUp Platform", logo: "📚", metric: "50K+ certificates" },
  { name: "Corporate Learning", logo: "💼", metric: "200+ companies" }
]

const trustMetrics = [
  { icon: TrendingUp, label: "Course Completion Rate", value: "85%" },
  { icon: Users, label: "Education Clients", value: "150+" },
  { icon: Star, label: "Client Satisfaction", value: "97%" },
  { icon: Award, label: "Years EdTech Focus", value: "8+" }
]

const edtechFeatures = [
  "Interactive Content",
  "Progress Tracking",
  "Multi-Device Access", 
  "Social Learning",
  "Analytics Dashboard",
  "AI-Powered Recommendations"
]

export function EducationTrust() {
  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Education Technology Partner
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped schools, universities, and EdTech companies build engaging 
            educational platforms that improve learning outcomes and student engagement.
          </p>

          {/* Trust Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {trustMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* EdTech Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-50 rounded-xl p-6 mb-12"
          >
            <h4 className="font-bold text-gray-900 mb-4">Advanced EdTech Features</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {edtechFeatures.map((feature) => (
                <Badge key={feature} className="bg-indigo-100 text-indigo-800 border-indigo-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {feature}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Trusted By Logos */}
          <div className="grid md:grid-cols-4 gap-6">
            {trustedClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl mb-2">{client.logo}</div>
                <div className="font-semibold text-gray-900 text-sm">{client.name}</div>
                <div className="text-xs text-gray-500">{client.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Education Solutions
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive educational technology platforms built for engagement, accessibility, and measurable learning outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {educationSolutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Background Image Header */}
                    <div 
                      className="h-32 relative"
                      style={{ background: solution.image }}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full group-hover:bg-indigo-50">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Learning Engagement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Driving Student Engagement & Success
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our educational platforms are designed to increase student engagement, improve learning outcomes, 
              and provide educators with powerful tools to track progress and personalize learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Higher Engagement</h4>
              <p className="text-sm text-gray-600">Interactive content and gamification increase student participation by 3x</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Better Retention</h4>
              <p className="text-sm text-gray-600">Personalized learning paths improve course completion rates significantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Measurable Outcomes</h4>
              <p className="text-sm text-gray-600">Advanced analytics provide insights into learning progress and effectiveness</p>
            </div>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-indigo-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Education?
          </h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the 150+ educational institutions that trust us with their digital transformation. 
            Let's build engaging learning experiences that drive student success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your EdTech Project
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-indigo-300 text-indigo-100 hover:bg-indigo-700">
              <Link href="/case-studies">Education Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
