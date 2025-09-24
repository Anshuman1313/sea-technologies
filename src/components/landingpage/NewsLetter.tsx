'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setMessage('Thanks for subscribing!')
      setEmail('')
      setLoading(false)
    }, 1000)
  }

  return (
    <section className="py-16 px-4 max-h-[50vh] min-h-[40vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Sign up for our newsletter
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Be the first to know about releases and industry news and insights.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-xl"
                />
              </div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Success Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-medium"
              >
                {message}
              </motion.div>
            )}

            {/* Privacy Policy */}
            <p className="text-sm text-gray-500">
              We care about your data in our{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
                privacy policy
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
