"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import {motion} from 'motion/react'

const Card = () => {
  return (
    <motion.div className='h-screen w-full flex justify-center items-center bg-gray-50'>
      <div className={cn(
        'h-100 w-80 p-4 text-red-700 rounded-lg bg-white',
        'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        )}>
      hi heelo how are you 
    
      </div>
    </motion.div>
  )
}

export default Card
