"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Sword, Crosshair, Hexagon, Zap, Database, LogIn } from "lucide-react";
import { LoginModal } from "@/components/auth/LoginModal";

// Mock list of Pokémon IDs for the background rotation
const POKEMON_IDS = [
  1, 4, 7, 25, 133, 143, 150, 248, 384, 445, 635, 700, 888, 905, 1000, 1007, 987, 812, 727, 892
];

export default function RedCoreHome() {
  const [activeSprites, setActiveSprites] = useState<number[]>([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Initial random selection
    const getRandomSprites = () => {
      const shuffled = [...POKEMON_IDS].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    };

    setActiveSprites(getRandomSprites());

    // Cycle sprites every 8 seconds
    const interval = setInterval(() => {
      setActiveSprites(getRandomSprites());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kadex-content-layer min-h-screen flex items-center justify-center p-6 lg:p-10 rc-animate-fade overflow-hidden">
      
      {/* 0. TOP ACTIONS (FLOATING) */}
      <div className="absolute top-8 right-8 z-50">
        <button 
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-2xl border border-white/60 text-[var(--rc-text-primary)] font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/70 hover:border-[var(--rc-accent-primary)]/40 transition-all shadow-xl active:scale-95 group"
        >
          <LogIn size={16} className="group-hover:text-[var(--rc-accent-primary)] transition-colors" />
          <span>Entrar</span>
        </button>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* 1. LAYER: HIGH-FIDELITY AMBIENT ENVIRONMENT */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        
        {/* A. DYNAMIC AMBIENT ORBS (RED CORE PALETTE) */}
        <div className="absolute inset-0">
          {/* Top Left: Deep Crimson Drifter */}
          <div className="rc-ambient-orb animate-orb-1 w-[800px] h-[800px] top-[-10%] left-[-10%] bg-[#e11d2e] opacity-[0.08]" />
          
          {/* Bottom Right: Soft Blush Pulse */}
          <div className="rc-ambient-orb animate-orb-2 w-[900px] h-[900px] bottom-[-15%] right-[-5%] bg-[#f472b6] opacity-[0.06]" />
          
          {/* Center Left: Tactical Red Wave */}
          <div className="rc-ambient-orb animate-orb-3 w-[600px] h-[600px] top-[20%] left-[-5%] bg-[#dc2626] opacity-[0.05]" />
          
          {/* Top Right: Coral Ambient Glow */}
          <div className="rc-ambient-orb animate-orb-1 w-[500px] h-[500px] top-[-5%] right-[10%] bg-[#fb7185] opacity-[0.04]" />
        </div>
        
        {/* B. DYNAMIC POKEMON SPRITES (SUBTLE DRIFT) */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply">
          {activeSprites.map((id, index) => (
            <div 
              key={`${id}-${index}`}
              className="absolute transition-all duration-[4000ms] ease-in-out will-change-transform"
              style={{
                top: `${[15, 25, 60, 75, 20, 80][index]}%`,
                left: `${[10, 80, 5, 85, 45, 30][index]}%`,
                animation: `rc-float-organic ${20 + index * 4}s ease-in-out infinite alternate`,
                animationDelay: `${index * -3}s`,
                filter: 'blur(3px) grayscale(1)'
              }}
            >
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt=""
                className="w-16 h-16 md:w-24 md:h-24 opacity-30"
              />
            </div>
          ))}
        </div>

        {/* C. THE GLASS PANE & LEGIBILITY GRADIENT */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        
        {/* D. RADIAL CLEARANCE (Legibility focus) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]" />

        {/* E. SPECULAR NOISE & TEXTURE */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        {/* F. TECHNICAL GRID OVERLAY */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ backgroundImage: 'radial-gradient(var(--rc-border-strong) 0.5px, transparent 0.5px)', backgroundSize: '40px 48px' }} />
      </div>

      {/* 2. LAYER: MAIN CONTENT (SHARP) */}
      <div className="max-w-4xl w-full text-center space-y-12 relative z-10 px-6 rc-animate-fade">
        
        {/* Logo & Branding */}
        <div className="flex flex-col items-center gap-8 rc-animate-slide">
          <div className="w-24 h-24 rounded-[32px] bg-[var(--rc-accent-primary)] text-white flex items-center justify-center shadow-[0_20px_50px_rgba(221,28,45,0.3)] border border-white/20 hover:scale-105 transition-transform duration-500 rc-shine overflow-hidden">
            <Hexagon size={48} fill="currentColor" className="opacity-90" />
          </div>
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-black tracking-tight uppercase italic leading-none drop-shadow-md rc-text-shine">
              Kadex
            </h1>
            <p className="text-xl text-[var(--rc-text-secondary)] font-medium max-w-lg mx-auto leading-relaxed">
              Próxima geração de inteligência competitiva Pokémon.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group max-w-2xl mx-auto rc-animate-slide [animation-delay:200ms]">
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--rc-accent-primary)]/25 to-transparent rounded-[32px] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
              <Search size={22} className="text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar no banco tático..." 
              className="w-full bg-white/70 backdrop-blur-3xl border border-white/50 text-[var(--rc-text-primary)] text-xl rounded-[26px] pl-16 pr-8 py-6 focus:outline-none focus:border-[var(--rc-accent-primary)] shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 placeholder:text-[var(--rc-text-muted)] font-medium focus:scale-[1.01]"
            />
            <div className="absolute right-7 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-slate-200/50 backdrop-blur-md border border-white/60 rounded-lg text-[11px] font-bold text-[var(--rc-text-muted)] uppercase tracking-widest">
              <span className="opacity-50">⌘</span>
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 rc-animate-slide [animation-delay:400ms]">
          <Link 
            href="/builder" 
            className="home-cta home-cta-primary px-12 py-4 text-sm font-black tracking-widest"
          >
            <span className="home-cta-content">
              <Sword size={20} />
              Build Team
            </span>
          </Link>

          <Link 
            href="/analyzer" 
            className="home-cta home-cta-secondary px-10 py-4 text-sm font-black uppercase"
          >
            <span className="home-cta-content">
              <Crosshair size={20} />
              Team Analyzer
            </span>
          </Link>
        </div>


        {/* Footer Meta info */}
        <div className="pt-16 flex justify-center items-center gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--rc-text-muted)] rc-animate-fade [animation-delay:600ms]">
          <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full shadow-sm">
            <Zap size={14} className="text-[var(--rc-warning)]" />
            VGC 2024 REG G
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--rc-border-strong)] opacity-40" />
          <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full shadow-sm">
            <Database size={14} className="text-[var(--rc-accent-primary)]" />
            1k+ Pokémon
          </div>
        </div>

      </div>
    </div>
  );
}
