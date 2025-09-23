"use client"
import React from 'react'
import { motion, MotionProps } from "motion/react";



export const SvgLines = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <TopSVG className='absolute top-2 left-36'/>
        

      <div className='size-10 bg-neutral-100   rounded-sm relative p-px overflow-hidden'>
        <div className="h-full w-full absolute [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] scale-[1.4] animate-spin"></div>
        <div className="h-full w-full absolute inset-0   [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] scale-[1.4] animate-spin delay-300"></div>
        <div className='w-full h-full bg-white rounded-[5px] relative z-20 '>
        
        </div>
      </div>
    </div>
  )
}

export const TopSVG = (props: React.SVGProps<SVGSVGElement>) => {  
  return (
    <svg
      viewBox="0 0 500 50"   // smaller height makes the line fill more space
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-16" // fills container, but 4rem tall
      {...props}
    >
      <line
        x1="20"
        y1="25"              // center vertically (half of 50)
        x2="480"             // right edge minus margin
        y2="25"
        stroke="var(--color-line)" // use CSS variable for color
        strokeWidth="6"     // THICK line
        strokeLinecap="round"
      /> 
       <line
        x1="20"
        y1="25"              // center vertically (half of 50)
        x2="480"             // right edge minus margin
        y2="25"
        stroke="url(#lineGradient)" // use CSS variable for color
        strokeWidth="6"     // THICK line
        strokeLinecap="round"
      />
     {/* <rect
        x="0"
        y="0" 
        width="480"
        height="33"   
        fill='url(#lineGradient)' 
        />          */}
     <defs>
  <motion.linearGradient
    id="lineGradient"
    gradientUnits="userSpaceOnUse"  //when using linearGradient with motion, use userSpaceOnUse this is must 
    initial={{ x1: "0%", x2: "10%" }}
    animate={{ x1: "90%", x2: "100%" }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
  >
    <stop offset="0" stopColor="var(--color-line)" />
    <stop offset="0.33" stopColor="#F17463" />
    <stop offset="0.66" stopColor="#F17463" />
    <stop offset="1" stopColor="var(--color-line)" />
  </motion.linearGradient>
</defs>

    </svg>
  );
};

