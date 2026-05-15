"use client";

import React from "react";
import { Search, Plus } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function RedCorePokemon() {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto space-y-12 rc-animate-fade">
       
       <div className="flex flex-col gap-8">
         <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[var(--rc-bg-muted)] px-3 py-1 rounded-lg text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-[0.2em]">
               Global Roster Access
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-[var(--rc-text-primary)] uppercase italic">
              Global <span className="text-[var(--rc-accent-primary)]">Index</span>
            </h1>
         </div>

         <div className="relative group max-w-3xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search size={24} className="text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Filter by name, type, or competitive role... (⌘K)" 
              className="w-full bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] text-xl rounded-[24px] pl-14 pr-6 py-6 focus:outline-none focus:border-[var(--rc-accent-primary)] focus:ring-[12px] focus:ring-[var(--rc-accent-soft)] transition-all placeholder:text-[var(--rc-text-muted)] shadow-[var(--rc-shadow-card)] font-medium"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
               <span className="px-2 py-1 bg-[var(--rc-bg-muted)] border border-[var(--rc-border-soft)] rounded text-[10px] font-bold text-[var(--rc-text-muted)]">GEN IX</span>
               <span className="px-2 py-1 bg-[var(--rc-bg-muted)] border border-[var(--rc-border-soft)] rounded text-[10px] font-bold text-[var(--rc-text-muted)]">REG G</span>
            </div>
         </div>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
         {MOCK_POKEMON.map((p, i) => (
           <div 
             key={p.id} 
             className="rc-card p-0 group overflow-hidden cursor-pointer relative"
             style={{ animationDelay: `${i * 50}ms` }}
           >
              {/* Card Header Background */}
              <div className="h-20 bg-gradient-to-br from-[var(--rc-bg-muted)] to-white border-b border-[var(--rc-border-soft)] relative overflow-hidden">
                 <div className="absolute -right-4 -top-4 text-4xl font-black text-black/5 italic pointer-events-none">#{String(p.id).padStart(3, '0')}</div>
              </div>

              <div className="px-5 pb-6 -mt-12 relative z-10 flex flex-col items-center">
                 <div className="w-24 h-24 bg-white border border-[var(--rc-border-strong)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    <img src={p.spriteUrl} alt={p.name} className="w-16 h-16 object-contain drop-shadow-md" />
                 </div>
                 
                 <div className="mt-4 text-center w-full">
                    <div className="font-black text-sm uppercase tracking-tight text-[var(--rc-text-primary)] truncate">{p.name}</div>
                    <div className="text-[10px] font-bold text-[var(--rc-text-muted)] mt-1 uppercase tracking-widest">{p.role}</div>
                    
                    <div className="flex justify-center gap-1.5 mt-4">
                      {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                    </div>
                 </div>

                 <button className="mt-6 w-full py-2 bg-[var(--rc-bg-muted)] text-[var(--rc-text-primary)] text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 group-hover:bg-[var(--rc-accent-primary)] group-hover:text-white transition-all shadow-sm">
                   Add to Team
                 </button>
              </div>

              {/* Hover Accent Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rc-accent-primary)] rounded-xl pointer-events-none transition-colors" />
           </div>
         ))}

         {/* Load More Trigger */}
         <div className="col-span-full py-12 flex justify-center">
            <button className="px-8 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-muted)] font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:text-[var(--rc-text-primary)] hover:border-[var(--rc-text-primary)] transition-all active:scale-95">
              Sequence Complete // Load Extended Data
            </button>
         </div>
       </div>
    </div>
  );
}
