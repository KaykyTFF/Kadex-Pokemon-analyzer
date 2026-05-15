"use client";

import React from "react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { ShieldAlert, Zap, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function BattleLabWorkspace() {
  const team = [...MOCK_POKEMON];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12 pb-24">
      
      {/* Header */}
      <div>
        <h1 className="text-5xl font-black uppercase tracking-tighter text-[var(--bl-ink)] mb-2">
          Formation Alpha
        </h1>
        <div className="flex items-center gap-4 text-[var(--bl-ink-muted)] font-mono text-xs">
          <span>VGC 2024 REG G</span>
          <span>•</span>
          <span>SYNERGY: 86/100</span>
          <span>•</span>
          <span className="text-[var(--bl-success)]">READY FOR BATTLE</span>
        </div>
      </div>

      {/* Roster Showcase */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)]">Active Roster</h2>
          <Link href="/battle-lab/builder" className="text-xs font-bold uppercase tracking-widest text-[var(--bl-accent-secondary)] hover:underline">
            Open Builder →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((p, i) => (
            <div key={p.id} className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] hover:border-[var(--bl-hairline-strong)] rounded-lg p-4 flex gap-4 transition-colors group relative overflow-hidden">
              <div className="w-16 h-16 bg-[var(--bl-surface-2)] rounded flex items-center justify-center border border-[var(--bl-hairline)] z-10">
                <img src={p.spriteUrl} alt={p.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 min-w-0 z-10">
                <div className="text-[10px] font-mono text-[var(--bl-ink-subtle)] mb-1">SLOT 0{i+1}</div>
                <div className="font-bold text-sm uppercase tracking-tight truncate text-[var(--bl-ink)]">{p.name}</div>
                <div className="flex gap-1 mt-2">
                  {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                </div>
              </div>
              {/* Subtle background glow based on interaction */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--bl-accent-secondary-dim)] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Analysis Spotlights (Framer Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bl-spotlight-card rounded-xl p-8 min-h-[240px] flex flex-col justify-between">
           <div>
             <div className="w-10 h-10 bg-[var(--bl-surface-2)] rounded flex items-center justify-center text-[var(--bl-danger)] mb-4">
                <ShieldAlert size={20} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--bl-ink)] mb-2">Critical Threat</h3>
             <p className="text-sm text-[var(--bl-ink-muted)] leading-relaxed max-w-sm">
               Your formation is heavily exploited by <b>Ground</b> and <b>Ice</b> coverage. Landorus-T presents a severe structural risk.
             </p>
           </div>
           <div>
             <Link href="/battle-lab/analyzer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--bl-ink)] hover:text-[var(--bl-accent-primary)] transition-colors">
               Run Full Diagnostics <ArrowRight size={14} />
             </Link>
           </div>
        </div>

        <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded-xl p-8 min-h-[240px] flex flex-col justify-between relative overflow-hidden">
           {/* Cyan gradient spotlight */}
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--bl-accent-secondary)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
           
           <div>
             <div className="w-10 h-10 bg-[var(--bl-surface-2)] rounded flex items-center justify-center text-[var(--bl-accent-secondary)] mb-4">
                <Zap size={20} />
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--bl-ink)] mb-2">Speed Advantage</h3>
             <p className="text-sm text-[var(--bl-ink-muted)] leading-relaxed max-w-sm">
               Average speed tier sits at <b>S+</b>. You outspeed 85% of the projected Reg G metagame.
             </p>
           </div>
           <div>
             <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--bl-ink)] hover:text-[var(--bl-accent-secondary)] transition-colors">
               View Speed Tiers <ArrowRight size={14} />
             </button>
           </div>
        </div>
      </section>

    </div>
  );
}
