"use client";

import { motion } from "motion/react";
import { div } from "motion/react-client";
import type { FC } from "react";

const OceanLinesBackground: FC = () => {
    // list of paths to avoid duplication
    const paths = [
        "M140.35 611.38C320.3 605.16 467.95 323.07 800.23 322.79 1132.51 322.51 1291.92 453.26 1460.11 453.89",
        "M820.48 594.69C987.65 532.53 1014.23 40.63 1256.02 29.67 1497.82 18.71 1577.02 170.37 1691.57 172.17",
        "M271.94 609.03C437.64 604.48 577.85 362.33 887.33 362.14 1196.81 361.95 1346.26 475.66 1502.72 476.14",
        "M471.72 577.67C651.03 553.9 749.63 143.24 1048.22 140.51 1346.82 137.78 1477.24 265.19 1624.73 265.91",
        "M463.34 642.27C639.77 631.94 770.92 308.68 1086.26 308.07 1401.61 307.46 1549.75 444.07 1709.19 444.87",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">


            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1447"
                height="570"
                preserveAspectRatio="none"
                viewBox="0 0 1447 570"
                className="w-full h-auto"
            >
                <g mask="url(#maskOceanLines)" fill="none">
                    <rect width="1447" height="570" x="0" y="0" fill="white" />

                    {paths.map((d, i) => (
                        <g key={i}>
                            {/* Base neutral stroke */}
                            <path d={d} stroke="#f5f5f5" strokeWidth="2" />

                            {/* Overlay animated shimmer */}
                            <path d={d} stroke="url(#lineGradient)" strokeWidth="2" />
                        </g>
                    ))}
                </g>

                <defs>
                    {/* Mask */}
                    <mask id="maskOceanLines">
                        <rect width="1447" height="570" fill="white" />
                    </mask>

                    {/* Animated gradient */}
                    <motion.linearGradient
                        id="lineGradient"
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "10%" }}
                        animate={{ x1: "90%", x2: "100%" }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                    >
                        <stop offset="0" stopColor="#f5f5f5" /> {/* neutral-100 */}
                        <stop offset="0.5" stopColor="#3B82F6" /> {/* blue-500 */}
                        <stop offset="1" stopColor="#f5f5f5" /> {/* neutral-100 */}
                    </motion.linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default OceanLinesBackground;
