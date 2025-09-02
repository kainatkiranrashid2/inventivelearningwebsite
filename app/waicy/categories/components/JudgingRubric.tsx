import { Code, Presentation, Lightbulb, Users, Target, MessageCircle } from "lucide-react";

const JudgingRubric = () => {
  const technicalCriteria = [
    {
      title: "AI Knowledge",
      description: "Understanding and application of artificial intelligence concepts and principles.",
      icon: <Code className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Five Big Ideas",
      description: "Use of Perception, Representation & Reasoning, Learning, Natural Interaction, and Social Impact.",
      icon: <Lightbulb className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Execution",
      description: "Technical implementation quality, functionality, and overall project completion.",
      icon: <Target className="w-8 h-8 text-[#0FA4AF]" />,
    },
  ];

  const presentationCriteria = [
    {
      title: "Problem Clarity",
      description: "Clear identification and articulation of the real-world problem being addressed.",
      icon: <MessageCircle className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Creativity & Originality",
      description: "Innovative approach, unique solutions, and creative thinking demonstrated in the project.",
      icon: <Presentation className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Ethics & Communication",
      description: "Ethical considerations in AI use and effective communication of ideas and solutions.",
      icon: <Users className="w-8 h-8 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Judging{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Rubric
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
            Projects are scored across two equally weighted areas, each contributing 50% to the final evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Criteria - 50% */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0FA4AF]/10 rounded-full mb-4">
                <Code className="w-8 h-8 text-[#0FA4AF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003135] mb-2">
                Technical Criteria
              </h3>
              <div className="text-3xl font-bold text-[#0FA4AF] mb-2">50%</div>
              <p className="text-[#475569] text-sm">
                AI knowledge, use of the Five Big Ideas, and execution
              </p>
            </div>

            <div className="space-y-6">
              {technicalCriteria.map((criterion, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {criterion.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003135] mb-2">
                      {criterion.title}
                    </h4>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentation & Impact - 50% */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0FA4AF]/10 rounded-full mb-4">
                <Presentation className="w-8 h-8 text-[#0FA4AF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003135] mb-2">
                Presentation & Impact
              </h3>
              <div className="text-3xl font-bold text-[#0FA4AF] mb-2">50%</div>
              <p className="text-[#475569] text-sm">
                Problem clarity, creativity, originality, ethics, and communication
              </p>
            </div>

            <div className="space-y-6">
              {presentationCriteria.map((criterion, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {criterion.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#003135] mb-2">
                      {criterion.title}
                    </h4>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Five Big Ideas Explanation */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">The Five Big Ideas of AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <div className="font-semibold mb-2">Perception</div>
                <div className="text-xs">How AI senses the world</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <div className="font-semibold mb-2">Representation</div>
                <div className="text-xs">How AI represents knowledge</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <div className="font-semibold mb-2">Learning</div>
                <div className="text-xs">How AI learns from data</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <div className="font-semibold mb-2">Interaction</div>
                <div className="text-xs">How AI communicates</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <div className="font-semibold mb-2">Social Impact</div>
                <div className="text-xs">How AI affects society</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingRubric;