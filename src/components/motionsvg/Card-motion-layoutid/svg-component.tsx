"use client"
import React from 'react'
import { motion } from "motion/react";
import { animate } from 'motion';

export const Svg_Coponent = () => {
    return (
        <motion.div whileHover="animate" className='h-full w-full flex justify-center items-center bg-neutral-100'>
            {/* <Ellipse /> */}
            <BellIcon/> 
        </motion.div>
    )
}

export const BellIcon = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"

            className="icon icon-tabler icons-tabler-outline icon-tabler-bell-ringing fill-neutral-100 text-green-800"
        >
            {/* <path stroke="none" d="M0 0h24v24H0z" fill="red" /> */}
            <motion.path
            variants={{
                
                animate: {
                    
                     rotate: [0, -15,15,0], transition: { duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }
            }
            }}
            d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <motion.path 
            
            
             d="M9 17v1a3 3 0 0 0 6 0v-1" />
            {/* <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" /> */}
        </motion.svg>
    );

};

export const Ellipse = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="271.2"
            height="222.4"
            viewBox="926.4 229 271.2 222.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-color-mode="light"
            stroke={"currentColor"}
            className="tl-container tl-theme__force-sRGB tl-theme__light text-green-800 fill-transparent"
       
        >
            <motion.g
                transform="matrix(1, 0, 0, 1, 958.4, 261)"
                opacity="1"

            >
                <motion.path
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{ duration: 2  , ease: "easeInOut",
                        repeat: Infinity, repeatType: "reverse"
                     }}
                    strokeWidth="1.5"
                    d="M 0 79.2 C 0 35.459 46.3833 0 103.6 0 C 160.8167 0 207.2 35.459 207.2 79.2 C 207.2 122.9409 160.8167 158.4 103.6 158.4 C 46.3833 158.4 0 122.9409 0 79.2"
                    // fill="none"
                    // // stroke="var(--destructive)"
                    // stroke = "currentColor"
                    // className={" stroke-green-500 q"}

                />
            </motion.g>
        </motion.svg>
    )
}