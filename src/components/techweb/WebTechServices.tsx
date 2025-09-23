"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Zap, 
  Shield, 
  BarChart3,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "React Development",
    description: "Build dynamic, interactive user interfaces with React's component-based architecture and modern hooks.",
    features: ["Component Architecture", "State Management", "Performance Optimization"],
    color: "blue"
  },
  {
    icon: Zap,
    title: "Next.js Applications",
    description: "Full-stack web apps with server-side rendering, API routes, and optimized performance.",
    features: ["SSR/SSG", "API Integration", "SEO Optimization"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "App-like experiences in the browser with offline capability and push notifications.",
    features: ["Offline Support", "Push Notifications", "App-like Experience"],
    color: "blue"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and admin panels.",
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard"],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Secure Applications",
    description: "Enterprise-grade security with authentication, authorization, and data protection.",
    features: ["JWT Authentication", "Data Encryption", "Security Auditing"],
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Track user behavior, conversion rates, and performance metrics with integrated analytics.",
    features: ["User Tracking", "Conversion Analytics", "Performance Monitoring"],
    color: "blue"
  }
]

export function WebTechServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Web Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple websites to complex web applications, we deliver scalable solutions
            that grow with your business using the latest technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${service.color}-200 transition-colors`}>
                      <Icon className={`w-7 h-7 text-${service.color}-600`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contactus" className="flex items-center gap-2">
              Get Custom Quote
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
