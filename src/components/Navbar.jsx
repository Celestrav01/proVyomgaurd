import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#" className="text-2xl font-heading font-bold uppercase tracking-widest text-white">
          VYOM<span className="text-vyom-orange">GARUD</span>
        </a>
        
        <nav className="hidden md:flex space-x-4 font-poppins text-lg items-center">
          
          {/* Default state is text-gray-300, on hover it gets the background and dark text */}
          <a 
            href="#about" 
            className="text-gray-300 transition duration-200 px-4 py-1.5 rounded-full hover:bg-vyom-orange hover:text-gray-900"
          >
            About
          </a>
          
          <a 
            href="#capabilities" 
            className="text-gray-300 transition duration-200 px-4 py-1.5 rounded-full hover:bg-vyom-orange hover:text-gray-900"
          >
            Systems
          </a>
          
          <a 
            href="#highlights" 
            className="text-gray-300 transition duration-200 px-4 py-1.5 rounded-full hover:bg-vyom-orange hover:text-gray-900"
          >
            Features
          </a>
          
          {/* Contact Button (Solid Orange) */}
          <a 
            href="#contact" 
            className="text-white bg-vyom-orange px-4 py-1.5 rounded-full hover:bg-orange-600 transition duration-200"
          >
            Contact
          </a>
        </nav>
        
        <div className="md:hidden text-2xl text-vyom-orange">
            ☰
        </div>
      </div>
    </header>
  );
};

export default Navbar;