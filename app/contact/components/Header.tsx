import React from "react";

const Header = () => {
  return (
    <section className="relative bg-[#edf5fbf8] px-4 py-28 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-0 lg:mb-0">
          <h2 className="text-[44px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#003135] font-bold mb-8 leading-none tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#475569] max-w-5xl mx-auto leading-relaxed font-medium">
            Get in touch with us for any inquiries about TeenEagle, WAICY, or
            our educational programs. We&apos;re here to help you on your
            learning journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
