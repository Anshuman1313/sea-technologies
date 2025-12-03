import { motion } from "motion/react";
import React, { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  leftColor?: string;   // Color stop for left
  midColor?: string;    // Color stop for center
  rightColor?: string;  // Color stop for right
  className?: string;
  duration?: number;
  repeatDelay?: number;
};

const GradientText: React.FC<GradientTextProps> = ({
  children,
  leftColor = "#0ea5e9",    // default blue
  midColor = "#fff",         // default white
  rightColor = "#0ea5e9",    // default blue
  className = "",
  duration = 2,
  repeatDelay = 1.5,
}) => (
  <motion.div
    className={`text-xl font-semibold bg-clip-text bg-[length:200%_100%] text-transparent ${className}`}
    style={{
      backgroundImage: `linear-gradient(to right, ${leftColor} 40%, ${midColor} 45%, ${rightColor} 50%)`,
    }}
    animate={{
      backgroundPosition: ["100% 0%", "-20% 0%"],
    }}
    transition={{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: repeatDelay,
    }}
  >
    {children}
  </motion.div>
);

export default GradientText;
