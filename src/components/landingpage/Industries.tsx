import { ArrowRight, Banknote, Building, Code, CreditCard, HeartPulse, Wallet } from "lucide-react";
import { CpuLines } from "../practicemotion/SvgLines/CpuLines";
import { useRef, useState, useEffect } from "react";

interface CardPosition {
  x: number;
  y: number;
}

export function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerPosition, setCenterPosition] = useState<CardPosition>({ x: 0, y: 0 });

  // Define SVG coordinate system center point
  const SVG_CENTER = { x: 445, y: 132 }; // True center of your 891x264 SVG
  const SVG_VIEWBOX = { width: 891, height: 264 };

  // Calculate responsive center position
  useEffect(() => {
    const calculateCenterPosition = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const svgContainer = containerRef.current.querySelector('.mx-5');
      
      if (!svgContainer) return;

      const svgRect = svgContainer.getBoundingClientRect();
      
      // Calculate scale factors
      const scaleX = svgRect.width / SVG_VIEWBOX.width;
      const scaleY = svgRect.height / SVG_VIEWBOX.height;

      // Calculate center position with proper offsets
      const centerX = (SVG_CENTER.x * scaleX) - 120; // Half of card width (240px/2)
      const centerY = (SVG_CENTER.y * scaleY) - 25;  // Half of card height

      setCenterPosition({ x: centerX, y: centerY });
    };

    // Initial calculation
    calculateCenterPosition();
    
    // Setup resize observer
    const resizeObserver = new ResizeObserver(calculateCenterPosition);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Also listen to window resize for extra safety
    window.addEventListener('resize', calculateCenterPosition);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateCenterPosition);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div 
        ref={containerRef} 
        className="max-w-5xl mx-auto px-7 relative mt-30 overflow-visible"
      >
        <div className="mx-5">
          <CpuLines />
        </div>

        {/* SEA TECH Card - Centered on SVG */}
        <div 
          className="p-4 rounded-lg bg-white absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 border border-gray-100"
          style={{
            left: `${centerPosition.x}px`,
            top: `${centerPosition.y}px`,
            minWidth: '240px',
            textAlign: 'center',
          }}
        >
          <div>
            <span className="text-black font-semibold text-lg">SEA</span>
            <span className="text-blue-500 mx-1 font-semibold text-lg">TECH</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Central Hub</div>
        </div>

        {/* Bottom Static Cards */}
        <div className="flex gap-20 justify-center ">
          {industries.map((item) => (
            <div key={item.title} className="p-4 shadow rounded-lg bg-white max-w-xs">
              <item.icon className="text-blue-500 mb-2" size={20} />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Your existing industries array...
export const industries = [
  {
    title: "Real Estate",
    description: "Solutions for property management, smart housing, construction, and digital real estate platforms.",
    link: "/industries/real-estate",
    icon: Building,
  },
  {
    title: "Banking", 
    description: "Digital banking, core banking solutions, fraud detection, and secure financial services.",
    link: "/industries/banking",
    icon: Banknote,
  },
  {
    title: "Healthcare",
    description: "Healthcare management systems, telemedicine, patient record management, and digital diagnostics.",
    link: "/industries/healthcare", 
    icon: HeartPulse,
  },
];
