import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Hire Dedicated Software Developers | Sea Technologies",
  description:
    "Hire skilled software, web, and app developers from Sea Technologies. Get flexible hiring models to scale your team and build custom digital solutions.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
      

        {children}
      </>
     
  );
}