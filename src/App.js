import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Hero />
      <Values />
      <Features />
      <Integration />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
