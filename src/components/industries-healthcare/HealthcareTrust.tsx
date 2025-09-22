"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Heart, Users } from "lucide-react"
import Link from "next/link"

export function HealthcareHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Medical Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="medical" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="2" fill="%23ffffff" opacity="0.1"/><path d="M35 40h10M40 35v10" stroke="%23ffffff" stroke-width="1" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="%23059669"/><rect width="100%" height="100%" fill="url(%23medical)"/><circle cx="150" cy="120" r="80" fill="%23ffffff" opacity="0.04"/><circle cx="850" cy="450" r="120" fill="%23ffffff" opacity="0.03"/><rect x="200" y="350" width="200" height="150" fill="%23ffffff" opacity="0.02" rx="15"/><rect x="650" y="150" width="180" height="120" fill="%23ffffff" opacity="0.04" rx="10"/></svg>')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* HIPAA Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
          >
            <Heart size={16} />
            HIPAA Compliant Healthcare Solutions
          </motion.div>

          {/* Simple Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Secure Healthcare<br />
            <span className="text-green-300">Technology Solutions</span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-green-100 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            HIPAA compliant health tech applications for hospitals, clinics, and healthcare providers. 
            Trusted by 200+ healthcare organizations to protect patient data and improve care delivery.
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
                <div className="text-lg font-bold">HIPAA Certified</div>
                <div className="text-sm text-green-200">Full Compliance</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <div className="text-lg font-bold">2M+</div>
                <div className="text-sm text-green-200">Patients Protected</div>
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
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link href="#solutions">View Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
