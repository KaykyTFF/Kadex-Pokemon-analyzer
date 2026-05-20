"use client";

import React, { useState } from "react";
import { Search, Filter, ChevronRight, Package, ShieldCheck } from "lucide-react";
import { MOCK_ITEMS, Item } from "@/data/mock/items";
import Link from "next/link";

const CATEGORIES = [
  "All", "Held Item", "Battle Item", "Berry", "Evolution Item", "Key Item", "Competitive Item"
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveMethod] = useState("All");

  const filteredItems = MOCK_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-100 pb-8 mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-primary)] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-sm">
          <Package size={12} />
          Inventory Database
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
          Items
        </h1>
        <p className="text-sm text-slate-500 font-medium max-w-xl">
          Browse all items used in competitive Pokémon battles, including berries, held items, and tactical tools.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 md:mb-12">
        <div className="relative w-full max-w-md group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search items by name or effect..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-red-500 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium outline-none shadow-sm transition-all focus:ring-4 focus:ring-red-500/5"
          />
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl gap-1 overflow-x-auto no-scrollbar max-w-full">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveMethod(cat)}
              className={`px-4 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-white text-red-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors">
                    <Package size={24} />
                  </div>
                  <span className="px-2.5 py-1 bg-slate-50 text-[9px] font-black text-slate-500 uppercase tracking-widest rounded-lg border border-slate-100">
                    {item.category}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 space-y-2">
                  <div className="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={10} className="text-red-500" />
                    Competitive Effect
                  </div>
                  <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                    {item.competitiveEffect}
                  </p>
                </div>
              </div>

              <Link 
                href={`/items/${item.id}`}
                className="mt-6 w-full py-3 bg-slate-50 hover:bg-red-600 text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                View Details
                <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-dashed border-slate-200 rounded-[40px] py-32 text-center space-y-4">
           <Filter size={48} className="mx-auto text-slate-200" />
           <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 italic">No items found matching your filters</p>
        </div>
      )}
    </div>
  );
}
