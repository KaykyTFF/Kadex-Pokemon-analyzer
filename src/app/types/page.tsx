"use client";

import React, { useState } from "react";
import { Search, Hexagon, ChevronRight, Filter, Database, Zap } from "lucide-react";
import Link from "next/link";
import { MOCK_TYPES_ARRAY } from "@/data/mock/types";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

const TYPE_COLORS: Record<string, string> = {
  normal: "156, 163, 175",
  fire: "239, 68, 68",
  water: "59, 130, 246",
  electric: "234, 179, 8",
  grass: "34, 197, 94",
  ice: "56, 189, 248",
  fighting: "217, 119, 6",
  poison: "168, 85, 247",
  ground: "217, 119, 6",
  flying: "125, 211, 252",
  psychic: "236, 72, 153",
  bug: "132, 204, 22",
  rock: "180, 83, 9",
  ghost: "139, 92, 246",
  dragon: "99, 102, 241",
  dark: "30, 41, 59",
  steel: "148, 163, 184",
  fairy: "244, 114, 182"
};

export default function TypesIndexPage() {
  const [search, setSearch] = useState("");

  const filteredTypes = MOCK_TYPES_ARRAY.filter(t => 
    t.type.toLowerCase().includes(search.toLowerCase()) || 
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
      
      {/* 1. HERO SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-10 mb-10 md:mb-16 kadex-page-hero">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-primary)] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-sm">
            <Hexagon size={12} />
            Tactical Element System
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Elemental <span className="text-[var(--rc-accent-primary)]">Types</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            O alicerce da estratégia Pokémon. Domine as interações elementais, resistências e multiplicadores de dano para construir o time perfeito.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-slate-100 shadow-sm">
           <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Database Index</div>
              <div className="text-2xl font-black text-slate-900 italic">18 <span className="text-xs not-italic text-slate-400">Elements</span></div>
           </div>
           <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
              <Database size={24} />
           </div>
        </div>
      </div>

      {/* 2. SEARCH CONTROLS */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="relative w-full max-w-xl group">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Filtrar por nome ou descrição do tipo..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-red-500 rounded-[24px] pl-14 pr-6 py-5 text-base font-medium outline-none shadow-sm transition-all focus:ring-8 focus:ring-red-500/5 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. TYPES GRID */}
      {filteredTypes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTypes.map(typeData => {
            const color = TYPE_COLORS[typeData.type.toLowerCase()] || "156, 163, 175";
            
            return (
              <div 
                key={typeData.type}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Background Accent & Watermark */}
                <div 
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, rgba(${color}, 1) 100%)`
                  }}
                />
                <div className="absolute -right-6 -bottom-6 text-slate-100 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                   <Hexagon size={120} strokeWidth={1} />
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner transition-colors"
                        style={{ backgroundColor: `rgba(${color}, 0.1)`, color: `rgba(${color}, 1)` }}
                      >
                        <Hexagon size={24} />
                      </div>
                      <TypeBadge type={typeData.type} size="sm" />
                    </div>
                    <span className="px-2.5 py-1 bg-slate-50 text-[9px] font-black text-slate-500 uppercase tracking-widest rounded-lg border border-slate-100">
                      {typeData.pokemonCount} PKMN
                    </span>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="space-y-2">
                      <div className="w-8 h-1 rounded-full" style={{ backgroundColor: `rgba(${color}, 0.8)` }} />
                      <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-red-600 transition-colors">
                        {typeData.type}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                      {typeData.description}
                    </p>
                  </div>
                </div>

                <Link 
                  href={`/types/${typeData.type.toLowerCase()}`}
                  className="mt-6 w-full py-3 bg-slate-50 hover:bg-red-600 text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all flex items-center justify-center gap-2 relative z-10 border border-slate-100 group-hover:border-transparent"
                >
                  Analyze Type
                  <ChevronRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-dashed border-slate-200 rounded-[40px] py-32 text-center space-y-4">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
             <Filter size={40} />
           </div>
           <div className="space-y-1">
             <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Type não catalogado</p>
             <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest italic">Ajuste sua busca para encontrar o elemento desejado.</p>
           </div>
        </div>
      )}
    </div>
  );
}
