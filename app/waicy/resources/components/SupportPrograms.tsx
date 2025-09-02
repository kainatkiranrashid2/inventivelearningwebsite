import { Video, GraduationCap, Users } from "lucide-react";

const SupportPrograms = () => {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[18px] md:text-[20px] text-[#475569] max-w-4xl mx-auto leading-relaxed font-medium">
            In addition, WAICY hosts webinars, teacher training, and coaching
            sessions to support both educators and students, ensuring an
            inclusive and confident learning experience.
          </p>
        </div>

        {/* Support Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
            <div className="mb-6 ">
              <Video className="w-10 h-10 text-[#0FA4AF] mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-[#003135] mb-4">Webinars</h3>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
            <div className="mb-6 ">
              <GraduationCap className="w-10 h-10 text-[#0FA4AF] mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-[#003135] mb-4">
              Teacher Training
            </h3>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
            <div className="mb-6 ">
              <Users className="w-10 h-10 text-[#0FA4AF] mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-[#003135] mb-4">
              Coaching Sessions
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPrograms;
