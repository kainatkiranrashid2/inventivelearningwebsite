import React from "react";

const Header = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#AFDDE5] via-[#AFDDE5] to-[#0FA4AF]/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0FA4AF]/20 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/15 rounded-full blur-xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[600px] lg:min-h-screen text-center px-4 py-20">
          {/* Floating badge */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full 
            text-[#003135] font-semibold text-sm mb-8 border border-white/30 shadow-lg
            hover:bg-white/30 transition-all duration-300">
            <svg
              className="w-5 h-5 mr-2 text-[#0FA4AF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Empowering Pakistan&apos;s Future
          </div>

          {/* Main heading with animated text */}
          <h1
            className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px] 
            text-[#003135] font-bold leading-tight mb-6 max-w-6xl">
            Pakistan&apos;s Future is
            <span className="block bg-gradient-to-r from-[#164e63] to-[#0e7490] bg-clip-text text-transparent">
              Taking Flight
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 
            text-[#024950] font-medium mb-12 max-w-5xl leading-relaxed">
            Empowering Pakistan’s youth to rise as leaders, innovators, and
            <span className="text-[#003135] font-semibold">
              {" "}
              change makers.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              className="group relative px-8 py-4 bg-[#964734]
              text-white font-semibold text-[18px] rounded-2xl shadow-xl shadow-[#964734]/30
              hover:shadow-2xl hover:shadow-[#964734]/40 hover:scale-105 
              transition-all duration-300 overflow-hidden min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            </button>

            <button
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-[#003135] font-semibold 
              text-[18px] rounded-2xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60
              transition-all duration-300 min-w-[200px]">
              Learn More
            </button>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#003135] mb-2">
                8-18
              </div>
              <div className="text-[14px] md:text-[16px] text-[#024950] font-medium">
                Age Range
              </div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#003135] mb-2">
                Global
              </div>
              <div className="text-[14px] md:text-[16px] text-[#024950] font-medium">
                Recognition
              </div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-[#003135] mb-2">
                2026
              </div>
              <div className="text-[14px] md:text-[16px] text-[#024950] font-medium">
                Next Round
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
