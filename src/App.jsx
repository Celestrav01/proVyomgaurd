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
      
      
      <Navbar /> 
      
     
      <Hero />
      
      
      <About />
      
     
      <Capabilities />
      
      
      <Highlights />
      
      
      <Footer />
      
    </div>
  );
};

export default App;