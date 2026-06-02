
import { useState } from 'react';

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
   return (
  <div
    className="relative text-white pb-24"
    style={{
      background: '#1a0b0e',
      minHeight: '100vh',
    }}
  >
    {/* Luxury Header Image */}
    <div className="relative w-full h-64 md:h-80 overflow-hidden mb-8">
      <img 
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80" 
        alt="Luxury Wine Bar" 
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b0e] via-transparent to-transparent" />
      <div className="absolute bottom-4 left-6">
        <h1 className="text-3xl md:text-4xl font-serif text-[#e5c158]">Curated Drinks</h1>
        <p className="text-sm text-gray-300 mt-1">A story in every sip</p>
      </div>
    </div>
      {/* Subtle Background Art Watermark */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000')`,
          backgroundPosition: 'center 60%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.04,
          filter: 'grayscale(100%) sepia(100%) hue-rotate(315deg) saturate(300%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="sticky top-0 z-10" style={{ background: 'rgba(255,255,255,0.98)', borderBottom: '1px solid rgba(107,26,42,0.15)' }}>
          <div className="px-5 pt-8 pb-4">
            <p className="text-xs tracking-widest mb-1" style={{ color: '#6B1A2A', letterSpacing: '0.25em' }}>OUR</p>
            <h1 className="font-display text-3xl font-bold text-gray-900">Bar Menu</h1>
          </div>
          <div className="flex gap-2 px-5 pb-4 overflow-x-auto scrollbar-hidden">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200"
                style={
                  active === id
                    ? { background: '#6B1A2A', color: '#FFFFFF', border: '1px solid rgba(107,26,42,0.6)' }
                    : { background: 'transparent', color: '#999999', border: '1px solid rgba(107,26,42,0.2)' }
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-4 pb-8">
          {active === 'whiskey' && <WhiskeySection />}
          {active === 'wines' && <WinesSection />}
          {active === 'beers' && <BeersSection />}
          {active === 'spirits' && <SpiritsSection />}
          {active === 'shots' && <ShotsSection />}
          {active === 'others' && <OthersSection />}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 mt-6 first:mt-0">
      <p className="text-xs tracking-widest font-medium" style={{ color: '#6B1A2A', letterSpacing: '0.2em' }}>{children}</p>
      <div className="divider-wine mt-2" />
    </div>
  );
}

function DrinkItem({ name, price, note }: { name: string; price: string; note?: string }) {
  return (
    <div
      className="flex items-start justify-between py-3.5 px-4 rounded-xl mb-2"
      style={{ background: 'rgba(245, 239, 232, 0.85)', backdropFilter: 'blur(4px)', border: '1px solid rgba(107,26,42,0.08)' }}
    >
      <div className="flex-1 mr-3">
        <p className="font-medium text-sm text-gray-900">{name}</p>
        {note && <p className="text-xs mt-0.5 leading-relaxed text-gray-600">{note}</p>}
      </div>
      <span className="flex-shrink-0 text-sm font-semibold" style={{ color: '#6B1A2A', fontVariantNumeric: 'tabular-nums' }}>{price}</span>
    </div>
  );
}

function WhiskeySection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>WHISKEY, COGNAC & BRANDY</SectionTitle>
      <DrinkItem name="Jack Daniels 750ml" price="KES 5,000" />
      <DrinkItem name="Jack Daniels 1L" price="KES 6,500" />
      <DrinkItem name="JW Black Label 1L" price="KES 7,200" />
      <DrinkItem name="JW Black Label 750ml" price="KES 6,500" />
      <DrinkItem name="JW Double Black" price="KES 8,500" />
      <DrinkItem name="JW Red Label" price="KES 3,000" />
      <DrinkItem name="Singleton 12" price="KES 7,500" />
      <DrinkItem name="Chivas Regal 12" price="KES 7,000" />
      <DrinkItem name="Martell VSOP" price="KES 8,000" />
      <DrinkItem name="Remy Martin VSOP" price="KES 12,000" />
      <DrinkItem name="Hennessy" price="KES 10,000" />
      <DrinkItem name="Ballantine 750ml" price="KES 3,500" />
      <DrinkItem name="Jameson Black Barrel" price="KES 7,500" />
      <DrinkItem name="Jameson 750ml" price="KES 3,600" />
      <DrinkItem name="Grants 750ml" price="KES 3,000" />
      <DrinkItem name="Famous Grouse" price="KES 3,500" />
      <DrinkItem name="Vat 69 750ml" price="KES 2,600" />
      <DrinkItem name="Jagermeister" price="KES 5,500" />
      <DrinkItem name="Viceroy 750ml" price="KES 2,700" />
    </div>
  );
}

function WinesSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>WINES & CREAMS</SectionTitle>
      <DrinkItem name="Fragolino Red & White" price="KES 3,200" />
      <DrinkItem name="Freschello Red & White" price="KES 2,500" />
      <DrinkItem name="4th Street White & Red" price="KES 2,200" />
      <DrinkItem name="Amarula 1L" price="KES 3,500" />
      <DrinkItem name="Amarula 350ml" price="KES 2,000" />
      <DrinkItem name="Asconi Red" price="KES 3,000" />
      <DrinkItem name="Baileys 375ml" price="KES 3,500" />
      <DrinkItem name="Black Bird Red" price="KES 2,600" />
      <DrinkItem name="Four Cousins" price="KES 2,200" />
      <DrinkItem name="Cellar Cask Red & White" price="KES 2,200" />
      <DrinkItem name="Drostdy Hof Red & White" price="KES 2,600" />
      <DrinkItem name="Nederburg" price="KES 3,000" />
      <DrinkItem name="Robertson White & Red" price="KES 2,600" />
      <DrinkItem name="Rosso Nobile" price="KES 3,800" />
      <DrinkItem name="Wine by Glass" price="KES 400" />
    </div>
  );
}

function ShotsSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>SHOTS</SectionTitle>
      <DrinkItem name="Jose Quervo" note="Double" price="KES 600" />
      <DrinkItem name="Jose Quervo" note="Single" price="KES 300" />
      <DrinkItem name="Tanqueray" note="Double" price="KES 700" />
      <DrinkItem name="Tanqueray" note="Single" price="KES 350" />
      <DrinkItem name="J. Walker" note="Double" price="KES 600" />
      <DrinkItem name="J. Walker" note="Single" price="KES 300" />
      <DrinkItem name="Jagermeister" note="Double" price="KES 600" />
      <DrinkItem name="Jagermeister" note="Single" price="KES 300" />
    </div>
  );
}

function BeersSection() {
  const beers350 = [
    'Balozi', 'Black Ice', "Gordon's Pink/Dry", 'Guarana', 'Guinness',
    'Pineapple Punch', 'Snapp', 'Tusker Cider', 'Tusker Lager', 'Tusker Malt', 'White Cap',
  ];
  const beers370 = [
    "Hunter's Dry", 'Desperado', 'K.O', 'Kingfisher', 'Manyatta', 'Savanna',
  ];

  return (
    <div className="animate-fade-up">
      <SectionTitle>BEERS</SectionTitle>
      {beers350.map((b) => <DrinkItem key={b} name={b} price="KES 350" />)}
      <DrinkItem name="Heineken" price="KES 400" />
      <DrinkItem name="Heineken Can" price="KES 420" />
      {beers370.map((b) => <DrinkItem key={b} name={b} price="KES 370" />)}
    </div>
  );
}

function SpiritsSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>TEQUILA, GIN & VODKA</SectionTitle>
      <DrinkItem name="Tanqueray 1L" price="KES 7,000" />
      <DrinkItem name="Gordon's 750ml" price="KES 3,000" />
      <DrinkItem name="Beefeater" price="KES 3,500" />
      <DrinkItem name="Gilbey's 750ml" price="KES 2,700" />
      <DrinkItem name="Cîroc" price="KES 7,000" />
      <DrinkItem name="Absolut Vodka 1L" price="KES 3,500" />
      <DrinkItem name="Smirnoff 750ml" price="KES 2,700" />
      <DrinkItem name="Jose Quervo 1L" price="KES 4,500" />
      <DrinkItem name="Jose Quervo 750ml" price="KES 4,000" />
      <DrinkItem name="Camino 750ml" price="KES 3,800" />
      <DrinkItem name="Malibu" price="KES 3,000" />
      <DrinkItem name="Martini Rosso" price="KES 3,500" />
    </div>
  );
}

function OthersSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>SPECIALITIES</SectionTitle>
      <DrinkItem name="Chitu Farm Chilli 140g" price="KES 500" />
      <DrinkItem name="Chitu Farm Chilli 400g" price="KES 1,000" />

      <SectionTitle>CARWASH</SectionTitle>
      <DrinkItem name="SUV" price="KES 400" />
      <DrinkItem name="Saloon Car" price="KES 300" />
    </div>
  );
}
