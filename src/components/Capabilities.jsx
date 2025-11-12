import React from 'react';

// Sample data for the 3 product cards (unchanged)
const products = [
  // ... (products array)
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-vyom-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (unchanged) */}
        {/* ... */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {products.map((product, index) => (
            // UPDATED: Added hover:-translate-y-1 and a stronger ring/shadow on hover
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-vyom-orange/50 
                         transition duration-500 hover:shadow-2xl hover:shadow-vyom-orange/50 
                         hover:bg-gray-700/50 transform hover:-translate-y-1" // Subtle animation on hover
            >
              
              {/* Icon / Visual Element (unchanged) */}
              <div className="text-5xl mb-6 text-vyom-orange">
                {product.icon}
              </div>
              
              {/* Card Title (unchanged) */}
              <h3 className="text-2xl font-heading font-semibold mb-3">
                {product.title}
              </h3>
              
              {/* Card Description (unchanged) */}
              <p className="text-gray-400 font-poppins leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
          
        </div>
        
        {/* Optional CTA (unchanged) */}
        {/* ... */}
        
      </div>
    </section>
  );
};

export default Capabilities;