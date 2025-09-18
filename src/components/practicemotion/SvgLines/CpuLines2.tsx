"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import type { FC, SVGProps } from "react";

interface CardPosition {
  x: number;
  y: number;
  id: string;
  title: string;
}

export const CpuLines2: FC<SVGProps<SVGSVGElement>> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([]);

  // Define your path endpoints in SVG coordinates
  const pathEndpoints = [
    { id: "top-left", x: 250, y: 16, title: "Database" },
    { id: "top-center", x: 436, y: 0, title: "API Gateway" },
    { id: "top-right", x: 554, y: 20, title: "Cache" },
    { id: "right", x: 890, y: 264, title: "Analytics" },
    { id: "bottom-left", x: 1, y: 264, title: "Storage" },
    { id: "bottom-center", x: 484, y: 264, title: "Queue" },
  ];

  // Calculate responsive positions
  useEffect(() => {
    const calculatePositions = () => {
      if (!svgRef.current || !containerRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewBox = svgRef.current.viewBox.baseVal;

      const scaleX = svgRect.width / viewBox.width;
      const scaleY = svgRect.height / viewBox.height;

      const positions = pathEndpoints.map(endpoint => ({
        ...endpoint,
        x: (endpoint.x * scaleX) - 60, // Offset for card width
        y: (endpoint.y * scaleY) - 30, // Offset for card height
      }));

      setCardPositions(positions);
    };

    calculatePositions();
    
    const resizeObserver = new ResizeObserver(calculatePositions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Your existing path arrays...
  const pathsBottomLeft = [
    "M380 140 L5.00002 140 Q 1.00001 140 1.00001 144 L1.00001 264", // bottom left outside
    "M388 184 L388 180 Q 388 198 384 198 L77 198 Q 73 198 73 202 L73 264", // bottom left inside
  ];

  const pathsTop = [
    "M460 125 L460 20 Q 460 16 464 16 L600 16", // top (middle left)
    "M436 125 L436 0", // top center
  ];

  const pathsTopLeft = [
    "M388 125 L388 20 Q 388 16 384 16 L250 16", // top left
  ];

 

  const pathsBottom = [
    "M507 150 L633 150 Q 637 150 637 154 L637 236 Q 637 240 633 240 L488 240 Q 484 240 484 244 L484 264", // bottom center
  ];

  const pathsRight = [
    "M507 130 L822 130 Q 826 130 826 134 L826 264", // right inside
  ];

  const pathsVertical = [
    "M436 96 L436 0", // top vertical
  ];


  // ... other path arrays

  return (
    <div ref={containerRef} className="relative w-full h-[264px] overflow-visible">
      {/* SVG Component */}
      <svg
        ref={svgRef}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="891"
        height="264"
        viewBox="0 0 891 264"
        fill="none"
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

        {/* Vertical Paths */}
        <g fill="none" strokeWidth="2" strokeLinecap="round">
          {pathsVertical.map((d, i) => (
            <g key={`vertical-${i}`}>
              <path d={d} stroke="black" strokeOpacity="0.1" />
              <path d={d} stroke="url(#cpuLineGradientUp)" />
            </g>
          ))}
        </g>

      <defs>
  {/* All gradients synchronized - same duration, no delays, start/end together */}
  
  {/* Left-moving gradient */}
  <motion.linearGradient
    id="cpuLineGradientLeft"
    gradientUnits="userSpaceOnUse"
    initial={{ x1: "50%", x2: "60%" }}
    animate={{ x1: "-10%", x2: "0%" }}
    transition={{
      duration: 3,
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
    initial={{ x1: "40%", x2: "50%" }}
    animate={{ x1: "90%", x2: "100%" }}
    transition={{
      duration: 3,
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
    initial={{ y1: "40%", y2: "50%" }}
    animate={{ y1: "90%", y2: "100%" }}
    transition={{
      duration: 3,
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
    initial={{ y1: "60%", y2: "50%" }}
    animate={{ y1: "-10%", y2: "0%" }}
    transition={{
      duration: 3,
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

      {/* Responsive Cards */}
      {cardPositions.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 min-w-[120px]"
          style={{
            left: `${card.x}px`,
            top: `${card.y}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="text-sm font-medium text-white">{card.title}</div>
          <div className="text-xs text-gray-300">Connected</div>
        </motion.div>
      ))}
    </div>
  );
};
