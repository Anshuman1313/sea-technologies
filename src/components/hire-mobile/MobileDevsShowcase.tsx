"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, MapPin, Smartphone, Tablet, MonitorSpeaker } from "lucide-react"
import Link from "next/link"

const mobileDevelopers = [
  {
    name: "James Wilson",
    title: "Senior iOS Developer",
    experience: "7 years",
    location: "San Francisco, USA",
    hourlyRate: "$60/hour",
    rating: 4.9,
    completedProjects: 89,
    skills: ["iOS Swift", "SwiftUI", "Core Data", "ARKit", "App Store"],
    speciality: "Native iOS Applications",
    availability: "Available",
    profileImage: "👨‍💻"
  },
  {
    name: "Sofia Garcia",
    title: "React Native Specialist",
    experience: "6 years",
    location: "Madrid, Spain",
    hourlyRate: "$50/hour",
    rating: 4.8,
    completedProjects: 72,
    skills: ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
    speciality: "Cross-Platform Apps",
    availability: "Available",
    profileImage: "👩‍💻"
  },
  {
    name: "Arjun Sharma",
    title: "Flutter Developer",
    experience: "5 years",
    location: "Pune, India",
    hourlyRate: "$35/hour",
    rating: 4.9,
    completedProjects: 64,
    skills: ["Flutter", "Dart", "Firebase", "SQLite", "Play Store"],
    speciality: "High-Performance Flutter Apps",
    availability: "Available",
    profileImage: "👨‍💻"
  }
]

const servicesOffered = [
  {
    icon: Smartphone,
    title: "Native App Development",
    description: "iOS and Android native apps with platform-specific features and optimal performance",
    features: ["iOS Swift/SwiftUI", "Android Kotlin/Java", "Platform Features", "App Store Optimization"]
  },
  {
    icon: Tablet,
    title: "Cross-Platform Development",
    description: "React Native and Flutter apps that work seamlessly across iOS and Android",
    features: ["React Native", "Flutter", "Code Sharing", "Faster Development"]
  },
  {
    icon: MonitorSpeaker,
    title: "App Maintenance & Support",
    description: "Ongoing maintenance, updates, performance optimization, and feature enhancements",
    features: ["Bug Fixes", "Performance Optimization", "OS Updates", "Feature Additions"]
  }
]

export function MobileDevsShowcase() {
  return (
    <section id="developers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Services We Offer - Minimal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What Our Mobile App Developers Do
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Specialized expertise in native and cross-platform mobile app development for iOS and Android.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {servicesOffered.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-emerald-600 mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="text-xs text-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Available Developers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Available Mobile App Developers
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Pre-vetted senior developers ready to build your next mobile application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mobileDevelopers.map((dev, index) => (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    {/* Profile Header */}
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{dev.profileImage}</div>
                      <h4 className="font-bold text-gray-900">{dev.name}</h4>
                      <p className="text-sm text-emerald-600 font-medium">{dev.title}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold">{dev.rating}</span>
                        </div>
                        <div className="text-xs text-gray-600">{dev.completedProjects} apps</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-sm font-semibold text-gray-900">{dev.hourlyRate}</div>
                        <div className="text-xs text-gray-600">{dev.experience} exp</div>
                      </div>
                    </div>

                    {/* Location & Availability */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs">{dev.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium">{dev.availability}</span>
                      </div>
                    </div>

                    {/* Speciality */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">{dev.speciality}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {dev.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {dev.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{dev.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
                      Hire {dev.name.split(' ')[0]}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-emerald-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-3">
            Ready to Build Your Mobile App?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-lg mx-auto">
            Tell us your app idea and platform preference. We'll match you with expert 
            mobile developers who specialize in your chosen technology stack.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contactus" className="flex items-center gap-2">
                Get Mobile App Team
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-emerald-300 text-black">
              <Link href="/contactus">Schedule Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
