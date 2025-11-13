import React from 'react';

const products = [
  {
    icon: '⚡',
    title: 'Autonomous Reconnaissance',
    description:
      'AI-driven flight patterns and real-time object detection for unparalleled intelligence gathering in contested airspace.',
  },
  {
    icon: '🛡️',
    title: 'All-Weather Operational Reliability',
    description:
      'Engineered with military-grade resilience, ensuring mission readiness from arctic cold to desert heat and severe wind conditions.',
  },
  {
    icon: '🎯',
    title: 'Precision Payload Delivery',
    description:
      'Sub-meter navigation accuracy and robust electronic hardening for secure and precise delivery of specialized mission payloads.',
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-14">
          Advanced <span className="text-vyom-orange">Autonomous Systems</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl shadow-lg border-t-4 border-vyom-orange/50 
                         transition duration-500 hover:shadow-2xl hover:shadow-vyom-orange/50 
                         hover:bg-gray-800 transform hover:-translate-y-2 text-center sm:text-left"
            >
              <div className="text-4xl sm:text-5xl mb-5 text-vyom-orange">{product.icon}</div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-400 font-poppins leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="text-base sm:text-lg font-bold text-vyom-orange border-b-2 border-vyom-orange 
                       hover:text-white hover:border-white transition duration-300"
          >
            Need a Custom Solution? Contact Our Team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
