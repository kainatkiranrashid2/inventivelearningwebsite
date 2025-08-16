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
    {
      name: "TeenEagle",
      href: "/teeneagle",
      dropdown: [
        { name: "Home", href: "/teeneagle" },
        { name: "Contest Categories", href: "/teeneagle/categories" },
        { name: "Resources & Workshops", href: "/teeneagle/resources" },
      ],
    },
    {
      name: "Waicy",
      href: "/waicy",
      dropdown: [
        { name: "Home", href: "/waicy" },
        { name: "Contest Categories", href: "/waicy/categories" },
        { name: "Resources & Workshops", href: "/waicy/resources" },
      ],
    },
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
            <div className="flex justify-between items-center h-20">
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
                      width={100}
                      height={100}
                      className="h-14 w-14"
                    />
                  </div>
                </Link>
              </div>

              {/* Center Navigation - Desktop */}
              <nav
                className="hidden lg:flex items-center space-x-12"
                ref={dropdownRef}>
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      // Items with dropdown
                      <div className="relative">
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          className="flex items-center text-black text-lg font-medium transition-colors duration-200 group hover:text-gray-700">
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                          {/* Stripe's signature underline effect */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></div>
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div
                            className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <div className="py-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#41c9eb] transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}>
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Regular navigation items
                      <Link
                        href={item.href}
                        className="relative text-black text-lg font-medium transition-colors duration-200 group">
                        <span className="relative z-10">{item.name}</span>
                        {/* Stripe's signature underline effect */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></div>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center space-x-3 ml-6">
                <Link
                  href="https://enrollments.kangaroopakistan.org/"
                  target="_blank"
                  className="px-6 py-2 bg-[#41c9eb] text-white text-lg font-semibold rounded-sm transition-colors duration-200 shadow-sm hover:shadow-md">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="container">
              <div className="py-4 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2">
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-gray-600 py-1 hover:text-[#41c9eb] transition-colors duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}>
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-900 font-medium py-2 hover:text-[#41c9eb] transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
