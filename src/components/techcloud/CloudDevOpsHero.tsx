"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Zap, GitBranch, Server } from "lucide-react"
import Link from "next/link"

export function CloudDevOpsHero() {
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

      {/* Floating Cloud Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 text-blue-400 opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cloud size={40} />
      </motion.div>
      
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 right-16 text-blue-500 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Server size={48} />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 right-20 text-blue-400 opacity-20"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <GitBranch size={36} />
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
              className="inline-flex items-center max-md:mt-6 gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Cloud size={16} />
              Enterprise Cloud & DevOps
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Scale with{" "}
              <span className="text-blue-600 relative">
                Cloud DevOps
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
              Transform your infrastructure with AWS, Azure, and GCP cloud solutions. Automate deployments with robust CI/CD pipelines and scale effortlessly.
            </motion.p>

            {/* Cloud Platform Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-6 py-4"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">AWS</span>
                </div>
                <span className="text-sm">Amazon Web Services</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">AZ</span>
                </div>
                <span className="text-sm">Microsoft Azure</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">GCP</span>
                </div>
                <span className="text-sm">Google Cloud</span>
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
                <Link href="/contactus" className="flex items-center gap-2">
                  Start Cloud Migration
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
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">10x</div>
                <div className="text-sm text-gray-600">Faster Deployments</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cloud Infrastructure Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Cloud Infrastructure */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Cloud Infrastructure</span>
                </div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* CI/CD Pipeline Visualization */}
              <div className="space-y-4">
                {/* Code Stage */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-blue-50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Source Code</div>
                      <div className="text-xs text-gray-500">Git Repository</div>
                    </div>
                  </div>
                </motion.div>

                {/* Build Stage */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Build & Test</div>
                      <div className="text-xs text-gray-500">CI Pipeline</div>
                    </div>
                  </div>
                </div>

                {/* Deploy Stage */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Deploy</div>
                      <div className="text-xs text-gray-500">Production Environment</div>
                    </div>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Monitoring</div>
                        <div className="text-xs text-gray-500">Real-time Analytics</div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">Active</div>
                  </div>
                </div>
              </div>

              {/* Cloud Provider Logos */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">AWS</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">AZ</span>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">GCP</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
            >
              <Cloud size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
            >
              <Zap size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
