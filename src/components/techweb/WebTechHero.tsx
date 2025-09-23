"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, Zap } from "lucide-react"
import Link from "next/link"

export function WebTechHero() {
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
      </div>

      {/* Floating Code Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-blue-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Code size={40} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-blue-500 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Globe size={48} />
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
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Zap size={16} />
              Modern Web Development
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Build Modern{" "}
              <span className="text-blue-600 relative">
                Web Apps
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-3 bg-blue-200 -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Create fast, scalable, and responsive web applications using React, Next.js, TypeScript, and modern development tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contactus" className="flex items-center gap-2">
                  Start Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="#services">View Services</Link>
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
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Web Apps Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Performance Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Browser Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                  your-website.com
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="w-24 h-8 bg-blue-100 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-16 h-6 bg-gray-200 rounded"></div>
                    <div className="w-16 h-6 bg-blue-500 rounded"></div>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="space-y-3">
                  <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
                  <div className="w-full h-6 bg-gray-200 rounded"></div>
                  <div className="w-2/3 h-6 bg-gray-200 rounded"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-blue-50 p-4 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-200 rounded mb-2"></div>
                    <div className="w-full h-4 bg-blue-200 rounded mb-1"></div>
                    <div className="w-3/4 h-3 bg-blue-100 rounded"></div>
                  </motion.div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Code size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
