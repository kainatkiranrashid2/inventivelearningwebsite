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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[#024950] shadow-md" : "bg-[#AFDDE5]"
        }`}>
        {/* Main Navigation Bar */}
        <div className="container">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex items-center order-2 lg:order-1">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/Inventive_Learning_LOGO.png"
                    alt="Inventive Learning"
                    width={100}
                    height={100}
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 transition-transform duration-200 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="hidden sm:block mr-2 lg:mr-3 text-right">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#003135] truncate">
                    InventiveLearning
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden xl:flex items-center space-x-8 order-2"
              ref={dropdownRef}>
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className="flex items-center text-[#003135] text-base lg:text-lg font-semibold hover:text-[#0FA4AF] transition-colors">
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      {activeDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                          onMouseLeave={() => setActiveDropdown(null)}>
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-sm text-[#024950] hover:text-[#0FA4AF] hover:bg-[#AFDDE5] transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}>
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-[#003135] text-base lg:text-lg font-medium transition-colors duration-200 group hover:text-[#0FA4AF]">
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA4AF] transition-all duration-200 group-hover:w-full"></div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center space-x-3 order-3">
              <Link
                href="https://enrollments.kangaroopakistan.org/"
                target="_blank"
                className="block w-full text-center px-6 py-3 bg-[#964734] text-white font-semibold rounded-md transition-all duration-200 hover:bg-[#0FA4AF]">
                Sign In
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center xl:hidden order-1 lg:order-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#003135] hover:text-[#0FA4AF] transition-colors duration-200 rounded-md hover:bg-[#AFDDE5]"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-[#AFDDE5] border-b border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-left text-[#003135] font-medium py-3 px-2 hover:text-[#0FA4AF] hover:bg-white rounded-md transition-colors duration-200">
                          <span className="text-base sm:text-lg">
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-1 bg-white rounded-md p-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-[#024950] py-2 px-3 text-sm sm:text-base hover:text-[#0FA4AF] hover:bg-[#AFDDE5] rounded-md transition-colors duration-200"
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
                        className="block text-[#003135] font-medium py-3 px-2 text-base sm:text-lg hover:text-[#0FA4AF] hover:bg-white rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <Link
                    href="https://enrollments.kangaroopakistan.org/"
                    target="_blank"
                    className="block w-full text-center px-6 py-3 bg-[#964734] text-white font-semibold rounded-md transition-all duration-200 hover:bg-[#0FA4AF]"
                    onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
