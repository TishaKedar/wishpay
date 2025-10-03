export default function Feature() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            FEATURE
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Future banking you need
          </h1>
          <p className="text-gray-500 text-lg">
            Whether you're a small business, or a large corporation, we<br />
            have a plan that's right for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Row 1: Earn Rewards + Always Protected */}
          <div className="bg-gray-100 rounded-3xl p-8 lg:col-span-1 flex flex-col overflow-hidden" style={{height: '420px'}}>
            <div className="flex-shrink-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Earn Rewards
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                It costs nothing to pay with PayPal, you'll only be<br />
                charged a fee when you sell something or<br />
                request a payment.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end min-h-0">
              <img
                src="/assests/gift.png"
                alt="Gift"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-[#d9c1ff] rounded-3xl p-8 lg:col-span-2 flex flex-col overflow-hidden" style={{height: '420px'}}>
            <div className="flex-shrink-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Always Protected
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Shopping with Wishpay is saver with Buyer Protection, 24/7<br />
                anti-fraud monitoring and world class security.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end min-h-0 -mb-8 overflow-hidden mt-4 lg:mt-0">
              <img
                src="/assests/f1.png"
                alt="Protection"
                className="w-full lg:w-3/4 max-h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Row 2: No Asset Volatility + Get Paid Faster */}
          <div className="bg-[#320053] rounded-3xl p-8 lg:col-span-2 flex flex-col overflow-hidden" style={{height: '420px'}}>
            <div className="flex-shrink-0">
              <h2 className="text-3xl font-bold text-white mb-3">
                No asset volatility
              </h2>
              <p className="text-purple-200 mb-6 text-sm">
                Generate returns on your cash reserves without making<br />
                any investments.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end min-h-0 -mb-8 overflow-hidden mt-4 lg:mt-0">
              <img
                src="/assests/g.png"
                alt="Chart"
                className="w-full lg:w-3/4 max-h-full object-contain object-bottom rounded-md"
              />
            </div>
          </div>

          <div className="bg-[#ebebed] rounded-3xl p-8 lg:col-span-1 flex flex-col overflow-hidden" style={{height: '420px'}}>
            <div className="flex-shrink-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Get paid faster
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Create flexible, scalable subscription plans and<br />
                streamline billing.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-end min-h-0 -mb-8">
              <img
                src="/assests/mob.png"
                alt="Mobile"
                className="w-1.1/2 h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}