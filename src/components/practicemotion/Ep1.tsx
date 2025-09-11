"use client"
import React from 'react'
import { motion } from 'motion/react'
const Ep1 = () => {
    return (
        <div
            // style={{
            //     background: 'radial-gradient(circle, rgba(6,182,212,0.2) 1px, transparent 1px)',
            //     backgroundSize: '8px 8px',
            //     backgroundRepeat: 'repeat',

            // }}

            className='w-full bg-white h-screen flex flex-col justify-center items-center text-center px-4'>
            <motion.div
              whileHover={{
                rotateX: 25,
                rotateY: 10,
              }}
              style={{
                translateZ: 100,
              }}

                className='relative group transition-opacity duration-300 rounded-lg bg-neutral-200  px-12 py-2 '>
                    <span className='group-hover:text-red-700 transition-colors duration-300'>
                        
                        Sea Technologies
                        </span> 
                <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-red-700 to-transparent h-px mx-auto w-[80%]'> </span>
                <span className='absolute inset-x-0 opacity-0 group-hover:opacity-100 bottom-0 blur-sm  bg-gradient-to-r from-transparent via-red-700 to-transparent h-[4px] mx-auto w-[80%]'> </span>
            </motion.div>

        </div>
    )
}

export default Ep1
