"use client";
import { Industries } from "../components/landingpage/Industries";
import LogoSection from "../components/landingpage/LogoSection";
import { Newsletter } from "../components/landingpage/NewsLetter";
import Navbar from "../components/layouts/Navbar";
import { AnimatedHeroSection } from "../components/landingpage/AnimatedHeroSection";
import BlurryCursorSection from "@/components/gsap/BlurryCursorSection";
import { MorphingPreloader } from "@/components/gsap/MorphingPreloader";
import { SpinningText } from "@/components/ui/spinning-text";

export default function Home() {
  return (
    <div>
      <Navbar />
          <SpinningText
      radius={5}
      fontSize={1}
      duration={6}
      transition={{
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      className='font-mono z-100 fixed bottom-[10%] right-[5%]   bozo'
    >
      {`industrial-training • training • `}
    </SpinningText>
      <main>
        
        <MorphingPreloader/>
        <AnimatedHeroSection />
        <div className="bg-white  md:px-10 md:pb-17 border-b-[1px] border-neutral-200 ">
          <LogoSection />
        </div>
        <div className="bg-white ">
          <Industries />
        </div>
         <div className="min-h-screen w-full overflow-hidden max-md:hidden mt-20 ">
          <BlurryCursorSection />

        </div>
        <div className="bg-white mb-10">
          <Newsletter />
        </div>
      </main>
    </div>
  );
}
