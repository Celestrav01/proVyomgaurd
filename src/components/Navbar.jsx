import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">VyomGarud</h1>
      <ul className="hidden md:flex space-x-6 text-gray-300">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#capabilities" className="hover:text-blue-400">Capabilities</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
