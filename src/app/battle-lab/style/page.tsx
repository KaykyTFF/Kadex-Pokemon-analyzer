"use client";

import React from "react";
import { Zap } from "lucide-react";

export default function BattleLabStyle() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 pb-24">
       <div>
          <div className="text-[10px] font-mono text-[var(--bl-accent-primary)] uppercase tracking-widest mb-2">Design System</div>
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-[var(--bl-ink)]">Tokens & Components</h1>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Surfaces */}
          <div className="space-y-4">
             <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)]">Surfaces</h3>
             <div className="flex flex-col gap-2 font-mono text-xs">
               <TokenRow name="--bl-canvas" color="var(--bl-canvas)" />
               <TokenRow name="--bl-surface-1" color="var(--bl-surface-1)" />
               <TokenRow name="--bl-surface-2" color="var(--bl-surface-2)" />
               <TokenRow name="--bl-surface-elevated" color="var(--bl-surface-elevated)" />
             </div>
          </div>

          {/* Accents & Semantics */}
          <div className="space-y-4">
             <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)]">Accents & Semantic</h3>
             <div className="flex flex-col gap-2 font-mono text-xs">
               <TokenRow name="--bl-accent-primary" color="var(--bl-accent-primary)" />
               <TokenRow name="--bl-accent-secondary" color="var(--bl-accent-secondary)" />
               <TokenRow name="--bl-accent-violet" color="var(--bl-accent-violet)" />
               <TokenRow name="--bl-success" color="var(--bl-success)" />
               <TokenRow name="--bl-danger" color="var(--bl-danger)" />
             </div>
          </div>
       </div>

       <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)]">Interactive Elements</h3>
          <div className="flex gap-4">
             <button className="px-6 py-3 bg-[var(--bl-accent-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-[0_0_15px_var(--bl-accent-primary-dim)] hover:bg-opacity-90 transition-all">
               Primary Action
             </button>
             <button className="px-6 py-3 bg-[var(--bl-surface-2)] border border-[var(--bl-hairline)] text-[var(--bl-ink)] text-[10px] font-bold uppercase tracking-widest rounded hover:border-[var(--bl-hairline-strong)] transition-all">
               Secondary Action
             </button>
             <button className="px-6 py-3 bg-transparent border border-transparent text-[var(--bl-accent-secondary)] text-[10px] font-bold uppercase tracking-widest rounded hover:bg-[var(--bl-accent-secondary-dim)] transition-all flex items-center gap-2">
               <Zap size={14} /> Tertiary Action
             </button>
          </div>
       </div>
    </div>
  );
}

function TokenRow({ name, color }: { name: string, color: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded">
       <span className="text-[var(--bl-ink)]">{name}</span>
       <div className="flex items-center gap-3">
         <span className="text-[var(--bl-ink-muted)]">{color.replace('var(', '').replace(')', '')}</span>
         <div className="w-6 h-6 rounded border border-[var(--bl-hairline)]" style={{ backgroundColor: color }}></div>
       </div>
    </div>
  );
}
