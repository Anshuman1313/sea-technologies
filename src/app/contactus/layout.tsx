import { ReactNode } from "react";
import Script from "next/script";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Contact Sea Technologies | Get in Touch with Our Software Experts",
  description: "Contact Sea Technologies for custom software, web, and app development services. Let’s discuss your project and build your next digital solution.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        {/* ✅ reCAPTCHA script */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
        {children}
     </>
  );
}
 