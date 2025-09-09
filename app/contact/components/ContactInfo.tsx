import React from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-gradient-to-br from-[#AFDDE5]/20 via-white to-[#0FA4AF]/10 p-8 rounded-3xl border border-[#0FA4AF]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] p-3 rounded-2xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-[#003135] ml-4">
                Our Location
              </h3>
            </div>
            <div className="text-[#475569] leading-relaxed">
              <p className="font-semibold text-[#003135] mb-2">
                Inventive Learning
              </p>
              <p>1st Floor, Plaza 114</p>
              <p>Main Boulevard, Phase 06</p>
              <p>DHA Lahore</p>
              <p className="mt-2 font-medium">Postal Code: 54792</p>
            </div>
          </div>

          {/* Phone Numbers Card */}
          <div className="bg-gradient-to-br from-[#AFDDE5]/20 via-white to-[#0FA4AF]/10 p-8 rounded-3xl border border-[#0FA4AF]/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] p-3 rounded-2xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-[#003135] ml-4">
                Phone Numbers
              </h3>
            </div>
            <div className="text-[#475569] space-y-3">
              <div>
                <p className="font-semibold text-[#003135] mb-1">Landline:</p>
                <p>+92 42 37180505</p>
                <p>+92 42 37180506</p>
              </div>
              <div>
                <p className="font-semibold text-[#003135] mb-1">
                  Cell / WhatsApp:
                </p>
                <p>+923332111399</p>
                <p>+923218403033</p>
                <p>+923195080077</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-gradient-to-br from-[#AFDDE5]/20 via-white to-[#0FA4AF]/10 p-8 rounded-3xl border border-[#0FA4AF]/20 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] p-3 rounded-2xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[24px] font-bold text-[#003135] ml-4">
                Email Us
              </h3>
            </div>
            <div className="text-[#475569] space-y-4">
              <div>
                <p className="font-semibold text-[#003135] mb-2">
                  For TeenEagle:
                </p>
                <a
                  href="mailto:teeneagle@inventivelearning.org"
                  className="text-[#0FA4AF] hover:text-[#164e63] transition-colors font-medium">
                  teeneagle@inventivelearning.org
                </a>
              </div>
              <div>
                <p className="font-semibold text-[#003135] mb-2">For WAICY:</p>
                <a
                  href="mailto:waicy@inventivelearning.org"
                  className="text-[#0FA4AF] hover:text-[#164e63] transition-colors font-medium">
                  waicy@inventivelearning.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="relative bg-gradient-to-br from-[#AFDDE5]/30 via-white/50 to-[#0FA4AF]/20 backdrop-blur-2xl p-12 lg:p-20 rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] p-4 rounded-3xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#003135] mb-6 tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] bg-clip-text text-transparent">
                Connect?
              </span>
            </h3>
            <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Whether you have questions about our competitions, need support
              with registration, or want to learn more about our educational
              programs, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:teeneagle@inventivelearning.org"
                className="bg-gradient-to-r from-[#0FA4AF] to-[#164e63] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Email TeenEagle Team
              </a>
              <a
                href="mailto:waicy@inventivelearning.org"
                className="bg-white text-[#0FA4AF] border-2 border-[#0FA4AF] px-8 py-4 rounded-2xl font-semibold hover:bg-[#0FA4AF] hover:text-white transition-all duration-300 hover:scale-105">
                Email WAICY Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
