'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
   
      transition={{ duration: 0.5 }}
         whileInView={{ opacity: 1, y: 0 }} // animate when in view
              viewport={{ once: true, amount: 0.3 }} 
      // once: true → only animate the first time it comes into view
      // amount: 0.3 → triggers when 30% of the component is visible
    >
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center text-xl ">
          <CardTitle className='font-bold'>Join Our Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button 
                type="submit" 
                className="w-full bg-blue-500 "
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </motion.div>
            {message && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-sm text-center"
              >
                {message}
              </motion.p>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
