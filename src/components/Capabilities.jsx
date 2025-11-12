import React from "react";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 px-6 bg-gray-950 text-center text-white"
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-10">
        Our Capabilities
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Capability 1 */}
        <div className="p-6 border border-gray-700 rounded-xl hover:shadow-xl hover:shadow-blue-400/10 transition">
          <h3 className="text-xl font-semibold mb-2">Autonomous Flight</h3>
          <p className="text-gray-400">
            Self-guided navigation and adaptive obstacle avoidance systems for
            efficient mission performance.
          </p>
        </div>

        {/* Capability 2 */}
        <div className="p-6 border border-gray-700 rounded-xl hover:shadow-xl hover:shadow-blue-400/10 transition">
          <h3 className="text-xl font-semibold mb-2">
            Surveillance & Reconnaissance
          </h3>
          <p className="text-gray-400">
            Real-time data analytics, long-range imaging, and secure data
            transfer for defense applications.
          </p>
        </div>

        {/* Capability 3 */}
        <div className="p-6 border border-gray-700 rounded-xl hover:shadow-xl hover:shadow-blue-400/10 transition">
          <h3 className="text-xl font-semibold mb-2">Endurance Design</h3>
          <p className="text-gray-400">
            Optimized aerodynamics and efficient propulsion systems for extended
            operational range and flight time.
          </p>
        </div>
      </div>
    </section>
  );
}
    