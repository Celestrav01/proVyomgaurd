import React from 'react';

const Hero = () => {
  return (
    // Updated: Added relative position for visual overlay/background
    <section className="bg-gray-900 min-h-screen flex items-center justify-center text-white p-4 relative overflow-hidden">
      
      {/* BOLD VISUAL Placeholder
        You should replace this div with a background image, video, or a stylized SVG graphic
        of a modern, military-grade drone to fit the aesthetic.
      */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" 
           style={{ backgroundImage: "url('/placeholder-drone-image.jpg')" }}>
      </div>
      
      {/* Content wrapper with higher z-index to sit above the visual */}
      <div className="max-w-7xl mx-auto text-center relative z-10"> 
        {/* Company name 'VyomGarud' */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight font-heading uppercase mb-4 animate-fadeInDown">
          VYOMGARUD
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-3xl font-light mb-10 text-gray-300 animate-fadeInUp delay-300">
          Precision Engineering. Advanced Autonomy. <span className="text-[#ff7b00]">Military-Grade Reliability.</span>
        </p>

        {/* CTA (Call to Action) */}
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 text-lg font-bold uppercase tracking-wider 
                     bg-[#ff7b00] text-gray-900 rounded-lg shadow-2xl transition duration-300 
                     hover:bg-orange-600 transform hover:scale-105"
        >
          Explore Our Systems
        </a>
      </div>
    </section>
  );
};

export default Hero;