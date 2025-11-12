import React from 'react';
// Using Font Awesome/icons library would replace the placeholder text
const HighlightItem = ({ icon, text }) => (
  <li className="flex items-start space-x-4">
    {/* Icon styled with the accent color */}
    <span className="text-3xl text-vyom-orange flex-shrink-0 mt-1">{icon}</span>
    
    {/* Feature text */}
    <p className="text-xl md:text-2xl font-poppins text-gray-200">
      {text}
    </p>
  </li>
);

const Highlights = () => {
  return (
    // Simple, focused section, using darker background for contrast
    <section id="highlights" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Why <span className="text-vyom-orange">VyomGarud</span>?
        </h2>
        
        {/* 3 concise feature bullets */}
        <ul className="space-y-8">
          <HighlightItem 
            icon="✅" 
            text="Uncompromised Military-Grade Reliability and Durability in Extreme Conditions."
          />
          <HighlightItem 
            icon="⚙️" 
            text="Proprietary Precision Engineering for Sub-meter Navigation Accuracy."
          />
          <HighlightItem 
            icon="🧠" 
            text="Next-Gen AI Autonomy for Complex Mission Execution and Decision Superiority."
          />
        </ul>
        
      </div>
    </section>
  );
};

export default Highlights;