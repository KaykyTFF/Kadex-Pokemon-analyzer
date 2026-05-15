"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sword } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";

import { TypeBadge } from "../pokemon/TypeBadge";

export function CurrentTeamCard() {
  const team = [...(MOCK_POKEMON || []), null, null].slice(0, 6); // Mock 4/6

  return (
    <div className="rc-card overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--rc-border-soft)]">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-[var(--rc-text-primary)]">
            Tailwind Hyper Offense
          </h2>
          <div className="flex items-center gap-3 mt-2 text-xs font-bold text-[var(--rc-text-secondary)] uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[var(--rc-warning)] rounded-full animate-pulse" />
              In Progress
            </span>
            <span className="opacity-30">•</span>
            <span>VGC 2024 Reg G</span>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold text-sm rounded-lg hover:bg-[var(--rc-bg-muted)] transition-all shadow-[var(--rc-shadow-sm)] active:scale-95 text-center">
            Export Paste
          </button>
          <Link href="/builder" className="flex-1 md:flex-none rc-btn-primary py-2.5 px-6 text-sm tracking-widest flex items-center justify-center gap-2 active:scale-95">
            <Sword size={16} />
            Continue
          </Link>
        </div>
      </div>
      
      <div className="p-6 md:p-8 bg-[var(--rc-bg-muted)]/30">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
          {team.map((p, i) => (
            <Link 
              key={i} 
              href="/builder"
              className={`relative aspect-[4/4.5] flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all shrink-0 w-32 md:w-auto ${
                p 
                  ? 'bg-white border-[var(--rc-border-soft)] hover:border-[var(--rc-accent-primary)] hover:shadow-[0_4px_15px_var(--rc-accent-soft)]' 
                  : 'bg-white/50 border-dashed border-[var(--rc-border-soft)] hover:border-[var(--rc-accent-primary)] hover:bg-[var(--rc-accent-soft)]'
              }`}
            >
              <div className="absolute top-2 left-2.5 font-mono text-[9px] font-bold text-[var(--rc-text-muted)]">0{i+1}</div>
              
              {p ? (
                <>
                  <img src={p.spriteUrl} alt={p.name} className="w-14 h-14 object-contain mb-2 drop-shadow-sm group-hover:scale-110 transition-transform" />
                  <div className="text-[10px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] truncate w-full text-center px-1">{p.name}</div>
                  <div className="flex justify-center gap-1 mt-1 opacity-60">
                    {(p.types || []).map(t => <TypeBadge key={t} type={t} size="sm" />)}
                  </div>
                </>
              ) : (
                <div className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Empty</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
