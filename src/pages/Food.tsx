import { useState } from 'react';

type Category = 'breakfast' | 'sides' | 'snacks' | 'mains' | 'beverages';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'mains', label: 'Mains' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'sides', label: 'Sides' },
  { id: 'beverages', label: 'Beverages' },
];

export default function Food() {
  const [active, setActive] = useState<Category>('breakfast');

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Header */}
      <div className="sticky top-0 z-10" style={{ background: 'rgba(255,255,255,0.98)', borderBottom: '1px solid rgba(107,26,42,0.15)' }}>
        <div className="px-5 pt-8 pb-4">
          <p className="text-xs tracking-widest mb-1" style={{ color: '#6B1A2A', letterSpacing: '0.25em' }}>OUR</p>
          <h1 className="font-display text-3xl font-bold text-gray-900">Food Menu</h1>
        </div>
        {/* Category tabs */}
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
        {active === 'breakfast' && <BreakfastSection />}
        {active === 'mains' && <MainsSection />}
        {active === 'snacks' && <SnacksSection />}
        {active === 'sides' && <SidesSection />}
        {active === 'beverages' && <BeveragesSection />}
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

function MenuItem({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div
      className="flex items-start justify-between py-3.5 px-4 rounded-xl mb-2"
      style={{ background: '#F5EFE8', border: '1px solid rgba(107,26,42,0.08)' }}
    >
      <div className="flex-1 mr-3">
        <p className="font-medium text-sm text-gray-900">{name}</p>
        {desc && <p className="text-xs mt-1 leading-relaxed text-gray-600">{desc}</p>}
      </div>
      <span className="flex-shrink-0 text-sm font-semibold" style={{ color: '#6B1A2A', fontVariantNumeric: 'tabular-nums' }}>{price}</span>
    </div>
  );
}

function BreakfastSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>BREAKFAST</SectionTitle>
      <MenuItem
        name="Full Breakfast"
        desc="Juice & fruit cuts, cornflakes, milk, omelette/boiled/fried egg, sausage & bacon, toast, sweet potatoes/arrow roots, tea/coffee/hot chocolate"
        price="KES 1,000"
      />
      <MenuItem
        name="Light Breakfast"
        desc="Fruit cuts, boiled/fried eggs or omelette, sweet potatoes/arrow roots, tea/coffee/hot chocolate"
        price="KES 900"
      />
    </div>
  );
}

function SidesSection() {
  const sides = [
    { name: 'Sautéed Potatoes', price: 'KES 300' },
    { name: 'Roast Potatoes', price: 'KES 250' },
    { name: 'Potato Wedges', price: 'KES 250' },
    { name: 'French Fries', price: 'KES 250' },
    { name: 'Mashed Potatoes', price: 'KES 250' },
    { name: 'Pumpkin Ugali', price: 'KES 200' },
    { name: 'Brown Ugali', price: 'KES 200' },
    { name: 'White Ugali', price: 'KES 100' },
    { name: 'Seasoned Vegetables', price: 'KES 100' },
    { name: 'Cabbage', price: 'KES 100' },
    { name: 'Plain Rice', price: 'KES 200' },
    { name: 'Vegetable Rice', price: 'KES 300' },
    { name: 'Chapati', price: 'KES 100' },
  ];

  return (
    <div className="animate-fade-up">
      <SectionTitle>SIDE DISHES</SectionTitle>
      {sides.map((s) => <MenuItem key={s.name} name={s.name} price={s.price} />)}
    </div>
  );
}

function SnacksSection() {
  const snacks = [
    { name: 'Samosa', price: 'KES 200' },
    { name: 'Sausage', price: 'KES 200' },
    { name: 'Fried Eggs', price: 'KES 150' },
    { name: 'Boiled Eggs', price: 'KES 150' },
    { name: 'Spanish Omelette', price: 'KES 200' },
    { name: 'Arrow Roots', price: 'KES 200' },
    { name: 'Sweet Potatoes', price: 'KES 200' },
    { name: 'Fruit Salad', price: 'KES 200' },
    { name: 'Chicken Wings & Fries', price: 'KES 800' },
    { name: 'Bacon & Fries', price: 'KES 700' },
    { name: 'Fish Fingers', price: 'KES 800' },
    { name: 'Pancakes', price: 'KES 300' },
  ];

  return (
    <div className="animate-fade-up">
      <SectionTitle>SNACKS</SectionTitle>
      {snacks.map((s) => <MenuItem key={s.name} name={s.name} price={s.price} />)}
    </div>
  );
}

function MainsSection() {
  return (
    <div className="animate-fade-up">
      <SectionTitle>MEAT CORNER</SectionTitle>
      <MenuItem name="Goat — ½ kg" price="KES 800" />
      <MenuItem name="Goat — 1 kg" price="KES 1,500" />
      <MenuItem name="Pork — ½ kg" price="KES 800" />
      <MenuItem name="Pork — 1 kg" price="KES 1,500" />
      <MenuItem name="Beef — ½ kg" price="KES 700" />
      <MenuItem name="Beef — 1 kg" price="KES 1,400" />

      <SectionTitle>BROILER CHICKEN</SectionTitle>
      <MenuItem name="Broiler Chicken — ½ kg" desc="Dry or wet fry · Served with ugali/potatoes/rice & vegetables" price="KES 1,100" />
      <MenuItem name="Broiler Chicken — Full" desc="Dry or wet fry · Served with ugali/potatoes/rice & vegetables" price="KES 1,800" />

      <SectionTitle>KIENYEJI CHICKEN</SectionTitle>
      <MenuItem name="Kienyeji Chicken — ½ kg" desc="Dry or wet fry · Served with ugali/potatoes/rice & vegetables" price="KES 1,600" />
      <MenuItem name="Kienyeji Chicken — Full" desc="Dry or wet fry · Served with ugali/potatoes/rice & vegetables" price="KES 2,800" />

      <SectionTitle>FROM THE LAKE</SectionTitle>
      <MenuItem name="Whole Tilapia" desc="Dry or wet fry · Served with ugali/potatoes/rice & vegetables" price="KES 1,250" />
    </div>
  );
}

function BeveragesSection() {
  const beverages = [
    { name: 'White Tea', price: 'KES 200' },
    { name: 'Black Tea', price: 'KES 150' },
    { name: 'Masala Tea', price: 'KES 200' },
    { name: 'Dawa', price: 'KES 200' },
    { name: 'Hot Chocolate', price: 'KES 200' },
    { name: 'White Coffee', price: 'KES 200' },
    { name: 'Black Coffee', price: 'KES 150' },
    { name: 'Fresh Juice', price: 'KES 250' },
    { name: 'Still Water', price: 'KES 200' },
    { name: 'Delmonte', price: 'KES 400' },
    { name: 'Soda', price: 'KES 150' },
  ];

  return (
    <div className="animate-fade-up">
      <SectionTitle>BEVERAGES</SectionTitle>
      {beverages.map((b) => <MenuItem key={b.name} name={b.name} price={b.price} />)}
    </div>
  );
}
