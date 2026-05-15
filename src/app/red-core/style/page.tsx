"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function RedCoreStyle() {
  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto space-y-16 pb-24">
       <div>
          <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-soft)] px-3 py-1 rounded-full text-xs font-bold text-[var(--rc-accent-primary)] mb-4">
            Design System
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--rc-text-primary)] tracking-tight">Tokens & Components</h1>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Surfaces */}
          <div className="space-y-6">
             <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--rc-text-primary)] border-b border-[var(--rc-border-soft)] pb-2">Surfaces</h3>
             <div className="flex flex-col gap-3 font-mono text-sm">
               <TokenRow name="--rc-bg-app" color="var(--rc-bg-app)" />
               <TokenRow name="--rc-bg-surface" color="var(--rc-bg-surface)" />
               <TokenRow name="--rc-bg-muted" color="var(--rc-bg-muted)" />
             </div>
          </div>

          {/* Accents & Semantics */}
          <div className="space-y-6">
             <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--rc-text-primary)] border-b border-[var(--rc-border-soft)] pb-2">Accents & Semantic</h3>
             <div className="flex flex-col gap-3 font-mono text-sm">
               <TokenRow name="--rc-accent-primary" color="var(--rc-accent-primary)" />
               <TokenRow name="--rc-accent-secondary" color="var(--rc-accent-secondary)" />
               <TokenRow name="--rc-success" color="var(--rc-success)" />
               <TokenRow name="--rc-warning" color="var(--rc-warning)" />
               <TokenRow name="--rc-danger" color="var(--rc-danger)" />
             </div>
          </div>
       </div>

       <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--rc-text-primary)] border-b border-[var(--rc-border-soft)] pb-2">Interactive Elements</h3>
          <div className="flex flex-wrap gap-4">
             <button className="px-6 py-3 bg-[var(--rc-accent-primary)] text-white font-bold rounded-xl shadow-[0_4px_14px_var(--rc-accent-glow)] hover:bg-[var(--rc-accent-secondary)] transition-all">
               Primary Action
             </button>
             <button className="px-6 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold rounded-xl shadow-[var(--rc-shadow-sm)] hover:bg-[var(--rc-bg-muted)] transition-all">
               Secondary Action
             </button>
             <button className="px-6 py-3 bg-transparent text-[var(--rc-text-secondary)] font-bold rounded-xl hover:bg-[var(--rc-bg-muted)] hover:text-[var(--rc-text-primary)] transition-all flex items-center gap-2">
               Ghost Action <ArrowRight size={16} />
             </button>
          </div>
       </div>

       <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--rc-text-primary)] border-b border-[var(--rc-border-soft)] pb-2">Elevation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-[var(--rc-shadow-sm)] border border-[var(--rc-border-soft)]">
              <div className="font-bold">Card Level 1</div>
              <div className="text-sm text-[var(--rc-text-muted)] font-mono">shadow-sm</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-[var(--rc-shadow-md)] border border-[var(--rc-border-soft)]">
              <div className="font-bold">Card Level 2</div>
              <div className="text-sm text-[var(--rc-text-muted)] font-mono">shadow-md</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-[var(--rc-shadow-card)] border border-[var(--rc-border-soft)]">
              <div className="font-bold">Card Level 3</div>
              <div className="text-sm text-[var(--rc-text-muted)] font-mono">shadow-card</div>
            </div>
          </div>
       </div>
    </div>
  );
}

function TokenRow({ name, color }: { name: string, color: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-[var(--rc-border-soft)] rounded-lg shadow-[var(--rc-shadow-sm)]">
       <span className="text-[var(--rc-text-primary)] font-bold">{name}</span>
       <div className="flex items-center gap-4">
         <span className="text-[var(--rc-text-muted)]">{color.replace('var(', '').replace(')', '')}</span>
         <div className="w-8 h-8 rounded-md border border-[var(--rc-border-soft)] shadow-sm" style={{ backgroundColor: color }}></div>
       </div>
    </div>
  );
}
