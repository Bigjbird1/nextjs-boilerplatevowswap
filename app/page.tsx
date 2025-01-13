// app/page.tsx
import { Search, Calendar, MapPin, Package, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 leading-tight tracking-tight">
            <span className="block text-5xl sm:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              Wedding Dates
            </span>
            <span className="block text-5xl sm:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              Made Simple
            </span>
            <span className="block font-light text-4xl sm:text-5xl mt-4 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Buy With Confidence · Sell With Ease
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            The modern marketplace for wedding dates and packages
          </p>

          {/* Search Component */}
          <div className="relative shadow-lg transition-shadow duration-200">
            <div className="bg-white rounded-full p-2 flex items-center">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Calendar className="h-5 w-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="When's your perfect date?"
                  className="w-full py-3 focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-light"
                />
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex-1 flex items-center gap-2 px-4">
                <MapPin className="h-5 w-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Where?"
                  className="w-full py-3 focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-light"
                />
              </div>
              <button className="bg-gradient-to-r from-rose-500 to-purple-600 text-white p-4 rounded-full hover:opacity-90 transition-opacity">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-semibold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                30-40%
              </div>
              <div className="text-gray-600 mt-1">
                average savings on packages
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 mt-1">
                secure transfers with support
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                5,000+
              </div>
              <div className="text-gray-600 mt-1">
                couples found their date
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust/Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-medium mb-2">Flexible Dates</h3>
              <p className="text-gray-600 text-sm">Find and transfer wedding dates that work for you</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-medium mb-2">Complete Packages</h3>
              <p className="text-gray-600 text-sm">Everything you need for your perfect day</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-2">Wedding Marketplace</h3>
              <p className="text-gray-600 text-sm">Find amazing deals on pre-loved items</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
