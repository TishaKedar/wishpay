import React from 'react';
import { Shield, Lock, Building2, Wallet } from 'lucide-react';

export default function ValuesSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 text-xs font-medium uppercase tracking-wide">
              OUR VALUES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The strategic choice
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            We're on a mission to bring transparency to finance and show you upfront.
          </p>
        </div>

        {/* Features with Card */}
        <div className="relative">
          {/* Desktop Layout - Show on xl screens */}
          <div className="hidden xl:block relative min-h-[600px]">
            {/* Security Teams - Top Left */}
            <div className="absolute top-20 left-44 max-w-xs">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-[#7c40fe] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Security Teams
                </h3>
                <p className="text-gray-600 text-sm">
                  Security teams work to keep <br /> your money safe
                </p>
              </div>
            </div>

            {/* Authentication - Top Right */}
            <div className="absolute top-1 right-44 max-w-xs">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-[#7c40fe] rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Authentication
                </h3>
                <p className="text-gray-600 text-sm">
                  We use top authentication to  <br /> protect your account
                </p>
              </div>
            </div>

            {/* Credit Card - Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/assests/big-card.png" 
                alt="Credit Card" 
                className="w-[500px] h-auto"
              />
            </div>

            {/* Safety Funds - Bottom Left */}
            <div className="absolute bottom-20 left-52 max-w-xs">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-[#7c40fe] rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Safety Funds
                </h3>
                <p className="text-gray-600 text-sm">
                  Hold money with established financial institutions
                </p>
              </div>
            </div>

            {/* Account Place - Bottom Right */}
            <div className="absolute bottom-32 right-32 max-w-xs">
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-[#7c40fe] rounded-full flex items-center justify-center mb-4">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Account Place
                </h3>
                <p className="text-gray-600 text-sm">
                  Place all your account, all in <br /> one place
                </p>
              </div>
            </div>
          </div>

          {/* Medium Screen Layout - Adjusted positioning */}
          <div className="hidden md:block xl:hidden relative min-h-[500px]">
            {/* Security Teams - Top Left */}
            <div className="absolute top-12 left-2 max-w-[180px]">
              <div className="flex flex-col items-start">
                <div className="w-11 h-11 bg-[#7c40fe] rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Security Teams
                </h3>
                <p className="text-gray-600 text-xs leading-tight">
                  Security teams work to keep your money safe
                </p>
              </div>
            </div>

            {/* Authentication - Top Right */}
            <div className="absolute top-4 right-2 max-w-[180px]">
              <div className="flex flex-col items-start">
                <div className="w-11 h-11 bg-[#7c40fe] rounded-full flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Authentication
                </h3>
                <p className="text-gray-600 text-xs leading-tight">
                  We use top authentication to protect your account
                </p>
              </div>
            </div>

            {/* Credit Card - Center (Smaller) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/assests/big-card.png" 
                alt="Credit Card" 
                className="w-[280px] lg:w-[320px] h-auto"
              />
            </div>

            {/* Safety Funds - Bottom Left */}
            <div className="absolute bottom-12 left-4 max-w-[180px]">
              <div className="flex flex-col items-start">
                <div className="w-11 h-11 bg-[#7c40fe] rounded-full flex items-center justify-center mb-2">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Safety Funds
                </h3>
                <p className="text-gray-600 text-xs leading-tight">
                  Hold money with established financial institutions
                </p>
              </div>
            </div>

            {/* Account Place - Bottom Right */}
            <div className="absolute bottom-20 right-4 max-w-[180px]">
              <div className="flex flex-col items-start">
                <div className="w-11 h-11 bg-[#7c40fe] rounded-full flex items-center justify-center mb-2">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Account Place
                </h3>
                <p className="text-gray-600 text-xs leading-tight">
                  Place all your account, all in one place
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Show on small screens only */}
          <div className="md:hidden">
            {/* Card First on Mobile */}
            <div className="flex justify-center mb-12">
              <img 
                src="/assests/big-card.png" 
                alt="Credit Card" 
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Features Grid for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Security Teams */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Security Teams
                  </h3>
                  <p className="text-gray-600">
                    Security teams work to keep your money safe
                  </p>
                </div>
              </div>

              {/* Authentication */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Authentication
                  </h3>
                  <p className="text-gray-600">
                    We use top authentication to protect your account
                  </p>
                </div>
              </div>

              {/* Safety Funds */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Safety Funds
                  </h3>
                  <p className="text-gray-600">
                    Hold money with established financial institutions
                  </p>
                </div>
              </div>

              {/* Account Place */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Account Place
                  </h3>
                  <p className="text-gray-600">
                    Place all your account, all in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}