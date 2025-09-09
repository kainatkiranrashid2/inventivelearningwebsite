import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section
      className="relative bg-gradient-to-br bg-cover bg-center px-4 from-[#AFDDE5] via-[#AFDDE5] to-[#0FA4AF]/30 overflow-hidden"
      style={{
        backgroundImage: "url('/images/waicy/resources.jpg')",
      }}>
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0FA4AF]/20 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/15 rounded-full blur-xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[500px] lg:min-h-[600px] text-center px-4 py-20">
          {/* Floating badge */}
          <div
            className="inline-flex mt-5 items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full 
            text-white font-semibold text-sm mb-8 border border-white/30 shadow-lg
            hover:bg-white/30 transition-all duration-300">
            <svg
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Learning Resources
          </div>

          {/* Main heading with animated text */}
          <h1
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px] 
            text-white font-bold leading-tight mb-6 max-w-6xl">
            Resources &
            <span className="block bg-gradient-to-r from-[#164e63] to-[#0e7490] bg-clip-text text-white">
              Preparation
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 
            text-white font-medium mb-12 max-w-5xl leading-relaxed">
            Free resources to help students of all levels prepare for WAICY.
            <span className="text-white font-semibold">
              {" "}
              Everything you need to succeed in AI education.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/waicy/categories"
              className="group relative px-8 py-4 bg-[#964734]
              text-white font-semibold text-[18px] rounded-2xl shadow-xl shadow-[#964734]/30
              hover:shadow-2xl hover:shadow-[#964734]/40 hover:scale-105 
              transition-all duration-300 overflow-hidden min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center">
                View Categories
                <svg
                  className="w-5 h-5 ml-2 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            <a
              href="https://drive.google.com/file/d/1jgSgxLhDlsPlJz83d9223ac1zJn9t16k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold 
              text-[18px] rounded-2xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60
              transition-all duration-300 min-w-[200px]">
              Download Guidebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
