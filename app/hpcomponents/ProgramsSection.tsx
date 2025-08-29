import Link from "next/link";

export default function ProgramsSection() {
  const programs = [
    {
      title: "IKSC – International Kangaroo Science Contest",
      description:
        "A competition fostering science skills and global exposure for young learners.",
      link: "/aboutus#iksc",
    },
    {
      title: "IKLC – International Kangaroo Linguistic Contest",
      description:
        "A platform to sharpen linguistic and problem-solving abilities in an international setting.",
      link: "/abiotus#iklc",
    },
    {
      title: "WAICY – World AI Competition for Youth",
      description:
        "A global challenge where students use AI to solve real-world problems, encouraging creativity and innovation.",
      link: "/waicy",
    },
    {
      title: "TeenEagle – English Olympiad",
      description:
        "A worldwide platform helping young people improve communication, creativity, and leadership skills.",
      link: "/teeneagle",
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-16 tracking-tight">
          What We{" "}
          <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
            {" "}
            Do{" "}
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col">
              <h3 className="text-xl font-bold text-[#003135] mb-4">
                {program.title}
              </h3>
              <p className="text-[#475569] text-base flex-grow mb-6">
                {program.description}
              </p>
              <Link
                href={program.link}
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#164e63] to-[#0FA4AF] text-white font-semibold text-sm rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-500">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
