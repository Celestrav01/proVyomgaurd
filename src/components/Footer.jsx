import React from 'react';

const Footer = () => {
  return (
    // Darkest background for the footer, with subtle top border
    <footer id="contact" className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-heading font-bold mb-4 text-vyom-orange">
              VYOMGARUD
            </h3>
            <p className="text-gray-400 font-poppins">
              Engineered for absolute air superiority.
            </p>
            {/* Contact for Guidance (Assignment Info) */}
            <p className="text-sm mt-4 text-gray-500">
                For urgent inquiries: +91 1010101011
            </p>
          </div>
          
          {/* Navigation Links (Simple Links) */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-vyom-orange/50 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-vyom-orange transition">About Us</a></li>
              <li><a href="#capabilities" className="hover:text-vyom-orange transition">Systems</a></li>
              <li><a href="#highlights" className="hover:text-vyom-orange transition">Reliability</a></li>
            </ul>
          </div>
          
          {/* Legal/Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-vyom-orange/50 inline-block">
              Connect
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-vyom-orange transition">Careers</a></li>
              <li><a href="#" className="hover:text-vyom-orange transition">Press</a></li>
              <li><a href="#" className="hover:text-vyom-orange transition">Contact Sales</a></li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} VyomGarud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;