import { ReactNode } from "react";
import Script from "next/script";
export const metadata = {
  title: "Sea Technologies",
  description: "IT Company Contact Portal",
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
 