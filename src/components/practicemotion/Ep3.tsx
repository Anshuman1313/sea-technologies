"use client"
import React from 'react'
import { BackgroundGraphics } from './background-graphics'
import { Content } from './Ep2/Content'
import OceanLinesBackground from './SvgLines/OceanLines'



const Ep3 = () => {
  return (
    <div className='w-full h-screen relative '>
       {/* <BackgroundGraphics /> */}
        <OceanLinesBackground/>
    </div>
  )
}

export default Ep3
