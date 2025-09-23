"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Star, Users } from "lucide-react"
import Link from "next/link"

const showcaseApps = [
  {
    name: "HealthTracker Pro",
    category: "Healthcare",
    description: "Comprehensive health monitoring app with AI-powered insights and telemedicine integration.",
    downloads: "500K+",
    rating: 4.8,
    framework: "React Native",
    features: ["Real-time Monitoring", "AI Analytics", "Telemedicine", "Wearable Integration"],
    stats: { users: "250K", rating: "4.8", downloads: "500K+" }
  },
  {
    name: "ShopEasy Mobile",
    category: "E-commerce",
    description: "Feature-rich shopping app with AR try-on, one-click checkout, and personalized recommendations.",
    downloads: "1M+",
    rating: 4.9,
    framework: "Flutter",
    features: ["AR Try-On", "One-Click Checkout", "Push Notifications", "Offline Mode"],
    stats: { users: "750K", rating: "4.9", downloads: "1M+" }
  },
  {
    name: "FitQuest Gaming",
    category: "Fitness & Gaming",
    description: "Gamified fitness app that turns workouts into interactive adventures with social features.",
    downloads: "300K+",
    rating: 4.7,
    framework: "Native iOS/Android",
    features: ["Gamification", "Social Features", "AR Workouts", "Progress Tracking"],
    stats: { users: "200K", rating: "4.7", downloads: "300K+" }
  }
]

export function MobileTechShowcase() {
  return (
    <section className="py-20 bg-gray-50">
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
            Featured Mobile Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover mobile applications we've built that are making a real impact
            in app stores and user's daily lives across different industries.
          </p>
        </motion.div>

        {/* App Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {showcaseApps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* App Icon & Header */}
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {app.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0">
                      {app.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {app.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {app.downloads}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Framework Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {app.framework}
                    </Badge>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature) => (
                        <div key={feature} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{app.stats.users}</div>
                      <div className="text-xs text-gray-500">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{app.stats.rating}★</div>
                      <div className="text-xs text-gray-500">App Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{app.stats.downloads}</div>
                      <div className="text-xs text-gray-500">Downloads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* App Store Guidelines & Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            App Store Success Guaranteed
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">iOS App Store</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  App Store Review Guidelines Compliance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Human Interface Guidelines
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  App Store Optimization (ASO)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  TestFlight Beta Testing
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Google Play Store</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Google Play Policy Compliance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Material Design Guidelines
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Play Console Optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Internal Testing & Staged Rollouts
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">99.9% App Store Approval Rate</span>
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
          <p className="text-gray-600 mb-6">
            Ready to build your next mobile app that users will love?
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contactus" className="flex items-center gap-2">
              Start Mobile Development
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
