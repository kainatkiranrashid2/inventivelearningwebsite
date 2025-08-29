import { Globe, Brain, Star, GraduationCap } from "lucide-react";

export default function WhyInventiveLearning() {
  const values = [
    {
      title: "Global Exposure",
      description:
        "Opportunities to compete and collaborate with peers worldwide.",
      icon: <Globe className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Critical Thinking",
      description:
        "Science, language, and AI-focused challenges that spark innovation.",
      icon: <Brain className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Leadership & Confidence",
      description:
        "Empowering students to express themselves and grow as leaders.",
      icon: <Star className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Accessibility",
      description:
        "Affordable participation and fee waivers for deserving students.",
      icon: <GraduationCap className="w-10 h-10 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-16 tracking-tight">
          Why{" "}
          <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
            {" "}
            Inventive Learning?{" "}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="mb-4 group-hover:scale-125 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003135] mb-2">
                {value.title}
              </h3>
              <p className="text-[#475569] text-base">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-lg text-[#475569] font-medium max-w-3xl mx-auto leading-relaxed">
            With years of experience conducting IKSC and IKLC — and our exciting
            new ventures WAICY and TeenEagle — Inventive Learning has helped
            <span className="font-bold text-[#0FA4AF]">
              {" "}
              100,000+ students across Pakistan{" "}
            </span>
            unlock their potential. The number continues to grow each year!
          </p>
        </div>
      </div>
    </section>
  );
}
