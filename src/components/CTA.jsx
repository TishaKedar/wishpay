import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div
      className="py-12 md:py-16 px-4 flex items-center justify-center overflow-visible"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #f3f4f6 50%)",
      }}
    >
      <div className="max-w-6xl w-full relative">
        
        <div 
          className="absolute left-1/2 z-30 -top-12 sm:-top-16 md:-top-28"
          style={{ transform: 'translateX(-50%)' }}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <img
            src="/assests/coin.png"
            alt="Coin"
            className="w-24 sm:w-32 md:w-64 lg:w-72 object-contain"
          />
        </div>

        {/* Purple Box with shapes */}
        <div className="relative bg-purple-950 rounded-3xl overflow-hidden">
         {/* Left Purple Shape as Image */}
          <div
            className="hidden md:block absolute w-80 h-52 z-0"
            style={{
              top: "20%",
              left: "-100px",
            }}
          >
            <img
              src="/assests/cta1.png" 
              alt="Left Decoration"
              className="w-full h-full"
            />
          </div>

          {/* Right Purple Shape as Image */}
          <div
            className="hidden md:block absolute w-80 h-52 z-0 -translate-y-1/2"
            style={{
              top: "60%",
              right: "-80px",
            }}
          >
            <img
              src="/assests/cta2.png" 
              alt="Right Decoration"
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-8 md:px-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
              Simplify payments<br />management
            </h2>
            <p className="text-purple-200 text-base sm:text-lg md:text-lg mb-10 max-w-2xl mx-auto">
              Easy and fast international business account that saves you <br className="hidden sm:block" /> money wherever you want to use it.
            </p>
            <button className="bg-white text-purple-950 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg w-full sm:w-auto hover:bg-gray-100 transition-colors shadow-lg">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}