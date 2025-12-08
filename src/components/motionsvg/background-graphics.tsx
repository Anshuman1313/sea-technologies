import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import RadialGradient from "../gsap/RadialGradient";
import React from "react";
import { Water } from "@paper-design/shaders-react";
import WaterGradient from "../gsap/WaterGradient";
import AceternityBg from "../gsap/AceternityBg";
const PATH_D =
  "M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z";

// box type
type Box = {
  id: string;
  x: number;
  y: number;
};

// snapped result type
type Snapped = { x: number; y: number };

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

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    const CHEAT_CODE = "ROCKETMAN";
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = (input + e.key).slice(-CHEAT_CODE.length);
      setInput(newInput);

      if (newInput.toUpperCase() === CHEAT_CODE) {
        setOpen(true);
        setInput("");
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mouseX, mouseY, input]);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
    const innerSvgRef = React.useRef<SVGSVGElement | null>(null);
  
    const [boxes, setBoxes] = React.useState<Box[]>([]);
  
    // for throttling + dedupe
    const lastSnappedRef = React.useRef<Snapped | null>(null);
    const lastTimeRef = React.useRef<number>(0);
  
    const COOLDOWN = 70; // ms (tweak for smoother or snappier feel)
  
    // 🔥 REAL ACETERNITY SNAPPING
    const snapPointerToGrid = (px: number, py: number): Snapped => {
      // row height = 160px
      const row = Math.round(py / 160);
  
      // undo the staggered horizontal offset: 96 * col - 32 * row
      const col = Math.round((px + 32 * row) / 96);
  
      // compute final exact coordinates
      const x = 96 * col - 32 * row;
      const y = 160 * row;
  
      return { x, y };
    };
  
    // spawn a temporary animated box
    const spawnBox = (x: number, y: number) => {
      const id = crypto.randomUUID();
  
      // add
      setBoxes((prev) => [...prev, { id, x, y }]);
  
      // remove after animation duration
      setTimeout(() => {
        setBoxes((prev) => prev.filter((b) => b.id !== id));
      }, 1000); // matches animation time
    };
  
    // pointer move handler
    const handlePointerMove = (
      e: React.PointerEvent<HTMLDivElement>
    ) => {
      if (!containerRef.current) return;
  
      const rect = containerRef.current.getBoundingClientRect();
      const innerSvg = innerSvgRef.current?.getBoundingClientRect();
      if (!innerSvg) return;
      const px = e.clientX - innerSvg.left;
      const py = e.clientY - rect.top;
  
      // Compensation for <motion.svg x="50%" y="-96">
      const pxSvg = px - innerSvg.width / 2;
      const pySvg = py + 96;
  
      const snapped = snapPointerToGrid(pxSvg -50, pySvg );
  
      const now = Date.now();
  
      // throttle
      if (now - lastTimeRef.current < COOLDOWN) return;
  
      // dedupe: if same grid cell, skip
      if (
        lastSnappedRef.current &&
        lastSnappedRef.current.x === snapped.x &&
        lastSnappedRef.current.y === snapped.y
      ) {
        return;
      }
  
      lastSnappedRef.current = snapped;
      lastTimeRef.current = now;
  
      spawnBox(snapped.x, snapped.y);
    };
  
  return (
    <div className="absolute inset-0 overflow-hidden ">
      <RadialGradient/>
      
      <div className="absolute inset-0 opacity-[1] "
      ref={containerRef}
       onPointerMove={handlePointerMove}
      >
             <motion.svg
               aria-hidden="true"
               ref={innerSvgRef}
               className="absolute  inset-x-0 -top-20 z-10 h-[1000px] w-full fill-blue-100 stroke-neutral-900/7
               "
             >
               <rect
                 width="100%"
                 height="100%"
                 fill="url(#grid-pattern)"
                 strokeWidth="0"
               />
       
               {/* Your static paths stay the same */}
               <motion.svg x="50%" y="-96" strokeWidth="0" className="overflow-visible ">
                
       
                 {/*  Dynamic spawned boxes */}
                 {boxes.map((box) => (
                   <motion.path
                     key={box.id}
                     d={PATH_D}
                     transform={`translate(${box.x} ${box.y})`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: [0, 1, 0] }}
                     transition={{ duration: 1, ease: "easeOut" }}
                     pointerEvents="none"
                   />
                 ))}
               </motion.svg>
       
               {/* pattern defs */}
               <defs>
                 <pattern
                   id="grid-pattern"
                   width="96"
                   height="480"
                   x="50%"
                   patternUnits="userSpaceOnUse"
                   patternTransform="translate(0 -96)"
                   fill="none"
                 >
                   <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
                 </pattern>
               </defs>
             </motion.svg>
      </div>

      {/* Animated connecting lines */}
      <motion.svg
        className="absolute hidden inset-0 w-full h-full "
        viewBox="0 0 1200 800"
        style={{ x: parallaxX1, y: parallaxY1 }}
      >
        <defs>
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

        {/* Flowing lines */}
        <motion.path
          d="M-100 100q400-100 700 0t700-50"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,600 Q200,500 500,550 T1300,500"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M-100,400 Q400,350 700,380 T1300,320"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          transform="translate(0, -50)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut" }}

        />
      </motion.svg>

      {/* 🚀 Hidden ROCKETMAN Easter Egg */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center text-green-400 font-mono text-lg z-50 pointer-events-auto">
          <div className="relative p-6  rounded-lg border border-green-500 animate-pulse">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-green-400 hover:text-white"
            >
              ✕
            </button>

            <p> Cheat Activated: ROCKETMAN 🚀</p>
            <p> Jetpack deployed...</p>
            <p> Built by Anshuman 🛠️</p>
          
            <p className="">Hey if you found this Congrats!!! DM me on Twitter-  
              
               <a
               className="underline"
                href="https://x.com/Anshuman1_3"
              
                target="_blank"
                rel="noopener noreferrer"
             
              >
                Anshuman1_3
              </a> </p>
              <p>if you want to see some more COOL STUFF ig :{")"}</p>
          </div>
        </div>
      )}

      {/* Floating dots with connections */}
      <motion.div
        className="absolute hidden inset-0"
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

    

      <motion.div
        className="absolute hidden bottom-1/3 left-1/4 opacity-8"
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