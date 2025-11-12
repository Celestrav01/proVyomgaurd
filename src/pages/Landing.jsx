import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Approach from "../components/Approach";
import TechStack from "../components/TechStack";
import Implementation from "../components/Implementation";
import RunInstructions from "../components/RunInstructions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Problem />
        <Approach />
        <TechStack />
        <Implementation />
        <RunInstructions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
