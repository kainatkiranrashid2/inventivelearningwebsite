import React from "react";

const Header = () => {
  return (
    <section className=" ">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[400px] md:h-screen text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] text-[#41c9eb] font-semibold ">
            Soaring Beyond Limits
          </h1>
          <h3 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-[#41c9eb] font-semibold md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            Empowering Pakistan’s youth to rise as leaders, innovators, and
            change makers
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
