import React from 'react';


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
  <img
    src="/assests/shield.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/people.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/build.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/main-acc.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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

          {/* Medium Screen Layout - Optimized for 1024-1279px */}
          <div className="hidden md:block xl:hidden relative min-h-[500px]">
            {/* Security Teams - Top Left - Closer to card */}
            <div className="absolute top-8 left-8 lg:left-16 max-w-[200px] lg:max-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center mb-3">
                <img
    src="/assests/shield.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                  Security Teams
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Security teams work to keep your money safe
                </p>
              </div>
            </div>

            {/* Authentication - Top Right - Closer to card */}
            <div className="absolute top-4 right-8 lg:right-16 max-w-[200px] lg:max-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center mb-3">
                <img
    src="/assests/people.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                  Authentication
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  We use top authentication to protect your account
                </p>
              </div>
            </div>

            {/* Credit Card - Center - Optimized size */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img 
                src="/assests/big-card.png" 
                alt="Credit Card" 
                className="w-[300px] lg:w-[360px] h-auto"
              />
            </div>

            {/* Safety Funds - Bottom Left - Closer to card */}
            <div className="absolute bottom-8 left-8 lg:left-20 max-w-[200px] lg:max-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center mb-3">
                <img
    src="/assests/build.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                  Safety Funds
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  Hold money with established financial institutions
                </p>
              </div>
            </div>

            {/* Account Place - Bottom Right - Closer to card */}
            <div className="absolute bottom-16 right-8 lg:right-20 max-w-[200px] lg:max-w-[220px]">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#7c40fe] rounded-full flex items-center justify-center mb-3">
                <img
    src="/assests/main-acc.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                  Account Place
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
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
                <img
    src="/assests/shield.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/people.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/build.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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
                <img
    src="/assests/main-acc.svg"
    alt="Logo"
    className="w-7 h-7 object-contain"
  />
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