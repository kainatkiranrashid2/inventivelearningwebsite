import { Users, Globe2, Trophy } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-[#0FA4AF]" />,
      value: "100,000+",
      label: "Students Participated",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-[#0FA4AF]" />,
      value: "4+",
      label: "International Competitions",
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#0FA4AF]" />,
      value: "15+",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-16 tracking-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
            {" "}
            Impact{" "}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="mb-6 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-[#0FA4AF] mb-2 group-hover:text-[#164e63] transition-colors">
                {stat.value}
              </div>
              <p className="text-lg font-semibold text-[#475569]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
