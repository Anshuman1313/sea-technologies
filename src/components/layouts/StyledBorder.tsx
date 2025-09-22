"use client"
import React from "react";

const StyledBorder = ({ 
  containerBg = "bg-red-900", 
  middleBg = "bg-white", 
  svgFill = "fill-white" 
}) => {
  return (
    <div className={`relative  w-full flex justify-center ${containerBg}`}>
      {/* Left SVG */}
      <svg
        viewBox="0 0 64 44"
        preserveAspectRatio="none"
        className={`w-16 flex-none ${svgFill}`}
        aria-hidden="true"
      >
        <path d="M51.657 2.343 12.343 41.657A8 8 0 016.686 44H0v0h64V0h-6.686a8 8 0 00-5.657 2.343Z"></path>
      </svg>

      {/* Middle Block */}
      <div className={`w-1/2 ${middleBg}`}></div>

      {/* Right SVG */}
      <svg
        viewBox="0 0 64 44"
        preserveAspectRatio="none"
        className={`w-16 flex-none ${svgFill}`}
        aria-hidden="true"
      >
        <path d="m12 3 38 38A8 8 0 0057 44H64v0H0V0h6.686a8 8 0 015.314 3Z"></path>
      </svg>
    </div>
  );
};

export default StyledBorder;

