import { ArrowRight, Banknote, Building, Code, CreditCard, Factory, HeartPulse, Plane, ShieldCheck, Wallet } from "lucide-react";
import { CpuLines } from "../motionsvg/SvgLines/CpuLines";
import { useRef, useState, useEffect } from "react";
import IndustryGrid from "../motionsvg/SvgLines/IndustryCpuLines";

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
    <>

      <div className={`text-center max-w-4xl mx-auto px-4 py-16 `}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Your Technology Partner for Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Specialized solutions across key industries, backed by expertise that understands your business
        </p>
      </div>

      <div className=" flex-col mb-10 hidden md:flex">
        {/* Top Industries */}
        <IndustryGrid industries={industriesTop} />

        {/* Svg lines and the centered sea tracker */}
        <div
          ref={containerRef}
          className="max-w-5xl mx-auto px-7 relative  overflow-visible"
        >
          <div className="mx-5">
            <CpuLines />
          </div>

          {/* SEA TECH Card - Centered on SVG */}
          <div
            className=" rounded-sm p-4 bg-white  absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 border border-gray-100"
            style={{
              left: `${centerPosition.x + 40}px`,
              top: `${centerPosition.y + 10}px`,
              minWidth: '240px',
              textAlign: 'center',
            }}
          >
            <div>
              <span className="text-black font-bold text-lg">SEA</span>
              <span className="text-blue-500 mx-1 font-bold text-lg">TECHNOLOGIES</span>
            </div>
          </div>


        </div>

        {/* Bottom cards */}
        <IndustryGrid industries={industriesBottom} />
      </div>

      <div className="flex flex-col px-2 mb-10 space-y-6 md:space-y-8 md:hidden">
  {/* Top Industries */}
  <IndustryGrid industries={industriesTop} />



  {/* Bottom cards */}
  <IndustryGrid industries={industriesBottom} />
</div>

    </>
  );
}


export const industriesBottom = [
  {
    title: "Real Estate",
    description: "Solutions for property management, smart housing, construction, and digital real estate platforms.",
    link: "/industries/ecommerce",
    icon: Building,
  },
  {
    title: "Banking",
    description: "Digital banking, core banking solutions, fraud detection, and secure financial services.",
    link: "/industries/fintech",
    icon: Banknote,
  },
  {
    title: "Healthcare",
    description: "Healthcare management systems, telemedicine, patient record management, and digital diagnostics.",
    link: "/industries/healthcare",
    icon: HeartPulse,
  },
];
export const industriesTop = [
  {
    title: "Travel & Hospitality",
    description: "Booking engines, guest management, personalized experiences, and smart travel planning.",
    link: "/industries/logistics",
    icon: Plane,
  },
  {
    title: "Manufacturing",
    description: "IoT-driven factories, predictive maintenance, robotics automation, and production analytics.",
    link: "/industries/ecommerce",
    icon: Factory,
  },
  {
    title: "Insurance",
    description: "Policy management systems, claim automation, fraud detection, and risk assessment tools.",
    link: "/industries/education",
    icon: ShieldCheck,
  },
];
