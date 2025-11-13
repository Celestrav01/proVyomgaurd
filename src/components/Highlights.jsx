import React from 'react';

const HighlightItem = ({ icon, text }) => (
  <li className="flex items-start sm:items-center space-x-4 sm:space-x-6 p-4 sm:p-5 rounded-xl border-l-4 border-transparent 
                 transition duration-300 hover:bg-gray-800 hover:border-vyom-orange/70">
    <span className="text-2xl sm:text-3xl text-vyom-orange flex-shrink-0">{icon}</span>
    <p className="text-base sm:text-lg md:text-xl font-poppins text-gray-200 leading-relaxed">{text}</p>
  </li>
);

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 md:py-28 bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Why <span className="text-vyom-orange">VyomGarud</span>?
        </h2>

        <ul className="space-y-4 sm:space-y-6">
          <HighlightItem icon="→" text="Uncompromised Military-Grade Reliability and Durability in Extreme Conditions." />
          <HighlightItem icon="→" text="Proprietary Precision Engineering for Sub-meter Navigation Accuracy." />
          <HighlightItem icon="→" text="Next-Gen AI Autonomy for Complex Mission Execution and Decision Superiority." />
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
