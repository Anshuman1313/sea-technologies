"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Users, TrendingUp, Star, Clock, Target } from "lucide-react"
import Link from "next/link"

const successfulProducts = [
  {
    name: "FitTracker Pro",
    category: "Health & Fitness",
    icon: "💪",
    description: "AI-powered fitness tracking app that personalizes workout routines and nutrition plans.",
    journey: {
      mvp: "Basic workout logging",
      validation: "2,000 beta users",
      launch: "50,000 downloads in 3 months",
      scale: "500K+ active users"
    },
    metrics: {
      userGrowth: "2,500%",
      retention: "85%",
      rating: "4.8★",
      revenue: "$2.3M ARR"
    },
    timeline: "8 months MVP → Market Leader",
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "EduConnect",
    category: "EdTech",
    icon: "📚",
    description: "Virtual classroom platform connecting students and teachers with interactive learning tools.",
    journey: {
      mvp: "Video calling & file sharing",
      validation: "50 schools pilot program",
      launch: "500 schools onboarded",
      scale: "10,000+ educational institutions"
    },
    metrics: {
      userGrowth: "20,000%",
      retention: "92%",
      rating: "4.9★",
      revenue: "$5.7M ARR"
    },
    timeline: "6 months MVP → Industry Standard",
    technologies: ["React", "WebRTC", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "ShopSmart",
    category: "E-commerce",
    icon: "🛒",
    description: "AI-driven shopping assistant that finds the best deals and predicts user preferences.",
    journey: {
      mvp: "Price comparison tool",
      validation: "10,000 product comparisons",
      launch: "100K users in 2 months",
      scale: "1M+ monthly active users"
    },
    metrics: {
      userGrowth: "10,000%",
      retention: "78%",
      rating: "4.6★",
      revenue: "$8.2M ARR"
    },
    timeline: "10 months MVP → Market Disruptor",
    technologies: ["Vue.js", "Python", "Redis", "ML Algorithms"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "MindfulSpace",
    category: "Mental Wellness",
    icon: "🧘",
    description: "Personalized meditation and mindfulness app with AI-guided sessions and progress tracking.",
    journey: {
      mvp: "Basic meditation timer",
      validation: "5,000 daily sessions",
      launch: "200K downloads in launch month",
      scale: "2M+ registered users"
    },
    metrics: {
      userGrowth: "40,000%",
      retention: "88%",
      rating: "4.9★",
      revenue: "$3.8M ARR"
    },
    timeline: "7 months MVP → Wellness Leader",
    technologies: ["Flutter", "Firebase", "Machine Learning", "Analytics"],
    gradient: "from-indigo-500 to-purple-600"
  }
]

const clientTestimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, FitTracker Pro",
    company: "Health & Fitness",
    quote: "Their product engineering process transformed my simple idea into a market-leading fitness app. The MVP approach saved us months of development time.",
    rating: 5,
    gradient: "from-green-100 to-emerald-100"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, EduConnect",
    company: "EdTech",
    quote: "The team's expertise in scaling from MVP to full product was incredible. We went from concept to 10,000 schools in less than a year.",
    rating: 5,
    gradient: "from-blue-100 to-indigo-100"
  },
  {
    name: "Emily Watson",
    role: "CEO, MindfulSpace",
    company: "Mental Wellness",
    quote: "Their data-driven approach to product development helped us achieve 88% user retention. The results speak for themselves.",
    rating: 5,
    gradient: "from-indigo-100 to-purple-100"
  }
]

export function ProductEngineeringShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
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
            <Rocket size={16} />
            Product Success Stories
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From MVP to Market Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've transformed innovative ideas into successful products that 
            dominate their markets and generate millions in revenue.
          </p>
        </motion.div>

        {/* Product Success Stories */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {successfulProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm">
                {/* Enhanced Header */}
                <div className={`bg-gradient-to-r ${product.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12">
                    <div className="text-8xl">{product.icon}</div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl mb-2">{product.icon}</div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{product.description}</p>
                  </div>
                </div>

                <CardContent className="p-8 space-y-8">
                  {/* Product Journey */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      Product Journey
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                        <div className="text-xs font-semibold text-blue-600 mb-1">MVP</div>
                        <div className="text-sm text-gray-700">{product.journey.mvp}</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                        <div className="text-xs font-semibold text-indigo-600 mb-1">VALIDATION</div>
                        <div className="text-sm text-gray-700">{product.journey.validation}</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                        <div className="text-xs font-semibold text-purple-600 mb-1">LAUNCH</div>
                        <div className="text-sm text-gray-700">{product.journey.launch}</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                        <div className="text-xs font-semibold text-green-600 mb-1">SCALE</div>
                        <div className="text-sm text-gray-700">{product.journey.scale}</div>
                      </div>
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.metrics).map(([metric, value]) => (
                        <div key={metric} className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl">
                          <div className="text-xl font-bold text-green-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Timeline */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <strong>{product.timeline}</strong>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs bg-white">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            What Our Product Leaders Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-2xl border border-white/50 text-center relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
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

        {/* Enhanced Success Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center mb-20 shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-12">Product Engineering Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-3">200+</div>
              <div className="text-blue-100">Products Launched</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-3">4.2M</div>
              <div className="text-indigo-100">Users Acquired</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-3">$42M</div>
              <div className="text-purple-100">Revenue Generated</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl font-bold mb-3">85%</div>
              <div className="text-blue-100">Market Success Rate</div>
            </motion.div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Build Your Market-Leading Product?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Join the ranks of successful entrepreneurs who chose our product engineering expertise 
            to transform their ideas into profitable, scalable businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Product Journey
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50">
              <Link href="/portfolio">View More Success Stories</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
