import { Users, DollarSign, Globe, Laptop, Trophy } from "lucide-react";

const ParticipationDetails = () => {
  const details = [
    {
      title: "Who Can Join",
      description:
        "WAICY is open to students aged 6-18 worldwide. They may register individually or in teams of 3-5. No prior coding or AI experience is required—creativity in any form (programming, design, storytelling, or ideas) is encouraged.",
      icon: <Users className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Fee in Pakistan",
      description:
        "Participation costs PKR 1,200 per student, covering resources, support, and local coordination. However, students who are unable to pay may request a fee waiver. No student will be denied participation due to inability to pay.",
      icon: <DollarSign className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Format",
      description:
        "Students can compete virtually or in-person. Local editions are held in some countries, and winners automatically qualify for the global finals.",
      icon: <Globe className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Project Requirements",
      description:
        "No robots or physical models are needed. Submissions can include AI-powered apps, generative art, or videos—so long as they use AI to tackle a real-world issue.",
      icon: <Laptop className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Global Reach",
      description:
        "WAICY now includes students from 150+ countries, offering equal opportunities for learners everywhere to join this global AI movement.",
      icon: <Trophy className="w-10 h-10 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Participation{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Details
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
            Everything you need to know about joining WAICY and becoming part of
            the global AI community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="mb-6 ">{detail.icon}</div>
              <h3 className="text-xl font-bold text-[#003135] mb-4">
                {detail.title}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipationDetails;
