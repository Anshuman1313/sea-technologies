'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'

// Minimal useMediaQuery hook
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export default function SeaTechScrollOnce() {
  const [activated, setActivated] = useState(false)
  const { scrollY } = useScroll()

  // Toggle on/off based on scroll position
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setActivated(latest > 8)
  })

  // Mobile breakpoint ~ Tailwind sm: 640px
  const isMobile = useMediaQuery('(max-width: 640px)')
  const tX = isMobile ? -32 : -47

  const text = 'SEA\u00A0TECHNOLOGIES'
  const letters = text.split('')

  return (
    <div className="inline-flex cursor-default select-none text-xl md:text-3xl font-bold">
      {letters.map((ch, idx) => {
        const isS = idx === 0
        const isT = idx === 4
        const inSEA = idx <= 2
        const inTECH = idx >= 4
        const shouldFade = !(isS || isT)

        return (
          <motion.span
            key={idx}
            className={`inline-block ${inSEA ? 'text-black' : inTECH ? 'text-blue-400' : ''} ${activated && isS && ' m-0' }`}
            initial={false}
            animate={{
              opacity: activated && shouldFade ? 0 : 1,
              x: activated && isT ? tX : 0,
            }}
            transition={{
              duration: 0.35,
              ease: 'easeInOut',
              delay: idx * 0.02,
            }}
          >
            {ch}
          </motion.span>
        )
      })}
    </div>
  )
}



//2 nd case with scroll just not coming back 
// 'use client'

// import { useState, useRef } from 'react'
// import { motion, useScroll, useMotionValueEvent } from 'motion/react'

// export default function SeaTechScrollOnce() {
//   const [activated, setActivated] = useState(false)
//   const { scrollY } = useScroll()

//   // Flip the flag on the user's first scroll (threshold can be 1–10px)
//   useMotionValueEvent(scrollY, 'change', (latest) => {
//     if (!activated && latest > 1) setActivated(true)
//   })

//   const text = 'SEA\u00A0TECHNOLOGIES' // keep a hard (non-breaking) space
//   const letters = text.split('')

//   return (
//     <div className="inline-flex cursor-default select-none text-4xl font-bold">
//       {letters.map((ch, idx) => {
//         const isS = idx === 0
//         const isT = idx === 4
//         const inSEA = idx <= 2
//         const inTECH = idx >= 4
//         const shouldFade = !(isS || isT)

//         return (
//           <motion.span
//             key={idx}
//             className={`inline-block ${inSEA ? 'text-black' : inTECH ? 'text-blue-600' : ''}`}
//             animate={{
//               opacity: activated && shouldFade ? 0 : 1,
//               x: activated && isT ? -53 : 0,
//             }}
            
//             transition={{
//               duration: 0.35,
//               ease: 'easeInOut',
//               delay: activated && shouldFade ? idx * 0.02 : 0,
//             }}
//           >
//             {ch}
//           </motion.span>
//         )
//       })}
//     </div>
//   )
// }
 


// 1st case on hover 
// 'use client'

// import { useState } from 'react'
// import { motion } from 'motion/react'

// export default function SeaTechHover() {
//   const [hovered, setHovered] = useState(false)
//   const text = 'SEA TECHNOLOGIES'
//   const letters = text.split('') // ['S','E','A',' ','T',...]

//   return (
//     <div
//       className="inline-flex cursor-pointer select-none text-4xl font-bold"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {letters.map((ch, idx) => {
//         const isS = idx === 0
//         const isT = idx === 4 // after the space
//         const inSEA = idx <= 2
//         const inTECH = idx >= 4
//         const shouldFade = !(isS || isT)

//         // Render a guaranteed visible space
//         if (ch === ' ') {
//           return (
//             <span key={idx} aria-hidden className="inline-block">
//               {'\u00A0'}
//             </span>
//           )
//         }

//         return (
//           <motion.span
//             key={idx}
//             className={`inline-block ${inSEA ? 'text-black' : inTECH ? 'text-blue-400' : ''}`}
//             animate={{
//               opacity: hovered && shouldFade ? 0 : 1,
//               x: hovered && isT ? -54 : 0,
//             }}
//             transition={{
//               duration: 0.3,
//               ease: 'easeInOut',
//               delay: hovered && shouldFade ? idx * 0.02 : 0,
//             }}
//           >
//             {ch}
//           </motion.span>
//         )
//       })}
//     </div>
//   )
// }


// 2nd hover case 
// 'use client'

// import { useMemo } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'

// export default function SeaTechScrollReversible() {
//   // Global page scroll progress (0 at top -> 1 at bottom)
//   const { scrollYProgress } = useScroll()

//   // Use only the first 20% of scroll to complete the effect; tweak as needed
//   const phase = useTransform(scrollYProgress, [0, 0.2], [0, 1])

//   // Map phase to visual effects
//   const fadeOthers = useTransform(phase, [0, 1], [1, 0])   // others fade out
//   const tShiftX    = useTransform(phase, [0, 1], [0, -40]) // T slides left

//   const text = 'SEA\u00A0TECHNOLOGIES'
//   const letters = useMemo(() => text.split(''), [text])

//   return (
//     <div className="inline-flex select-none text-4xl font-bold">
//       {letters.map((ch, idx) => {
//         const isS = idx === 0
//         const isT = idx === 4
//         const inSEA = idx <= 2
//         const inTECH = idx >= 4
//         const shouldFade = !(isS || isT)

//         // NBSP already included in text; render as-is
//         return (
//           <motion.span
//             key={idx}
//             className={`inline-block ${inSEA ? 'text-black' : inTECH ? 'text-blue-600' : ''}`}
//             style={{
//               opacity: shouldFade ? fadeOthers : 1,
//               x: isT ? tShiftX : 0,
//             }}
//           >
//             {ch}
//           </motion.span>
//         )
//       })}
//     </div>
//   )
// }
