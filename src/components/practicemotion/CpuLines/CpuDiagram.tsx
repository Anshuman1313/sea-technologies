"use client";

import { ConnectorPath } from "./ConnectorPath";
import { IndustryCard } from "./IndustryCard";

export function CpuDiagram() {
  // Example industries (you can extend this)
  const industries = [
    {
      id: "fintech",
      title: "Fintech",
      description: "Payments, lending, blockchain, wealth management.",
      card: { x: 20, y: 40 },
      path: "M300 150 L200 150 L200 60", // CPU → left top card (L-shape)
      isHorizontal: true,
    },
    {
      id: "health",
      title: "Healthcare",
      description: "Telemedicine, diagnostics, record management.",
      card: { x: 600, y: 40 },
      path: "M340 150 L450 150 L450 60", // CPU → right top card
      isHorizontal: true,
    },
    {
      id: "banking",
      title: "Banking",
      description: "Digital banking, secure transactions, fraud detection.",
      card: { x: 20, y: 250 },
      path: "M300 170 L200 170 L200 260", // CPU → left bottom card
      isHorizontal: true,
    },
    {
      id: "realestate",
      title: "Real Estate",
      description: "Smart housing, property mgmt, construction tech.",
      card: { x: 600, y: 250 },
      path: "M340 170 L450 170 L450 260", // CPU → right bottom card
      isHorizontal: true,
    },
  ];

  return (
    <div className="relative w-[800px] h-[400px] mx-auto">
      {/* Center CPU */}
      <div className="absolute left-[320px] top-[150px] w-40 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center font-bold">
        CPU
      </div>

      {/* SVG lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        {industries.map((item) => (
          <ConnectorPath
            key={item.id}
            id={`grad-${item.id}`}
            d={item.path}
            isHorizontal={item.isHorizontal}
          />
        ))}
      </svg>

      {/* Cards */}
      {industries.map((item) => (
        <IndustryCard
          key={item.id}
          title={item.title}
          description={item.description}
          x={item.card.x}
          y={item.card.y}
        />
      ))}
    </div>
  );
}
