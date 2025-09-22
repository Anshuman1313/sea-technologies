"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Store, Smartphone, TrendingUp, ArrowRight, Star, Users, CheckCircle, Award } from "lucide-react"
import Link from "next/link"

const ecommerceSolutions = [
  {
    icon: Store,
    title: "Custom Online Stores",
    description: "Fully customizable e-commerce websites with advanced features, payment integration, and inventory management.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Custom Design", "Payment Gateway", "Inventory Management"]
  },
  {
    icon: ShoppingCart,
    title: "Multi-Vendor Marketplaces",
    description: "Complete marketplace platforms connecting multiple sellers with buyers, featuring commission tracking and vendor management.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Vendor Management", "Commission Tracking", "Multi-Payment Support"]
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce Apps",
    description: "Native and cross-platform mobile shopping apps with push notifications, one-click checkout, and offline capabilities.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Mobile Apps", "Push Notifications", "Offline Mode"]
  }
]

const trustedClients = [
  { name: "ShopMart", logo: "🛒", metric: "$50M+ sales" },
  { name: "Fashion Hub", logo: "👗", metric: "500K+ customers" },
  { name: "Tech Bazaar", logo: "💻", metric: "10K+ products" },
  { name: "Local Market", logo: "🏪", metric: "1K+ vendors" }
]

const trustMetrics = [
  { icon: TrendingUp, label: "Sales Generated", value: "$500M+" },
  { icon: Users, label: "E-Commerce Clients", value: "300+" },
  { icon: Star, label: "Client Satisfaction", value: "98%" },
  { icon: Award, label: "Years E-Commerce Focus", value: "12+" }
]

const ecommerceFeatures = [
  "Secure Payment Processing",
  "Advanced Analytics",
  "SEO Optimization", 
  "Multi-Currency Support",
  "Real-time Inventory",
  "Customer Support Tools"
]

export function ECommerceTrust() {
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
            Trusted E-Commerce Technology Partner
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped retailers, brands, and marketplace operators build high-converting 
            e-commerce platforms that scale with their business growth.
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
                  <Icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* E-Commerce Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 rounded-xl p-6 mb-12"
          >
            <h4 className="font-bold text-gray-900 mb-4">Complete E-Commerce Features</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {ecommerceFeatures.map((feature) => (
                <Badge key={feature} className="bg-orange-100 text-orange-800 border-orange-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {feature}
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

        {/* E-Commerce Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our E-Commerce Solutions
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive e-commerce platforms built for scalability, performance, and conversion optimization.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecommerceSolutions.map((solution, index) => {
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

                      <Button variant="outline" className="w-full group-hover:bg-orange-50">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* E-Commerce Performance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Performance That Drives Sales
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our e-commerce platforms are optimized for speed, conversions, and user experience, 
              resulting in higher sales and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Loading</h4>
              <p className="text-sm text-gray-600">Sub-3 second page load times for better user experience and SEO</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">High Conversions</h4>
              <p className="text-sm text-gray-600">Optimized checkout process and UX design for maximum conversions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Mobile First</h4>
              <p className="text-sm text-gray-600">Responsive design optimized for mobile shopping experience</p>
            </div>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-orange-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Launch Your E-Commerce Platform?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the 300+ retailers who trust us with their e-commerce success. 
            Let's build a platform that scales with your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Store
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-300 text-orange-100 hover:bg-orange-700">
              <Link href="/case-studies">E-Commerce Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
