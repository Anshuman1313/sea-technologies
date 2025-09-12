import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function BackgroundGraphics() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  // Transform mouse position to subtle parallax values
  const parallaxX1 = useTransform(springX, [0, 1], [0, 15]);
  const parallaxY1 = useTransform(springY, [0, 1], [0, 10]);
  const parallaxX2 = useTransform(springX, [0, 1], [0, -10]);
  const parallaxY2 = useTransform(springY, [0, 1], [0, -5]);
  const parallaxX3 = useTransform(springX, [0, 1], [0, 8]);
  const parallaxY3 = useTransform(springY, [0, 1], [0, -8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated connecting lines */}
      <motion.svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 800"
        style={{ x: parallaxX1, y: parallaxY1 }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing lines */}
        <motion.path
          d="M-100,200 Q300,100 600,200 T1300,150"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="text-primary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M-100,600 Q200,500 500,550 T1300,500"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          className="text-primary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
        />
          
        <motion.path
          d="M-100,400 Q400,350 700,380 T1300,320"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="text-primary/10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Floating dots with connections */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: parallaxX2, y: parallaxY2 }}
      >
        {/* Top left cluster */}
        <motion.div
          className="absolute top-20 left-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <div className="relative">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <motion.div
              className="absolute -top-1 -left-1 w-4 h-4 border border-primary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-32 left-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.7 }}
        >
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute top-16 left-64"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.9 }}
        >
          <div className="w-1 h-1 bg-primary/25 rounded-full"></div>
        </motion.div>

        {/* Top right cluster */}
        <motion.div
          className="absolute top-24 right-32"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.1 }}
        >
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-primary/35 rounded-full"></div>
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-6 h-6 border border-primary/15 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          <div className="w-1 h-1 bg-primary/30 rounded-full"></div>
        </motion.div>

        {/* Bottom clusters */}
        <motion.div
          className="absolute bottom-32 left-32"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="w-1.5 h-1.5 bg-primary/25 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          <div className="relative">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <motion.div
              className="absolute -top-0.5 -left-0.5 w-3 h-3 border border-primary/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle graph-like elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 opacity-10"
        style={{ x: parallaxX3, y: parallaxY3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          className="relative"
        >
          {/* Mini bar chart */}
          <div className="flex items-end gap-1">
            {[3, 7, 4, 8, 5, 6, 9].map((height, i) => (
              <motion.div
                key={i}
                className="bg-primary/20 w-2 rounded-t-sm"
                style={{ height: `${height * 2}px` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 4 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 left-1/4 opacity-8"
        style={{ x: parallaxX1, y: parallaxY1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          {/* Mini line chart */}
          <svg width="60" height="30" className="text-primary/15">
            <motion.polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              points="0,25 10,20 20,15 30,18 40,12 50,8 60,10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 5 }}
            />
            {/* Data points */}
            {[0, 10, 20, 30, 40, 50, 60].map((x, i) => {
              const y = [25, 20, 15, 18, 12, 8, 10][i];
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 5 + i * 0.1 }}
                />
              );
            })}
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}