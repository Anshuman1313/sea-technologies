"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Package, MapPin, BarChart3, ArrowRight, Star, Users, CheckCircle, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const logisticsSolutions = [
  {
    icon: Package,
    title: "Warehouse Management",
    description: "Complete warehouse management systems with inventory tracking, automated picking, and real-time stock monitoring.",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    features: ["Inventory Tracking", "Automated Picking", "Real-time Monitoring"]
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description: "Comprehensive fleet tracking and management solutions with route optimization, fuel monitoring, and maintenance scheduling.",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    features: ["Route Optimization", "GPS Tracking", "Maintenance Scheduling"]
  },
  {
    icon: MapPin,
    title: "Supply Chain Visibility",
    description: "End-to-end supply chain visibility with real-time tracking, predictive analytics, and performance dashboards.",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    features: ["Real-time Tracking", "Predictive Analytics", "Performance Dashboards"]
  }
]

const trustedClients = [
  { name: "Global Logistics", logo: "🚛", metric: "10K+ vehicles" },
  { name: "Express Delivery", logo: "📦", metric: "1M+ packages/day" },
  { name: "Supply Chain Pro", logo: "🏭", metric: "500+ warehouses" },
  { name: "Transport Network", logo: "🚚", metric: "50+ countries" }
]

const trustMetrics = [
  { icon: TrendingUp, label: "Cost Reduction", value: "40%" },
  { icon: Users, label: "Logistics Clients", value: "250+" },
  { icon: Star, label: "Client Satisfaction", value: "96%" },
  { icon: Award, label: "Years Logistics Focus", value: "15+" }
]

const logisticsFeatures = [
  "Real-time Tracking",
  "Route Optimization",
  "Inventory Management", 
  "Fleet Monitoring",
  "Predictive Analytics",
  "Cost Optimization"
]

export function LogisticsTrust() {
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
            Trusted Logistics Technology Partner
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We've helped transport companies, warehouses, and distribution networks build efficient 
            logistics systems that reduce costs, improve delivery times, and enhance customer satisfaction.
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
                  <Icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Logistics Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 rounded-xl p-6 mb-12"
          >
            <h4 className="font-bold text-gray-900 mb-4">Complete Logistics Features</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {logisticsFeatures.map((feature) => (
                <Badge key={feature} className="bg-red-100 text-red-800 border-red-200">
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

        {/* Logistics Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Logistics Solutions
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive logistics management platforms built for efficiency, cost reduction, and operational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {logisticsSolutions.map((solution, index) => {
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

        {/* Operational Efficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <BarChart3 className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Operational Excellence & Cost Reduction
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our logistics solutions are designed to maximize operational efficiency, reduce costs, 
              and improve customer satisfaction through real-time visibility and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Cost Optimization</h4>
              <p className="text-sm text-gray-600">Reduce operational costs by up to 40% through intelligent route planning and resource optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real-time Visibility</h4>
              <p className="text-sm text-gray-600">Complete visibility across your supply chain with real-time tracking and predictive insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Delivery Performance</h4>
              <p className="text-sm text-gray-600">Improve on-time delivery rates and customer satisfaction through optimized logistics operations</p>
            </div>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-red-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Optimize Your Logistics Operations?
          </h3>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
            Join the 250+ logistics companies that trust us with their operational excellence. 
            Let's build systems that reduce costs and improve delivery performance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contactus" className="flex items-center gap-2">
                Optimize Operations
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-300 text-black">
              <Link href="/contactus">logistics Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
