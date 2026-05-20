"use client";

import React from "react";
import Link from "next/link";
import { Sword, Search, Download } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "../pokemon/TypeBadge";

export function CurrentTeamCard() {
  const team = [...(MOCK_POKEMON || []), null, null].slice(0, 6); // Mock 4/6

  return (
    <div className="rc-card overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-[var(--rc-border-soft)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-[var(--rc-text-primary)] leading-none">
              Tailwind Hyper Offense
            </h2>
            <div className="flex items-center gap-3 text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-[var(--rc-warning)]">
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                In Progress
              </span>
              <span className="opacity-30">•</span>
              <span>VGC 2024 Reg G</span>
            </div>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2.5 bg-white border border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] font-bold text-[10px] uppercase tracking-widest rounded-lg hover:border-[var(--rc-border-strong)] transition-all active:scale-95 flex items-center justify-center gap-2">
              <Download size={14} />
              Export
            </button>
            <Link href="/analyzer" className="flex-1 md:flex-none px-4 py-2.5 bg-white border border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] font-bold text-[10px] uppercase tracking-widest rounded-lg hover:border-[var(--rc-border-strong)] transition-all active:scale-95 flex items-center justify-center gap-2">
              <Search size={14} />
              Analyze
            </Link>
            <Link href="/builder" className="flex-1 md:flex-none rc-btn-primary px-6 py-2.5 text-[10px] uppercase tracking-[0.1em] flex items-center justify-center gap-2 active:scale-95">
              <Sword size={14} />
              Continue
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 bg-[var(--rc-bg-muted)]/30">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {team.map((p, i) => (
            <Link 
              key={i} 
              href={p?.slug ? `/pokemon/${p.slug}` : "/builder"}
              className={`group relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all h-full min-h-[140px] ${
                p 
                  ? 'bg-white border-[var(--rc-border-soft)] hover:border-[var(--rc-accent-primary)] hover:shadow-md' 
                  : 'bg-white/50 border-dashed border-[var(--rc-border-soft)] hover:border-[var(--rc-accent-primary)] hover:bg-[var(--rc-accent-soft)]'
              }`}
            >
              <div className="absolute top-2 left-3 font-mono text-[9px] font-bold text-[var(--rc-text-muted)]">0{i+1}</div>
              
              {p ? (
                <>
                  <img 
                    src={p.spriteUrl} 
                    alt={p.name} 
                    className="w-14 h-14 object-contain mb-3 drop-shadow-sm group-hover:scale-110 transition-transform" 
                  />
                  <div className="text-[10px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] truncate w-full text-center px-1">
                    {p.name}
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {(p.types || []).map(t => (
                      <TypeBadge key={t} type={t} size="sm" />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] opacity-50">
                  Empty
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
