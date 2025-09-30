"use client"
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 px-2 py-2 font-sans text-xs font-medium tracking-tight text-white sm:px-4 sm:py-3 sm:text-sm md:text-right flex flex-col md:flex-row md:justify-end md:items-center gap-2">
            <span>Email: <Link href="mailto:sales@seatechnologies.com" className="underline hover:text-gray-200">sales@seatechnologies.in</Link></span>
            <span className="hidden md:inline-block">|</span>
            <span>Contact: <Link href="tel:9056641707" className="underline hover:text-gray-200">+91 90566-41707</Link></span>
           
        </div>
</>
    )
}

export default Banner
