"use client";

import React from "react";
import Link from "next/link";
import { Search, Sword, Crosshair, Hexagon, Zap, Database } from "lucide-react";

export default function RedCoreHome() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-10 rc-animate-fade relative overflow-hidden bg-[var(--rc-bg-app)]">
      
      {/* 1. LAYER: ETHEREAL MIST / AURORA EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Red Aurora - Center Top */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-[var(--rc-accent-soft)] to-transparent opacity-60 blur-[120px]" />
        
        {/* Translucent White Smoke - Middle */}
        <div className="absolute top-[40%] left-[20%] w-[800px] h-[500px] bg-gradient-radial from-white to-transparent opacity-40 blur-[100px]" />
        
        {/* Soft Accent Blob - Bottom Right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-[var(--rc-accent-soft)] to-transparent opacity-20 blur-[140px]" />
        
        {/* Secondary Neutral Depth - Top Left */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-gradient-radial from-slate-100 to-transparent opacity-30 blur-[80px]" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-10 relative z-10">
        
        {/* Logo & Branding */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-[32px] bg-[var(--rc-accent-primary)] text-white flex items-center justify-center shadow-2xl shadow-[var(--rc-accent-glow)] rc-animate-slide">
            <Hexagon size={48} fill="currentColor" className="opacity-80" />
          </div>
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">
              Kadex
            </h1>
            <p className="text-lg text-[var(--rc-text-secondary)] font-medium max-w-md mx-auto leading-relaxed">
              Monte, analise e otimize times Pokémon competitivos com precisão tática.
            </p>
          </div>
        </div>

        {/* Central Search Bar */}
        <div className="relative group max-w-2xl mx-auto shadow-sm hover:shadow-md transition-shadow rounded-[24px]">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search size={24} className="text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar Pokémon, moves, abilities ou times..." 
            className="w-full bg-white border border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] text-xl rounded-[24px] pl-16 pr-6 py-5 focus:outline-none focus:border-[var(--rc-accent-primary)] focus:ring-[4px] focus:ring-[var(--rc-accent-soft)] transition-all placeholder:text-[var(--rc-text-muted)] font-medium"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[var(--rc-bg-app)] border border-[var(--rc-border-soft)] rounded-md text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest shadow-sm">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/builder" className="rc-btn-primary px-10 py-3.5 text-sm tracking-widest flex items-center gap-3 active:scale-95 shadow-md shadow-[var(--rc-accent-glow)] uppercase">
            <Sword size={18} />
            Build Team
          </Link>
          
          <Link href="/analyzer" className="px-8 py-3.5 bg-white border border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] font-black text-sm uppercase rounded-xl hover:border-[var(--rc-accent-primary)] hover:text-[var(--rc-accent-primary)] transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center gap-3">
            <Crosshair size={18} />
            Team Analyzer
          </Link>
        </div>

        {/* Footer Meta info */}
        <div className="pt-12 flex justify-center items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] opacity-60">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-[var(--rc-warning)]" />
            VGC 2024 REG G
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--rc-border-strong)]" />
          <div className="flex items-center gap-2">
            <Database size={12} className="text-[var(--rc-accent-primary)]" />
            1000+ Pokémon Indexed
          </div>
        </div>

      </div>
    </div>
  );
}
