"use client";

import { motion } from "motion/react";
import type { FC, SVGProps } from "react";

export const CpuLines: FC<SVGProps<SVGSVGElement>> = (props) => {
  const pathsBottomLeft = [
    "M380 140 L5.00002 140 Q 1.00001 140 1.00001 144 L1.00001 264", // bottom left outside
    "M388 184 L388 100 Q 389 198 388 198 L77 198 Q 73 198 73 202 L73 264", // bottom left inside
  ];

  const pathsTop = [
   
    "M426 125 L426 0", // top center
  ];
  const pathsTopright = [
     "M460 125 459 75Q459 71 463 70 L880 67 Q880 67 880 0",// top (middle right)
  ] 

  const pathsTopLeft = [
    "M388 125 L388 40 Q 388 40 384 40 L0 40 Q 1 16 0 0", // top left
  ];



  const pathsBottom = [
    "M547 150 L633 150 Q 637 150 637 154 L637 236 Q 637 240 633 240 L488 240 Q 484 240 484 244 L484 264", // bottom center
  ];

  const pathsRight = [
    "M547 130 L822 130 Q 826 130 826 134 L826 264", // right inside
  ];


  return (
    <div className="relative w-full h-[264px] overflow-hidden pointer-events-none">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="891"
        height="264"
        viewBox="0 0 891 264"
        fill="none"
        role="img"
        aria-label="Connecting lines forming a CPU with animated gradient shimmer."
        className="w-full h-auto"
      >
        {/* Bottom Left Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsBottomLeft.map((d, i) => (
            <g key={`bottom-left-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientLeft)" />
            </g>
          ))}
        </g>
        {/* Top Right Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsTopright.map((d, i) => (
            <g key={`bottom-left-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientRight)" />
            </g>
          ))}
        </g>

        {/* Bottom Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsBottom.map((d, i) => (
            <g key={`bottom-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientVertical)" />
            </g>
          ))}
        </g>

        {/* Top Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsTop.map((d, i) => (
            <g key={`top-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientUp)" />
            </g>
          ))}
        </g>

        {/* Top Left Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsTopLeft.map((d, i) => (
            <g key={`top-left-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientLeft)" />
            </g>
          ))}
        </g>

   

        {/* Right Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsRight.map((d, i) => (
            <g key={`right-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientRight)" />
            </g>
          ))}
        </g>

 

        <defs>
          {/* Left-moving gradient */}
          <motion.linearGradient
            id="cpuLineGradientLeft"
            gradientUnits="userSpaceOnUse"
            initial={{ x1: "100%", x2: "110%" }}
            animate={{ x1: "-10%", x2: "0%" }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <stop offset="0" stopColor="#f5f5f5" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#f5f5f5" />
          </motion.linearGradient>

          {/* Right-moving gradient */}
          <motion.linearGradient
            id="cpuLineGradientRight"
            gradientUnits="userSpaceOnUse"
            initial={{ x1: "0%", x2: "10%" }}
            animate={{ x1: "90%", x2: "100%" }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <stop offset="0" stopColor="#f5f5f5" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#f5f5f5" />
          </motion.linearGradient>

          {/* Down-moving vertical gradient */}
          <motion.linearGradient
            id="cpuLineGradientVertical"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            x2="0%"
            initial={{ y1: "0%", y2: "10%" }}
            animate={{ y1: "90%", y2: "100%" }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <stop offset="0" stopColor="#f5f5f5" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#f5f5f5" />
          </motion.linearGradient>

          {/* Up-moving vertical gradient */}
          <motion.linearGradient
            id="cpuLineGradientUp"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            x2="0%"
            initial={{ y1: "100%", y2: "110%" }}
            animate={{ y1: "-10%", y2: "0%" }}
            transition={{
              duration: 2.5,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <stop offset="0" stopColor="#f5f5f5" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#f5f5f5" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
};
