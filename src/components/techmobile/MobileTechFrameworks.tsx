"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const frameworks = [
  {
    name: "React Native",
    description: "Facebook's cross-platform framework for building native mobile apps using React and JavaScript.",
    features: ["Hot Reloading", "Native Performance", "Large Community", "Code Sharing"],
    advantages: ["Faster Development", "Cost Effective", "Single Codebase"],
    logo: "RN",
    color: "blue",
    popularity: 85
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit for building beautiful, natively compiled applications from a single codebase.",
    features: ["Hot Reload", "Widget System", "Dart Language", "High Performance"],
    advantages: ["Beautiful UI", "Fast Development", "Great Performance"],
    logo: "FL",
    color: "blue",
    popularity: 90
  },
  {
    name: "Native iOS",
    description: "Platform-specific development using Swift and Xcode for maximum iOS performance and features.",
    features: ["SwiftUI", "Xcode IDE", "App Store Optimization", "Platform Features"],
    advantages: ["Best Performance", "Latest Features", "Platform Optimization"],
    logo: "iOS",
    color: "blue",
    popularity: 75
  },
  {
    name: "Native Android",
    description: "Android-specific development using Kotlin and Android Studio for optimal Android experience.",
    features: ["Jetpack Compose", "Material Design", "Google Services", "Performance"],
    advantages: ["Native Feel", "Advanced Features", "Google Integration"],
    logo: "And",
    color: "blue",
    popularity: 80
  }
]

const techStack = {
  "Development Tools": [
    { name: "VS Code", category: "IDE" },
    { name: "Xcode", category: "iOS IDE" },
    { name: "Android Studio", category: "Android IDE" },
    { name: "Expo", category: "Development Platform" }
  ],
  "Backend Services": [
    { name: "Firebase", category: "BaaS" },
    { name: "AWS Amplify", category: "Cloud" },
    { name: "Supabase", category: "Database" },
    { name: "Node.js", category: "Runtime" }
  ],
  "Testing & Analytics": [
    { name: "Jest", category: "Testing" },
    { name: "Detox", category: "E2E Testing" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Crashlytics", category: "Crash Reporting" }
  ],
  "Deployment": [
    { name: "App Store Connect", category: "iOS" },
    { name: "Google Play Console", category: "Android" },
    { name: "Fastlane", category: "CI/CD" },
    { name: "CodePush", category: "Updates" }
  ]
}

export function MobileTechFrameworks() {
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
            Mobile Development Frameworks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the most powerful and proven mobile development frameworks
            to build applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Frameworks Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">{framework.logo}</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {framework.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${framework.popularity}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{framework.popularity}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {framework.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {framework.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs justify-start">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {framework.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Complete Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, tools]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
                <div className="space-y-3">
                  {tools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{tool.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Mobile App Development Process
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Strategy", description: "Market research and app planning" },
              { step: "02", title: "Design", description: "UI/UX design and prototyping" },
              { step: "03", title: "Develop", description: "Cross-platform app development" },
              { step: "04", title: "Test", description: "QA testing and optimization" },
              { step: "05", title: "Deploy", description: "App store submission and launch" }
            ].map((process) => (
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
