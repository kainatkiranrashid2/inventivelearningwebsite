import React from "react";

const Header = () => {
  return (
    <section className="bg-[#003135] text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[400px] md:h-screen text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-[#0FA4AF] ">
            Pakistan&apos;s Future is Taking Flight
          </h1>
          <h3 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-[#AFDDE5] font-semibold md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            Uplifting Pakistani teens through mentorship, recognition, and
            opportunities.
          </h3>
          <button className="mt-8 px-6 py-3 bg-[#964734] text-white font-semibold rounded-md hover:bg-[#0FA4AF] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
