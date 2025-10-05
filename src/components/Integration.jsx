import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Integration() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="bg-gradient-to-bl from-[#320053] to-[#6026b9] py-6 md:py-8 lg:py-10 xl:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Content */}
          <div className="text-white" data-aos="fade-right">
            <span className="inline-block px-4 py-2 bg-purple-700 bg-opacity-50 rounded-lg text-sm font-medium mb-6 uppercase tracking-wider">
              Integration
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Shop everywhere,<br />
              anywhere
            </h1>
            <p className="text-purple-200 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              It's now a lot easier to pay someone. All you need is an email address to send cross-border commercial payments in over 25 currencies to almost anyone, anywhere.
            </p>
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Explore More
            </button>
          </div>

          {/* Right Grid */}
          <div className="relative">
            {/* Desktop: 3 Column Staggered Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {/* Column 1 - Left (2 boxes) */}
              <div className="space-y-4 mt-16">
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-purple-300" data-aos="fade-right" data-aos-delay="100">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/mail.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Emailing</p>
                  </div>
                </div>
                
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="fade-right" data-aos-delay="200">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/storage.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Storage</p>
                  </div>
                </div>
              </div>

              {/* Column 2 - Middle (3 boxes, offset down) */}
              <div className="space-y-4 mt-0">
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="zoom-in" data-aos-delay="100">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/dis.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Voicemail</p>
                  </div>
                </div>
                
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="zoom-in" data-aos-delay="200">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/billing.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Billing</p>
                  </div>
                </div>
                
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="zoom-in" data-aos-delay="300">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/manage.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Manage</p>
                  </div>
                </div>
              </div>

              {/* Column 3 - Right (2 boxes) */}
              <div className="space-y-4 mt-32">
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="fade-left" data-aos-delay="100">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/text.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Texting</p>
                  </div>
                </div>
                
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group" data-aos="fade-left" data-aos-delay="200">
                  <div className="flex flex-col items-center gap-4">
                    <img src="/assests/market.svg" alt="Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Marketing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet: 2 Column + 1 Centered */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/mail.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Emailing</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/dis.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Voicemail</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/storage.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Storage</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/billing.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Billing</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/text.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Texting</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/manage.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Manage</p>
                </div>
              </div>

              {/* Centered last box */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-40 w-1/2 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                  <div className="flex flex-col items-center gap-3">
                    <img src="/assests/market.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Marketing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Single Column */}
            <div className="grid sm:hidden grid-cols-1 gap-4 max-w-xs mx-auto">
              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/mail.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Emailing</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/dis.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Voicemail</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/storage.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Storage</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/billing.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Billing</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/text.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Texting</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/manage.svg" alt="Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Manage</p>
                </div>
              </div>

              <div className="bg-[#ebebed] bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center h-36 transition-all duration-300 hover:bg-white hover:bg-opacity-30 hover:shadow-2xl hover:scale-105 hover:border-2 hover:border-purple-300 cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <img src="/assests/market.svg" alt="Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors">Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}