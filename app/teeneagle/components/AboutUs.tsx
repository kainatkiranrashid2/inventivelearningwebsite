import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 
            text-[#003135] font-bold mb-4">
            TeenEagle – International English Olympiad
          </h2>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
            text-[#024950] font-medium max-w-4xl mx-auto">
            A global English Olympiad for students aged 8–18, designed to
            enhance language skills in a fun, competitive, and intellectually
            stimulating way.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#AFDDE5] p-6 rounded-lg">
            <h3 className="text-[18px] md:text-[20px] text-[#003135] font-bold mb-3">
              Resource-Based Learning
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#024950]">
              Students prepare through curated books and films suited to their
              age group, building reading comprehension, vocabulary, and
              critical thinking skills.
            </p>
          </div>

          <div className="bg-[#AFDDE5] p-6 rounded-lg">
            <h3 className="text-[18px] md:text-[20px] text-[#003135] font-bold mb-3">
              Fair Competition
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#024950]">
              Divided into three age categories to ensure all students have an
              equal chance to excel in their respective groups.
            </p>
          </div>

          <div className="bg-[#AFDDE5] p-6 rounded-lg md:col-span-2 lg:col-span-1">
            <h3 className="text-[18px] md:text-[20px] text-[#003135] font-bold mb-3">
              Official Partnership
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#024950]">
              Inventive Learning is the official representative in Pakistan,
              managing outreach, registration, resources, and awards.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-[#024950] to-[#0FA4AF] rounded-xl p-8 lg:p-12 text-white">
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-8 text-center">
            How TeenEagle Works in Pakistan
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First Round */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-[20px] md:text-[22px] font-bold mb-4 text-[#AFDDE5]">
                First Round (Preliminaries)
              </h4>
              <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li>• Conducted on paper within schools</li>
                <li>• Scheduled for February 2026</li>
                <li>• 60-minute exam with 60 multiple-choice questions</li>
                <li>• Based on designated books and films</li>
                <li>
                  • Tests reading comprehension, grammar, and critical thinking
                </li>
              </ul>
            </div>

            {/* Global Finals */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-[20px] md:text-[22px] font-bold mb-4 text-[#AFDDE5]">
                Global Finals
              </h4>
              <ul className="space-y-2 text-[14px] md:text-[16px]">
                <li>• Students scoring 40% or above qualify</li>
                <li>• Hosted internationally in UK, USA, Thailand</li>
                <li>• Represents the pinnacle of the competition</li>
                <li>• Global recognition and awards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Registration Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#964734]/10 border-l-4 border-[#964734] rounded-r-lg p-6 max-w-4xl mx-auto">
            <h4 className="text-[20px] md:text-[22px] text-[#003135] font-bold mb-3">
              School Registration Only
            </h4>
            <p className="text-[16px] md:text-[18px] text-[#024950] mb-4">
              Participation is open to all schools across Pakistan (Grades 3–12,
              ages 8–18). Only schools can register groups of students;
              individual participation is not accepted.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#024950]">
              Registered schools receive preparation materials, sample papers,
              and guidance directly from our team.
            </p>
          </div>

          <div className="mt-8">
            <button
              className="px-8 py-4 bg-[#964734] text-white font-semibold text-[16px] md:text-[18px] 
              rounded-lg transition-all duration-200 hover:bg-[#0FA4AF] hover:scale-105">
              Register Your School
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
