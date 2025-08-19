import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="overflow-hidden absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#AFDDE5]/30 to-[#0FA4AF]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="overflow-hidden absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#164e63]/20 to-[#0e7490]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
      <div className="overflow-hidden absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-[#0FA4AF]/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#AFDDE5]/20 to-[#0FA4AF]/20 
            backdrop-blur-md rounded-full text-[#024950] font-semibold text-sm mb-8 border border-white/30 
            shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="w-2 h-2 bg-[#0FA4AF] rounded-full mr-3 animate-pulse"></span>
            🏆 Global English Competition
          </div>
          <h2 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[84px] text-[#003135] font-bold mb-8 leading-none tracking-tight">
            Meet{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] bg-clip-text text-transparent">
                TeenEagle
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#164e63] to-[#0FA4AF] rounded-full opacity-30"></div>
            </span>
          </h2>

          {/* Add TeenEagle branding image here */}
          <div className="mt-4 mb-12 relative">
            <Image
              src="/images/aboutteeneagle/header.jpg"
              alt="TeenEagle students at Statue of Liberty"
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>

          <p
            className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 
            text-[#475569] font-medium max-w-5xl mx-auto leading-relaxed">
            A global English Olympiad for students aged 8–18, designed to
            enhance language skills in a fun, competitive, and intellectually
            stimulating way. Unlike traditional contests, TeenEagle is
            resource-based with curated books and films that transform
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent font-bold">
              {" "}
              competition into extraordinary growth
            </span>
          </p>
        </div>

        {/* Modern Interactive Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              number: "3",
              label: "Age Categories",
              icon: "👥",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              number: "60",
              label: "Minute Exam",
              icon: "⏱️",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              number: "2",
              label: "Stages",
              icon: "🎯",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              number: "40%",
              label: "To Qualify",
              icon: "🏅",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl 
              border border-white/40 shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-white/90 
              transition-all duration-700 cursor-pointer overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-[32px] md:text-[36px] font-bold text-[#0FA4AF] mb-3 group-hover:text-[#164e63] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-[15px] md:text-[17px] text-[#475569] font-bold tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "📚",
              image: "/images/aboutteeneagle/classroom.jpg", // Use Image 2 or 3

              title: "Resource-Based Learning",
              description:
                "Curated books and films build comprehensive language skills through engaging, age-appropriate content that makes learning enjoyable and effective.",
              gradient: "from-[#0FA4AF]/10 to-[#164e63]/10",
            },
            {
              icon: "⚖️",
              image: "/images/aboutteeneagle/classroom-2.jpg", // Use Image 2 or 3

              title: "Fair Competition",
              description:
                "Three distinct age categories ensure every student competes with peers at their level, creating equal opportunities for success and recognition.",
              gradient: "from-[#164e63]/10 to-[#0e7490]/10",
            },
            {
              icon: "🤝",
              title: "Expert Partnership",
              image: "/images/aboutteeneagle/partnership.png",

              description:
                "Inventive Learning serves as Pakistan's official representative, providing comprehensive support from registration to global finals preparation.",
              gradient: "from-[#0e7490]/10 to-[#AFDDE5]/20",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur-2xl p-10 rounded-3xl 
              border border-white/40 hover:bg-white/90 hover:scale-105 hover:shadow-2xl 
              hover:shadow-[#0FA4AF]/20 transition-all duration-700 cursor-pointer overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

              <div className="relative z-10">
                <div className="mb-8 overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-[24px] md:text-[26px] text-[#003135] font-bold mb-6 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-[17px] text-[#475569] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Age Categories Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
              Three{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Age Categories
              </span>
            </h3>
            <p className="text-[20px] md:text-[22px] text-[#475569] max-w-4xl mx-auto font-medium">
              Fair competition for every age group with flexibility for
              different learning paces
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "TeenEagle 1",
                ageRange: "Ages 8–11",
                description:
                  "For younger students with age-appropriate materials",
                gradient: "from-[#164e63] to-[#0e7490]",
                image: "/images/aboutteeneagle/classroom.jpg",

                icon: "🌱",
              },
              {
                category: "TeenEagle 2",
                ageRange: "Ages 12–14",
                description:
                  "For middle-level students with intermediate challenges",
                gradient: "from-[#164e63] to-[#0e7490]",
                icon: "🌿",
              },
              {
                category: "TeenEagle 3",
                ageRange: "Ages 15–18",
                description: "For older participants with advanced content",
                gradient: "from-[#164e63] to-[#0e7490]",
                icon: "🌳",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${category.gradient} p-10 rounded-3xl text-white 
                shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-700 overflow-hidden cursor-pointer`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h4 className="text-[28px] md:text-[32px] font-bold mb-4 tracking-tight">
                    {category.category}
                  </h4>
                  <div className="text-[20px] font-bold mb-6 text-[#AFDDE5] tracking-wide">
                    {category.ageRange}
                  </div>
                  <p className="text-[17px] leading-relaxed font-medium">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#AFDDE5]/10 to-[#0FA4AF]/10 rounded-3xl"></div>
            <div className="relative flex items-start">
              <div className="text-3xl mr-6 mt-2 filter drop-shadow-lg">💡</div>
              <div>
                <h4 className="text-[22px] md:text-[24px] text-[#003135] font-bold mb-4 tracking-tight">
                  Flexible Category Placement
                </h4>
                <p className="text-[17px] text-[#475569] leading-relaxed font-medium">
                  Although categories are based on age, we recognize that
                  learners develop at different paces. If a student finds their
                  age-appropriate material too advanced, they may participate in
                  a lower category. Schools are encouraged to use their
                  discretion when assigning students, prioritizing comfort and a
                  positive learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Competition Journey */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
            <p className="text-[20px] md:text-[22px] text-[#475569] max-w-4xl mx-auto font-medium">
              From school registration to global recognition, here&apos;s how
              TeenEagle transforms learning
            </p>
          </div>

          <div className="text-center ">
            <div className="inline-block  p-4 bg-gradient-to-br from-[#164e63] to-[#0FA4AF] rounded-full shadow-lg">
              <Image
                src="/images/aboutteeneagle/teeneagle.png"
                alt="TeenEagle Competition"
                width={100}
                height={100}
                className="w-40 h-auto mx-auto rounded-full shadow-lg p-4  border-4 border-white"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 w-24 h-1 bg-gradient-to-r from-[#0FA4AF] to-[#164e63] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

            {/* First Round */}
            <div className="group relative">
              <div
                className="relative bg-gradient-to-br from-[#024950] via-[#0FA4AF] to-[#164e63] p-12 rounded-3xl text-white 
                shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mr-6
                      group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <span className="text-3xl font-bold">1</span>
                    </div>
                    <h4 className="text-[28px] md:text-[32px] font-bold tracking-tight">
                      First Round (Preliminaries)
                    </h4>
                  </div>

                  <div className="space-y-6 text-[17px] md:text-[19px] font-medium">
                    {[
                      "Paper-based exam conducted within schools",
                      "February 2026 across Pakistan",
                      "60 multiple-choice questions in 60 minutes",
                      "Tests reading comprehension, grammar & critical thinking",
                      "Based on designated books and films for each age group",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start group-hover:translate-x-2 transition-transform duration-500"
                        style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="w-3 h-3 bg-[#AFDDE5] rounded-full mt-3 mr-4 flex-shrink-0 shadow-lg"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Global Finals */}
            <div className="group relative">
              <div
                className="relative bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF] p-12 rounded-3xl text-white 
                shadow-2xl hover:shadow-4xl hover:scale-105 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mr-6
                      group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <span className="text-3xl font-bold">2</span>
                    </div>
                    <h4 className="text-[28px] md:text-[32px] font-bold tracking-tight">
                      Global Finals
                    </h4>
                  </div>

                  <div className="space-y-6 text-[17px] md:text-[19px] font-medium">
                    {[
                      "Students scoring 40%+ qualify for Global Finals",
                      "International venues: UK, USA, Thailand",
                      "Week-long event with competition & cultural exchange",
                      "Knowledge quiz, persuasive speaking, writing & spelling bee",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start group-hover:translate-x-2 transition-transform duration-500"
                        style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="w-3 h-3 bg-[#AFDDE5] rounded-full mt-3 mr-4 flex-shrink-0 shadow-lg"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Recognition & Rewards Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
              Recognition &{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Rewards
              </span>
            </h3>
            <p className="text-[20px] md:text-[22px] text-[#475569] max-w-4xl mx-auto font-medium">
              Outstanding achievements deserve exceptional recognition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Participation & Performance */}
            <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl overflow-hidden group hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0FA4AF]/5 to-[#164e63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                    🏆
                  </div>
                  <h4 className="text-[26px] md:text-[30px] text-[#003135] font-bold mb-6 tracking-tight">
                    Certificates & Recognition
                  </h4>
                </div>
                <div className="space-y-6 text-[17px] text-[#475569] font-medium">
                  {[
                    "Certificate of participation for all students",
                    "Detailed performance report for every participant",
                    "Medal certificates (Gold, Silver, Bronze) for high achievers",
                    "Top 5 students in each category receive 20%–100% fee discounts for Global Finals",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#0FA4AF] to-[#164e63] rounded-full mt-3 mr-4 flex-shrink-0 shadow-lg"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Incentives */}
            <div className="relative bg-gradient-to-br from-[#AFDDE5]/20 to-[#0FA4AF]/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl overflow-hidden group hover:scale-105 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-[#164e63]/5 to-[#0e7490]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                    🎓
                  </div>
                  <h4 className="text-[26px] md:text-[30px] text-[#003135] font-bold mb-6 tracking-tight">
                    Academic Incentives
                  </h4>
                </div>
                <div className="space-y-6 text-[17px] text-[#475569] font-medium">
                  <p className="leading-relaxed">
                    Access to exclusive tuition discounts at selected UK
                    universities and international summer schools, making
                    TeenEagle a stepping stone to future academic pathways.
                  </p>
                  <div className="relative bg-gradient-to-r from-white/70 to-white/50 p-6 rounded-2xl border border-white/50 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0FA4AF]/10 to-[#164e63]/10 rounded-2xl"></div>
                    <p className="relative text-[15px] font-bold text-[#164e63] tracking-wide">
                      💫 Transform your TeenEagle achievement into global
                      educational opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Registration CTA */}
        <div
          className="relative bg-gradient-to-br from-[#AFDDE5]/30 via-white/50 to-[#0FA4AF]/20 backdrop-blur-2xl 
          rounded-3xl p-12 lg:p-20 border border-white/40 text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#964734]/20 to-[#964734]/10 backdrop-blur-md 
              rounded-full text-[#964734] font-bold text-sm mb-10 border border-[#964734]/30 shadow-lg
              hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="w-3 h-3 bg-[#964734] rounded-full mr-4 animate-pulse"></span>
              🎓 School Registration Required
            </div>

            <h4 className="text-[36px] sm:text-[42px] md:text-[48px] text-[#003135] font-bold mb-8 tracking-tight">
              Ready to Elevate Your Students?
            </h4>

            <p className="text-[20px] md:text-[22px] text-[#475569] mb-10 max-w-5xl mx-auto leading-relaxed font-medium">
              Open to all Pakistani schools (Grades 3–12, ages 8–18). Only
              schools can register groups of students; individual participation
              is not accepted. Get comprehensive preparation materials, sample
              papers, and expert guidance directly from Inventive Learning, the
              official TeenEagle representative in Pakistan.
            </p>

            <div className="mb-12">
              <h5 className="text-[22px] md:text-[24px] text-[#003135] font-bold mb-8 tracking-tight">
                What Registered Schools Receive:
              </h5>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { item: "Competition guidelines", icon: "📋" },
                  { item: "Age-specific preparation resources", icon: "📚" },
                  { item: "Sample papers & instructions", icon: "📄" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-to-br from-white/80 to-white/60 p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0FA4AF]/5 to-[#164e63]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-center">
                      <div className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <p className="text-[16px] md:text-[17px] text-[#475569] font-bold">
                        {benefit.item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                className="group relative px-12 py-5 bg-gradient-to-r from-[#164e63] via-[#0e7490] to-[#0FA4AF]
                  text-white font-bold text-[19px] rounded-2xl transition-all duration-500 
                    hover:shadow-2xl hover:shadow-[#0FA4AF]/40 hover:scale-110 overflow-hidden border-2 border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center tracking-wide">
                  Register Your School
                  <svg
                    className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <button
                className="px-10 py-5 text-[#024950] font-bold text-[17px] border-3 border-[#024950] 
                rounded-2xl hover:bg-[#024950] hover:text-white transition-all duration-500 
                hover:shadow-lg hover:scale-105 tracking-wide">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
