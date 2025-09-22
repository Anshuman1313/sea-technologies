"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Lightbulb, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export function ProductEngineeringHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Product Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-blue-500 opacity-15"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Rocket size={44} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-indigo-500 opacity-15"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Target size={52} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/3 right-20 text-blue-400 opacity-15"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Lightbulb size={38} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-5 py-3 rounded-full text-sm font-medium shadow-sm"
            >
              <Rocket size={16} />
              Complete Product Engineering
            </motion.div>

            {/* Main Heading with Enhanced Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              From{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
                MVP to Market
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 -z-10"
                />
              </span>{" "}
              Leader
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Complete product engineering services from initial concept to market-ready solutions. 
              We build MVPs that scale, validate ideas that succeed, and engineer products that dominate markets.
            </motion.p>

            {/* Enhanced Product Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-4 py-4"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">MVP Development</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Product Validation</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Market Scaling</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Product Journey
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-blue-200 hover:bg-blue-50">
                <Link href="#process">Explore Our Process</Link>
              </Button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-600">Products Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">85%</div>
                <div className="text-sm text-gray-600">Market Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4.2M</div>
                <div className="text-sm text-gray-600">Users Reached</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Product Development Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Product Development Dashboard */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-full max-w-lg backdrop-blur-sm">
              {/* Enhanced Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Product Development Hub</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Enhanced Product Stages */}
              <div className="space-y-5">
                {/* MVP Stage */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-900">MVP Development</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="text-xs text-gray-600">Core features • User testing • Feedback integration</div>
                </motion.div>

                {/* Validation Stage */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-indigo-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Product Validation</div>
                      <div className="text-xs text-gray-500">Market research • User validation • Analytics</div>
                    </div>
                  </div>
                </div>

                {/* Scaling Stage */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Market Scaling</div>
                      <div className="text-xs text-gray-500">Feature expansion • Performance optimization</div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Success Metrics</div>
                        <div className="text-xs text-gray-500">4.8★ rating • 95% retention • 300% growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Technology Indicators */}
              <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xs">React</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-xs">Node</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-xs">AWS</span>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl shadow-lg"
            >
              <Rocket size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl shadow-lg"
            >
              <TrendingUp size={20} />
            </motion.div>

            {/* Enhanced Data Flow Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/3 left-0 transform -translate-x-10 w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
            />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-0 transform -translate-x-8 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
