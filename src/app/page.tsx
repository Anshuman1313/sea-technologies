"use client";
import { MovingLogos } from "@/components/landingpage/MovingLogos";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    //  <div className="min-h-screen w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-300">
    //   <Navbar />
    //   {/* Hero content goes here */}
    // </div>
    <div className="min-h-screen w-full h-full bg-gradient-to-b from-blue-50 via-white to-blue-100">
       <Navbar />
       <MovingLogos/>
 
</div>
//     <div className="min-h-screen w-full h-full 
//   [background:radial-gradient(120%_100%_at_50%_0%,_#FFF_10%,_#E0F0FF_40%,_#E7EFFD_80%,_#FFF_100%)]">
//   <Navbar />
//   <div>lorem1000</div>
// </div>
  );
}
