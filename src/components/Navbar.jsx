import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonClasses =
    "text-white bg-transparent border border-transparent px-5 py-1.5 rounded-full transition duration-200 hover:bg-vyom-orange hover:text-gray-900 hover:shadow-md";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold uppercase tracking-widest text-white">
          VYOM<span className="text-vyom-orange">GARUD</span>
        </a>

        <nav className="hidden md:flex space-x-4 font-poppins text-lg items-center">
          <a href="#about" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600`}>
            About
          </a>
          <a href="#capabilities" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600`}>
            Systems
          </a>
          <a href="#highlights" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600`}>
            Features
          </a>
          <a href="#contact" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600`}>
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-3xl text-vyom-orange focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-lg">
          <nav className="flex flex-col space-y-2 px-6 py-4 font-poppins text-lg">
            <a href="#about" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600 text-center`}>
              About
            </a>
            <a href="#capabilities" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600 text-center`}>
              Systems
            </a>
            <a href="#highlights" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600 text-center`}>
              Features
            </a>
            <a href="#contact" className={`${buttonClasses} bg-vyom-orange hover:bg-orange-600 text-center`}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
