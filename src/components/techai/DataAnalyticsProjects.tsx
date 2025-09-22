"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, TrendingUp, Eye, Users, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"

const analyticsProjects = [
  {
    title: "Healthcare Analytics Dashboard",
    category: "Healthcare",
    icon: Heart,
    description: "Real-time patient monitoring and predictive analytics system for early disease detection and treatment optimization.",
    results: ["40% reduction in readmission rates", "25% improvement in diagnosis accuracy", "Real-time patient risk scoring"],
    technologies: ["Python", "Tableau", "AWS", "Apache Kafka"],
    metrics: { 
      patientsMonitored: "50K+", 
      accuracy: "94.7%", 
      responseTime: "< 2s" 
    },
    visualizations: ["Patient Flow Dashboard", "Risk Heatmaps", "Treatment Outcome Trends"]
  },
  {
    title: "E-commerce Customer Analytics",
    category: "Retail",
    icon: ShoppingCart,
    description: "Comprehensive customer behavior analysis and personalization engine driving increased sales and customer retention.",
    results: ["35% increase in conversion rate", "50% improvement in customer lifetime value", "30% reduction in churn rate"],
    technologies: ["Python", "Power BI", "Google Analytics", "BigQuery"],
    metrics: { 
      customers: "2M+", 
      segments: "15", 
      liftInSales: "45%" 
    },
    visualizations: ["Customer Journey Maps", "Cohort Analysis", "Revenue Attribution"]
  },
  {
    title: "Supply Chain Optimization",
    category: "Manufacturing",
    icon: TrendingUp,
    description: "End-to-end supply chain analytics platform optimizing inventory, reducing costs, and improving delivery times.",
    results: ["30% reduction in inventory costs", "25% faster delivery times", "20% improvement in demand accuracy"],
    technologies: ["R", "Tableau", "SAP", "Apache Spark"],
    metrics: { 
      locations: "200+", 
      costSavings: "$2.5M", 
      efficiency: "85%" 
    },
    visualizations: ["Supply Chain Flow", "Inventory Optimization", "Demand Forecasting"]
  },
  {
    title: "Social Media Sentiment Analysis",
    category: "Marketing",
    icon: Users,
    description: "Real-time brand monitoring and sentiment analysis across social media platforms with actionable insights.",
    results: ["95% sentiment accuracy", "Real-time alert system", "Brand reputation tracking"],
    technologies: ["Python", "Elasticsearch", "Kibana", "Twitter API"],
    metrics: { 
      postsAnalyzed: "1M+", 
      brands: "50+", 
      languages: "12" 
    },
    visualizations: ["Sentiment Trends", "Topic Modeling", "Influencer Networks"]
  },
  {
    title: "Financial Risk Analytics",
    category: "Finance",
    icon: BarChart3,
    description: "Advanced risk modeling and fraud detection system for financial institutions with real-time monitoring.",
    results: ["99.2% fraud detection accuracy", "50% reduction in false positives", "$5M+ fraud prevented"],
    technologies: ["Python", "Grafana", "PostgreSQL", "Apache Flink"],
    metrics: { 
      transactions: "10M+", 
      accuracy: "99.2%", 
      latency: "10ms" 
    },
    visualizations: ["Risk Score Dashboard", "Transaction Flows", "Anomaly Detection"]
  },
  {
    title: "IoT Sensor Data Analytics",
    category: "IoT",
    icon: Eye,
    description: "Industrial IoT data processing and analytics platform for predictive maintenance and operational efficiency.",
    results: ["40% reduction in downtime", "30% maintenance cost savings", "Predictive alerts 48hrs early"],
    technologies: ["Python", "InfluxDB", "Grafana", "MQTT"],
    metrics: { 
      sensors: "10K+", 
      dataPoints: "1B+", 
      uptime: "99.7%" 
    },
    visualizations: ["Sensor Monitoring", "Predictive Maintenance", "Energy Consumption"]
  }
]

const analyticsCapabilities = [
  {
    category: "Descriptive Analytics",
    description: "What happened? Historical data analysis and reporting",
    examples: ["Sales Reports", "Performance Dashboards", "KPI Monitoring"]
  },
  {
    category: "Diagnostic Analytics", 
    description: "Why did it happen? Root cause analysis and data drilling",
    examples: ["Cohort Analysis", "Customer Segmentation", "A/B Testing"]
  },
  {
    category: "Predictive Analytics",
    description: "What will happen? Forecasting and trend analysis",
    examples: ["Demand Forecasting", "Churn Prediction", "Risk Modeling"]
  },
  {
    category: "Prescriptive Analytics",
    description: "What should we do? Optimization and recommendation",
    examples: ["Price Optimization", "Resource Allocation", "Treatment Plans"]
  }
]

export function DataAnalyticsProjects() {
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
            Data Analytics Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed raw data into actionable insights that drive 
            business growth and operational excellence across various industries.
          </p>
        </motion.div>

        {/* Analytics Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {analyticsCapabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="font-bold text-gray-900 mb-3">{capability.category}</h4>
              <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
              <div className="space-y-2">
                {capability.examples.map((example) => (
                  <div key={example} className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {example}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {analyticsProjects.map((project, index) => {
            const Icon = project.icon
            return (
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
                  {/* Project Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 mt-1">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm">{project.description}</p>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    {/* Key Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Metrics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([metric, value]) => (
                          <div key={metric} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visualizations */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Data Visualizations</h4>
                      <div className="space-y-2">
                        {project.visualizations.map((viz) => (
                          <div key={viz} className="flex items-center text-sm text-gray-600">
                            <BarChart3 className="w-4 h-4 text-blue-500 mr-2" />
                            {viz}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Analytics Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Analytics Tools & Platforms
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Programming</h4>
              <div className="space-y-3">
                {["Python", "R", "SQL", "Scala"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between">
                    <span className="text-gray-700">{tool}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Expert</Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Visualization</h4>
              <div className="space-y-3">
                {["Tableau", "Power BI", "D3.js", "Plotly"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between">
                    <span className="text-gray-700">{tool}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Advanced</Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Big Data</h4>
              <div className="space-y-3">
                {["Apache Spark", "Hadoop", "Kafka", "Airflow"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between">
                    <span className="text-gray-700">{tool}</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">Advanced</Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Cloud Platforms</h4>
              <div className="space-y-3">
                {["AWS", "Google Cloud", "Azure", "Snowflake"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between">
                    <span className="text-gray-700">{tool}</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">Expert</Badge>
                  </div>
                ))}
              </div>
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
            Ready to unlock the power of your data with AI and advanced analytics?
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Link href="/contact" className="flex items-center gap-2">
              Start Data Analytics Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
