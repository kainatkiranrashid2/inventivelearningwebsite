import { Award, Medal, Trophy, Star, Target, Palette } from "lucide-react";

const Awards = () => {
  const medals = [
    {
      title: "Gold Medal",
      description:
        "Awarded to the highest-scoring projects in each track, recognizing exceptional innovation and execution.",
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Silver Medal",
      description:
        "Recognizing outstanding projects that demonstrate strong AI application and creative problem-solving.",
      icon: <Medal className="w-12 h-12 text-gray-400" />,
      color: "from-gray-300 to-gray-500",
    },
    {
      title: "Bronze Medal",
      description:
        "Celebrating excellent projects that show solid understanding of AI concepts and good execution.",
      icon: <Award className="w-12 h-12 text-amber-600" />,
      color: "from-amber-400 to-amber-700",
    },
  ];

  const specialAwards = [
    {
      title: "Impact Excellence Award",
      description:
        "For projects that demonstrate exceptional potential for positive social impact and real-world application.",
      icon: <Target className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Design Excellence Award",
      description:
        "Recognizing projects with outstanding visual design, user experience, and aesthetic innovation.",
      icon: <Palette className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "AI Innovation Award",
      description:
        "For projects that showcase groundbreaking use of AI technology and creative technical implementation.",
      icon: <Star className="w-10 h-10 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Awards &{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
            All participants receive official certificates. Top projects earn
            medals and special recognition for excellence.
          </p>
        </div>

        {/* Participation Certificate */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0FA4AF]/10 rounded-full mb-6">
              <Award className="w-8 h-8 text-[#0FA4AF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#003135] mb-4">
              Official Certificate
            </h3>
            <p className="text-[#475569] text-base leading-relaxed">
              Every WAICY participant receives an official certificate of
              participation, recognizing their contribution to the global AI
              education community and their commitment to using AI for positive
              change.
            </p>
          </div>
        </div>

        {/* Medal Categories */}
        <div className="mb-16">
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Medal Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medals.map((medal, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${medal.color} opacity-5 `}></div>

                <div className="relative z-10">
                  <div className="mb-6 ">{medal.icon}</div>
                  <h4 className="text-xl font-bold text-[#003135] mb-4">
                    {medal.title}
                  </h4>
                  <p className="text-[#475569] text-base leading-relaxed">
                    {medal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Awards */}
        <div>
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Special Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialAwards.map((award, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
                <div className="mb-6 ">{award.icon}</div>
                <h4 className="text-xl font-bold text-[#003135] mb-4">
                  {award.title}
                </h4>
                <p className="text-[#475569] text-base leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] rounded-3xl p-8 text-white">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-[28px] sm:text-[32px] font-bold mb-4">
              Ready to Compete?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students worldwide in showcasing your AI skills
              and creativity. Choose your track and start building solutions
              that can change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/waicy/registration"
                className="group relative px-8 py-4 bg-white text-[#0FA4AF] font-semibold text-[18px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center">
                  Register Now
                  <svg
                    className="w-5 h-5 ml-2 "
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
              </a>
              <a
                href="/waicy/resources"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold text-[18px] rounded-2xl border-2 border-white/60 hover:bg-white/30 hover:border-white/80 transition-all duration-300 min-w-[200px]">
                View Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
