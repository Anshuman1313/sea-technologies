'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { ModeToggle } from '../theme/ToggleTheme';
import LogoAnimation from '../motionsvg/LogoAnimation';
import { Logo1 } from './Logo1';

interface DropdownItem {
    label: string;
    href: string;
    description?: string;
}

interface NavItem {
    label: string;
    hasDropdown?: boolean;
    href?: string;
    dropdownItems?: DropdownItem[];
}

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [scrolled, setScrolled] = useState(false);
    const navItems: NavItem[] = [
        {
            label: 'Technologies',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Web Development', href: '/technologies/web', description: 'Modern web apps with React, Next.js & more' },
                { label: 'Mobile Development', href: '/technologies/mobile', description: 'iOS & Android apps with React Native, Flutter' },
                { label: 'Cloud & DevOps', href: '/technologies/cloud', description: 'AWS, Azure, GCP solutions with CI/CD pipelines' },
                { label: 'AI & Data Science', href: '/technologies/ai', description: 'ML models, AI integration & data analytics' },
            ]
        },
        {
            label: 'Services',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Custom Software Development', href: '/services/custom-software', description: 'Tailored solutions for your business' },
                { label: 'Product Engineering', href: '/services/product-engineering', description: 'From MVP to full-scale product' },
                { label: 'UI/UX Design', href: '/services/design', description: 'User-centric interfaces & experiences' },
                { label: 'IT Consulting', href: '/services/consulting', description: 'Strategic guidance for digital transformation' }
            ]
        },
        {
            label: 'DIY Teams',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Dedicated Teams', href: '/hire/dedicated-teams', description: 'Scale fast with full project teams' },
                { label: 'Frontend Developers', href: '/hire/frontend', description: 'React, Angular, Vue experts' },
                { label: 'Backend Developers', href: '/hire/backend', description: 'Node.js, .NET, Java & more' },
                { label: 'Full Stack Developers', href: '/hire/fullstack', description: 'End-to-end development expertise' },
                { label: 'Mobile App Developers', href: '/hire/mobile', description: 'Native & cross-platform specialists' }
            ]
        },
        {
            label: 'Industries',
            hasDropdown: true,
            dropdownItems: [
                { label: 'FinTech', href: '/industries/fintech', description: 'Banking, payments & blockchain solutions' },
                { label: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA compliant health tech apps' },
                { label: 'E-Commerce', href: '/industries/ecommerce', description: 'Online stores & marketplaces' },
                { label: 'Education', href: '/industries/education', description: 'E-learning & EdTech platforms' },
                { label: 'Logistics', href: 'tics', description: 'Supply chain & transport systems' }
            ]
        },
        {
            label: 'About Us',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Our Story', href: '/about/story', description: 'Who we are & our journey' },
                { label: 'Leadership', href: '/about/leadership', description: 'Meet our core team' },
                { label: 'Careers', href: '/about/careers', description: 'Join SeaTechnologies' },
                { label: 'Contact Us', href: '/contactus', description: 'Lets build together' }
            ]
        },
    ];


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // scroll threshold
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (!openDropdown) return;

            // 🔐 Important: don't apply "outside click" logic while mobile menu is open
            if (isMobileMenuOpen) return;

            const dropdownElement = dropdownRefs.current[openDropdown];
            if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
        };
    }, [openDropdown, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (itemLabel: string) => {
        setOpenDropdown((prev) => (prev === itemLabel ? null : itemLabel));
    };

    //  NEW: Function to handle dropdown link clicks
    const handleDropdownLinkClick = () => {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`  ${scrolled ? "bg-gray-900/80  "  : "bg-gray-900 "} border-b-[1px] border-neutral-200  backdrop-blur-md  sticky top-0 z-50    transition-all duration-300`}>
            <div className={`mx-auto px-5 sm:px-6 lg:px-8  `}>
                <div className="flex justify-between items-center h-13 lg:h-15 lg:px-3 ">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer ">
                        <Link
                            href="/"
                            className={`font-bold  tracking-wide text-black transition-all duration-300`}
                        >
                           <div className='max-lg:hidden lg:flex justify-center items-center'>
                            <Logo1 className= "size-14"/>
                            <LogoAnimation/>
                            </div>
                            <div className='flex justify-center items-center lg:hidden text-xl'>
                                 <Logo1 className= "size-10"/>
                                <span className='text-blue-400'>SEA</span> <span className='text-white'> TECHNOLOGIES</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    ref={(el) => {
                                        if (item.hasDropdown) {
                                            dropdownRefs.current[item.label] = el;
                                        }
                                    }}
                                >
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            className="text-white hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                                            onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                                        >
                                            {item.label}
                                            {item.hasDropdown && (
                                                <ChevronDown
                                                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            )}
                                        </button>
                                    )}

                                    {/* Desktop Dropdown Content */}
                                    {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
                                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    href={dropdownItem.href}
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-150"
                                                >
                                                    <div className="font-medium">{dropdownItem.label}</div>
                                                    {dropdownItem.description && (
                                                        <div className="text-xs text-gray-500 mt-1">
                                                            {dropdownItem.description}
                                                        </div>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex lg:gap-2 ">
                        <div className='hidden'>
                            <ModeToggle/>
                        </div>
                        <Link
                            href="/contactus"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 inline-block"
                        >
                            Free Consultancy
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-2">
                           {/* <Link href="/contactus"><Button >Start</Button></Link> */}
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
                        {navItems.map((item, index) => (
                            <div key={index} className="block">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            className="text-gray-700 hover:text-black hover:bg-gray-50  px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200"
                                            onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                                        >
                                            {item.label}
                                            {item.hasDropdown && (
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            )}
                                        </button>

                                        {/*   Mobile Dropdown Content */}
                                        {item.hasDropdown && item.dropdownItems && openDropdown === item.label && (
                                            <div className="pl-4 bg-gray-50 border-l-2 border-gray-200">
                                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                    <Link
                                                        key={dropdownIndex}
                                                        href={dropdownItem.href}
                                                        onClick={handleDropdownLinkClick} //   Use specific handler
                                                        className="block  px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-150"
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTA Button */}
                        <div className="pt-4 pb-2 px-3">
                            <Link
                                href="/contactus"
                                onClick={closeMobileMenu}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 w-full block text-center"
                            >
                                Free Consultancy
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
