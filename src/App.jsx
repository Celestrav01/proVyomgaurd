// src/App.jsx
import React from 'react';
// Corrected paths to point to the 'components' folder
import Hero from './components/Hero'; 
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

// ... rest of App component code

const App = () => {
  return (
    // Assuming 'bg-vyom-charcoal' is defined in tailwind.config.js and applied via index.css
    <div className="min-h-screen font-sans">
      
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