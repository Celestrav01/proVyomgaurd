import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/placeholder-drone-image.jpg')" }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight font-heading uppercase mb-4 leading-tight">
          VYOMGARUD
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Precision Engineering. Advanced Autonomy.{" "}
          <span className="text-[#ff7b00]">Military-Grade Reliability.</span>
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 text-base sm:text-lg font-bold uppercase tracking-wider 
                     bg-[#ff7b00] text-gray-900 rounded-full shadow-2xl transition duration-300 
                     hover:bg-orange-600 hover:scale-105 active:scale-95"
        >
          Explore Our Systems
        </a>
      </div>
    </section>
  );
};

export default Hero;
