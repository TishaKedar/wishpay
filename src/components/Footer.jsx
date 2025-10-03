export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16 text-center sm:text-left">
          {/* Account Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Account</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Saving</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Join Accounts</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Crypto</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Freelance</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Commodities</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Customer Help</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Community</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Blog</a></li>
            </ul>
          </div>

          {/* Finance Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Finance</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Cards</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Linked Accounts</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Payment</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Sustainability</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 underline">Career</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Follow Us</h3>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {/* Social Icons */}
              <a href="#" className="text-gray-900 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.94 13.32l-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 text-center md:text-left">
  {/* Copyright */}
  <p className="text-gray-500 text-sm">
    ©2024 Wishpay Finance Technology, Inc.
  </p>

  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src="/assests/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
    <span className="text-gray-900 font-semibold text-xl">Wishpay</span>
  </div>

  {/* Links */}
  <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
    <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Privacy Policy</a>
    <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Terms of use</a>
    <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Disclosure</a>
  </div>
</div>

      </div>
    </footer>
  );
}
