import { Brain, Palette, Video, MessageSquare } from "lucide-react";

const CompetitionTracks = () => {
  const tracks = [
    {
      title: "AI Showcase",
      description:
        "Propose AI-based solutions to real-world problems (e.g., health, environment, social impact).",
      criteria: "Judged on problem-solving, innovation, and AI understanding.",
      icon: <Brain className="w-12 h-12 text-[#0FA4AF]" />,
      color: "from-[#0FA4AF] to-[#164e63]",
    },
    {
      title: "AI-Generated Art",
      description:
        "Use AI tools (DALL-E, Midjourney, etc.) to create digital artwork.",
      criteria:
        "Judged on originality, message, composition, and AI integration.",
      icon: <Palette className="w-12 h-12 text-[#0FA4AF]" />,
      color: "from-[#164e63] to-[#0e7490]",
    },
    {
      title: "AI-Generated Video",
      description:
        "Produce short AI-driven videos with animation, voiceovers, or storytelling.",
      criteria: "Judged on engagement, clarity, and AI use.",
      icon: <Video className="w-12 h-12 text-[#0FA4AF]" />,
      color: "from-[#0e7490] to-[#0FA4AF]",
    },
    {
      title: "Large Language Models (LLMs)",
      description:
        "Develop applications using ChatGPT, Bard, etc. (e.g., virtual tutors, knowledge bots).",
      criteria: "Judged on creativity, functionality, ethics, and AI logic.",
      icon: <MessageSquare className="w-12 h-12 text-[#0FA4AF]" />,
      color: "from-[#0FA4AF] to-[#164e63]",
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Competition{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Tracks
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
            WAICY offers four tracks to showcase creativity, innovation, and AI
            skills. Students may choose one:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-5 `}></div>

              <div className="relative z-10">
                <div className="mb-6 ">{track.icon}</div>

                <h3 className="text-2xl font-bold text-[#003135] mb-4">
                  {track.title}
                </h3>

                <p className="text-[#475569] text-base leading-relaxed mb-4">
                  {track.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-[#0FA4AF] mb-2">
                    Judging Criteria:
                  </p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {track.criteria}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg max-w-3xl mx-auto">
            <p className="text-[18px] text-[#475569] leading-relaxed font-medium">
              Each track is designed to highlight different aspects of AI
              creativity and technical skill, allowing students to showcase
              their unique strengths and interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionTracks;
