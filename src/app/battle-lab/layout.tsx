"use client";

import React, { useState } from "react";
import "./battle-lab.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Sword, PieChart, Plus, ChevronLeft, Hexagon, Layers, ArrowLeft } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";

export default function BattleLabLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const team = [...MOCK_POKEMON, null, null, null, null, null].slice(0, 6);
  const [activeSlot, setActiveSlot] = useState(0);

  return (
    <div className="battle-lab-theme fixed inset-0 z-[100] flex flex-col font-sans animate-in fade-in duration-300">
      
      {/* TOP COMMAND BAR */}
      <header className="h-[48px] border-b border-[var(--bl-hairline)] bg-[var(--bl-surface-1)] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[var(--bl-ink-muted)] hover:text-[var(--bl-ink)] transition-colors flex items-center gap-2">
            <ArrowLeft size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Exit Lab</span>
          </Link>
          <div className="w-px h-4 bg-[var(--bl-hairline)]" />
          <div className="flex items-center gap-2 text-[var(--bl-ink)]">
            <Hexagon size={16} className="text-[var(--bl-accent-primary)]" />
            <span className="text-sm font-bold tracking-tight">KADEX // BATTLE LAB</span>
          </div>
        </div>

        {/* Command Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={14} className="text-[var(--bl-ink-subtle)] group-focus-within:text-[var(--bl-accent-secondary)] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search Pokémon, moves, or items... (Ctrl+K)" 
              className="w-full bg-[var(--bl-surface-2)] border border-[var(--bl-hairline)] text-[var(--bl-ink)] text-xs rounded-md pl-9 pr-3 py-1.5 focus:outline-none focus:border-[var(--bl-accent-secondary)] focus:ring-1 focus:ring-[var(--bl-accent-secondary)] transition-all placeholder:text-[var(--bl-ink-subtle)]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
           <div className="text-[10px] font-mono text-[var(--bl-ink-muted)] border border-[var(--bl-hairline)] px-2 py-1 rounded bg-[var(--bl-surface-2)]">
             VGC 2024 REG G
           </div>
           <button className="bg-[var(--bl-surface-2)] hover:bg-[var(--bl-surface-elevated)] border border-[var(--bl-hairline)] text-[var(--bl-ink)] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-md transition-colors">
             Export
           </button>
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* TEAM DOCK (Left Rail) */}
        <aside className="w-[80px] bg-[var(--bl-surface-1)] border-r border-[var(--bl-hairline)] flex flex-col items-center py-4 gap-4 shrink-0 z-10">
          <div className="text-[8px] font-bold uppercase tracking-widest text-[var(--bl-ink-subtle)] mb-2">ROSTER</div>
          
          <div className="flex flex-col gap-3 w-full px-3">
            {team.map((p, i) => {
              const isActive = i === activeSlot;
              return (
                <button 
                  key={i}
                  onClick={() => setActiveSlot(i)}
                  className={`relative w-full aspect-square rounded-lg border flex items-center justify-center transition-all group ${
                    isActive 
                      ? 'bg-[var(--bl-accent-primary-dim)] border-[var(--bl-accent-primary)] shadow-[0_0_15px_var(--bl-accent-primary-dim)]' 
                      : 'bg-[var(--bl-surface-2)] border-[var(--bl-hairline)] hover:border-[var(--bl-hairline-strong)]'
                  }`}
                >
                  {isActive && <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--bl-accent-primary)] rounded-r-full" />}
                  
                  {p ? (
                    <img src={p.spriteUrl} alt={p.name} className={`w-10 h-10 object-contain drop-shadow-md ${isActive ? 'scale-110' : 'opacity-70 group-hover:opacity-100'} transition-all`} />
                  ) : (
                    <Plus size={16} className={isActive ? 'text-[var(--bl-accent-primary)]' : 'text-[var(--bl-ink-subtle)]'} />
                  )}
                  <div className="absolute -bottom-1 -right-1 text-[8px] font-mono text-[var(--bl-ink-muted)] bg-[var(--bl-surface-1)] px-1 rounded border border-[var(--bl-hairline)]">0{i+1}</div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* SECONDARY NAV (Vertical Menu inside workspace) */}
        <nav className="w-[200px] bg-[var(--bl-surface-2)] border-r border-[var(--bl-hairline)] flex flex-col py-6 px-3 shrink-0">
           <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--bl-ink-subtle)] mb-4 px-2">Navigation</div>
           
           <div className="flex flex-col gap-1">
             <NavLink href="/battle-lab/builder" icon={<Sword size={16} />} label="Team Builder" active={pathname === '/battle-lab/builder'} />
             <NavLink href="/battle-lab/analyzer" icon={<PieChart size={16} />} label="Analyzer" active={pathname === '/battle-lab/analyzer'} />
             <NavLink href="/battle-lab/pokemon" icon={<Search size={16} />} label="Dex Search" active={pathname === '/battle-lab/pokemon'} />
             <div className="my-4 border-t border-[var(--bl-hairline)]" />
             <NavLink href="/battle-lab/style" icon={<Hexagon size={16} />} label="Style Tokens" active={pathname === '/battle-lab/style'} />
           </div>
        </nav>

        {/* CENTER STAGE (Content Area) */}
        <main className="flex-1 bg-[var(--bl-canvas)] overflow-y-auto relative">
          {children}
        </main>
        
      </div>
    </div>
  );
}

function NavLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-bold tracking-tight transition-all ${
        active 
          ? 'bg-[var(--bl-surface-elevated)] text-[var(--bl-ink)] shadow-sm' 
          : 'text-[var(--bl-ink-muted)] hover:text-[var(--bl-ink)] hover:bg-[var(--bl-surface-elevated)]/50'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
