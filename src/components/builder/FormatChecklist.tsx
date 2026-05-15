"use client";

import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export function FormatChecklist() {
  const items = [
    { label: "6 Pokémon selected", done: true },
    { label: "Speed control available", done: true },
    { label: "Protect coverage checked", done: true },
    { label: "Fake Out support detected", done: false },
    { label: "Restricted slot check", done: true },
  ];

  return (
    <div className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-card)] space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--rc-bg-muted)] text-[var(--rc-text-primary)] flex items-center justify-center">
          <CheckCircle2 size={16} />
        </div>
        <h3 className="text-xs font-black uppercase tracking-widest text-[var(--rc-text-primary)]">Format Checklist</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.done ? (
              <CheckCircle2 size={14} className="text-[var(--rc-success)] shrink-0" />
            ) : (
              <Circle size={14} className="text-[var(--rc-text-muted)] shrink-0 opacity-40" />
            )}
            <span className={`text-[10px] font-bold uppercase tracking-tight ${item.done ? 'text-[var(--rc-text-primary)]' : 'text-[var(--rc-text-muted)]'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="pt-2">
        <div className="p-3 bg-[var(--rc-accent-soft)] border border-[var(--rc-accent-primary)]/10 rounded-xl">
           <p className="text-[9px] font-bold text-[var(--rc-accent-primary)] leading-tight">
             Missing Fake Out support. Consider adding Incineroar or Rillaboom for better board control.
           </p>
        </div>
      </div>
    </div>
  );
}
