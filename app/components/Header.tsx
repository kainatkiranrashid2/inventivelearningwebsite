"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "TeenEagle", href: "/teeneagle" },
    { name: "Waicy", href: "/waicy" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Stripe-style scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Stripe-style Navigation */}
        <div className={`bg-white backdrop-blur-sm`}>
          <div className="container ">
            <div className="flex justify-between items-center h-16">
              <div className="hidden lg:flex flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="hidden sm:block mr-3 text-right">
                    <h1 className="text-2xl font-semibold text-[#41c9eb] ">
                      InventiveLearning
                    </h1>
                  </div>
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={32}
                      height={32}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                </Link>
              </div>
              {/* Center Navigation - Desktop */}
              <nav
                className="hidden lg:flex items-center space-x-12"
                ref={dropdownRef}>
                {/* Regular Navigation Items */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-black  text-lg font-medium transition-colors duration-200 group">
                    <span className="relative z-10 ">{item.name}</span>
                    {/* Stripe's signature underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></div>
                  </Link>
                ))}

                {/* Auth Buttons */}
              </nav>
              <div className="flex items-center space-x-3 ml-6">
                <Link
                  href="https://enrollments.kangaroopakistan.org/"
                  target="blank"
                  className="px-6 py-2 bg-[#41c9eb] text-white text-lg font-semibold   rounded-sm transition-colors duration-200 shadow-sm hover:shadow-md">
                  Sign In
                </Link>
              </div>
              {/* Mobile Menu Button and Right Logo */}
              <div className="lg:hidden flex items-center space-x-4">
                {/* Right Logo - Mobile */}
                <Link href="/" className="flex items-center group">
                  <div className="hidden sm:block mr-3 text-right">
                    <h1 className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      Inventive Learning
                    </h1>
                  </div>
                  <div className="relative">
                    <Image
                      src="/Inventive_Learning_LOGO.png"
                      alt="Inventive Learning"
                      width={32}
                      height={32}
                      className="h-8 w-8 transition-transform duration-200 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-100"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
