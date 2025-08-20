import React from "react";

const Header = () => {
  return (
    <section className="relative bg-[#edf5fbf8]   py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Modern Categories Section */}
        <div className="mb-24">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
              Competition{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Categories
              </span>
            </h3>
            <p className="text-[20px] md:text-[22px] text-[#475569] max-w-4xl mx-auto font-medium">
              Comprehensive evaluation through diverse challenges and local
              recognition opportunities
            </p>
          </div>

          {/* Official TeenEagle Events */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#AFDDE5]/20 to-[#0FA4AF]/20 
        backdrop-blur-md rounded-full text-[#024950] font-semibold text-sm md:text-md lg:text-lg mb-6 border border-white/30 
        shadow-lg hover:shadow-xl transition-all duration-300">
                🌍 Official TeenEagle Events (Global)
              </div>
              <p className="text-[18px] text-[#475569] max-w-3xl mx-auto font-medium">
                International events that all TeenEagle participants take part
                in
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "Knowledge Quiz",
                  description:
                    "A timed, resource-based quiz featuring multiple-choice, true/false, and matching questions. It assesses comprehension of the assigned book and film for each age group.",
                  gradient: "from-[#0FA4AF]/10 to-[#164e63]/10",
                },
                {
                  icon: "✍️",
                  title: "Writing Challenge",
                  description:
                    "Students collaborate to produce a one-page essay, showcasing clear structure, logical argumentation, and effective English expression.",
                  gradient: "from-[#164e63]/10 to-[#0e7490]/10",
                },
                {
                  icon: "🗣️",
                  title: "Persuasive Speaking (Debate)",
                  description:
                    "A lively, Oxford-style debate where students argue for or against a motion. This round highlights critical thinking, rebuttal skills, and confident delivery.",
                  gradient: "from-[#0e7490]/10 to-[#AFDDE5]/20",
                },
                {
                  icon: "📝",
                  title: "Spelling Bee",
                  description:
                    "Progressive rounds where students spell increasingly complex words, testing their vocabulary, memory, and accuracy.",
                  gradient: "from-[#AFDDE5]/20 to-[#0FA4AF]/10",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${event.gradient} backdrop-blur-2xl p-10 rounded-3xl 
          border border-white/40 hover:bg-white/90 hover:scale-105 hover:shadow-2xl 
          hover:shadow-[#0FA4AF]/20 transition-all duration-700 cursor-pointer overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                        {event.icon}
                      </div>
                      <h4 className="text-[24px] md:text-[26px] text-[#003135] font-bold tracking-tight">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-[17px] text-[#475569] leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pakistan Spotlight Categories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#164e63]/20 to-[#0FA4AF]/20 
        backdrop-blur-md rounded-full text-[#024950] font-semibold text-sm md:text-md lg:text-lg mb-6 border border-white/30 
        shadow-lg hover:shadow-xl transition-all duration-300">
                🇵🇰 Pakistan Spotlight Categories (Local Recognition)
              </div>
              <p className="text-[18px] text-[#475569] max-w-4xl mx-auto font-medium">
                Additional recognition areas introduced by Inventive Learning to
                celebrate student achievements beyond the official TeenEagle
                scoring system
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎓",
                  title: "Academic Brilliance (English)",
                  description:
                    "Recognizing top scorers and standout performers in the official TeenEagle events, including the most improved writers, persuasive debaters, and spelling champions.",
                  gradient: "from-[#024950] via-[#0FA4AF] to-[#164e63]",
                  isHighlighted: false,
                },
                {
                  icon: "🎨",
                  title: "Creative Arts",
                  description:
                    "Celebrating students who express TeenEagle themes through creative works such as poems, reflective essays, posters, photographs, or short videos.",
                  subtitle:
                    "Poetry, Short Prose, Photography, Film, Visual Art",
                  gradient: "from-[#164e63] to-[#0e7490]",
                },
                {
                  icon: "🤝",
                  title: "Community Leadership",
                  description:
                    "Honoring students who connect English communication with action—whether through service projects, awareness campaigns, or initiatives that make a difference.",
                  subtitle: "Social Impact, Volunteering, Advocacy",
                  gradient: "from-[#0e7490] to-[#0FA4AF]",
                },
                {
                  icon: "💡",
                  title: "Innovation & Entrepreneurship",
                  description:
                    "Highlighting students who can persuasively pitch innovative ideas or business plans, demonstrating vision, impact, and strong communication skills.",
                  subtitle: "Startups, Tech Ideas, Business Plans",
                  gradient: "from-[#0FA4AF] to-[#AFDDE5]",
                },
                {
                  icon: "🌱",
                  title: "Personal Growth & Resilience",
                  description:
                    "Acknowledging students who share inspiring journeys of overcoming challenges, building confidence, or significantly improving their English through TeenEagle.",
                  gradient: "from-[#AFDDE5] to-[#164e63]",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`group relative ${
                    category.isHighlighted
                      ? `bg-gradient-to-br ${category.gradient} text-white shadow-2xl hover:shadow-4xl`
                      : "bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border border-white/40 shadow-xl hover:shadow-2xl"
                  } p-10 rounded-3xl hover:scale-105 transition-all duration-700 overflow-hidden cursor-pointer`}>
                  {category.isHighlighted && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  )}

                  {!category.isHighlighted && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                        {category.icon}
                      </div>
                      <h4
                        className={`text-[22px] md:text-[24px] font-bold mb-3 tracking-tight ${
                          category.isHighlighted
                            ? "text-white"
                            : "text-[#003135]"
                        }`}>
                        {category.title}
                      </h4>
                      {category.subtitle && (
                        <div
                          className={`text-[14px] font-bold mb-4 tracking-wide uppercase ${
                            category.isHighlighted
                              ? "text-[#AFDDE5]"
                              : "text-[#0FA4AF]"
                          }`}>
                          {category.subtitle}
                        </div>
                      )}
                    </div>
                    <p
                      className={`text-[16px] leading-relaxed font-medium text-center ${
                        category.isHighlighted
                          ? "text-white/90"
                          : "text-[#475569]"
                      }`}>
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information Card */}
          <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#AFDDE5]/10 to-[#0FA4AF]/10 rounded-3xl"></div>
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="text-3xl mr-6 mt-2 mb-4 md:mb-0 filter drop-shadow-lg">
                💫
              </div>
              <div>
                <h4 className="text-[22px] md:text-[24px] text-[#003135] font-bold mb-4 tracking-tight">
                  Comprehensive Recognition System
                </h4>
                <p className="text-[17px] text-[#475569] leading-relaxed font-medium">
                  TeenEagle combines rigorous international assessment through
                  official global events with local recognition categories that
                  celebrate diverse talents. While the official events maintain
                  global standards, Pakistan Spotlight Categories provide
                  additional opportunities for students to showcase their unique
                  strengths and contributions beyond traditional competition
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
