"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowRight, Star, MapPin, Server, Database, Shield } from "lucide-react"
import Link from "next/link"

const backendDevelopers = [
  {
    name: "David Kim",
    title: "Senior Node.js Developer",
    experience: "8 years",
    location: "Toronto, Canada",
    hourlyRate: "$50/hour",
    rating: 4.9,
    completedProjects: 94,
    skills: ["Node.js", "Express", "MongoDB", "Redis", "AWS"],
    speciality: "Scalable API Architecture",
    availability: "Available",
    profileImage: "👨‍💻"
  },
  {
    name: "Ana Petrov",
    title: ".NET Core Specialist",
    experience: "6 years",
    location: "Sofia, Bulgaria",
    hourlyRate: "$45/hour",
    rating: 4.8,
    completedProjects: 78,
    skills: [".NET Core", "C#", "SQL Server", "Azure", "Docker"],
    speciality: "Enterprise Applications",
    availability: "Available",
    profileImage: "👩‍💻"
  },
  {
    name: "Raj Patel",
    title: "Java Backend Engineer",
    experience: "7 years",
    location: "Mumbai, India",
    hourlyRate: "$35/hour",
    rating: 4.9,
    completedProjects: 112,
    skills: ["Java", "SpringBoot", "PostgreSQL", "Kafka", "Docker"],
    speciality: "Microservices Architecture",
    availability: "Available",
    profileImage: "👨‍💻"
  }
]

const servicesOffered = [
  {
    icon: Server,
    title: "API Development",
    description: "RESTful and GraphQL APIs with authentication, rate limiting, and documentation",
    features: ["REST APIs", "GraphQL", "Authentication", "Rate Limiting"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database schemas, queries, and data modeling for performance",
    features: ["Database Optimization", "Data Modeling", "Query Performance", "Migrations"]
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Secure backend systems with CI/CD, monitoring, and cloud deployment",
    features: ["Security Best Practices", "CI/CD Pipelines", "Cloud Deployment", "Monitoring"]
  }
]

export function BackendDevsShowcase() {
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
            What Our Backend Developers Do
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Specialized expertise in server-side technologies, databases, and scalable system architecture.
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
                  <Icon className="w-8 h-8 text-slate-600 mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="text-xs text-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mr-2"></div>
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
              Available Backend Developers
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Pre-vetted senior developers ready to build your server-side infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {backendDevelopers.map((dev, index) => (
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
                      <p className="text-sm text-slate-600 font-medium">{dev.title}</p>
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
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white text-sm">
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
          className="text-center bg-slate-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-3">
            Need a Custom Backend Team?
          </h3>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Tell us your technology stack and requirements. We'll match you with expert 
            backend developers who specialize in your preferred frameworks.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contactus" className="flex items-center gap-2">
                Get Custom Team
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-200 hover:bg-slate-700">
              <Link href="/schedule">Schedule Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
