import React from 'react';

const products = [
  {
    icon: '⚡', 
    title: 'Autonomous Reconnaissance',
    description: 'AI-driven flight patterns and real-time object detection for unparalleled intelligence gathering in contested airspace.',
  },
  {
    icon: '🛡️', 
    title: 'All-Weather Operational Reliability',
    description: 'Engineered with military-grade resilience, ensuring mission readiness from arctic cold to desert heat and severe wind conditions.',
  },
  {
    icon: '🎯', 
    title: 'Precision Payload Delivery',
    description: 'Sub-meter navigation accuracy and robust electronic hardening for secure and precise delivery of specialized mission payloads.',
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-vyom-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          Advanced <span className="text-vyom-orange">Autonomous Systems</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-vyom-orange/50 
                         transition duration-500 hover:shadow-2xl hover:shadow-vyom-orange/50 
                         hover:bg-gray-700/50 transform hover:-translate-y-1"
            >
              
              <div className="text-5xl mb-6 text-vyom-orange">
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-semibold mb-3">
                {product.title}
              </h3>
              
              <p className="text-gray-400 font-poppins leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
          
        </div>
        
        <div className="text-center mt-16">
            <a 
                href="#contact" 
                className="text-lg font-bold text-vyom-orange border-b-2 border-vyom-orange 
                           hover:text-white hover:border-white transition duration-300"
            >
                Need a Custom Solution? Contact Our Team &rarr;
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default Capabilities;