import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0b0e] text-white pb-24">
      {/* Luxury Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop&q=80" 
          alt="5PM Hotel Luxury Ambience" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b0e] via-[#1a0b0e]/40 to-transparent" />
        
        {/* Logo and Branding Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif tracking-widest text-[#e5c158] drop-shadow-lg">5PM</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200 mt-2">HOTEL</p>
          <div className="w-16 h-[1px] bg-[#e5c158]/60 my-4" />
          <p className="text-sm md:text-base font-serif italic text-gray-300 tracking-widest">A Stay, A Story</p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 pt-8 z-10 relative">
        
        {/* Quick Menu Navigation Links */}
        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          <a href="/food" className="group relative overflow-hidden rounded-2xl bg-[#2a1418]/80 p-6 border border-[#6b1a2a]/40 hover:border-[#e5c158]/40 transition-all duration-300 flex justify-between items-center shadow-xl">
            <div>
              <h3 className="text-lg font-serif text-[#e5c158]">Explore Our Menu</h3>
              <p className="text-xs text-gray-400 mt-1">Gourmet Food & Snacks</p>
            </div>
            <span className="text-[#e5c158] group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>

          <a href="/drinks" className="group relative overflow-hidden rounded-2xl bg-[#2a1418]/80 p-6 border border-[#6b1a2a]/40 hover:border-[#e5c158]/40 transition-all duration-300 flex justify-between items-center shadow-xl">
            <div>
              <h3 className="text-lg font-serif text-[#e5c158]">Our Lounge Bar</h3>
              <p className="text-xs text-gray-400 mt-1">Fine Wines, Spirits & Beers</p>
            </div>
            <span className="text-[#e5c158] group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Highlight Quick Badges */}
        <div className="grid grid-cols-3 gap-3 mb-12 text-center">
          <div className="p-4 rounded-xl bg-[#2a1418]/40 border border-[#6b1a2a]/20">
            <span className="block text-xl mb-1">⭐</span>
            <span className="text-xs font-medium tracking-wide text-gray-300">Premium Dining</span>
          </div>
          <div className="p-4 rounded-xl bg-[#2a1418]/40 border border-[#6b1a2a]/20">
            <span className="block text-xl mb-1">🕒</span>
            <span className="text-xs font-medium tracking-wide text-gray-300">Open Daily</span>
          </div>
          <div className="p-4 rounded-xl bg-[#2a1418]/40 border border-[#6b1a2a]/20">
            <span className="block text-xl mb-1">📶</span>
            <span className="text-xs font-medium tracking-wide text-gray-300">Free High-Speed WiFi</span>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="p-8 rounded-2xl bg-[#2a1418]/60 backdrop-blur-md border border-[#6b1a2a]/30 mb-12 shadow-2xl">
          <h2 className="text-2xl font-serif text-[#e5c158] mb-4">Our Story</h2>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            At 5PM Hotel, every moment is crafted into a memory. We bring together the finest culinary flavors, a warm intimate ambience, and attentive hospitality to ensure your visit becomes a story worth telling.
          </p>
          <a href="/visit" className="inline-block mt-6 text-sm font-medium text-[#e5c158] hover:text-white transition-colors duration-200">
            Find us & Book a table →
          </a>
        </div>

        {/* Signature Highlights Section */}
        <div className="mb-6">
          <h2 className="text-xs uppercase tracking-widest text-[#e5c158] mb-4 font-semibold">Signature House Picks</h2>
          <div className="grid gap-4">
            <div className="p-5 rounded-xl bg-[#2a1418]/30 border border-[#6b1a2a]/20 flex justify-between items-center">
              <div>
                <h4 className="font-serif text-base text-white">Kienyeji Chicken</h4>
                <p className="text-xs text-gray-400 mt-0.5">Half - Dry or wet fry served with traditional sides</p>
              </div>
              <span className="font-serif text-[#e5c158] text-sm">KES 1,600</span>
            </div>
            
            <div className="p-5 rounded-xl bg-[#2a1418]/30 border border-[#6b1a2a]/20 flex justify-between items-center">
              <div>
                <h4 className="font-serif text-base text-white">Whole Tilapia</h4>
                <p className="text-xs text-gray-400 mt-0.5">Fresh from the lake - With your choice of executive sides</p>
              </div>
              <span className="font-serif text-[#e5c158] text-sm">KES 1,250</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
