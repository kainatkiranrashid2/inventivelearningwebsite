import React from "react";

const Header = () => {
  return (
    <section className="relative bg-[#edf5fbf8] px-4 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
            Preparation{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto font-medium leading-relaxed">
            Each participant prepares with one carefully selected{" "}
            <strong>book</strong> and a <strong>movie</strong> designed for
            their age group. Together, these resources build comprehension,
            vocabulary, and critical thinking skills — and form the basis of the{" "}
            <strong>Round 1 written test</strong>.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Book Card */}
          <div className="group relative bg-gradient-to-br from-[#0FA4AF]/10 to-[#164e63]/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6 ">📘</div>
              <h3 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-6 tracking-tight">
                Assigned Book
              </h3>
              <ul className="space-y-4 text-[16px] md:text-[18px] text-[#475569] font-medium leading-relaxed list-disc pl-5">
                <li>
                  Each age group is assigned one age-appropriate fiction or
                  non-fiction book.
                </li>
                <li>
                  The book serves as the foundation for comprehension and
                  vocabulary in the written exam.
                </li>
                <li>
                  Students should focus on plot, characters, themes, setting,
                  and moral lessons.
                </li>
              </ul>
            </div>
          </div>

          {/* Movie Card */}
          <div className="group relative bg-gradient-to-br from-[#164e63]/10 to-[#0e7490]/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6 ">🎬</div>
              <h3 className="text-[24px] md:text-[28px] text-[#003135] font-bold mb-6 tracking-tight">
                Assigned Movie
              </h3>
              <ul className="space-y-4 text-[16px] md:text-[18px] text-[#475569] font-medium leading-relaxed list-disc pl-5">
                <li>
                  Each age group is also assigned a film complementing the
                  book’s themes or storyline.
                </li>
                <li>
                  Watching the film develops listening, interpretation, and
                  visual literacy skills.
                </li>
                <li>
                  The movie provides engaging context to reinforce language
                  learning.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exam Reminder */}
        <div className="relative bg-gradient-to-br from-[#AFDDE5]/30 via-white/50 to-[#0FA4AF]/20 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 text-center shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            <div className="text-4xl mb-4">📝</div>
            <h4 className="text-[22px] md:text-[26px] text-[#003135] font-bold mb-4 tracking-tight">
              Basis of the Round 1 Exam
            </h4>
            <p className="text-[17px] md:text-[19px] text-[#475569] leading-relaxed font-medium max-w-3xl mx-auto">
              The <strong>book and movie together</strong> form the basis of the
              Round 1 written test — a{" "}
              <strong>60-question multiple-choice exam</strong> designed to test
              comprehension, vocabulary, grammar, and critical thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
