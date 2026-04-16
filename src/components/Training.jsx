import React from "react";

const Training = () => {
  return (
    <section
      id="training"
      className="min-h-screen bg-[#02050A] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Security Training
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide industry-level training programs for security personnel,
            ensuring top-notch safety standards and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              Basic Security Training
            </h3>
            <p className="text-gray-300">
              Covers fundamentals of guarding, surveillance, access control, and
              emergency handling techniques.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              Advanced Security Training
            </h3>
            <p className="text-gray-300">
              Specialized training in risk assessment, crowd control, VIP
              protection, and crisis management.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              Fire & Safety Training
            </h3>
            <p className="text-gray-300">
              Learn fire prevention, evacuation procedures, and usage of fire
              safety equipment effectively.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              CCTV Monitoring
            </h3>
            <p className="text-gray-300">
              Training on surveillance systems, monitoring techniques, and
              incident reporting.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              Industrial Security
            </h3>
            <p className="text-gray-300">
              Security protocols for factories, warehouses, and industrial
              environments.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-gold-400">
              Soft Skills Training
            </h3>
            <p className="text-gray-300">
              Communication skills, discipline, and professional behavior
              training for security staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
