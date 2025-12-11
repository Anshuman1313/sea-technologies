"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import { LogoAnimated } from './LogoAnimated';
import PreloaderWrapper from './PreloaderWrapper';


export const MorphingPreloader = () => {
  const [startClip, setStartClip] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
useEffect(() => {
    if (startClip) {
      const timeout = setTimeout(() => {
        setShowPreloader(false);
      }, 1000); // just slightly more than your 1s clip

      return () => clearTimeout(timeout);
    }
  }, [startClip]);

  if (!showPreloader) return null; // completely remove from page
//   useEffect(() => {
//   // Disable scroll immediately
//   document.body.style.overflow = "hidden";

//   if (startClip) {
//     const timer = setTimeout(() => {
//       // Enable scroll after animation ends
//       document.body.style.overflow = "auto";
//     }, 1500);

//     return () => clearTimeout(timer);
//   }

//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, [startClip]);


  return (
    <>
    <PreloaderWrapper>

  
      <div className='h-screen  absolute w-full top-0 z-50   contain-content'>
        <div className="absolute h-screen w-full top-0 z-60 bg-transparent flex justify-center items-center">
          {/* <h1 className='text-background font-sans font-semibold '>Preloader Opening :)</h1> */}
          <LogoAnimated className='' onComplete={()=>setStartClip(true)} />


        </div>

        <div className="h-1/2 relative w-full ">
          {/* ClipPath Definition */}
          
          <svg className="absolute w-0 h-0">
            <clipPath id="topClip" clipPathUnits="objectBoundingBox">
              <motion.path
                initial={{ d: TopFullPath }}
                animate={
                  startClip ? {
                      d: [
                        TopFullPath,           // 4 full open
                        TopStartPath,          // 1 forward
                        // TopMiddle1Path,        // 2 forward
                        TopMiddle2Path,        // 3 forward
                        TopMiddle2PathInverse, // 5 closing
                        // TopMiddle1PathInverse, // 6 closing
                        TopStartPathInverse,   // 7 almost closed
                        TopFullPathInverse     // 8 completely closed
                      ]
                    } : {
                      d: TopFullPath
                    }
                }
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatType: "mirror",
                  times: [0.1, 0.21, 0.55, 0.71, 0.85, 1]
                }}
              />
            </clipPath>
          </svg>

          {/* Top Div */}
          <div className="absolute inset-0 bg-chart-4  [clip-path:url(#topClip)]"
              style={{
        backgroundImage: 'radial-gradient(circle, var(--chart-3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
          >
             {/* <svg width="100%" height="100%">
        <defs>
          <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke="var(--chart-3)" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg> */}


          </div>

        </div>



        <div className="h-1/2 relative w-full ">
          {/* ClipPath Definition */}
          <svg className="absolute w-0 h-0">
            <clipPath id="bottomClip" clipPathUnits="objectBoundingBox">
              <motion.path
                initial={{ d: BottomFullPath }}
                animate={
                  startClip ?
                  {
                  d: [
                    BottomFullPath,           // 4 full open
                    BottomStartPath,          // 1 forward
                    // BottomMiddle1Path,        // 2 forward
                    BottomMiddle2Path,        // 3 forward
                    BottomMiddle2PathInverse, // 5 closing
                    // BottomMiddle1PathInverse, // 6 closing
                    BottomStartPathInverse,   // 7 almost closed
                    BottomFullPathInverse     // 8 completely closed
                  ]
                } : {
                  d : BottomFullPath
                }
              
              }
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatType: "mirror",
                  times: [0, 0.1, 0.55, 0.71, 0.85, 1]
                }}
              />
            </clipPath>
          </svg>

          {/* Bottom Div */}
          <div className="absolute inset-0 bg-chart-4 [clip-path:url(#bottomClip)]"
              style={{
        backgroundImage: 'radial-gradient(circle, var(--chart-3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
          >
             {/* <svg width="100%" height="100%">
        <defs>
          <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke="var(--chart-3)" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg> */}

              
          </div>
        </div>
      </div>
  </PreloaderWrapper>
      {/* <div className="max-md:hidden absolute top-0 z-100  w-full  aspect-[1688/896] h-screen overflow-hidden ">
        <svg className="absolute w-0 h-0">
          <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
            <path
              fillRule='evenodd'
              // d="M0,0.088 C0,0.068,0.008,0.052,0.018,0.052 H0.38 C0.394,0.052,0.408,0.041,0.418,0.021 V0.021 C0.426,0.008,0.435,0,0.445,0 H0.555 C0.565,0,0.576,0.007,0.584,0.021 V0.021 C0.596,0.041,0.611,0.052,0.626,0.052 H0.982 C0.992,0.052,1,0.068,1,0.088 V1 H0.888,0"
              d="M0,0.088 C0,0.068,0.008,0.052,0.018,0.052 H0.202 C0.217,0.052,0.23,0.041,0.241,0.021 V0.021 C0.248,0.008,0.257,0,0.267,0 H0.732 C0.743,0,0.753,0.007,0.761,0.021 V0.021 C0.773,0.041,0.788,0.052,0.804,0.052 H0.982 C0.992,0.052,1,0.068,1,0.088 V1 H0.888,0"

              transform="scale(1,1)"
            />
          </clipPath>
        </svg>
        <svg className="absolute w-0 h-0">
          <clipPath id="myClipPath2" clipPathUnits="objectBoundingBox" >
            <motion.circle
            fillRule='evenodd'
              id="revealCircle"
              cx="0.5"
              cy="0.5"
              r="0"   // start tiny
              animate={{ r: 1 }} // expand to full screen
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            />
          </clipPath>
        </svg>


        <div className="absolute inset-0 bg-red-400  [clip-path:url(#myClipPath2)] ">



        </div>
      </div> */}
      {/* <div className='h-screen w-full bg-red-500 absolute top-0 z-100
          [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] '></div> */}
    </>
  )
}

// Top Paths
const TopFullPath = "M1 1.01H.8C.79 1.01.79 1.01.78 1.01H.22C.21 1.01.21 1.01.2 1.01H0V0H1V1";
const TopStartPath = "M1 1H0.8C0.79 1 0.79 0.96 0.78 0.96H0.22C0.21 0.96 0.21 1 0.2 1H0V0H1V1";
const TopMiddle1Path = "M1 0.96H0.9C0.87 0.96 0.87 0.92 0.85 0.92H0.13C0.10 0.92 0.10 0.96 0.08 0.96H0V0H1V0.96";
const TopMiddle2Path = "M1 0.88H0.95C0.92 0.88 0.87 0.84 0.85 0.84H0.15C0.13 0.84 0.08 0.88 0.05 0.88H0V0H1V0.88";
const TopMiddle2PathInverse = "M1 0.12H0.95C0.92 0.12 0.87 0.16 0.85 0.16H0.15C0.13 0.16 0.08 0.12 0.05 0.12H0V0H1V0.12";
const TopMiddle1PathInverse = "M1 0.04H0.9C0.87 0.04 0.87 0.08 0.85 0.08H0.13C0.10 0.08 0.10 0.04 0.08 0.04H0V0H1V0.04";
const TopStartPathInverse = "M1 0H0.8C0.79 0 0.79 0.04 0.78 0.04H0.22C0.21 0.04 0.21 0 0.2 0H0V0H1V0";
const TopFullPathInverse = "M1 0H0.8C0.79 0 0.79 0 0.78 0H0.22C0.21 0 0.21 0 0.2 0H0V0H1V0";


// Bottom Paths
const BottomFullPath = "M0 0H0.2C0.21 0 0.21 0 0.22 0H0.78C0.79 0 0.79 0 0.8 0H1V1H0V0";
const BottomStartPath = "M0 0H0.2C0.21 0 0.21 0.04 0.22 0.04H0.78C0.79 0.04 0.79 0 0.8 0H1V1H0V0";
const BottomMiddle1Path = "M0 0.04H0.1C0.13 0.04 0.13 0.08 0.15 0.08H0.87C0.9 0.08 0.9 0.04 0.92 0.04H1V1H0V0.04";
const BottomMiddle2Path = "M0 0.12H0.05C0.08 0.12 0.13 0.16 0.15 0.16H0.85C0.87 0.16 0.92 0.12 0.95 0.12H1V1H0V0.12";
const BottomMiddle2PathInverse = "M0 0.88H0.05C0.08 0.88 0.13 0.84 0.15 0.84H0.85C0.87 0.84 0.92 0.88 0.95 0.88H1V1H0V0.88";
const BottomMiddle1PathInverse = "M0 0.96H0.1C0.13 0.96 0.13 0.92 0.15 0.92H0.87C0.9 0.92 0.9 0.96 0.92 0.96H1V1H0V0.96";
const BottomStartPathInverse = "M0 1H0.2C0.21 1 0.21 0.96 0.22 0.96H0.78C0.79 0.96 0.79 1 0.8 1H1V1H0V1";

const BottomFullPathInverse = "M0 1H0.2C0.21 1 0.21 1 0.22 1H0.78C0.79 1 0.79 1 0.8 1H1V1H0V1";


export function BottomClipper() {
  return (
    <div className="relative w-full h-full">

      {/* ClipPath Definition */}
      <svg className="absolute w-0 h-0">
        <clipPath id="bottomClip" clipPathUnits="objectBoundingBox">
          <motion.path
            initial={{ d: BottomStartPath }}
            animate={{
              d: [
                BottomStartPath,          // 1 forward
                BottomMiddle1Path,        // 2 forward
                BottomMiddle2Path,        // 3 forward
                BottomFullPath,           // 4 full open
                BottomMiddle2PathInverse, // 5 closing
                BottomMiddle1PathInverse, // 6 closing
                BottomStartPathInverse,   // 7 almost closed
                BottomFullPathInverse     // 8 completely closed
              ]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              times: [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1]
            }}
          />
        </clipPath>
      </svg>

      {/* Bottom Div */}
      <div className="absolute inset-0 bg-red-400 [clip-path:url(#bottomClip)]"></div>
    </div>
  );
}
