import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Privacy Policy | Sea Technologies",
  description:
    "Read the privacy policy of Sea Technologies. Learn how we collect, use, and protect your data while providing software, web, and app solutions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
      

        {children}
      </>
     
  );
}