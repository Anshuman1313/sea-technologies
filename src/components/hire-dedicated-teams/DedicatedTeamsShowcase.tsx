"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Code, Palette, Settings, BarChart3, Shield, Star, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

const teamTypes = [
  {
    icon: Code,
    title: "Full-Stack Development Team",
    description: "Complete development teams with frontend, backend, and DevOps engineers ready to build your product from scratch.",
    roles: ["Senior Full-Stack Developers", "Frontend Specialists", "Backend Engineers", "DevOps Engineer", "Tech Lead"],
    teamSize: "5-8 members",
    startTime: "2 weeks",
    pricing: "Contact us",
    benefits: ["End-to-end development", "Scalable architecture", "Modern tech stack", "Agile methodology"],
    color: "blue"
  },
  {
    icon: Palette,
    title: "Design & Development Team",
    description: "Perfect blend of creative designers and skilled developers to create beautiful, functional products.",
    roles: ["UI/UX Designers", "Frontend Developers", "React/Vue Specialists", "Mobile Developers", "Design Lead"],
    teamSize: "4-6 members",
    startTime: "1 week",
    pricing: "Contact us",
    benefits: ["Design-first approach", "User-centered design", "Pixel-perfect implementation", "Design systems"],
    color: "blue"
  },
  {
    icon: Settings,
    title: "Enterprise Development Team",
    description: "Senior-level teams specialized in enterprise applications, integrations, and complex business systems.",
    roles: ["Solution Architects", "Senior Developers", "Integration Specialists", "Security Engineers", "Project Manager"],
    teamSize: "8-12 members",
    startTime: "3 weeks",
    pricing: "Contact us",
    benefits: ["Enterprise expertise", "Security focused", "Scalable solutions", "Integration ready"],
    color: "blue"
  }
]

const teamRoles = [
  {
    icon: Code,
    title: "Senior Developers",
    description: "5+ years experience with modern frameworks",
    skills: ["React/Vue/Angular", "Node.js/Python", "Cloud Platforms", "Microservices"]
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    description: "Expert designers focused on user experience",
    skills: ["Figma/Adobe XD", "User Research", "Design Systems", "Prototyping"]
  },
  {
    icon: Settings,
    title: "DevOps Engineers",
    description: "Infrastructure and deployment specialists",
    skills: ["AWS/Azure/GCP", "Docker/Kubernetes", "CI/CD Pipelines", "Monitoring"]
  },
  {
    icon: BarChart3,
    title: "Project Managers",
    description: "Agile methodology and delivery experts",
    skills: ["Scrum/Kanban", "Risk Management", "Stakeholder Communication", "Quality Assurance"]
  },
  {
    icon: Shield,
    title: "QA Engineers",
    description: "Quality assurance and testing specialists",
    skills: ["Automated Testing", "Performance Testing", "Security Testing", "Bug Tracking"]
  },
  {
    icon: Users,
    title: "Business Analysts",
    description: "Requirements and process optimization experts",
    skills: ["Requirements Analysis", "Process Mapping", "Documentation", "Stakeholder Management"]
  }
]

const clientSuccess = [
  {
    company: "TechStartup Inc",
    project: "SaaS Platform Development",
    teamSize: "6 developers",
    duration: "8 months",
    result: "Successful product launch, $2M funding raised",
    testimonial: "The dedicated team delivered beyond our expectations. Professional, skilled, and committed to our success.",
    clientName: "Sarah Johnson, CTO",
    rating: 5
  },
  {
    company: "Enterprise Solutions Ltd",
    project: "Legacy System Modernization",
    teamSize: "10 developers",
    duration: "12 months",
    result: "80% performance improvement, $500K cost savings",
    testimonial: "Exceptional team that understood our complex requirements and delivered a robust solution on time.",
    clientName: "Michael Chen, VP Engineering",
    rating: 5
  },
  {
    company: "Digital Agency Pro",
    project: "Multiple Client Projects",
    teamSize: "8 developers",
    duration: "Ongoing - 18 months",
    result: "15+ successful project deliveries, 100% client satisfaction",
    testimonial: "Having a dedicated team has transformed our delivery capacity. They're truly an extension of our company.",
    clientName: "Lisa Rodriguez, Founder",
    rating: 5
  }
]

export function DedicatedTeamsShowcase() {
  return (
    <section id="teams" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Team Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pre-configured teams designed for different project needs and budgets. 
            All teams include senior-level professionals with proven track records.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {teamTypes.map((team, index) => {
            const Icon = team.icon
            return (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${team.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${team.color}-200 transition-colors`}>
                      <Icon className={`w-6 h-6 text-${team.color}-600`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {team.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {team.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Key Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{team.teamSize}</div>
                        <div className="text-xs text-gray-600">Team Size</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{team.startTime}</div>
                        <div className="text-xs text-gray-600">Start Time</div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center hidden p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                      <DollarSign className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-blue-600">{team.pricing}</div>
                      <div className="text-xs text-gray-600">All-inclusive pricing</div>
                    </div>

                    {/* Roles */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Team Composition</h4>
                      <div className="space-y-2">
                        {team.roles.map((role) => (
                          <div key={role} className="flex items-center text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 bg-${team.color}-500 rounded-full mr-2`}></div>
                            {role}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {team.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a href="/contactus">
                   <Button className={`w-full cursor-pointer bg-${team.color}-600 hover:bg-${team.color}-700 text-white`}>
                      Build This Team
                    </Button> </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Available Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Expert Professionals Available
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our team members are senior-level professionals with 5+ years of experience 
              and proven track records in their respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamRoles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">{role.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Client Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 hidden"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how dedicated teams have helped companies scale, innovate, and achieve their goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientSuccess.map((success, index) => (
              <motion.div
                key={success.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(success.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2">{success.company}</h4>
                <p className="text-sm text-blue-600 font-medium mb-3">{success.project}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Team:</span>
                    <div className="font-medium text-gray-900">{success.teamSize}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <div className="font-medium text-gray-900">{success.duration}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-gray-500 text-sm">Result:</span>
                  <div className="font-medium text-green-600 text-sm">{success.result}</div>
                </div>
                
                <blockquote className="text-sm text-gray-600 italic mb-3">
                  "{success.testimonial}"
                </blockquote>
                
                <div className="text-sm font-medium text-gray-900">
                  — {success.clientName}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Build Your Dedicated Team?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get matched with the perfect team of senior developers, designers, and project managers. 
            Start your project in just 2 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contactus" className="flex items-center gap-2">
                Start Building My Team
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 bg-neutral-100 text-black">
              <Link href="/contactus">Schedule a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
