"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Smartphone, 
  Tablet, 
  Watch, 
  ShoppingCart, 
  Heart, 
  Gamepad2,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description: "Build once, deploy everywhere. React Native and Flutter apps that work seamlessly on iOS and Android.",
    features: ["Single Codebase", "Native Performance", "Faster Time-to-Market"],
    color: "blue"
  },
  {
    icon: Tablet,
    title: "Native Development",
    description: "Platform-specific apps built with Swift/iOS and Kotlin/Android for maximum performance and features.",
    features: ["Platform Optimization", "Advanced Features", "Superior Performance"],
    color: "blue"
  },
  {
    icon: Watch,
    title: "Wearable Apps",
    description: "Smart watch applications for Apple Watch, Wear OS, and other wearable devices with health integrations.",
    features: ["Health Tracking", "Notifications", "Voice Commands"],
    color: "blue"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Mobile",
    description: "Complete mobile commerce solutions with payment gateways, inventory management, and analytics.",
    features: ["Payment Integration", "Push Notifications", "Offline Support"],
    color: "blue"
  },
  {
    icon: Heart,
    title: "Healthcare Apps",
    description: "HIPAA-compliant medical applications with telemedicine, patient records, and health monitoring.",
    features: ["HIPAA Compliance", "Telemedicine", "Health Analytics"],
    color: "blue"
  },
  {
    icon: Gamepad2,
    title: "Gaming & AR",
    description: "Interactive mobile games and augmented reality experiences with engaging user interfaces.",
    features: ["AR/VR Support", "Real-time Multiplayer", "In-App Purchases"],
    color: "blue"
  }
]

export function MobileTechServices() {
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
            Mobile App Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to App Store deployment, we deliver mobile applications that engage users
            and drive business growth across all platforms and devices.
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

        {/* App Store Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 hidden rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">App Store Success</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Apps Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5M+</div>
              <div className="text-blue-200">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Approval Rate</div>
            </div>
          </div>
        </motion.div>

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
              Get App Development Quote
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
