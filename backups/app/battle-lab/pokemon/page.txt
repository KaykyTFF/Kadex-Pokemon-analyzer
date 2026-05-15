"use client";

import React from "react";
import { Search, Plus } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function BattleLabPokemon() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
       <div className="flex flex-col gap-4">
         <div className="text-[10px] font-mono text-[var(--bl-accent-secondary)] uppercase tracking-widest">Global Index</div>
         <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={24} className="text-[var(--bl-ink-subtle)] group-focus-within:text-[var(--bl-accent-primary)] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name, type, ability, or role..." 
              className="w-full bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] text-[var(--bl-ink)] text-lg rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[var(--bl-accent-primary)] focus:ring-1 focus:ring-[var(--bl-accent-primary)] transition-all placeholder:text-[var(--bl-ink-subtle)]"
            />
         </div>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {MOCK_POKEMON.map(p => (
           <div key={p.id} className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded-lg p-4 hover:border-[var(--bl-accent-secondary)] transition-all group flex flex-col justify-between h-48">
              <div className="flex justify-between items-start">
                 <div className="text-[10px] font-mono text-[var(--bl-ink-muted)]">#{String(p.id).padStart(4, '0')}</div>
                 <button className="text-[var(--bl-ink-subtle)] hover:text-[var(--bl-accent-primary)] transition-colors">
                   <Plus size={16} />
                 </button>
              </div>
              <div className="flex justify-center flex-1 items-center">
                 <img src={p.spriteUrl} alt={p.name} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div>
                 <div className="font-bold text-sm uppercase tracking-tight text-[var(--bl-ink)] truncate mb-2">{p.name}</div>
                 <div className="flex gap-1">
                   {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                 </div>
              </div>
           </div>
         ))}
       </div>
    </div>
  );
}
