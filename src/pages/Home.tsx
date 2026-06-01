import React from 'react';
import type { Page } from '../App';

interface Props {
  onNavigate: (p: Page) => void;
}

export default function Home({ onNavigate }: Props) {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative flex flex-col items-center justify-center text-center px-6 pt-16 pb-12">
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #6B1A2A, transparent)' }} />

          <div>
            <p
              className="text-xs font-medium tracking-widest mb-6"
              style={{ color: '#6B1A2A', letterSpacing: '0.3em', fontFamily: 'Inter, sans-serif' }}
            >
              WELCOME TO
            </p>
            <h1
              className="font-display text-6xl font-bold mb-2 leading-none"
              style={{ color: '#1A1A1A' }}
            >
              5PM
            </h1>
            <h2
              className="font-display text-3xl font-semibold mb-1"
              style={{ color: '#6B1A2A' }}
            >
              Hotel
            </h2>
            <div className="divider-wine my-5 mx-auto w-40" />
            <p
              className="font-display text-lg italic mb-10"
              style={{ color: '#8B4A5E' }}
            >
              A Stay, A Story
            </p>
          </div>

          {/* CTA Cards */}
          <div className="w-full max-w-sm space-y-3">
            <button
              onClick={() => onNavigate('food')}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #6B1A2A 0%, #4A0F1C 100%)', border: '1px solid rgba(107,26,42,0.4)' }}
            >
              <div className="text-left">
                <p className="font-semibold text-sm text-white">Explore Our Menu</p>
                <p className="text-xs mt-0.5 text-gray-100">Food & Snacks</p>
              </div>
              <span className="text-white">➔</span>
            </button>

            <button
              onClick={() => onNavigate('drinks')}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #6B1A2A 0%, #4A0F1C 100%)', border: '1px solid rgba(107,26,42,0.4)' }}
            >
              <div className="text-left">
                <p className="font-semibold text-sm text-white">Our Bar</p>
                <p className="text-xs mt-0.5 text-gray-100">Wines, Spirits & Beers</p>
              </div>
              <span className="text-white">➔</span>
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-6 py-12">
          <p
            className="text-xs font-medium tracking-widest text-center mb-8"
            style={{ color: '#6B1A2A', letterSpacing: '0.25em' }}
          >
            THE EXPERIENCE
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-2 py-4 rounded-xl" style={{ background: 'rgba(107,26,42,0.06)', border: '1px solid rgba(107,26,42,0.12)' }}>
              <span style={{ fontSize: '20px' }}>⭐</span>
              <p className="text-xs text-center leading-tight text-gray-600">Premium Dining</p>
            </div>

            <div className="flex flex-col items-center gap-2 py-4 rounded-xl" style={{ background: 'rgba(107,26,42,0.06)', border: '1px solid rgba(107,26,42,0.12)' }}>
              <span style={{ fontSize: '20px' }}>🕒</span>
              <p className="text-xs text-center leading-tight text-gray-600">Open Daily</p>
            </div>

            <div className="flex flex-col items-center gap-2 py-4 rounded-xl" style={{ background: 'rgba(107,26,42,0.06)', border: '1px solid rgba(107,26,42,0.12)' }}>
              <span style={{ fontSize: '20px' }}>📶</span>
              <p className="text-xs text-center leading-tight text-gray-600">Free WiFi</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div
          className="mx-4 rounded-2xl p-6 mb-6"
          style={{ background: '#F9F6F3', border: '1px solid rgba(107,26,42,0.12)' }}
        >
          <h3 className="font-display text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
            Our Story
          </h3>
          <div className="divider-wine mb-4" />
          <p className="text-sm leading-relaxed text-gray-700">
            At 5PM Hotel, every moment is crafted into a memory. We bring together the finest
            flavours, a warm ambiance, and attentive hospitality to ensure your visit becomes
            a story worth telling.
          </p>
          <button
            onClick={() => onNavigate('visit')}
            className="mt-4 flex items-center gap-1 text-sm font-medium"
            style={{ color: '#6B1A2A' }}
          >
            Find us ➔
          </button>
        </div>

        {/* Featured Menu Teaser */}
        <div className="px-4 pb-6">
          <p
            className="text-xs font-medium tracking-widest mb-4"
            style={{ color: '#6B1A2A', letterSpacing: '0.25em' }}
          >
            SIGNATURE PICKS
          </p>
          <div className="space-y-3">
            {[
              { name: 'Kienyeji Chicken', desc: 'Half · Dry or wet fry', price: 'KES 1,600' },
              { name: 'Whole Tilapia', desc: 'From the lake · With your choice of sides', price: 'KES 1,250' },
              { name: 'Full Breakfast', desc: 'Juice, eggs, sausage, toast & more', price: 'KES 1,000' },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-3 px-4 rounded-xl"
                style={{ background: '#F5EFE8', border: '1px solid rgba(107,26,42,0.1)' }}
              >
                <div>
                  <p className="font-medium text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs mt-0.5 text-gray-500">{item.desc}</p>
                </div>
                <span className="text-sm font-semibold" style={{ color: '#6B1A2A' }}>{item.price}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('food')}
            className="w-full mt-4 py-3 rounded-xl text-sm font-medium tracking-wide"
            style={{ background: 'rgba(107,26,42,0.08)', color: '#6B1A2A', border: '1px solid rgba(107,26,42,0.2)' }}
          >
            View Full Menu
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}