import {
  Heart,
  Gift,
  MapPin,
  Trophy,
  Eye,
  Handshake,
  Users,
} from "lucide-react";
import Link from "next/link";

const SponsorshipOpportunities = () => {
  const opportunities = [
    {
      title: "Sponsor Student Teams",
      description:
        "Support student teams, especially from underserved or underrepresented regions, giving them access to global AI education.",
      icon: <Users className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Educational Tools & Software",
      description:
        "Donate educational tools, software, or AI learning kits to enhance the learning experience for participants.",
      icon: <Gift className="w-10 h-10 text-[#0FA4AF]" />,
    },
    {
      title: "Regional Hubs & Travel Support",
      description:
        "Fund regional hubs, travel support, or competition prizes to expand WAICY's global reach and accessibility.",
      icon: <MapPin className="w-10 h-10 text-[#0FA4AF]" />,
    },
  ];

  const benefits = [
    {
      title: "Global Visibility",
      description:
        "Gain recognition across WAICY's international platform and reach thousands of students worldwide.",
      icon: <Eye className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Partner Recognition",
      description:
        "Receive partner recognition across all WAICY platforms, events, and communications.",
      icon: <Trophy className="w-8 h-8 text-[#0FA4AF]" />,
    },
    {
      title: "Talent Connection",
      description:
        "Connect with emerging talent in the AI and education ecosystem, building relationships with future innovators.",
      icon: <Handshake className="w-8 h-8 text-[#0FA4AF]" />,
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-8 tracking-tight">
            Sponsorship &{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Support
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
            WAICY welcomes support from institutions, tech companies,
            nonprofits, and individuals who share its mission of democratizing
            AI education.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mb-20">
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Opportunities for Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
                <div className="mb-6 flex justify-center ">
                  {opportunity.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003135] mb-4">
                  {opportunity.title}
                </h4>
                <p className="text-[#475569] text-base leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-[28px] sm:text-[32px] font-bold text-[#003135] mb-12 text-center">
            Supporter Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="">{benefit.icon}</div>
                  <h4 className="text-lg font-bold text-[#003135]">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-[#475569] text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] rounded-3xl p-12 text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-[28px] sm:text-[32px] font-bold mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with WAICY to democratize AI education and empower the
              next generation of innovators. Together, we can build a global
              community of AI-literate youth ready to shape a better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-white text-[#0FA4AF] font-semibold text-[18px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center">
                  Become a Partner
                  <svg
                    className="w-5 h-5 ml-2 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/waicy"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold text-[18px] rounded-2xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 min-w-[200px]">
                Learn More About WAICY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipOpportunities;
