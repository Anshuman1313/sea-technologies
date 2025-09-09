import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Technologies",
      links: [
        { label: "Web Development", href: "/technologies/web" },
        { label: "Mobile Development", href: "/technologies/mobile" },
        { label: "Cloud & DevOps", href: "/technologies/cloud" },
        { label: "AI & Data Science", href: "/technologies/ai" },
        { label: "Enterprise Solutions", href: "/technologies/enterprise" },
        { label: "API Development", href: "/technologies/api" },
        { label: "Database Solutions", href: "/technologies/database" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Custom Software Development", href: "/services/custom-software" },
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "UI/UX Design", href: "/services/design" },
        { label: "IT Consulting", href: "/services/consulting" },
        { label: "Quality Assurance", href: "/services/qa" },
        { label: "Maintenance & Support", href: "/services/support" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "FinTech Solutions", href: "/industries/fintech" },
        { label: "Healthcare Technology", href: "/industries/healthcare" },
        { label: "E-Commerce Platforms", href: "/industries/ecommerce" },
        { label: "Education Technology", href: "/industries/education" },
        { label: "Logistics & Supply Chain", href: "/industries/logistics" },
        { label: "Government Solutions", href: "/industries/government" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About SeaTechnologies", href: "/about" },
        { label: "Our Team", href: "/about/team" },
        { label: "Careers", href: "/careers" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Events", href: "/events" },
        { label: "News", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Company Logo & Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-wide"
            >
              SEATECHNOLOGIES
            </Link>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-md">
              Building modern software solutions for businesses worldwide.  
              Innovative technologies, scalable services, and industry expertise.
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300">
                Get Started Today
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-block bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {/* LinkedIn */}
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              {/* X (Twitter replacement) */}
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">X</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2H21.5l-7.46 8.55L22 22h-6.844l-5.356-6.845L4.822 22H1.5l7.947-9.104L2 2h6.98l4.797 6.153L18.244 2zm-2.394 18h2.131L8.659 4h-2.27l9.461 16z" />
                </svg>
              </Link>

              {/* GitHub */}
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              <p>&copy; 2025 SeaTechnologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
