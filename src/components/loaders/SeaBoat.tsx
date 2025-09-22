"use client"
import React from 'react'
import {motion} from 'motion/react'
import { reverse } from 'dns'

export const SeaBoat = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sailboat">
      <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={
        {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
      } stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={
        {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
             repeatType: "reverse"
        }
      } d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
      <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={
        {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
             repeatType: "reverse"
        }
      } d="M4 18l-1 -3h18l-1 3" />
      <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={
        {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
             repeatType: "reverse"
        }
      } d="M11 12h7l-7 -9v9" />
      <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={
        {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
             repeatType: "reverse"
        }
      } d="M8 7l-2 5" />
      
      </svg>
    </div>
  )
}

