import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-blue-400 font-bold text-lg">VyomGarud — Project</div>
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#problem" className="hover:text-blue-400">Problem</a>
          <a href="#approach" className="hover:text-blue-400">Approach</a>
          <a href="#tech" className="hover:text-blue-400">Tech</a>
          <a href="#impl" className="hover:text-blue-400">Implementation</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
