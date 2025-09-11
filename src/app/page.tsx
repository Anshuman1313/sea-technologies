"use client";
import HeroSection from "@/components/landingpage/HeroSection";
import { Industries } from "@/components/landingpage/Industries";
import { MovingLogos } from "@/components/landingpage/MovingLogos";
import Navbar from "@/components/layouts/Navbar";
import { div } from "motion/react-client";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen max-w-[100vw] w-full h-full bg-gradient-to-b from-blue-50 via-white to-blue-100">
        <Navbar />
        <div className="min-h-screen md:px-20 px-2">
          <HeroSection />
        </div>
        <div className="bg-white py-18 md:px-20">
          <MovingLogos />
        </div>
        <div className="bg-white ">
          <Industries />
        </div>
      </div>
    </div>
  );
}
