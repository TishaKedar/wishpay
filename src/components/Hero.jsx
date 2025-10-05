import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [userCount, setUserCount] = useState(0);
  const [cashbackPercent, setCashbackPercent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animated counter for stats - triggers when stats section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateStats = () => {
    const userTarget = 75;
    const cashbackTarget = 92;
    const duration = 2000;
    const steps = 25; // Reduced from 60 to show fewer numbers
    const userIncrement = userTarget / steps;
    const cashbackIncrement = cashbackTarget / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setUserCount(Math.min(Math.floor(userIncrement * currentStep), userTarget));
      setCashbackPercent(Math.min(Math.floor(cashbackIncrement * currentStep), cashbackTarget));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  const showDecorations = windowWidth >= 1172;
  
  return (
    <section className="bg-white flex justify-center overflow-hidden">
      {/* Max Width Container */}
      <div className="max-w-7xl w-full relative">
        {/* Hero Section */}
        <div className="relative flex items-center justify-center pt-12 pb-8">
          {/* Left Light Purple Shape with Rounded Corners */}
          {showDecorations && (
            <div
              className="absolute w-96 h-64 z-0 -translate-y-1/2"
              style={{
                top: "50%",
                left: "-80px",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 384 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.8 }}
              >
                <path
                  d="M 16 0 
                     L 368 0 
                     Q 384 0 384 16
                     L 384 32
                     L 315 240
                     Q 312 249 303 249
                     L 16 249
                     Q 0 249 0 233
                     L 0 16
                     Q 0 0 16 0 Z"
                  fill="#320053"
                />
              </svg>
            </div>
          )}

          {/* Coin at bottom-right corner of left shape */}
          {showDecorations && (
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
              src="/assests/coin.png"
              alt="Coin"
              className="absolute z-10"
              style={{
                width: "250px",
                height: "250px",
                top: "calc(50% + 10px - 10px)",
                left: "calc(-10px + 96px + 20px)",
              }}
            />
          )}

          {/* Right Dark Purple Shape */}
          {showDecorations && (
            <svg
              className="absolute z-0 -translate-y-1/2"
              style={{ top: "60%", right: "-80px", position: "absolute" }}
              width="384"
              height="256"
              viewBox="0 0 384 256"
            >
              <path
                d="M 77 0 Q 57 0 57 20 L 0 202 Q 0 222 20 222 L 330 222 Q 350 222 350 202 L 350 20 Q 350 0 330 0 Z"
                fill="#d9c1ff"
                opacity="0.7"
              />
            </svg>
          )} 

          {showDecorations && (
            <img
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
              src="/assests/wallet.png"
              alt="Wallet"
              className="absolute z-10"
              style={{
                width: "250px",
                height: "250px",
                top: "calc(50% + 40px)",
                right: "calc(-10px + 96px + 60px)",
              }}
            />
          )}

          {/* Text Content */}
          <div className="text-center px-4 sm:px-6 lg:px-12 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-sans mb-1">
              <span className="block sm:inline">Enhance{" "}</span>
              <img
                src="/assests/wishpay-logo.png"
                alt="Wishpay Logo"
                className="inline-block w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-1 align-middle"
              />
              <span className="block sm:inline">your</span>
              <br className="hidden sm:block" />
              <img
                src="/assests/credit-card (2).png"
                alt="Credit Card"
                className="inline-block w-32 h-28 sm:w-36 sm:h-28 lg:w-44 lg:h-36 mr-1 align-middle"
              />
              <span className="block sm:inline">Financial</span>
            </h1>

            <div className="mt-2 sm:mt-0 sm:ml-12 inline-block">
              <span className="text-black-700 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-sans leading-[1.1]">
                with{" "}
                <span className="text-[#803eff] underline font-bold">
                  Wishpay
                </span>
              </span>
            </div>

            <p className="text-gray-600 text-lg sm:text-xl mt-8 sm:mt-12 mb-8 sm:mb-10 max-w-md sm:max-w-lg mx-auto leading-relaxed font-sans px-2">
              Moving money should never take more than a few taps. Transfers are always
              free between friends.
            </p>

            <button className="px-8 py-4 bg-[#320053] text-white text-lg rounded-full font-semibold shadow-lg hover:bg-[#4a0070] transition">
              Send Money Now
            </button>
          </div>
        </div>

        {/* Stats Section  */}
        <div ref={statsRef} className="px-6 lg:px-12 mt-2 sm:mt-0 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-6 mb-10 pb-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm sm:text-base text-center">Satisfied users <br /> globally</p>
            <p className="text-5xl sm:text-6xl font-bold-sm">
              {userCount}K+
            </p>
          </div>
          
          <div className="flex gap-6 sm:gap-8 mt-0 sm:mt-14 justify-center items-center flex-wrap">
            <div className="flex items-center gap-2 text-gray-400 text-lg sm:text-2xl">
              <img src="/assests/open.png" alt="OpenAI Logo" className="h-8 sm:h-12 w-auto" />
              <span>OpenAI</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-lg sm:text-2xl">
              <img src="/assests/ray.png" alt="Raycast Logo" className="h-8 sm:h-12 w-auto" />
              <span>Raycast</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-lg sm:text-2xl">
              <span>Ramp</span>
              <img src="/assests/ramp.png" alt="Ramp Logo" className="h-8 sm:h-12 w-auto" />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm sm:text-base text-center">Beneficial <br /> User Cashback</p>
            <p className="text-5xl sm:text-6xl font-bold-sm">{cashbackPercent}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;