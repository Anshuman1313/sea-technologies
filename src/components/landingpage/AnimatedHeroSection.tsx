"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BackgroundGraphics } from "../motionsvg/background-graphics";
import { Button } from "../ui/button";


export function AnimatedHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen  flex items-center justify-center px-6 py-12 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
    >
      <BackgroundGraphics />
      {/* <OceanLinesBackground/> */}
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 "
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">AI-Powered IT Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground"
            >
              Transform Your Vision Into{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Harness the power of AI to unlock unlimited creativity in your IT projects. 
            From concept to execution, we make the impossible possible with cutting-edge technology and innovative solutions.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
             <a href="/contactus">
          <Button 

            size="lg" 
            className="px-8 py-3 cursor-pointer text-base bg-black hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            
           Start Your Journey
            <motion.div
              className="pb-[2px] md:ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </Button>
          </a>
           <a href="/about/story">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 cursor-pointer py-3 text-base border-2 hover:border-primary/50 transition-all duration-300"
          >
            Learn More
          </Button>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-12 relative"
        >
          <div className="text-lg md:text-2xl font-semibold text-gray-700 bg-white absolute inset-x-0 md:mt-15 ">
            Trusted by innovative companies worldwide
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}