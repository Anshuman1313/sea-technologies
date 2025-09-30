"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, TrendingUp, MapPin } from "lucide-react"
import Link from "next/link"

export function LogisticsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logistics Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="logistics" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23ffffff" opacity="0.1"/><rect x="35" y="35" width="10" height="10" fill="%23ffffff" opacity="0.05" rx="2"/><path d="M30 40h20M40 30v20" stroke="%23ffffff" stroke-width="0.5" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="%23dc2626"/><rect width="100%" height="100%" fill="url(%23logistics)"/><circle cx="170" cy="140" r="95" fill="%23ffffff" opacity="0.04"/><circle cx="830" cy="460" r="140" fill="%23ffffff" opacity="0.03"/><rect x="160" y="330" width="260" height="170" fill="%23ffffff" opacity="0.02" rx="18"/><rect x="610" y="130" width="210" height="140" fill="%23ffffff" opacity="0.04" rx="12"/></svg>')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl max-md:my-5 mx-auto text-center text-white">
          {/* Logistics Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Truck size={16} />
            Logistics Solutions Provider
          </motion.div>

          {/* Simple Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Supply Chain &<br />
            <span className="text-red-300">Transport Systems</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-red-100 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Advanced logistics management systems that optimize operations, reduce costs, and improve delivery times. 
            Trusted by 250+ transport companies and distribution networks worldwide.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-400" />
              <div className="text-left">
                <div className="text-lg font-bold">40%</div>
                <div className="text-sm text-red-200">Cost Reduction</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <MapPin className="w-6 h-6 text-red-400" />
              <div className="text-left">
                <div className="text-lg font-bold">50M+</div>
                <div className="text-sm text-red-200">Deliveries Tracked</div>
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
            <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-50">
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
