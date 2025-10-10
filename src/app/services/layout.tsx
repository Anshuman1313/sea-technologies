import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
export const metadata = {
  title: "Software Development Services | Sea Technologies",
  description:
    "Sea Technologies offers custom software, web, and mobile app development services. Build scalable digital solutions with our expert team.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
      

        {children}
      </>
     
  );
}