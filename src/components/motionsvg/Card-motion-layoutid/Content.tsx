import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "./Card";
import { Svg_Coponent } from "./svg-component";
import { SvgLines } from "./SvgLine";
import {CpuLines} from "../SvgLines/CpuLines";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export function Content() {
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center bg-red-500">
     {/* <div className="h-20 w-100 ">
      <SvgLines/>

     </div> */}
       <CpuLines className="w-full max-w-5xl" />
    </div>
    {/* <Svg_Coponent/> */}
    {/* <Card/> */}
      {/* <h1 className={cn(geistSans.className, "text-3xl font-bold")}>
        Sans font
      </h1>
      <code className={cn(geistMono.className, "text-sm text-green-500")}>
        Mono font
      </code> */}
    </>
  );
}
