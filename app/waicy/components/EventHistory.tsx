import { Calendar } from "lucide-react";

const EventHistory = () => {
  const yearlyData = [
    {
      year: "2018",
      students: "200",
      teams: "60",
      countries: "5",
      highlight: "Small pilot program launch",
    },
    {
      year: "2019",
      students: "400+",
      teams: "120+",
      countries: "8",
      highlight: "First international expansion",
    },
    {
      year: "2021",
      students: "1,000+",
      teams: "300",
      countries: "30",
      highlight: "Virtual format adoption",
    },
    {
      year: "2023",
      students: "17,000+",
      teams: "15,000",
      countries: "64",
      highlight: "Major global breakthrough",
    },
    {
      year: "2024",
      students: "31,700",
      teams: "29,000",
      countries: "89",
      highlight: "Record participation worldwide",
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Event History &{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Global Growth
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Since 2018, WAICY has grown from a small pilot to one of the
            world&apos;s largest youth AI competitions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0FA4AF] to-[#164e63] rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {yearlyData.map((data, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}>
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <Calendar className="w-8 h-8 text-[#0FA4AF]" />
                      <h3 className="text-2xl font-bold text-[#003135]">
                        {data.year}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#0FA4AF] mb-1">
                          {data.students}
                        </div>
                        <div className="text-sm text-[#475569]">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#0FA4AF] mb-1">
                          {data.teams}
                        </div>
                        <div className="text-sm text-[#475569]">Teams</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#0FA4AF] mb-1">
                          {data.countries}
                        </div>
                        <div className="text-sm text-[#475569]">Countries</div>
                      </div>
                    </div>

                    <p className="text-[#475569] text-base italic">
                      {data.highlight}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-[#0FA4AF] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#003135] mb-4">
              2024 Global Highlights
            </h3>
            <p className="text-[#475569] text-base leading-relaxed">
              This remarkable growth reflects WAICY&apos;s global reputation and
              the passion of young learners using AI for real-world impact. In
              2024, standout contributions came from students in{" "}
              <span className="font-semibold text-[#0FA4AF]">
                Saudi Arabia, the U.S., India, and Greece
              </span>
              , showcasing innovation, technical skill, and social relevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHistory;
