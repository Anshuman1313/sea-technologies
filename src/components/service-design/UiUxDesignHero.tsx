"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Users, MousePointer, Layers } from "lucide-react"
import Link from "next/link"

export function UiUxDesignHero() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20"
    >
      {/* Creative Background Graphics */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Design Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-purple-500 opacity-12"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Palette size={48} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-pink-500 opacity-12"
        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Layers size={56} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/3 right-20 text-blue-400 opacity-12"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <MousePointer size={42} />
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
            {/* Creative Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-purple-100"
            >
              <Palette size={16} />
              Creative UI/UX Design Studio
            </motion.div>

            {/* Main Heading with Creative Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Design{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent relative">
                Experiences
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 -z-10 rounded-full"
                />
              </span>{" "}
              That Inspire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Craft intuitive, beautiful interfaces and exceptional user experiences that engage, 
              delight, and convert. We design with users at the heart of every decision.
            </motion.p>

            {/* Creative Design Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-6 py-4"
            >
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <Users className="w-7 h-7 text-purple-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">User Research</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-14 h-14 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <Layers className="w-7 h-7 text-pink-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">Interface Design</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <MousePointer className="w-7 h-7 text-orange-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">User Testing</span>
              </div>
            </motion.div>

            {/* Creative CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Design Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-purple-200 hover:bg-purple-50 text-purple-700">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Creative Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">150+</div>
                <div className="text-sm text-gray-600">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">2.5M</div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Creative Design Studio Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Design Studio Interface */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 w-full max-w-lg backdrop-blur-sm">
              {/* Creative Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Design Studio</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Creative Design Elements */}
              <div className="space-y-6">
                {/* Color Palette */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-5 border border-purple-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-900">Color Palette</span>
                    <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">Live</span>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg shadow-sm"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-lg shadow-sm"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-lg shadow-sm"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-sm"></div>
                  </div>
                  <div className="text-xs text-gray-600">Brand colors • Accessibility tested</div>
                </motion.div>

                {/* Typography */}
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-5 border border-pink-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-5 h-5 text-pink-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Typography System</div>
                      <div className="text-xs text-gray-500">Headings • Body • Captions</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-gray-900">Heading Bold</div>
                    <div className="text-sm text-gray-600">Body text regular</div>
                  </div>
                </div>

                {/* User Interface */}
                <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-5 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <MousePointer className="w-5 h-5 text-orange-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Interface Components</div>
                      <div className="text-xs text-gray-500">Buttons • Forms • Navigation</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-lg">Primary</div>
                    <div className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-lg">Secondary</div>
                  </div>
                </div>

                {/* User Testing */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">User Testing</div>
                        <div className="text-xs text-gray-500">98% satisfaction • 5★ rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Design Tools */}
              <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-gray-100">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <span className="text-purple-700 font-bold text-xs">Figma</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-10 h-10 bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <span className="text-pink-700 font-bold text-xs">PS</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-sm"
                >
                  <span className="text-orange-700 font-bold text-xs">XD</span>
                </motion.div>
              </div>
            </div>

            {/* Creative Floating Elements */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg"
            >
              <Palette size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3 rounded-2xl shadow-lg"
            >
              <Layers size={24} />
            </motion.div>

            {/* Creative Data Flow Animation */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-0 transform -translate-x-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            />
            
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 left-0 transform -translate-x-10 w-5 h-5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
            />

            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              className="absolute top-3/4 left-0 transform -translate-x-8 w-4 h-4 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
