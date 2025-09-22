import { motion } from "motion/react";

type ConnectorPathProps = {
  id: string;
  d: string; // the SVG path
  isHorizontal: boolean;
};

export const ConnectorPath = ({ id, d, isHorizontal }: ConnectorPathProps) => (
  <>
    {/* Base faint line for background */}
    <path d={d} stroke="black" strokeOpacity="0.15" strokeWidth="2" />

    {/* Active animated line */}
    <path d={d} stroke={`url(#${id})`} strokeWidth="2" />

    {/* Gradient definition */}
    <defs>
      <motion.linearGradient
        id={id}
        gradientUnits="userSpaceOnUse"
        initial={
          isHorizontal
            ? { x1: "0%", x2: "0%" }
            : { y1: "0%", y2: "0%" }
        }
        animate={
          isHorizontal
            ? { x1: "0%", x2: "100%" }
            : { y1: "0%", y2: "100%" }
        }
        transition={{
          duration: 2,
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
  </>
);
