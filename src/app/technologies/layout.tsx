import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
export const metadata = {
  title: "Sea Technologies",
  description: "IT Company Contact Portal",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}