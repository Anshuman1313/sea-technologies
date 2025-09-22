"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Tablet, Watch } from "lucide-react"
import Link from "next/link"

export function MobileTechHero() {
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

      {/* Floating Mobile Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-blue-400 opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Smartphone size={40} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-blue-500 opacity-20"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Tablet size={48} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 right-20 text-blue-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Watch size={36} />
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
              <Smartphone size={16} />
              Cross-Platform Mobile Development
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Build Native{" "}
              <span className="text-blue-600 relative">
                Mobile Apps
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
              Create high-performance iOS and Android applications using React Native, Flutter, and native development. One codebase, multiple platforms.
            </motion.p>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-6 py-4"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">iOS</span>
                </div>
                <span className="text-sm">iOS Apps</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">And</span>
                </div>
                <span className="text-sm">Android Apps</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Watch className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm">Wearables</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Mobile Project
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
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Apps Published</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">4.8★</div>
                <div className="text-sm text-gray-600">App Store Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50%</div>
                <div className="text-sm text-gray-600">Faster Development</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* iPhone Mockup */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
            >
              <div className="bg-white rounded-[2.5rem] w-64 h-[520px] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-900 text-white px-6 py-2 flex justify-between items-center text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-3 border border-white rounded-sm">
                      <div className="w-4 h-full bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-6 bg-blue-100 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>

                  {/* Hero Card */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                    <div className="w-24 h-4 bg-blue-300 rounded mb-3"></div>
                    <div className="w-32 h-6 bg-white bg-opacity-20 rounded mb-4"></div>
                    <div className="w-16 h-8 bg-white bg-opacity-30 rounded"></div>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="bg-blue-50 rounded-xl p-4"
                    >
                      <div className="w-6 h-6 bg-blue-200 rounded mb-3"></div>
                      <div className="w-full h-3 bg-blue-200 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-blue-100 rounded"></div>
                    </motion.div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="w-6 h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex justify-between items-center pt-6">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Android Phone - Partially Visible */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-8 z-0 bg-gray-800 rounded-[2.5rem] p-2 shadow-xl opacity-80"
            >
              <div className="bg-white rounded-[2rem] w-48 h-80 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-full p-4">
                  <div className="w-16 h-4 bg-white bg-opacity-30 rounded mb-6"></div>
                  <div className="space-y-4">
                    <div className="w-full h-6 bg-white bg-opacity-20 rounded"></div>
                    <div className="w-3/4 h-4 bg-white bg-opacity-20 rounded"></div>
                    <div className="w-1/2 h-4 bg-white bg-opacity-20 rounded"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Smartphone size={20} />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-12 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
            >
              <Watch size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
