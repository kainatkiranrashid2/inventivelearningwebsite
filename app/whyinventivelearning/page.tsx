import React from "react";

const WhyInventiveLearning = () => {
  return (
    <section className="relative bg-[#edf5fbf8] py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[44px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#003135] font-bold mb-8 leading-none tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Inventive Learning?
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-5xl mx-auto leading-relaxed font-medium">
            At Inventive Learning, we believe education should go beyond
            classrooms. Our programs are designed to empower students with
            skills, confidence, and global opportunities.
          </p>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {[
            {
              title: "Global Exposure",
              description:
                "Providing opportunities for students to compete and collaborate with peers worldwide.",
              icon: "🌍",
              gradient: "from-blue-500/10 to-cyan-500/10",
            },
            {
              title: "Critical Thinking",
              description:
                "Encouraging curiosity through science, language, and AI-focused challenges.",
              icon: "🧠",
              gradient: "from-purple-500/10 to-pink-500/10",
            },
            {
              title: "Confidence & Leadership",
              description:
                "Building communication and leadership skills by empowering students to express themselves creatively.",
              icon: "🚀",
              gradient: "from-green-500/10 to-emerald-500/10",
            },
            {
              title: "Accessible Learning",
              description:
                "Affordable participation with fee waiver options for deserving students.",
              icon: "🎓",
              gradient: "from-orange-500/10 to-red-500/10",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.gradient} p-10 rounded-3xl border border-white/40 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-700 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 ">{feature.icon}</div>
                <h3 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[17px] text-[#475569] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="relative bg-gradient-to-br from-[#AFDDE5]/30 via-white/50 to-[#0FA4AF]/20 backdrop-blur-2xl p-12 lg:p-20 rounded-3xl border border-white/40 shadow-2xl overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-[36px] sm:text-[44px] md:text-[52px] text-[#003135] font-bold mb-6 tracking-tight">
              100,000+ Students & Growing
            </h3>
            <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
              With years of experience conducting IKSC and IKLC, and our
              exciting new ventures WAICY and TeenEagle, Inventive Learning is
              committed to helping every student unlock their potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInventiveLearning;
