import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section
      className="relative bg-gradient-to-br bg-cover bg-center px-4 from-[#AFDDE5] via-[#AFDDE5] to-[#0FA4AF]/30 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/background.png')",
      }}>
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0FA4AF]/20 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/15 rounded-full blur-xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[600px] lg:min-h-screen text-center px-4 py-28 lg:py-16">
          <div
            className="invisible inline-flex mt-5 items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full 
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            AI Education for All
          </div>
          {/* Main heading */}
          <h1
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px] 
            text-white font-bold leading-tight mb-6 max-w-6xl">
            Welcome to Inventive Learning
          </h1>

          {/* Subtitle */}
          <p
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 
            text-white font-medium mb-12 max-w-5xl leading-relaxed">
            Empowering students through innovative contests and learning
            opportunities. From our flagship programs IKSC and IKLC to our new
            initiatives WAICY and TeenEagle, we inspire young minds to explore
            science, language, innovation, and leadership.
          </p>

          {/* Single Link Button */}
          <Link
            href="/aboutus"
            className="px-8 py-4 bg-[#964734]
            text-white font-semibold text-[18px] rounded-2xl shadow-xl shadow-[#964734]/30
            hover:shadow-2xl hover:shadow-[#964734]/40 hover:scale-105 
            transition-all duration-300 min-w-[200px]">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
