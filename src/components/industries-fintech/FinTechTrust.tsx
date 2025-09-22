"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CreditCard, Smartphone, Building, ArrowRight, Star, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Building,
    title: "Digital Banking",
    description: "Core banking systems, mobile banking apps, and digital transformation solutions for traditional banks.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Core Banking", "Mobile Apps", "API Integration"]
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payment gateways, digital wallets, and real-time payment processing for businesses.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Payment Gateway", "Digital Wallets", "Real-time Processing"]
  },
  {
    icon: Smartphone,
    title: "Blockchain & Crypto",
    description: "Cryptocurrency platforms, DeFi applications, and blockchain-based financial services.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Crypto Wallets", "DeFi Platforms", "Smart Contracts"]
  }
]

const trustedBy = [
  { name: "Global Bank", logo: "🏦", metric: "5M+ customers" },
  { name: "PayTech Inc", logo: "💳", metric: "$1B+ processed" },
  { name: "CryptoFin", logo: "₿", metric: "500K+ transactions" },
  { name: "DigitalPay", logo: "📱", metric: "50+ countries" }
]

const trustMetrics = [
  { icon: Shield, label: "Security Certified", value: "SOC 2 Type II" },
  { icon: Users, label: "Clients Served", value: "200+" },
  { icon: Star, label: "Client Satisfaction", value: "99%" },
  { icon: CheckCircle, label: "Uptime Guarantee", value: "99.9%" }
]

export function FinTechTrust() {
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
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped banks, payment companies, and blockchain startups build secure, 
            scalable solutions that handle billions in transactions.
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
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Trusted By Logos */}
          <div className="grid md:grid-cols-4 gap-6">
            {trustedBy.map((client, index) => (
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

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our FinTech Solutions
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive financial technology solutions built with security, compliance, and scalability in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
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

                      <Button variant="outline" className="w-full group-hover:bg-blue-50">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your FinTech Solution?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the 200+ financial institutions that trust us with their technology. 
            Let's discuss your project requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-700">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
