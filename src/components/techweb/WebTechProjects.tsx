"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    category: "E-commerce",
    color: "blue"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management system.",
    image: "/api/placeholder/600/400",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Dashboard",
    color: "blue"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment booking and telemedicine features.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "WebRTC", "Firebase", "Tailwind"],
    category: "Healthcare",
    color: "blue"
  }
]

export function WebTechProjects() {
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent web development projects that showcase
            our expertise in modern technologies and user-centered design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mb-4 mx-auto flex items-center justify-center">
                        <ExternalLink size={24} />
                      </div>
                      <p className="font-medium">{project.category} Project</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary">
                        <ExternalLink size={16} className="mr-2" />
                        View Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to bring your web application idea to life?
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contactus" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
