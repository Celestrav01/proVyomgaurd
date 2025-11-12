import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Empowering the Skies with <span className="text-blue-400">VyomGarud</span>
      </h1>
      <p className="mt-4 text-gray-400 max-w-2xl">
        VyomGarud develops cutting-edge autonomous drones for defense and military applications.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-blue-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition"
        >
          Get in Touch
        </a>
        <a
          href="#about"
          className="border border-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400/10 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
