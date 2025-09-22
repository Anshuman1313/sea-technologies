"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, BarChart3, Zap, Bot } from "lucide-react"
import Link from "next/link"

export function AiDataScienceHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white"
    >
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating AI Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-blue-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Brain size={40} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-blue-500 opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <BarChart3 size={48} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 right-20 text-purple-400 opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Bot size={36} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Brain size={16} />
              Artificial Intelligence & Data Science
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
                Data Solutions
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Transform raw data into intelligent insights with machine learning models, AI integration, and advanced analytics that drive business growth.
            </motion.p>

            {/* AI Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-6 py-4"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm">Data Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">AI Integration</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Start AI Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Explore AI Services</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-600">Model Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10x</div>
                <div className="text-sm text-gray-600">Faster Insights</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600">AI Models Deployed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - AI Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main AI Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">AI Analytics Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Model Performance */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">Model Accuracy</span>
                  <span className="text-sm font-bold text-blue-600">95.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "95.7%" }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </div>
              </motion.div>

              {/* Data Processing */}
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Data Processing</div>
                      <div className="text-xs text-gray-500">2.5M records processed</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">AI Predictions</div>
                      <div className="text-xs text-gray-500">Real-time inference</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Model Status</div>
                        <div className="text-xs text-gray-500">Training complete</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">Active</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">1.2ms</div>
                  <div className="text-xs text-gray-500">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">24/7</div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
              </div>
            </div>

            {/* Floating Neural Network Nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Brain size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg shadow-lg"
            >
              <BarChart3 size={16} />
            </motion.div>

            {/* Data Flow Animation */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-0 transform -translate-x-8 w-4 h-4 bg-blue-400 rounded-full"
            />
            
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/3 left-0 transform -translate-x-6 w-3 h-3 bg-purple-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
