import React from "react";

const Header = () => {
  return (
    <section className="relative bg-[#edf5fbf8] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-bold text-[#003135] mb-6 tracking-tight">
            Round 1 –{" "}
            <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
              Pakistan
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto font-medium leading-relaxed">
            Organized by Inventive Learning, TeenEagle Round 1 in Pakistan is a
            paper-based test conducted within registered schools across the
            country. This round evaluates students&apos; English language
            skills, including comprehension, grammar, and critical thinking, and
            serves as the qualifying stage for the Global Finals.
          </p>
        </div>

        {/* Awards */}
        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#003135] mb-6 text-center">
            🏅 Awards – First Round
          </h3>
          <div className="overflow-x-auto mb-10 rounded-2xl shadow-xl border border-gray-200 max-w-3xl mx-auto">
            <table className="w-full border-collapse bg-white text-left text-sm md:text-base">
              <thead className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] text-white">
                <tr>
                  <th className="p-4 font-semibold">Score Range</th>
                  <th className="p-4 font-semibold">Award</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">90% – 100%</td>
                  <td className="p-4 font-semibold text-[#0FA4AF]">
                    Gold Medal Certificate
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">75% – 89.9%</td>
                  <td className="p-4 font-semibold text-[#3b82f6]">
                    Silver Medal Certificate
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">60% – 74.9%</td>
                  <td className="p-4 font-semibold text-[#f59e0b]">
                    Bronze Medal Certificate
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">40% – 59.9%</td>
                  <td className="p-4">Honourable Mention Certificate</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">Below 40%</td>
                  <td className="p-4">Certificate of Participation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-[16px] md:text-[18px] text-[#475569] font-medium leading-relaxed text-center">
            <p>All participating students receive:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 inline-block text-left">
              <li>An official Certificate of Participation</li>
              <li>A personalized Performance Report Card</li>
            </ul>
          </div>
        </div>
        {/* Global Finals Qualification */}
        <div className="mb-16">
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#003135] mb-6 text-center">
            Global Finals Qualification
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#475569] leading-relaxed font-medium mb-6 max-w-3xl mx-auto text-center">
            Students scoring 40% or above in Round 1 automatically qualify for
            the TeenEagle Global Finals, representing Pakistan internationally.
          </p>

          <h4 className="text-[22px] md:text-[26px] font-bold text-[#003135] mb-4 text-center">
            Performance-Based Discounts for Global Finals
          </h4>
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <table className="w-full border-collapse bg-white text-left text-sm md:text-base">
              <thead className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] text-white">
                <tr>
                  <th className="p-4 font-semibold">Position</th>
                  <th className="p-4 font-semibold">Discount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">1st Place</td>
                  <td className="p-4 font-semibold text-green-600">100%</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">2nd Place</td>
                  <td className="p-4 font-semibold text-green-500">50%</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">3rd Place</td>
                  <td className="p-4 font-semibold text-green-500">40%</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">4th Place</td>
                  <td className="p-4 font-semibold text-green-500">30%</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">5th Place</td>
                  <td className="p-4 font-semibold text-green-500">20%</td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4">Gold Medalists</td>
                  <td className="p-4 font-semibold text-green-600">
                    Additional 10% discount
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[15px] md:text-[17px] text-[#64748b] italic mt-4 text-center">
            Note: These discounts apply only to students who qualify for the
            Global Finals through Round 1 in Pakistan.
          </p>
        </div>

        {/* Academic Discounts */}
        <div className="mb-16">
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#003135] mb-6 text-center">
            Academic Discounts & Long-Term Opportunities
          </h3>
          <ul className="list-disc pl-6 text-[16px] md:text-[18px] text-[#475569] leading-relaxed font-medium space-y-3 max-w-3xl mx-auto">
            <li>
              📘 10% tuition discount for select UK summer schools and
              universities
            </li>
            <li>
              🏫 25% scholarship at Brooke House College, UK (for Grades 7–13)
            </li>
          </ul>
          <p className="text-[16px] md:text-[18px] text-[#475569] mt-4 max-w-3xl mx-auto text-center">
            These incentives align TeenEagle with students’ future academic
            pathways and open doors for study abroad experiences.
          </p>
        </div>

        {/* Countries Participating */}
        <div>
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#003135] mb-6 text-center">
            Countries Participating in TeenEagle
          </h3>
          <div className="overflow-x-auto mb-10 rounded-2xl shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <table className="w-full border-collapse bg-white text-left text-sm md:text-base">
              <thead className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] text-white">
                <tr>
                  <th className="p-4 font-semibold">Region</th>
                  <th className="p-4 font-semibold">Countries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">Europe</td>
                  <td className="p-4">
                    United Kingdom, Romania, Italy, Turkey, Greece, Poland,
                    Albania
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">Asia</td>
                  <td className="p-4">
                    Pakistan, India, China, Thailand, Kazakhstan, Indonesia,
                    Philippines
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">
                    Middle East
                  </td>
                  <td className="p-4">
                    United Arab Emirates (UAE), Saudi Arabia, Egypt, Jordan
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">Africa</td>
                  <td className="p-4">
                    Nigeria, Kenya, Ghana, South Africa, Zimbabwe
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">Americas</td>
                  <td className="p-4">
                    United States, Brazil, Canada, Argentina
                  </td>
                </tr>
                <tr className="odd:bg-[#f9fafb] even:bg-white hover:bg-[#ecfeff] transition">
                  <td className="p-4 font-semibold text-[#0FA4AF]">
                    Central Asia
                  </td>
                  <td className="p-4">Azerbaijan, Uzbekistan, Kyrgyzstan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className=" mt-10 text-[16px] md:text-[18px] text-[#475569] max-w-4xl mx-auto text-center">
            TeenEagle continues to grow, promoting international friendship and
            academic excellence through English language learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
