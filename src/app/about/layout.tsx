import { ReactNode } from "react";
import Script from "next/script";
import Navbar from "@/components/layouts/Navbar";
export const metadata = {
  title: "About Sea Technologies | Leading Software & IT Solutions Company",
  description: "Learn about Sea Technologies, a trusted software development and IT solutions company dedicated to innovation, quality, and client success.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
        {children}
     </>
  );
}
 