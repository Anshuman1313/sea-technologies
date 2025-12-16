"use client"

import Navbar from '@/components/layouts/Navbar'
import { Metadata } from 'next'
import { motion } from 'motion/react'
import { useRef } from 'react'
import AceternityBg from '@/components/gsap/AceternityBg'
import { ShimmeringText } from '@/components/gsap/Shimmering-text'


const metadata: Metadata = {
  title: 'Career Kickstart Program | Training in AI, ML, React, .NET, Angular, Python & More',
  description:
    'Join the Career Kickstart Program designed for graduates to build industry-ready skills in AI/ML, React.js, .NET, Angular, Python, Gen AI, Business Analysis, and Business Development. Start your tech career with expert-led training and hands-on learning.',
  keywords: [
    'Career Kickstart Program',
    'AI training',
    'ML training',
    'React JS course',
    '.NET training',
    'Angular course',
    'Python training',
    'Gen AI course',
    'Business Analyst training',
    'Business Development Executive training',
    'Graduate tech program',
    'Job-ready skills'
  ],
}


export default function WebDevelopmentPage() {
  const first = useRef(null);
  return (
    <>
      <Navbar />

      <main
        className="min-h-[90vh] max-md:pb-5 max-md:pt-7 flex flex-col md:flex-row justify-center items-center gap-10 md:p-6
        
        "
        ref={first}
      >
        <div className='absolute -z-10 inset-0 h-screen w-full 
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:40px_40px]
mask-b-from-1
'></div>

        {/* TEXT SECTION */}
        <motion.div className="max-w-xl text-center md:text-left"
        initial={{translateY: "8px",filter: "blur(5px)",opacity: 0 }}
          animate={{translateY: "0px",filter: "blur(0px)", opacity:1 }}
          transition={{  duration:1 , }}
          
        >
           
          <motion.h1
          
          className="text-7xl max-md:text-5xl font-bold text-gray-900 mb-4">
            Career <ShimmeringText duration={1.5}  className="text-7xl max-md:text-5xl font-bold" text="KickStart" /> Program
          </motion.h1>

          <p className="text-lg text-neutral-600  font-medium leading-relaxed">
            Industry-ready training designed for graduates to build practical skills in
            <strong> AI / ML, React.js, .NET, Angular, Python, Gen AI, Business Analysis, </strong>
            and <strong>Business Development.</strong>
            Learn from expert mentors, work on hands-on projects, and accelerate your tech career.
          </p>
        </motion.div>
       

        {/* VIDEO SECTION */}
        <video
          className="md:h-1/2 md:w-1/2 rounded-xl max-md:w-[90%]
          shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.04)] 
    transition-[colors,box-shadow] duration-100
    hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)]
          "
          loop
          preload="none"
          autoPlay
          muted
          controls
        >
          <source src="/trainingaudio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </main>

    </>
  )
}
