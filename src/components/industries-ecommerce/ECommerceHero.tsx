"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function ECommerceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* E-Commerce Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="shopping" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1.5" fill="%23ffffff" opacity="0.1"/><rect x="25" y="25" width="10" height="10" fill="%23ffffff" opacity="0.05" rx="2"/></pattern></defs><rect width="100%" height="100%" fill="%23f97316"/><rect width="100%" height="100%" fill="url(%23shopping)"/><circle cx="180" cy="140" r="90" fill="%23ffffff" opacity="0.04"/><circle cx="820" cy="460" r="130" fill="%23ffffff" opacity="0.03"/><rect x="150" y="320" width="250" height="180" fill="%23ffffff" opacity="0.02" rx="12"/><rect x="600" y="120" width="200" height="140" fill="%23ffffff" opacity="0.04" rx="8"/></svg>')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* E-Commerce Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <ShoppingCart size={16} />
            E-Commerce Solutions Provider
          </motion.div>

          {/* Simple Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Online Stores &<br />
            <span className="text-orange-300">Digital Marketplaces</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-orange-100 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Scalable e-commerce platforms that drive sales and enhance customer experience. 
            Trusted by 300+ retailers and marketplace operators worldwide.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-400" />
              <div className="text-left">
                <div className="text-lg font-bold">$500M+</div>
                <div className="text-sm text-orange-200">Sales Generated</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-400" />
              <div className="text-left">
                <div className="text-lg font-bold">10M+</div>
                <div className="text-sm text-orange-200">Customers Served</div>
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
            <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
              <Link href="/contact" className="flex items-center gap-2">
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
