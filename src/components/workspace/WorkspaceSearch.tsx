"use client";

import React from "react";
import { Search } from "lucide-react";

export function WorkspaceSearch() {
  return (
    <div className="relative group max-w-2xl mx-auto shadow-[var(--rc-shadow-card)] rounded-[24px] w-full">
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        <Search size={24} className="text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
      </div>
      <input 
        type="text" 
        placeholder="Buscar Pokémon, moves, abilities ou times..." 
        className="w-full bg-white border-2 border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] text-xl rounded-[24px] pl-16 pr-20 py-6 focus:outline-none focus:border-[var(--rc-accent-primary)] focus:ring-[12px] focus:ring-[var(--rc-accent-soft)] transition-all placeholder:text-[var(--rc-text-muted)] font-medium"
      />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[var(--rc-bg-muted)] border border-[var(--rc-border-soft)] rounded-lg text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">
        <span>⌘</span>
        <span>K</span>
      </div>
    </div>
  );
}
