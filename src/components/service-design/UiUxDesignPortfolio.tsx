"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const portfolioProjects = [
  {
    name: "FinanceFlow",
    category: "Fintech",
    type: "Web & Mobile App",
    description: "Revolutionary personal finance app that makes budgeting intuitive and engaging through gamification.",
    challenge: "Complex financial data needed to be simplified for everyday users while maintaining security and trust.",
    solution: "Created a clean, card-based interface with smart categorization and visual spending insights.",
    results: {
      userSatisfaction: "4.9/5",
      timeOnApp: "+280%",
      featureAdoption: "85%",
      conversionRate: "+190%"
    },
    awards: ["Design Awards 2024", "Best Fintech UX"],
    colors: ["#667eea", "#764ba2", "#f093fb"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    artElement: "💳"
  },
  {
    name: "MediCare Connect",
    category: "Healthcare",
    type: "Patient Portal",
    description: "Comprehensive healthcare platform connecting patients, doctors, and medical records seamlessly.",
    challenge: "Healthcare workflows are complex, and users range from tech-savvy to seniors requiring accessible design.",
    solution: "Designed with accessibility-first principles, large touch targets, and clear information hierarchy.",
    results: {
      userSatisfaction: "4.8/5",
      appointmentBookings: "+320%",
      supportTickets: "-65%",
      userRetention: "92%"
    },
    awards: ["Healthcare Innovation Award", "Accessibility Excellence"],
    colors: ["#11998e", "#38ef7d", "#00c9ff"],
    gradient: "from-teal-500 via-green-400 to-cyan-400",
    artElement: "🏥"
  },
  {
    name: "EduSpace",
    category: "Education",
    type: "Learning Platform",
    description: "Interactive learning platform that makes online education engaging and effective for students of all ages.",
    challenge: "Online learning can be isolating and boring, leading to high dropout rates and low engagement.",
    solution: "Gamified learning paths with social features, progress tracking, and personalized recommendations.",
    results: {
      userSatisfaction: "4.7/5",
      courseCompletion: "+450%",
      engagementTime: "+380%",
      studentRetention: "89%"
    },
    awards: ["EdTech Excellence Award", "User Experience Innovation"],
    colors: ["#ff9a9e", "#fecfef", "#ffecd2"],
    gradient: "from-pink-400 via-purple-300 to-orange-200",
    artElement: "📚"
  },
  {
    name: "GreenCart",
    category: "E-commerce",
    type: "Sustainable Shopping",
    description: "Eco-friendly marketplace that helps users make sustainable purchasing decisions with impact tracking.",
    challenge: "Sustainability information is often complex and overwhelming, deterring conscious consumers.",
    solution: "Simple sustainability scores, impact visualizations, and seamless eco-friendly product discovery.",
    results: {
      userSatisfaction: "4.6/5",
      sustainableChoices: "+520%",
      cartValue: "+340%",
      userGrowth: "+280%"
    },
    awards: ["Sustainable Design Award", "Green Innovation Prize"],
    colors: ["#56ab2f", "#a8e6cf", "#88d8c0"],
    gradient: "from-green-600 via-green-400 to-teal-300",
    artElement: "🌱"
  }
]

const designAwards = [
  { name: "Design Awards 2024", category: "Best Overall UX" },
  { name: "Awwwards", category: "Site of the Day" },
  { name: "CSS Design Awards", category: "Best Innovation" },
  { name: "UX Awards", category: "Best Mobile Experience" }
]

const clientTestimonials = [
  {
    name: "Jennifer Martinez",
    role: "Product Manager, FinanceFlow",
    company: "Fintech",
    quote: "Their design transformed our complex financial app into something users actually love using. The results speak for themselves - 4.9/5 rating!",
    rating: 5,
    gradient: "from-blue-100 to-purple-100",
    artElement: "💼"
  },
  {
    name: "Dr. Sarah Kim",
    role: "Chief Medical Officer, MediCare",
    company: "Healthcare",
    quote: "The accessibility-first approach made our platform usable by patients of all ages and technical abilities. Exceptional work.",
    rating: 5,
    gradient: "from-teal-100 to-green-100",
    artElement: "👩‍⚕️"
  },
  {
    name: "Alex Thompson",
    role: "Founder, EduSpace",
    company: "EdTech",
    quote: "They turned our boring learning platform into an engaging experience. Student retention increased by 89%!",
    rating: 5,
    gradient: "from-pink-100 to-orange-100",
    artElement: "🎓"
  }
]

export function UiUxDesignPortfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20">
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
            <Award size={16} />
            Award-Winning Design Portfolio
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Designs That Win Hearts & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of award-winning designs that have transformed businesses, 
            delighted users, and set new standards in user experience excellence.
          </p>
        </motion.div>

        {/* Portfolio Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm relative">
                {/* Creative Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="text-8xl transform rotate-12">{project.artElement}</div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-white/20 text-white border-0">
                            {project.category}
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-white border-0">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-4xl">{project.artElement}</div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <CardContent className="p-8 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        Solution
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Impact Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.results).map(([metric, value]) => (
                        <motion.div 
                          key={metric} 
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl p-4 text-center border border-gray-100"
                        >
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {metric.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      Recognition
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.awards.map((award) => (
                        <Badge key={award} className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-yellow-200">
                          🏆 {award}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Design Colors</h4>
                    <div className="flex gap-3">
                      {project.colors.map((color, i) => (
                        <motion.div 
                          key={color}
                          whileHover={{ scale: 1.2 }}
                          className="w-8 h-8 rounded-lg shadow-sm border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Design Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-3xl p-10 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="text-9xl absolute top-4 left-4">🏆</div>
            <div className="text-7xl absolute bottom-4 right-4">⭐</div>
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {designAwards.map((award, index) => (
                <motion.div 
                  key={award.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="font-bold text-gray-900 mb-2">{award.name}</h4>
                  <p className="text-sm text-gray-600">{award.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="text-8xl">💬</div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-3xl border border-white/50 text-center relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 text-3xl opacity-30">
                  {testimonial.artElement}
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-white text-center mb-20 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="text-9xl absolute top-4 left-4">🎨</div>
            <div className="text-7xl absolute bottom-4 right-4">✨</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-12">Design Impact Across Industries</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-5xl font-bold mb-3">150+</div>
                <div className="text-purple-100">Designs Created</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-5xl font-bold mb-3">2.5M</div>
                <div className="text-pink-100">Users Impacted</div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-5xl font-bold mb-3">25</div>
                <div className="text-orange-100">Design Awards</div>
              </motion.div>
              <div 
              
              >
                <div className="text-5xl font-bold mb-3">98%</div>
                <div className="text-purple-100">Client Satisfaction</div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Create Your Award-Winning Design?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Join our portfolio of successful clients who have transformed their businesses 
            with exceptional user experiences that users love and industry experts recognize.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/contactus" className="flex items-center gap-2">
                Start Your Design Journey
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-purple-200 hover:bg-purple-50 text-purple-700">
              <Link href="/contactus">View Full Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
