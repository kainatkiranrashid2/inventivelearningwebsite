import { Building2, GraduationCap, Users, Globe, ExternalLink } from "lucide-react";

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
      name: "Fundão Municipality & UNESCO Institute for Lifelong Learning ",
      location: "Portugal (Europe)",
      role: "Regional Coordinator",
      description:
        "Host of WAICY Europe, a landmark event that brought together governments, educators, and global institutions to expand AI education in Europe.",
      icon: <Globe className="w-8 h-8 text-[#0FA4AF]" />,
    },
  ];

  const technicalPartners = [
    {
      name: "ReadyAI",
      role: "Core Curriculum Partner",
      link: "https://www.waicy.org/resources/#otherResources",
      description:
        "Providing the foundational AI curriculum and educational framework.",
    },
    {
      name: "Wafy",
      role: "European Co-host",
      link: "https://readyai.com/",

      description:
        "Co-host of European editions, expanding WAICY's reach across Europe.",
    },
    {
      name: "AI4k12",
      role: "Credentialing Partner",
      link: "https://ai4k12.org/resources/list-of-resources/",

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
              <a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center cursor-pointer hover:border-[#0FA4AF]/60">
                <div className="flex items-center justify-center mb-3">
                  <h4 className="text-xl font-bold text-[#003135] mr-2">
                    {partner.name}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-[#0FA4AF] group-hover:text-[#164e63] transition-colors duration-300" />
                </div>
                <p className="text-[#0FA4AF] font-semibold text-sm mb-4">
                  {partner.role}
                </p>
                <p className="text-[#475569] text-base leading-relaxed mb-4">
                  {partner.description}
                </p>
                <div className="text-sm text-[#0FA4AF] font-medium group-hover:text-[#164e63] transition-colors duration-300">
                  Click to visit website →
                </div>
              </a>
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
