import React, { useState } from "react";

const Navbar = () => {
  const navLinks = ["Personal", "Business", "Enterprise", "Developer"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo with Text */}
        <div className="flex items-center gap-2">
          <img
            src="/assests/logo.png"
            alt="Wishpay Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-[#803eff]">Wishpay</span>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-purple-700 transition font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2 border border-[#320053] text-[#320053] rounded-full hover:bg-purple-50 transition">
            Login
          </button>

          <button className="px-5 py-2 bg-[#320053] text-white rounded-full hover:bg-purple-800 transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-purple-700 transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button className="px-5 py-2 border border-[#320053] text-[#320053] rounded-full hover:bg-purple-50 transition">
              Login
            </button>
            <button className="px-5 py-2 bg-[#320053] text-white rounded-full hover:bg-purple-800 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;