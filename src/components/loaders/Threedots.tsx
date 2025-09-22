"use client"
import { easeIn, motion } from "motion/react"
import React from 'react'

export const Threedots = () => {
    const transition = (x:number) => {
        return {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop" as const,
            delay: x * 0.2,
            ease: easeIn
        }
    }
    return (
        <div className="h-screen w-full flex justify-center items-center gap-2 ">
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: [0, 10, 0]

                }}
                transition={transition(0)}
                className="h-4 w-4 rounded-full bg-gray-200 opacity-80"></motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: [0, 10, 0]

                }}
                transition={transition(1)}
                className="h-4 w-4 rounded-full bg-gray-200 opacity-80"></motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: [0, 10, 0]

                }}
                transition={transition(2)}
                className="h-4 w-4 rounded-full bg-gray-200 opacity-80"></motion.div>
        </div>
    )
}


