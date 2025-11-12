import React from 'react';

const About = () => {
  return (
    // Section uses a slightly lighter charcoal for contrast and padding
    <section id="about" className="py-24 md:py-32 bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Our Mission: <span className="text-vyom-orange">Unmanned Excellence</span>
        </h2>
        
        {/* Short summary of VyomGarud's mission  */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Main Text Content */}
          <div className="lg:w-1/2">
            <p className="text-xl md:text-2xl font-poppins font-light leading-relaxed mb-6 text-gray-300">
              VyomGarud engineers next-generation, **military-grade UAV systems** built for
              uncompromised operational reliability and unparalleled mission success. We merge
              advanced sensor fusion with proprietary **AI autonomy** to deliver the precision
              needed in the world's most demanding environments.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Our commitment is to the warfighter and critical infrastructure. Every system
              is stress-tested for high reliability and precision engineering[cite: 7], ensuring our
              clients maintain absolute air superiority and intelligence advantage, regardless of
              the challenge.
            </p>
          </div>
          
          {/* Placeholder for a visual element or compelling quote */}
          <div className="lg:w-1/2 flex items-center justify-center">
            {/* Bold Visual Placeholder  */}
            <blockquote className="text-3xl italic font-heading font-medium border-l-4 border-vyom-orange pl-6 text-gray-200">
              "We don't just build drones; we build the future of autonomous defense."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;