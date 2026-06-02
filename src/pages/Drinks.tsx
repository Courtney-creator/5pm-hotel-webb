import React, { useState } from 'react';

type Category = 'whiskey' | 'wines' | 'shots' | 'beers' | 'spirits' | 'others';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'whiskey', label: 'Whiskey' },
  { id: 'wines', label: 'Wines' },
  { id: 'beers', label: 'Beers' },
  { id: 'spirits', label: 'Spirits' },
  { id: 'shots', label: 'Shots' },
  { id: 'others', label: 'Others' },
];

export default function Drinks() {
  const [active, setActive] = useState<Category>('whiskey');

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C2C2C] pb-24">
      {/* Clean Cover Image Header */}
      <div className="relative w-full h-60 md:h-72 bg-[#F3E8EB] overflow-hidden border-b border-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&auto=format&fit=crop&q=80" 
          alt="Drinks Menu Banner" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="max-w-4xl mx-auto px-5 -mt-8 relative z-10">
        {/* Page Title Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#6b1a2a]">Curated Drinks</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">A story in every sip</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none justify-start md:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === category.id
                  ? 'bg-[#6b1a2a] text-[#e5c158] shadow-md scale-105 font-bold'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Container */}
        <div className="grid gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            {/* The individual menu items dynamically render here */}
            <p className="text-center text-gray-500 italic text-sm">
              Displaying premium selections for <span className="text-[#6b1a2a] font-bold capitalize">{active}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
