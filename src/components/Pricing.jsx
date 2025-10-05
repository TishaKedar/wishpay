import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AnimatedNumber({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateValue = () => {
    const startTime = Date.now();
    const endValue = value;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={elementRef} className="text-5xl font-bold">
      ${count}
    </span>
  );
}

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-6 py-2 bg-purple-200 text-purple-700 rounded-full text-sm font-medium mb-6 uppercase tracking-wide">
            Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Plans for every budget
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you're a small business, or a large corporation, we have a plan that's right for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Personal Card */}
          <div className="bg-[#d9c1ff] rounded-3xl p-10 flex flex-col lg:w-2/5" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal</h2>
            <p className="text-gray-800 mb-8 leading-relaxed">
              Built-in budgeting and get more from your money with our Standard account.
            </p>
            
            <div className="mb-8">
              <AnimatedNumber value={5} duration={2000} />
              <span className="text-gray-700 text-lg ml-2">/ month</span>
            </div>

            <button className="w-full bg-purple-900 text-white py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors mt-auto">
              Try for Free
            </button>
          </div>

          {/* Business Card */}
          <div className="bg-[#320053] rounded-3xl p-10 lg:w-3/5" data-aos="fade-left">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Side */}
              <div className="flex flex-col lg:w-1/2 lg:pr-8 lg:border-r lg:border-purple-700">
                <h2 className="text-3xl font-bold text-white mb-4">Business</h2>
                
                <p className="text-purple-200 mb-2 leading-relaxed text-sm">
                  Give your everyday finances a boost.
                </p>
                <p className="text-purple-200 mb-8 leading-relaxed text-sm">
                  Get more out of your money for less.
                </p>

                <div className="mb-8 text-white">
                  <AnimatedNumber value={20} duration={2000} />
                  <span className="text-purple-200 text-lg ml-2">/ month</span>
                </div>

                <button className="w-full bg-white text-purple-900 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Right Side - Features */}
              <div className="flex flex-col lg:w-1/2">
                <span className="text-purple-300 text-sm uppercase tracking-wide mb-6">Features</span>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3" data-aos="fade-left" data-aos-delay="100">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-purple-200">No payments back-office needed</span>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-left" data-aos-delay="200">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-purple-200">Faster implementation and global roll-out</span>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-left" data-aos-delay="300">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-purple-200">48 hour support response time</span>
                  </div>
                  
                  <div className="flex items-start gap-3" data-aos="fade-left" data-aos-delay="400">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-purple-200">Always benefit from the best rates and features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}