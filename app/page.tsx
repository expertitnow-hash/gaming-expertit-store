'use client';

import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  const featuredGames = [
    { id: 1, name: "Elden Ring", price: "29.99", oldPrice: "59.99", image: "https://picsum.photos/id/1015/300/400" },
    { id: 2, name: "Black Myth: Wukong", price: "39.99", oldPrice: "69.99", image: "https://picsum.photos/id/1016/300/400" },
    { id: 3, name: "Cyberpunk 2077", price: "19.99", oldPrice: "49.99", image: "https://picsum.photos/id/1018/300/400" },
    { id: 4, name: "Star Wars Outlaws", price: "44.99", oldPrice: "69.99", image: "https://picsum.photos/id/1020/300/400" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Top Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-violet-500">GAMING.EXPERTIT</h1>
            
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-violet-400">PC Games</a>
              <a href="#" className="hover:text-violet-400">PlayStation</a>
              <a href="#" className="hover:text-violet-400">Xbox</a>
              <a href="#" className="hover:text-violet-400">Deals</a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search games, keys, DLC..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full px-6 py-3 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xl">🛒</button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[500px] bg-gradient-to-r from-violet-900 to-black flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-bold mb-4">BIGGEST GAME SALE</h2>
          <p className="text-2xl mb-8">Up to 90% OFF on AAA Titles</p>
          <button className="bg-violet-600 hover:bg-violet-700 px-10 py-4 rounded-xl text-lg font-semibold glow-purple">
            Shop Deals Now
          </button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">🔥 Featured Games</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <div key={game.id} className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer border border-zinc-800 hover:border-violet-500">
              <img src={game.image} alt={game.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{game.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-emerald-400">${game.price}</span>
                  <span className="line-through text-gray-500">${game.oldPrice}</span>
                </div>
                <button className="mt-4 w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fake Products Message */}
      <div className="text-center py-16 border-t border-zinc-800">
        <p className="text-gray-400">This is Stage 1 - Homepage Design</p>
        <p className="text-sm text-gray-500 mt-2">Next stage: Real Kinguin products with 90% markup</p>
      </div>
    </div>
  );
}
