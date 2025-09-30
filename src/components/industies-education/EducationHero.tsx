"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function EducationHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Educational Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="education" width="70" height="70" patternUnits="userSpaceOnUse"><circle cx="35" cy="35" r="2" fill="%23ffffff" opacity="0.1"/><rect x="30" y="30" width="10" height="10" fill="%23ffffff" opacity="0.05" rx="2"/><path d="M30 35h10M35 30v10" stroke="%23ffffff" stroke-width="0.5" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="%236366f1"/><rect width="100%" height="100%" fill="url(%23education)"/><circle cx="160" cy="130" r="85" fill="%23ffffff" opacity="0.04"/><circle cx="840" cy="470" r="125" fill="%23ffffff" opacity="0.03"/><rect x="180" y="340" width="240" height="160" fill="%23ffffff" opacity="0.02" rx="15"/><rect x="620" y="140" width="190" height="130" fill="%23ffffff" opacity="0.04" rx="10"/></svg>')`
        }}
      />

      <div className="container  mx-auto px-6 relative z-10">
        <div className="max-w-4xl max-md:my-5 mx-auto text-center text-white">
          {/* Education Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <BookOpen size={16} />
            EdTech Solutions Provider
          </motion.div>

          {/* Simple Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            E-Learning &<br />
            <span className="text-indigo-300">EdTech Platforms</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-indigo-100 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Engaging educational technology platforms that transform learning experiences. 
            Trusted by 150+ schools, universities, and online education providers worldwide.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              <div className="text-left">
                <div className="text-lg font-bold">85%</div>
                <div className="text-sm text-indigo-200">Course Completion</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users className="w-6 h-6 text-indigo-400" />
              <div className="text-left">
                <div className="text-lg font-bold">1M+</div>
                <div className="text-sm text-indigo-200">Students Taught</div>
              </div>
            </div>
          </motion.div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50">
              <Link href="/contactus" className="flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/30 text-black">
              <Link href="#solutions">View Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
