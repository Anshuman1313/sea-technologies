"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, TrendingUp, Banknote } from "lucide-react"
import Link from "next/link"

export function FinTechHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="%231e40af"/><rect width="100%" height="100%" fill="url(%23grid)"/><circle cx="200" cy="150" r="100" fill="%23ffffff" opacity="0.05"/><circle cx="800" cy="400" r="150" fill="%23ffffff" opacity="0.03"/><rect x="100" y="300" width="300" height="200" fill="%23ffffff" opacity="0.02" rx="10"/><rect x="600" y="100" width="250" height="150" fill="%23ffffff" opacity="0.04" rx="8"/></svg>')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Simple Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Banknote size={16} />
            Trusted FinTech Solutions
          </motion.div>

          {/* Simple Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Banking, Payments &<br />
            <span className="text-blue-300">Blockchain Solutions</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Secure, compliant, and scalable financial technology solutions 
            trusted by banks, payment processors, and blockchain companies worldwide.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Shield className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="text-lg font-bold">SOC 2 Compliant</div>
                <div className="text-sm text-blue-200">Enterprise Security</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <div className="text-lg font-bold">$2.5B+</div>
                <div className="text-sm text-blue-200">Transactions Processed</div>
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
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contactus" className="flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/30 text-black ">
              <Link href="#solutions">View Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
