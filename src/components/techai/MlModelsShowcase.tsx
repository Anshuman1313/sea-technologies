"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Eye, MessageSquare, Users, ShoppingCart } from "lucide-react"

const mlModels = [
  {
    name: "Customer Churn Prediction",
    category: "Classification",
    icon: Users,
    description: "Predicts which customers are likely to churn based on behavior patterns and demographics.",
    accuracy: "94.2%",
    framework: "Scikit-learn",
    algorithm: "Random Forest",
    features: ["Real-time Scoring", "Feature Importance", "SHAP Explanations"],
    useCase: "Retail & SaaS",
    metrics: { precision: "93.1%", recall: "95.3%", f1Score: "94.2%" }
  },
  {
    name: "Sales Forecasting Model",
    category: "Time Series",
    icon: TrendingUp,
    description: "Forecasts future sales trends using historical data and seasonal patterns.",
    accuracy: "89.7%",
    framework: "TensorFlow",
    algorithm: "LSTM Neural Network",
    features: ["Seasonal Adjustment", "Multi-step Forecasting", "Confidence Intervals"],
    useCase: "E-commerce",
    metrics: { mae: "2.3%", rmse: "3.1%", mape: "4.2%" }
  },
  {
    name: "Image Classification System",
    category: "Computer Vision",
    icon: Eye,
    description: "Classifies and detects objects in images with high precision using deep learning.",
    accuracy: "96.8%",
    framework: "PyTorch",
    algorithm: "ResNet-50",
    features: ["Real-time Detection", "Multi-class Classification", "Transfer Learning"],
    useCase: "Manufacturing",
    metrics: { top1: "96.8%", top5: "99.2%", fps: "45" }
  },
  {
    name: "Sentiment Analysis Engine",
    category: "Natural Language Processing",
    icon: MessageSquare,
    description: "Analyzes sentiment in text data with contextual understanding and emotion detection.",
    accuracy: "92.5%",
    framework: "Transformers",
    algorithm: "BERT",
    features: ["Emotion Detection", "Multilingual Support", "Context Awareness"],
    useCase: "Social Media",
    metrics: { precision: "91.3%", recall: "93.7%", f1Score: "92.5%" }
  },
  {
    name: "Recommendation Engine",
    category: "Collaborative Filtering",
    icon: ShoppingCart,
    description: "Provides personalized product recommendations using collaborative and content-based filtering.",
    accuracy: "87.4%",
    framework: "TensorFlow",
    algorithm: "Neural Collaborative Filtering",
    features: ["Real-time Recommendations", "Cold Start Handling", "A/B Testing"],
    useCase: "E-commerce",
    metrics: { precision: "85.2%", recall: "89.6%", ndcg: "87.4%" }
  },
  {
    name: "Fraud Detection Model",
    category: "Anomaly Detection",
    icon: Brain,
    description: "Detects fraudulent transactions in real-time using advanced anomaly detection techniques.",
    accuracy: "98.1%",
    framework: "Scikit-learn",
    algorithm: "Isolation Forest + XGBoost",
    features: ["Real-time Scoring", "Low False Positives", "Explainable AI"],
    useCase: "Financial Services",
    metrics: { precision: "96.7%", recall: "99.4%", auc: "98.1%" }
  }
]

const modelCategories = [
  { name: "Supervised Learning", count: 15, description: "Classification and regression models" },
  { name: "Unsupervised Learning", count: 8, description: "Clustering and dimensionality reduction" },
  { name: "Deep Learning", count: 12, description: "Neural networks and computer vision" },
  { name: "Reinforcement Learning", count: 5, description: "Decision making and optimization" },
  { name: "Time Series", count: 7, description: "Forecasting and trend analysis" },
  { name: "NLP Models", count: 10, description: "Text processing and language understanding" }
]

export function MlModelsShowcase() {
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
            Machine Learning Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of production-ready ML models that have been deployed
            across various industries to solve complex business challenges.
          </p>
        </motion.div>

        {/* Model Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {modelCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">{category.count}</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">{category.name}</h4>
              <p className="text-xs text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured ML Models */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mlModels.map((model, index) => {
            const Icon = model.icon
            return (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-white">{model.name}</CardTitle>
                          <Badge variant="secondary" className="bg-white bg-opacity-20 text-white border-0 mt-1">
                            {model.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{model.accuracy}</div>
                        <div className="text-sm opacity-80">Accuracy</div>
                      </div>
                    </div>
                    <p className="text-blue-100">{model.description}</p>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    {/* Technical Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Framework</div>
                        <div className="text-sm text-gray-600">{model.framework}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Algorithm</div>
                        <div className="text-sm text-gray-600">{model.algorithm}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {model.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(model.metrics).map(([metric, value]) => (
                          <div key={metric} className="text-center">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 uppercase">{metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Use Case</div>
                        <div className="text-sm text-gray-600">{model.useCase}</div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Production Ready
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Model Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            ML Model Development Process
          </h3>
          
          <div className="grid md:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Data Collection", description: "Gather and validate training data" },
              { step: "02", title: "EDA & Preprocessing", description: "Explore and clean the dataset" },
              { step: "03", title: "Feature Engineering", description: "Create meaningful features" },
              { step: "04", title: "Model Training", description: "Train and tune ML algorithms" },
              { step: "05", title: "Validation", description: "Test model performance" },
              { step: "06", title: "Deployment", description: "Deploy to production environment" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{process.title}</h4>
                <p className="text-xs text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
