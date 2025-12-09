import React from "react";
import Link from "next/link";
import { Logo1 } from "./Logo1";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Technologies",
      links: [
        { label: "Web Development", href: "/technologies/web" },
        { label: "Mobile Development", href: "/technologies/mobile" },
        { label: "Cloud & DevOps", href: "/technologies/cloud" },
        { label: "AI & Data Science", href: "/technologies/ai" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Custom Software Development", href: "/services/custom-software" },
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "UI/UX Design", href: "/services/design" },
        { label: "IT Consulting", href: "/services/consulting" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "FinTech Solutions", href: "/industries/fintech" },
        { label: "Healthcare Technology", href: "/industries/healthcare" },
        { label: "E-Commerce Platforms", href: "/industries/ecommerce" },
        { label: "Education Technology", href: "/industries/education" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About SeaTechnologies", href: "/about/story" },
        { label: "Our Team", href: "/hire/dedicated-teams" },
        { label: "Careers", href: "/about/careers" },
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
              className="text-2xl flex justify-left items-center font-bold text-white tracking-wide"
            >
                <Logo1 className= "size-12"/>
              <span><span className="text-blue-400">SEA</span> TECHNOLOGIES</span>
              
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
                href="/contactus"
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
                href="https://www.linkedin.com/company/sea-technologies-in/?viewAsMember=true"
                target="_blank"
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
                href="https://x.com/technologi29879"
                target="_blank"
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
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/sea.technologies/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=61569627805201&sk=about"
                target="_blank"

                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>


             
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              <p>&copy; 2025 SeaTechnologies. All rights reserved. <span className="hover:text-white"><Link href="/privacy-policy"> Privacy</Link></span></p> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
