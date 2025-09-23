"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export function ItConsultingHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30"
    >
      {/* Professional Background Graphics */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-400 via-blue-500 to-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500 to-slate-600 rounded-full blur-3xl"></div>
      </div>

      {/* Strategic Business Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-slate-500 opacity-8"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <TrendingUp size={52} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-blue-600 opacity-8"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Shield size={60} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/3 right-20 text-indigo-500 opacity-8"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Target size={46} />
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
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-slate-200"
            >
              <TrendingUp size={16} />
              Strategic IT Consulting & Digital Transformation
            </motion.div>

            {/* Main Heading with Professional Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent relative">
                Digital Future
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-slate-200 via-blue-200 to-indigo-200 -z-10 rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Strategic IT consulting that drives digital transformation, optimizes operations, 
              and delivers measurable business results through technology excellence.
            </motion.p>

            {/* Professional Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-6 py-4"
            >
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <TrendingUp className="w-7 h-7 text-slate-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">Strategic Planning</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow border border-blue-200"
                >
                  <Shield className="w-7 h-7 text-blue-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">Risk Management</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow border border-indigo-200"
                >
                  <Target className="w-7 h-7 text-indigo-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">Business Alignment</span>
              </div>
            </motion.div>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-700 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all">
                <Link href="/contactus" className="flex items-center gap-2">
                  Schedule Strategy Session
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-slate-200 hover:bg-slate-50 text-slate-700">
                <Link href="#expertise">Explore Our Expertise</Link>
              </Button>
            </motion.div>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent">$50M+</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Strategic Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Strategic Dashboard */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-full max-w-lg backdrop-blur-sm">
              {/* Professional Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Digital Strategy Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Strategic Metrics */}
              <div className="space-y-6">
                {/* Business Impact */}
                <motion.div
                  animate={{ scale: [1, 1.01, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-5 border border-slate-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-900">Digital Transformation ROI</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">+285%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                    <motion.div 
                      className="bg-gradient-to-r from-slate-500 via-blue-500 to-indigo-500 h-3 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <div className="text-xs text-gray-600">Strategy implementation • Change management</div>
                </motion.div>

                {/* Risk Assessment */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-slate-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Risk Assessment</div>
                      <div className="text-xs text-gray-500">Security • Compliance • Operations</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-green-100 rounded-lg">
                      <div className="text-xs font-bold text-green-700">Low</div>
                    </div>
                    <div className="text-center p-2 bg-yellow-100 rounded-lg">
                      <div className="text-xs font-bold text-yellow-700">Med</div>
                    </div>
                    <div className="text-center p-2 bg-slate-100 rounded-lg">
                      <div className="text-xs font-bold text-slate-700">High</div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Technology Roadmap</div>
                      <div className="text-xs text-gray-500">Implementation • Integration • Optimization</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 bg-gradient-to-r from-slate-500 to-blue-500 text-white text-xs rounded">Cloud</div>
                    <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded">AI/ML</div>
                    <div className="px-2 py-1 border border-slate-300 text-slate-700 text-xs rounded">IoT</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl p-5 border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Performance</div>
                        <div className="text-xs text-gray-500">Efficiency +65% • Cost -40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Tech Stack */}
              <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-gray-100">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-sm border border-slate-200"
                >
                  <span className="text-slate-700 font-bold text-xs">AWS</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm border border-blue-200"
                >
                  <span className="text-blue-700 font-bold text-xs">Azure</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center shadow-sm border border-indigo-200"
                >
                  <span className="text-indigo-700 font-bold text-xs">GCP</span>
                </motion.div>
              </div>
            </div>

            {/* Professional Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 bg-gradient-to-r from-slate-600 to-blue-600 text-white p-4 rounded-2xl shadow-lg border border-slate-200"
            >
              <TrendingUp size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-2xl shadow-lg border border-blue-200"
            >
              <Shield size={24} />
            </motion.div>

            {/* Strategic Data Flow Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-0 transform -translate-x-12 w-5 h-5 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full"
            />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-0 transform -translate-x-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
