"use client"
// import React from 'react'
import { motion, AnimatePresence, MotionValue } from "motion/react";
import Image from "next/image";




import React, { useState, useEffect } from "react";

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

function getRandomUniqueArray(arr:any, n:any) {
    // Fisher-Yates shuffle
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    console.log(shuffled.slice(0, n), "shuffled sliced (0,n)");
    return shuffled.slice(0, n);
}

const LogoSection = () => {
    const [visibleNumbers, setVisibleNumbers] = useState(() => getRandomUniqueArray(allNumbers, 8));

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleNumbers((current: number[]) => {
                // Find available numbers not currently visible
                const remaining = allNumbers.filter(num => !current.includes(num));
                if (remaining.length === 0) return current;

                // Choose a random index in the visible arr
                const swapIdx = Math.floor(Math.random() * current.length);
                // Pick a new number not already displayed
                const newNum = remaining[Math.floor(Math.random() * remaining.length)];
                // Replace the value at swapIdx
                const updated = current.slice();
                updated[swapIdx] = newNum;
                return updated;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:w-full   ">
            <div className="grid grid-cols-2 md:grid-cols-4 ">
                {visibleNumbers.map((num:any,i:any) => (
                    <motion.div
                        whileHover="animate"
                        className="relative flex items-center justify-center border  bg-white overflow-hidden"
                        key={num + "-" + i} // key should change when number changes

                    >
                        <motion.div
                            variants={{
                                animate: { y: [100, 0], transition: { duration: 0.3, ease: "easeInOut" } }
                            }}
                            initial={{ y: 100 }}

                            className="size-full absolute bg-neutral-100 "
                        />

                        <motion.div
                            key={num}
                            initial={{ y: -100}}
                            animate={{
                                y: 0,
                                transition: { type: "spring", stiffness: 100, damping: 15 }
                            }}
                            exit={{
                                y: -100,
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeInOut" }
                            }}
                            className="relative z-10 overflow-hidden  h-25 w-40  "
                        >
                           <Image
                           suppressHydrationWarning
                           src={`/logos2/logo${num}.png`}
                           alt={`Logo ${i}`}
                           height={80}
                           width={160}
                           className="object-contain p-8 "
                           />
                         
                        </motion.div>


                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default LogoSection;




// const LogoSection = () => {
//     return (
//         <div className='felx flex-col'>
//             <div><p className="text-sm text-muted-foreground/60 mb-20">
//                 Trusted by innovative companies worldwide
//             </p> </div>
//             <div className="grid grid-cols-4 ">
//                 {[1,2,3,4,5,6,7,8].map((num) => (
//                     <motion.div 
//                     whileHover={"animate"}

//                     className='relative flex items-center justify-center border h-20 bg-white overflow-hidden' key={num}>
//                         <motion.div 
//                         initial={{y:100}}
//                       variants={{

//                         animate : {

//                             y: [100,0], transition: { duration: 0.3, ease: "easeInOut"}
//                         }
//                       }}
//                         className='size-full absolute bg-neutral-100'></motion.div>
//                            <div className='relative z-10'>
//                             {num}
//                             </div> 
//                     </motion.div>


//                 ))}
//             </div>
//         </div>
//     )
// }

// export default LogoSection



