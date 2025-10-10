import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Define the interface for a single industry item
interface Industry {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  linkText:string;
}

// Define the component props interface
interface IndustryGridProps {
  industries: Industry[];
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ industries }) => {
  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-evenly gap-2">
      {industries.map((industry) => {
        const IconComponent = industry.icon;
        return (
          <div 
            key={industry.title} 
            className="bg-white rounded-lg p-3 shadow-lg  max-w-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <IconComponent className="text-blue-500" size={24} />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {industry.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {industry.description}
            </p>
            
            {/* Link/Button */}
            <Link 
              href={industry.link}
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
            >
              <span className='sr-only'>{industry.linkText}</span>
              Learn More
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IndustryGrid;
