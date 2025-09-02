import {
  BookOpen,
  Users,
  MessageSquare,
  Book,
  Code,
  Trophy,
} from "lucide-react";

const ResourcesPreparation = () => {
  const resources = [
    {
      title: "AI Fundamentals (K-12)",
      description: "Age-appropriate basics of AI.",
      icon: <BookOpen className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Teacher Guides",
      description: "Posters, lesson plans, and classroom modules.",
      icon: <Users className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "LLM Prompt Templates",
      description: "Ready-made frameworks for ChatGPT and other models.",
      icon: <MessageSquare className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "AI Storytelling",
      description: "Books and activities for younger learners.",
      icon: <Book className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Robotics & No-Code Tools",
      description: "Easy project-building without coding.",
      icon: <Code className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Project Showcases",
      description: "Access to past winning entries for inspiration.",
      icon: <Trophy className="w-10 h-10 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Resources &{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Preparation
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
            WAICY provides free resources to help students of all levels
            prepare:
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
              {/* Icon */}
              <div className="mb-6 ">{resource.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#003135] mb-4">
                {resource.title}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreparation;
