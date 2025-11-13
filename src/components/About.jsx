import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          Our Mission: <span className="text-vyom-orange">Unmanned Excellence</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="lg:w-1/2">
            <p className="text-lg sm:text-xl md:text-2xl font-poppins font-light leading-relaxed mb-6 text-gray-300">
              VyomGarud engineers next-generation <span className="font-semibold">military-grade UAV systems</span> built for uncompromised operational reliability and mission success. We merge advanced sensor fusion with proprietary <span className="font-semibold">AI autonomy</span> to deliver precision in the world’s most demanding environments.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400">
              Our commitment is to defense and critical infrastructure. Every system is stress-tested for reliability and precision engineering, ensuring our clients maintain absolute air superiority and intelligence advantage, regardless of the challenge.
            </p>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center px-2 sm:px-0">
            <blockquote className="text-xl sm:text-2xl md:text-3xl italic font-heading font-medium border-l-4 border-vyom-orange pl-5 sm:pl-6 text-gray-200">
              "We don't just build drones; we build the future of autonomous defense."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
