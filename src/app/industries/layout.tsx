import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Industries We Serve | Sea Technologies Software Solutions",
  description:
    "Explore the industries Sea Technologies serves — from healthcare and education to finance and retail. We build custom software tailored to your business domain.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
     <>
        <Navbar/>
      

        {children}
   </>
   
  );
}