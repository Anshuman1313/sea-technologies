"use client";

import React from "react";
import { motion } from "motion/react";

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

export default function AceternityBg() {
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
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="h-screen w-full"
    >

      
      <motion.svg
        aria-hidden="true"
        ref={innerSvgRef}
        className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-blue-200 stroke-neutral-900/7
        [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]
        "
      >
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          strokeWidth="0"
        />

        {/* Your static paths stay the same */}
        <motion.svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
          <path transform="translate(64 160)" d={PATH_D}  />
          <path transform="translate(128 320)" d={PATH_D} />
          <path transform="translate(288 480)" d={PATH_D} />
          <path transform="translate(512 320)" d={PATH_D} />
          <path transform="translate(544 640)" d={PATH_D} />
          <path transform="translate(320 800)" d={PATH_D} />

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
  );
}
