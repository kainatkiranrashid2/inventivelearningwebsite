import React from "react";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <section className="relative bg-[#edf5fbf8] px-4 pb-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[44px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#003135] font-bold mb-8 leading-none tracking-tight">
            What{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              We Do
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-5xl mx-auto leading-relaxed font-medium">
            At Inventive Learning, we organize international academic
            competitions that challenge students to think critically,
            communicate effectively, and explore new ideas. From science and
            linguistics to artificial intelligence and leadership, our programs
            give young learners the chance to grow beyond classrooms and connect
            with the world.
          </p>
        </div>

        {/* Established Programs */}
        <div className="mb-20">
          <h3 className="text-[32px] md:text-[40px] font-bold text-[#003135] mb-10 text-center tracking-tight">
            Our Established{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Programs
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-10 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition-all duration-500">
              <h4 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-4 tracking-tight">
                IKSC – International Kangaroo Science Contest
              </h4>
              <p className="text-[17px] text-[#475569] font-medium leading-relaxed">
                A competition fostering science skills and global exposure for
                young learners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-10 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition-all duration-500">
              <h4 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-4 tracking-tight">
                IKLC – International Kangaroo Linguistic Contest
              </h4>
              <p className="text-[17px] text-[#475569] font-medium leading-relaxed">
                A platform to sharpen linguistic and problem-solving abilities.
              </p>
            </div>
          </div>

          {/* Registration Link */}
          <div className="text-center mt-10">
            <Link
              target="_blank"
              href="https://enrollments.kangaroopakistan.org/"
              className="inline-block bg-gradient-to-r from-[#0FA4AF] to-[#164e63] text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:opacity-90 transition">
              Register for IKSC & IKLC
            </Link>
          </div>
        </div>

        {/* New Initiatives */}
        <div>
          <h3 className="text-[32px] md:text-[40px] font-bold text-[#003135] mb-10 text-center tracking-tight">
            Our New{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Initiatives
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-10 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition-all duration-500">
              <h4 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-4 tracking-tight">
                WAICY – World Artificial Intelligence Competition for Youth
              </h4>
              <p className="text-[17px] text-[#475569] font-medium leading-relaxed">
                A global competition where students aged 6–18 use Artificial
                Intelligence to solve real-world problems. It encourages
                creativity, innovation, and teamwork while preparing young
                learners for the future of technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-10 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition-all duration-500">
              <h4 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-4 tracking-tight">
                TeenEagle – English Olympiad
              </h4>
              <p className="text-[17px] text-[#475569] font-medium leading-relaxed">
                A worldwide platform helping young people improve communication,
                creativity, and leadership skills. Students showcase ideas,
                sharpen English, and connect globally to become future leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
