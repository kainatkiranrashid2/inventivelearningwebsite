import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
            {" "}
            Us{" "}
          </span>
        </h2>
        <p className="text-[18px] md:text-[20px] lg:text-[22px] text-[#475569] max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          We began our journey in Pakistan with the International Kangaroo
          Science Contest (IKSC) and the International Kangaroo Linguistic
          Contest (IKLC). Today, we proudly expand with WAICY and TeenEagle,
          giving students global opportunities to showcase creativity,
          innovation, and communication skills.
        </p>
        <Link
          href="/aboutus"
          className="group relative inline-block px-10 py-5 bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] text-white font-bold text-lg rounded-2xl shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500">
          <span className="relative z-10 flex items-center">
            Learn More About Us
            <svg
              className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
