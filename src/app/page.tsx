"use client";
import { AnimatedHeroSection } from "@/components/landingpage/AnimatedHeroSection";
import HeroSection from "@/components/landingpage/HeroSection";
import { Industries } from "@/components/landingpage/Industries";
import LogoSection from "@/components/landingpage/LogoSection";
import { MovingLogos } from "@/components/landingpage/MovingLogos";
import { Newsletter } from "@/components/landingpage/NewsLetter";
import Navbar from "@/components/layouts/Navbar";
import { CpuLines2 } from "@/components/practicemotion/SvgLines/CpuLines2";
import { div } from "motion/react-client";

export default function Home() {
  return (
    <div>
        <Navbar />
       
          
          <AnimatedHeroSection />
       
        <div className="bg-white  md:px-10 md:pb-17 border-b-[1px] border-neutral-200 ">
          <LogoSection/>
        </div>
           
        <div className="bg-white ">
          <Industries />
        </div>
        <div className="bg-white my-20 ">
          <Newsletter/>
        </div>
    </div>
  );
}
