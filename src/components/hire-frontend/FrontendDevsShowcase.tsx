"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, MapPin, Clock, Code, Palette, Smartphone } from "lucide-react"
import Link from "next/link"

const frontendDevelopers = [
  {
    name: "Alex Chen",
    title: "Senior React Developer",
    experience: "6 years",
    location: "San Francisco, USA",
    hourlyRate: "$45/hour",
    rating: 4.9,
    completedProjects: 87,
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    speciality: "Enterprise React Applications",
    availability: "Available",
    profileImage: "👨‍💻"
  },
  {
    name: "Sarah Johnson",
    title: "Angular Specialist",
    experience: "5 years",
    location: "London, UK",
    hourlyRate: "$40/hour",
    rating: 4.8,
    completedProjects: 65,
    skills: ["Angular", "RxJS", "TypeScript", "Material UI", "NgRx"],
    speciality: "Complex Angular Solutions",
    availability: "Available",
    profileImage: "👩‍💻"
  },
  {
    name: "Miguel Rodriguez",
    title: "Vue.js Expert",
    experience: "4 years",
    location: "Barcelona, Spain",
    hourlyRate: "$38/hour",
    rating: 4.9,
    completedProjects: 52,
    skills: ["Vue.js", "Nuxt.js", "Vuex", "JavaScript", "SCSS"],
    speciality: "Interactive Vue Applications",
    availability: "Available",
    profileImage: "👨‍💻"
  }
]

const servicesOffered = [
  {
    icon: Code,
    title: "React Development",
    description: "Modern React apps with hooks, context, and latest best practices",
    features: ["Component Libraries", "State Management", "Performance Optimization"]
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect implementation of designs with smooth animations",
    features: ["Responsive Design", "CSS Animations", "Design Systems"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Progressive web apps and responsive designs that work everywhere",
    features: ["PWA Development", "Mobile Optimization", "Cross-browser Testing"]
  }
]

export function FrontendDevsShowcase() {
  return (
    <section id="developers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Services We Offer - Minimal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What Our Frontend Developers Do
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Specialized expertise in modern frontend frameworks and cutting-edge development practices.
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
                  <Icon className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="text-xs text-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
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
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Available Frontend Developers
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Pre-vetted senior developers ready to join your team immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {frontendDevelopers.map((dev, index) => (
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
                      <p className="text-sm text-blue-600 font-medium">{dev.title}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold">{dev.rating}</span>
                        </div>
                        <div className="text-xs text-gray-600">{dev.completedProjects} projects</div>
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
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
          className="text-center bg-blue-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-3">
            Need a Custom Frontend Team?
          </h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Tell us your requirements and we'll match you with the perfect frontend developers 
            for your project in 48 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contactus" className="flex items-center gap-2">
                Get Custom Team
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-700">
              <Link href="/schedule">Schedule Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
