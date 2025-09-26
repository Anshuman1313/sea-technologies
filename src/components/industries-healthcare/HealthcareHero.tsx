"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Smartphone, Monitor, ArrowRight, Star, Users, CheckCircle, Award } from "lucide-react"
import Link from "next/link"

const healthcareSolutions = [
  {
    icon: Monitor,
    title: "Telemedicine Platforms",
    description: "Secure video consultations, remote patient monitoring, and virtual care delivery systems.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Video Consultations", "Remote Monitoring", "Secure Messaging"]
  },
  {
    icon: Heart,
    title: "Patient Management",
    description: "HIPAA compliant patient portals, appointment scheduling, and health record management.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Patient Portals", "EHR Integration", "Appointment Booking"]
  },
  {
    icon: Smartphone,
    title: "Mobile Health Apps",
    description: "Secure mobile applications for patient engagement, medication tracking, and health monitoring.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Mobile Apps", "Health Tracking", "Medication Reminders"]
  }
]

const trustedClients = [
  { name: "Regional Medical Center", logo: "🏥", metric: "50K+ patients" },
  { name: "HealthTech Solutions", logo: "⚕️", metric: "200+ providers" },
  { name: "Digital Health Inc", logo: "💊", metric: "5M+ records" },
  { name: "CarePlus Network", logo: "🩺", metric: "100+ clinics" }
]

const trustMetrics = [
  { icon: Shield, label: "HIPAA Compliant", value: "100%" },
  { icon: Users, label: "Healthcare Clients", value: "200+" },
  { icon: Star, label: "Client Satisfaction", value: "99%" },
  { icon: Award, label: "Years Healthcare Focus", value: "10+" }
]

const certifications = [
  "HIPAA Compliance",
  "HITECH Act",
  "FDA 21 CFR Part 11", 
  "SOC 2 Type II"
]

export function HealthcareTrust() {
  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Healthcare Technology Partner
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped hospitals, clinics, and health tech companies build secure, 
            compliant solutions that protect patient data and improve healthcare outcomes.
          </p>

          {/* Trust Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {trustMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-xl p-6 mb-12"
          >
            <h4 className="font-bold text-gray-900 mb-4">Healthcare Certifications & Compliance</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="w-3 h-3 mr-1" />
                  {cert}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Trusted By Logos */}
          <div className="grid md:grid-cols-4 gap-6">
            {trustedClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl mb-2">{client.logo}</div>
                <div className="font-semibold text-gray-900 text-sm">{client.name}</div>
                <div className="text-xs text-gray-500">{client.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Healthcare Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Healthcare Solutions
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive healthcare technology solutions built with HIPAA compliance, security, and patient care in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Background Image Header */}
                    <div 
                      className="h-32 relative"
                      style={{ background: solution.image }}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                     
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* HIPAA Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              HIPAA Compliance Guaranteed
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every healthcare application we build meets strict HIPAA requirements for protecting 
              patient health information and ensuring regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Data Encryption</h4>
              <p className="text-sm text-gray-600">End-to-end encryption for all patient data in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Access Control</h4>
              <p className="text-sm text-gray-600">Role-based access control and multi-factor authentication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Audit Logs</h4>
              <p className="text-sm text-gray-600">Comprehensive audit trails and compliance reporting</p>
            </div>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-green-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your Healthcare Solution?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the 200+ healthcare organizations that trust us with their technology needs. 
            Let's discuss your HIPAA compliant application requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contactus" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-300 text-black">
              <Link href="/contactus">Healthcare Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
