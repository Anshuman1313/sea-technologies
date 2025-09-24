import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
export const metadata = {
  title: "Sea Technologies",
  description: "IT Company Contact Portal",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
      

        {children}
      </>
     
  );
}