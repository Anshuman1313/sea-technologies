"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

const techStack = {
  "Frontend Frameworks": [
    { name: "React", level: "Expert", color: "blue" },
    { name: "Next.js", level: "Expert", color: "blue" },
    { name: "Vue.js", level: "Advanced", color: "blue" },
    { name: "Angular", level: "Intermediate", color: "blue" }
  ],
  "Languages": [
    { name: "TypeScript", level: "Expert", color: "blue" },
    { name: "JavaScript", level: "Expert", color: "blue" },
    { name: "HTML5", level: "Expert", color: "blue" },
    { name: "CSS3", level: "Expert", color: "blue" }
  ],
  "Styling & UI": [
    { name: "Tailwind CSS", level: "Expert", color: "blue" },
    { name: "Styled Components", level: "Advanced", color: "blue" },
    { name: "Material-UI", level: "Advanced", color: "blue" },
    { name: "Framer Motion", level: "Advanced", color: "blue" }
  ],
  "Backend & APIs": [
    { name: "Node.js", level: "Advanced", color: "blue" },
    { name: "Express.js", level: "Advanced", color: "blue" },
    { name: "GraphQL", level: "Intermediate", color: "blue" },
    { name: "REST APIs", level: "Expert", color: "blue" }
  ],
  "Databases": [
    { name: "MongoDB", level: "Advanced", color: "blue" },
    { name: "PostgreSQL", level: "Advanced", color: "blue" },
    { name: "Firebase", level: "Advanced", color: "blue" },
    { name: "Supabase", level: "Intermediate", color: "blue" }
  ],
  "Tools & Deployment": [
    { name: "Git", level: "Expert", color: "blue" },
    { name: "Docker", level: "Intermediate", color: "blue" },
    { name: "Vercel", level: "Expert", color: "blue" },
    { name: "AWS", level: "Intermediate", color: "blue" }
  ]
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-blue-600"
    case "Advanced": return "bg-blue-500"
    case "Intermediate": return "bg-blue-400"
    default: return "bg-blue-300"
  }
}

export function WebTechStack() {
  return (
    <section className="py-20 bg-white">
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
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use cutting-edge technologies and proven frameworks to build robust,
            scalable web applications that stand the test of time.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <Badge 
                      className={`${getLevelColor(tech.level)} text-white text-xs`}
                      variant="secondary"
                    >
                      {tech.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding requirements and planning architecture" },
              { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", description: "Building with modern frameworks and best practices" },
              { step: "04", title: "Deploy", description: "Testing, optimization, and production deployment" }
            ].map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
