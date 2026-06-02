import React, { useState } from 'react';

type Category = 'whiskey' | 'wines' | 'beers' | 'spirits' | 'shots' | 'others';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'whiskey', label: 'Whiskey & Cognac' },
  { id: 'wines', label: 'Wines & Creams' },
  { id: 'beers', label: 'Beers & Ciders' },
  { id: 'spirits', label: 'Tequila, Gin & Vodka' },
  { id: 'shots', label: 'Shots' },
  { id: 'others', label: 'Services & Extras' },
];

const DRINKS_DATA: Record<Category, { name: string; price: string; description?: string }[]> = {
  whiskey: [
    { name: 'Jack Daniels 750ml', price: 'KES 5,000' },
    { name: 'Jack Daniels 1L', price: 'KES 6,500' },
    { name: 'JW Black Label 1L', price: 'KES 7,200' },
    { name: 'JW Black Label 750ml', price: 'KES 6,500' },
    { name: 'JW Double Black', price: 'KES 8,500' },
    { name: 'JW Red Label', price: 'KES 3,000' },
    { name: 'Singleton 12', price: 'KES 7,500' },
    { name: 'Chivas Regal 12', price: 'KES 7,000' },
    { name: 'Martell VSOP', price: 'KES 8,000' },
    { name: 'Remy Martin VSOP', price: 'KES 12,000' },
    { name: 'Hennessy', price: 'KES 10,000' },
    { name: 'Ballantine 750ml', price: 'KES 3,500' },
    { name: 'Jameson Black Barrel', price: 'KES 7,500' },
    { name: 'Jameson 750ml', price: 'KES 3,600' },
    { name: 'Grants 750ml', price: 'KES 3,000' },
    { name: 'Famous Grouse', price: 'KES 3,500' },
    { name: 'Vat 69 750ml', price: 'KES 2,600' },
    { name: 'Jager meister Bottle', price: 'KES 5,500' },
    { name: 'Viceroy 750ml', price: 'KES 2,700' }
  ],
  wines: [
    { name: 'Wine by glass', price: 'KES 400' },
    { name: 'Fragolino red & white', price: 'KES 3,200' },
    { name: 'Freschello red & white', price: 'KES 2,500' },
    { name: '4th street white & red', price: 'KES 2,200' },
    { name: 'Amarula 1l', price: 'KES 3,500' },
    { name: 'Amarula 350 ml', price: 'KES 2,000' },
    { name: 'Asconi red', price: 'KES 3,000' },
    { name: 'Baileys 375 ml', price: 'KES 3,500' },
    { name: 'Black bird red', price: 'KES 2,600' },
    { name: 'Four cousins', price: 'KES 2,200' },
    { name: 'Cellar cask red & white', price: 'KES 2,200' },
    { name: 'Drostdy hof red & white', price: 'KES 2,600' },
    { name: 'Nederburg', price: 'KES 3,000' },
    { name: 'Robertson white n red', price: 'KES 2,600' },
    { name: 'Rosso nobile', price: 'KES 3,800' }
  ],
  beers: [
    { name: 'Heineken / Heineken can', price: 'KES 420' },
    { name: 'Hunters dry / Desperado / K.O', price: 'KES 370' },
    { name: 'Kingfisher / Manyatta / Savanna', price: 'KES 370' },
    { name: 'Balozi / Black ice / Gordons pink/dry', price: 'KES 350' },
    { name: 'Guarana / Guinness / Snapp', price: 'KES 350' },
    { name: 'Tusker cider / Tusker lager / Tusker malt', price: 'KES 350' },
    { name: 'White cap / Pineapple punch', price: 'KES 350' }
  ],
  spirits: [
    { name: 'Tanqueray 1L', price: 'KES 7,000' },
    { name: 'Ciroc', price: 'KES 7,000' },
    { name: 'Jose Quervo 1L', price: 'KES 4,500' },
    { name: 'Jose Q uervo 750ml', price: 'KES 4,000' },
    { name: 'Camino 750ml', price: 'KES 3,800' },
    { name: 'Beefeater / Absolut Vodka 1L', price: 'KES 3,500' },
    { name: 'Martini Rosso', price: 'KES 3,500' },
    { name: 'Gordons 750ml / Malibu', price: 'KES 3,000' },
    { name: 'Gilbey 750ml / Smirnoff Vodka 750ml', price: 'KES 2,700' }
  ],
  shots: [
    { name: 'Tanquery Shot', price: 'Double: KES 700 | Single: KES 350' },
    { name: 'Jose Quervo Shot', price: 'Double: KES 600 | Single: KES 300' },
    { name: 'J. Walker Shot', price: 'Double: KES 600 | Single: KES 300' },
    { name: 'Jagermeister Shot', price: 'Double: KES 600 | Single: KES 300' }
  ],
  others: [
    { name: 'Chitu Farm chilli 400gm', price: 'KES 1,000', description: 'Premium local chilli' },
    { name: 'Chitu Farm chilli 140gm', price: 'KES 500', description: 'Premium local chilli' },
    { name: 'Carwash - SUV', price: 'KES 400', description: 'Full executive vehicle wash' },
    { name: 'Carwash - Saloon Car', price: 'KES 300', description: 'Full executive vehicle wash' }
  ]
};

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
          <h1 className="text-3xl font-serif font-bold text-[#6b1a2a]">Bar & Services Menu</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Premium Selections & Quality Care</p>
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

        {/* Dynamic Menu Items List */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          {DRINKS_DATA[active].map((item, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center py-2 ${
                index !== DRINKS_DATA[active].length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="pr-4">
                <h4 className="font-sans font-semibold text-base text-[#2C2C2C]">{item.name}</h4>
                {item.description && (
                  <p className="text-xs text-gray-500 mt-0.5 font-light">{item.description}</p>
                )}
              </div>
              <span className="font-mono font-bold text-[#6b1a2a] text-sm whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
