import React from 'react';
import Navbar from './components/Navbar'; // <-- NEW IMPORT
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-vyom-charcoal font-sans">
      
      {/* 0. Navbar Section (Place before Hero) */}
      <Navbar /> 
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. About Section */}
      <About />
      
      {/* 3. Capabilities / Products Section */}
      <Capabilities />
      
      {/* 4. Highlights Section */}
      <Highlights />
      
      {/* 5. Contact / Footer Section */}
      <Footer />
      
    </div>
  );
};

export default App;