"use client";

import React from "react";
import { Hexagon } from "lucide-react";

export function WorkspaceHero() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="w-24 h-24 rounded-[32px] bg-[var(--rc-accent-primary)] text-white flex items-center justify-center shadow-2xl shadow-[var(--rc-accent-glow)] rc-animate-slide">
        <Hexagon size={48} fill="currentColor" className="opacity-80" />
      </div>
      <div className="space-y-3">
        <h1 className="text-7xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">
          Kadex
        </h1>
        <p className="text-lg text-[var(--rc-text-secondary)] font-medium max-w-md mx-auto leading-relaxed">
          Monte, analise e otimize times Pokémon competitivos com precisão tática.
        </p>
      </div>
    </div>
  );
}
