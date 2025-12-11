import { ReactNode, useEffect } from "react";
interface PreloaderWrapperProps {
  children: ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
//   useEffect(() => {
//     const scrollY = window.scrollY;

//     // Freeze scroll but keep scrollbar visible
//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollY}px`;
//     document.body.style.left = "0";
//     document.body.style.right = "0";
//     document.body.style.width = "100%";

//     return () => {
//       // Restore normal scroll
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.left = "";
//       document.body.style.right = "";
//       document.body.style.width = "";
     
//       // Restore original scroll
//       window.scrollTo(0, scrollY);
//     };
//   }, []);


//   useEffect(() => {
//   // Disable scroll immediately
//   document.body.style.overflow = "hidden";

//   if (startClip) {
//     const timer = setTimeout(() => {
//       // Enable scroll after animation ends
//       document.body.style.overflow = "auto";
//     }, 1500);

//     return () => clearTimeout(timer);
//   }

//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, [startClip]);

  return (
    <div className="fixed inset-0 z-[9999]">
      {children}
    </div>
  );
}
