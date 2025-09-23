"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Zap, Target, Clock } from "lucide-react"
import Link from "next/link"

export function DedicatedTeamsHero() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Users size={16} />
            Dedicated Development Teams
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Scale Fast with{" "}
            <span className="text-blue-600 relative">
              Full Project Teams
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-blue-200 -z-10"
              />
            </span>
          </motion.h1>

          {/* Subtitle with Perfect Spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Get dedicated teams of senior developers, designers, and project managers 
            working exclusively on your project. Ready to start in 2 weeks.
          </motion.p>

          {/* Key Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <Clock className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-sm font-semibold text-gray-900">2 Weeks</div>
              <div className="text-xs text-gray-600">To Start</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <Target className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-sm font-semibold text-gray-900">100%</div>
              <div className="text-xs text-gray-600">Dedicated</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <Zap className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-sm font-semibold text-gray-900">3x</div>
              <div className="text-xs text-gray-600">Faster Delivery</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <Users className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-sm font-semibold text-gray-900">Full Stack</div>
              <div className="text-xs text-gray-600">Teams</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contactus" className="flex items-center gap-2">
                Build My Team
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="#teams">View Team Options</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              500+ Teams Built
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              98% Client Retention
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              50+ Countries Served
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
