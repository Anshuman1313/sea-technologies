"use client";
import { Industries } from "../components/landingpage/Industries";
import LogoSection from "../components/landingpage/LogoSection";
import { Newsletter } from "../components/landingpage/NewsLetter";
import Navbar from "../components/layouts/Navbar";
import { AnimatedHeroSection } from "../components/landingpage/AnimatedHeroSection";
import BlurryCursorSection from "@/components/gsap/BlurryCursorSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>


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
