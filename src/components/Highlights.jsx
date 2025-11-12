import React from 'react';

// Updated HighlightItem component for better visual impact
const HighlightItem = ({ icon, text }) => (
  // Added a subtle hover effect (bg change, border change)
  <li className="flex items-center space-x-6 p-4 rounded-lg border-l-4 border-transparent 
                 transition duration-300 hover:bg-gray-800 hover:border-vyom-orange/70">
    
    {/* Icon: Using a bold, fixed arrow (→) to replace generic icons */}
    <span className="text-3xl text-vyom-orange flex-shrink-0 font-light">→</span>
    
    {/* Feature text */}
    <p className="text-xl md:text-2xl font-poppins text-gray-200">
      {text}
    </p>
  </li>
);

const Highlights = () => {
  return (
    <section id="highlights" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Why <span className="text-vyom-orange">VyomGarud</span>?
        </h2>
        
        {/* 3 concise feature bullets */}
        <ul className="space-y-4">
          <HighlightItem 
            text="Uncompromised Military-Grade Reliability and Durability in Extreme Conditions."
          />
          <HighlightItem 
            text="Proprietary Precision Engineering for Sub-meter Navigation Accuracy."
          />
          <HighlightItem 
            text="Next-Gen AI Autonomy for Complex Mission Execution and Decision Superiority."
          />
        </ul>
        
      </div>
    </section>
  );
};

export default Highlights;