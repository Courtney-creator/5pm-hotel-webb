import { useState } from 'react';
import BottomNav from './BottomNav';
import Home from './pages/Home';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import Visit from './pages/Visit';

export type Page = 'home' | 'food' | 'drinks' | 'visit';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <div className="flex-1 pb-20 overflow-y-auto">
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'food' && <Food />}
        {page === 'drinks' && <Drinks />}
        {page === 'visit' && <Visit />}
      </div>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
}
