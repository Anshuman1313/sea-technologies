"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  BarChart3, 
  Bot, 
  Eye, 
  MessageSquare, 
  TrendingUp,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, clustering, and recommendation systems using TensorFlow and PyTorch.",
    features: ["Neural Networks", "Deep Learning", "Model Training & Optimization"],
    color: "blue",
    gradient: "from-blue-100 to-blue-50"
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    description: "Seamlessly integrate AI capabilities into existing systems with APIs, chatbots, and intelligent automation solutions.",
    features: ["API Development", "Chatbot Integration", "Process Automation"],
    color: "purple",
    gradient: "from-purple-100 to-purple-50"
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    description: "Transform complex datasets into actionable insights with advanced analytics, dashboards, and interactive visualizations.",
    features: ["Statistical Analysis", "Interactive Dashboards", "Predictive Analytics"],
    color: "blue",
    gradient: "from-blue-100 to-cyan-50"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions including object detection, facial recognition, and medical imaging analysis.",
    features: ["Object Detection", "Image Classification", "Video Analytics"],
    color: "green",
    gradient: "from-green-100 to-green-50"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Build intelligent text processing systems for sentiment analysis, language translation, and content generation.",
    features: ["Sentiment Analysis", "Language Translation", "Text Generation"],
    color: "orange",
    gradient: "from-orange-100 to-orange-50"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends, optimize operations, and make data-driven decisions with advanced predictive modeling techniques.",
    features: ["Time Series Forecasting", "Risk Analysis", "Demand Prediction"],
    color: "indigo",
    gradient: "from-indigo-100 to-indigo-50"
  }
]

export function AiDataScienceServices() {
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
            AI & Data Science Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence and data science to unlock insights,
            automate processes, and drive innovation across your organization.
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
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
                          <div className={`w-1.5 h-1.5 bg-${service.color}-500 rounded-full mr-3`}></div>
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

        {/* AI Technologies Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">AI Technology Stack</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">Python</div>
              <div className="text-blue-200">Primary Language</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">TensorFlow</div>
              <div className="text-blue-200">Deep Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Pandas</div>
              <div className="text-blue-200">Data Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Scikit-learn</div>
              <div className="text-blue-200">Machine Learning</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div>
              <div className="text-2xl font-bold mb-2">PyTorch</div>
              <div className="text-purple-200">Neural Networks</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Jupyter</div>
              <div className="text-purple-200">Development</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">OpenCV</div>
              <div className="text-purple-200">Computer Vision</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">NLTK</div>
              <div className="text-purple-200">NLP Processing</div>
            </div>
          </div>
        </motion.div>

        {/* Industry Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Industry Applications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { industry: "Healthcare", use: "Medical imaging analysis and diagnosis prediction" },
              { industry: "Finance", use: "Fraud detection and algorithmic trading systems" },
              { industry: "Retail", use: "Recommendation engines and demand forecasting" },
              { industry: "Manufacturing", use: "Predictive maintenance and quality control" }
            ].map((app) => (
              <div key={app.industry} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-3">{app.industry}</h4>
                <p className="text-sm text-gray-600">{app.use}</p>
              </div>
            ))}
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
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href="/contact" className="flex items-center gap-2">
              Get AI Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
