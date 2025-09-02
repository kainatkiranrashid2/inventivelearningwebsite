import { Building2, GraduationCap, Users, Globe } from "lucide-react";

const CommunityEngagement = () => {
  const institutionalHosts = [
    {
      name: "Inventive Learning",
      location: "Pakistan",
      role: "Country Organizer",
      description: "Managing outreach and school coordination across Pakistan.",
      icon: <Building2 className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      name: "KAUST Academy",
      location: "Saudi Arabia",
      role: "Regional Host",
      description: "Regional host aligned with Saudi Arabia's AI strategy.",
      icon: <GraduationCap className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      name: "Penn State Readiness Institute",
      location: "USA",
      role: "U.S. Host",
      description: "U.S. host, providing mentorship and resources.",
      icon: <Users className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      name: "Academic Quests",
      location: "Pakistan",
      role: "Regional Coordinator",
      description: "Leading outreach across South Asia.",
      icon: <Globe className="w-8 h-8 text-[#0FA4AF]" />,
    },
  ];

  const technicalPartners = [
    {
      name: "ReadyAI",
      role: "Core Curriculum Partner",
      description:
        "Providing the foundational AI curriculum and educational framework.",
    },
    {
      name: "Wafy",
      role: "European Co-host",
      description:
        "Co-host of European editions, expanding WAICY's reach across Europe.",
    },
    {
      name: "Certopus",
      role: "Credentialing Partner",
      description:
        "Credentialing partner for secure digital certificates and recognition.",
    },
  ];

  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Community{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Engagement
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
            WAICY is driven by a global network of hosts, collaborators, and
            partners dedicated to advancing AI education for youth.
          </p>
        </div>

        {/* Institutional Hosts */}
        <div className="mb-20">
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Institutional Hosts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutionalHosts.map((host, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="">{host.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-[#003135]">
                        {host.name}
                      </h4>
                      <span className="text-sm font-semibold text-[#0FA4AF] bg-[#0FA4AF]/10 px-3 py-1 rounded-full">
                        {host.location}
                      </span>
                    </div>
                    <p className="text-[#0FA4AF] font-semibold text-sm mb-3">
                      {host.role}
                    </p>
                    <p className="text-[#475569] text-base leading-relaxed">
                      {host.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Educational Partners */}
        <div>
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Technical & Educational Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalPartners.map((partner, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
                <h4 className="text-xl font-bold text-[#003135] mb-3">
                  {partner.name}
                </h4>
                <p className="text-[#0FA4AF] font-semibold text-sm mb-4">
                  {partner.role}
                </p>
                <p className="text-[#475569] text-base leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg max-w-4xl mx-auto">
            <p className="text-[18px] md:text-[20px] text-[#475569] leading-relaxed font-medium">
              Together, these partners help WAICY build a{" "}
              <span className="font-bold text-[#0FA4AF]">global community</span>{" "}
              of AI-literate, innovative youth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
