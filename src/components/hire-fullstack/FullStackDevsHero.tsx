"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Layers, Zap, Target, Clock } from "lucide-react"
import Link from "next/link"

export function FullStackDevsHero() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-purple-50/30">
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-10 right-20 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Layers size={14} />
            Full Stack Development Experts
          </motion.div>

          {/* Main Heading - Clean Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
          >
            Hire Expert{" "}
            <span className="text-indigo-600">Full Stack Developers</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Get end-to-end development specialists who handle frontend, backend, 
            and database - complete solutions from a single expert. Start in 48 hours.
          </motion.p>

          {/* Quick Stats - Minimal Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-6 mb-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">48h</div>
              <div className="text-xs text-gray-600">Quick Start</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">8+</div>
              <div className="text-xs text-gray-600">Years Exp</div>
            </div>
            <div className="text-2xl text-gray-300">|</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">100+</div>
              <div className="text-xs text-gray-600">Full Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <div className="text-xs text-gray-600">Success</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-6"
          >
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Hire Now
                <ArrowRight size={18} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="#developers">View Profiles</Link>
            </Button>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">AWS</Badge>
            <Badge variant="secondary">Docker</Badge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
