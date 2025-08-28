import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[44px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#003135] font-bold mb-8 leading-none tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#475569] max-w-5xl mx-auto leading-relaxed font-medium">
            We began our journey in Pakistan with the International Kangaroo
            Science Contest (IKSC) and the International Kangaroo Linguistic
            Contest (IKLC), which quickly became some of the most trusted and
            popular academic contests in the country.
          </p>
        </div>

        {/* Image & Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <Image
              src="/images/aboutus/our-journey.jpg"
              alt="Our Journey"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div>
            <h3 className="text-[28px] md:text-[34px] text-[#003135] font-bold mb-6 tracking-tight">
              Our Journey
            </h3>
            <p className="text-[17px] md:text-[19px] text-[#475569] leading-relaxed font-medium mb-6">
              Today, we are proud to expand our vision with
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent font-bold">
                {" "}
                WAICY (World Artificial Intelligence Competition for Youth)
              </span>{" "}
              and <span className="font-bold text-[#0FA4AF]">TeenEagle</span>,
              giving students access to global platforms where they can showcase
              creativity, innovation, and communication skills.
            </p>
            <p className="text-[17px] md:text-[19px] text-[#475569] leading-relaxed font-medium">
              Our vision is to make world-class learning opportunities
              accessible to every student in Pakistan, empowering them to become
              confident, innovative, and globally connected individuals.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative bg-gradient-to-br from-[#AFDDE5]/30 via-white/50 to-[#0FA4AF]/20 backdrop-blur-2xl p-12 lg:p-20 rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#003135] mb-6 tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Vision
              </span>
            </h3>
            <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
              To make world-class learning opportunities accessible to every
              student in Pakistan, nurturing the next generation of confident,
              innovative, and globally connected leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
