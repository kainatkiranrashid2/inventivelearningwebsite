import React from "react";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#AFDDE5]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0FA4AF]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div
            className="inline-block px-4 py-2 bg-[#AFDDE5]/30 backdrop-blur-sm rounded-full 
            text-[#024950] font-medium text-sm mb-6 border border-[#AFDDE5]/50">
            🏆 Global English Competition
          </div>
          <h2
            className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] 
            text-[#003135] font-bold mb-6 leading-tight">
            Meet{" "}
            <span className="bg-gradient-to-r from-[#164e63] to-[#0e7490] bg-clip-text text-transparent">
              TeenEagle
            </span>
          </h2>
          <p
            className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] 
            text-[#024950] font-medium max-w-4xl mx-auto leading-relaxed">
            Where Pakistani students aged 8–18 soar to new heights through
            innovative, resource-based English learning that transforms
            competition into
            <span className="text-[#0FA4AF] font-semibold">
              {" "}
              extraordinary growth
            </span>
          </p>
        </div>

        {/* Interactive Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { number: "3", label: "Age Categories", icon: "👥" },
            { number: "60", label: "Minute Exam", icon: "⏱️" },
            { number: "2", label: "Stages", icon: "🎯" },
            { number: "40%", label: "To Qualify", icon: "🏅" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl 
              border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/80 
              transition-all duration-500 cursor-pointer">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-[28px] md:text-[32px] font-bold text-[#0FA4AF] mb-2">
                {stat.number}
              </div>
              <div className="text-[14px] md:text-[16px] text-[#024950] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "📚",
              title: "Resource-Based Learning",
              description:
                "Curated books and films build comprehensive language skills through engaging, age-appropriate content that makes learning enjoyable and effective.",
            },
            {
              icon: "⚖️",
              title: "Fair Competition",
              description:
                "Three distinct age categories ensure every student competes with peers at their level, creating equal opportunities for success and recognition.",
            },
            {
              icon: "🤝",
              title: "Expert Partnership",
              description:
                "Inventive Learning serves as Pakistan's official representative, providing comprehensive support from registration to global finals preparation.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl 
              border border-white/30 hover:bg-white/90 hover:scale-105 hover:shadow-2xl 
              hover:shadow-[#AFDDE5]/20 transition-all duration-500 cursor-pointer">
              <div
                className="text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 
                transition-all duration-300 inline-block">
                {feature.icon}
              </div>

              <h3 className="text-[22px] md:text-[24px] text-[#003135] font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-[16px] text-[#024950] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competition Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold text-[#003135] mb-4">
              Your Journey to <span className="text-[#0FA4AF]">Excellence</span>
            </h3>
            <p className="text-[18px] md:text-[20px] text-[#024950] max-w-3xl mx-auto">
              From school registration to global recognition, here&apos;s how
              TeenEagle transforms learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* First Round */}
            <div className="group relative">
              <div
                className="bg-gradient-to-br from-[#024950] to-[#0FA4AF] p-10 rounded-3xl text-white 
                shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4
                    group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="text-[24px] md:text-[28px] font-bold">
                    First Round
                  </h4>
                </div>

                <div className="space-y-4 text-[16px] md:text-[18px]">
                  {[
                    "Paper-based exam in schools",
                    "February 2026 across Pakistan",
                    "60 questions in 60 minutes",
                    "Tests comprehension & critical thinking",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#AFDDE5] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Finals */}
            <div className="group relative">
              <div
                className="bg-gradient-to-r from-[#164e63] to-[#0e7490] p-10 rounded-3xl text-white 
                shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4
                    group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="text-[24px] md:text-[28px] font-bold">
                    Global Finals
                  </h4>
                </div>

                <div className="space-y-4 text-[16px] md:text-[18px]">
                  {[
                    "40%+ score qualifies you",
                    "International venues: UK, USA, Thailand",
                    "Global recognition & awards",
                    "International networking opportunities",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#AFDDE5] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div
          className="relative bg-gradient-to-br from-[#AFDDE5]/30 to-[#0FA4AF]/20 backdrop-blur-xl 
          rounded-3xl p-10 lg:p-16 border border-white/30 text-center">
          <div
            className="inline-flex items-center px-6 py-3 bg-[#964734]/20 backdrop-blur-sm 
            rounded-full text-[#964734] font-semibold text-sm mb-6 border border-[#964734]/30">
            🎓 School Registration Required
          </div>

          <h4 className="text-[32px] sm:text-[36px] md:text-[42px] text-[#003135] font-bold mb-6">
            Ready to Elevate Your Students?
          </h4>

          <p className="text-[18px] md:text-[20px] text-[#024950] mb-8 max-w-4xl mx-auto leading-relaxed">
            Open to all Pakistani schools (Grades 3–12, ages 8–18). Get
            comprehensive preparation materials, sample papers, and expert
            guidance directly from our team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group relative px-10 py-4 bg-gradient-to-r from-[#164e63] to-[#0e7490]
                text-white font-semibold text-[18px] rounded-2xl transition-all duration-300 
                  hover:shadow-2xl hover:shadow-[#0FA4AF]/30 hover:scale-110 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Register Your School
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
              className="px-8 py-4 text-[#024950] font-semibold text-[16px] border-2 border-[#024950] 
              rounded-2xl hover:bg-[#024950] hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
