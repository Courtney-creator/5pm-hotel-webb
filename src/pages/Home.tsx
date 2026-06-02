import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C2C2C] pb-24">
      {/* Crisp, Elegant Header Banner */}
      <div className="relative w-full h-[35vh] md:h-[45vh] bg-[#F3E8EB] overflow-hidden border-b border-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80" 
          alt="5PM Hotel Welcome" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Soft overlay to ensure branding pops beautifully */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-5 -mt-10 relative z-10">
        
        {/* Main Branding Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-[#6b1a2a] font-bold">5PM Hotel</h1>
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mt-1">A Stay, A Story</p>
          <div className="w-12 h-[2px] bg-[#6b1a2a] mx-auto my-4" />
          <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
            Welcome to 5PM Hotel. Every moment here is crafted into a memory. We bring together the finest flavours, a warm ambiance, and attentive hospitality to ensure your visit becomes a story worth telling.
          </p>
          <a href="/visit" className="inline-block mt-4 text-xs uppercase tracking-wider font-bold text-[#6b1a2a] hover:underline">
            Find Us & Book a Table →
          </a>
        </div>

        {/* High-Contrast Navigation Buttons */}
        <h2 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-3 pl-1">Explore Our Menus</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <a href="/food" className="group bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#6b1a2a] transition-all duration-200 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#6b1a2a]">Food Menu</h3>
              <p className="text-xs text-gray-500 mt-0.5">Delicious gourmet dishes & house snacks</p>
            </div>
            <span className="text-xl text-[#6b1a2a] group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a href="/drinks" className="group bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#6b1a2a] transition-all duration-200 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#6b1a2a]">Drinks & Lounge Bar</h3>
              <p className="text-xs text-gray-400 mt-0.5">Curated premium wines, spirits & beers</p>
            </div>
            <span className="text-xl text-[#6b1a2a] group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-3 gap-3 mb-8 text-center">
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
            <span className="block text-lg mb-1">⭐</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">Premium Dining</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
            <span className="block text-lg mb-1">🕒</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">Open Daily</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
            <span className="block text-lg mb-1">📶</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">Free WiFi</span>
          </div>
        </div>

        {/* House Signature Picks */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Signature House Picks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-start pb-4 border-b border-gray-100">
              <div>
                <h4 className="font-serif font-bold text-base text-[#2C2C2C]">Kienyeji Chicken</h4>
                <p className="text-xs text-gray-500 mt-0.5">Half - Dry or wet fry served with traditional accompaniments</p>
              </div>
              <span className="font-serif font-bold text-[#6b1a2a] text-sm whitespace-nowrap">KES 1,600</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-serif font-bold text-base text-[#2C2C2C]">Whole Tilapia</h4>
                <p className="text-xs text-gray-500 mt-0.5">Freshly prepared - Served with your choice of signature sides</p>
              </div>
              <span className="font-serif font-bold text-[#6b1a2a] text-sm whitespace-nowrap">KES 1,250</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
