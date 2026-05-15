"use client";

import React from "react";
import { Plus, Sword } from "lucide-react";
import Link from "next/link";

export function WorkspaceTeamPreview() {
  const slots = Array(6).fill(null);

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">Active Formation Preview</h3>
        <span className="text-[10px] font-mono text-[var(--rc-accent-primary)] font-bold">0/6 Slots Filled</span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {slots.map((_, i) => (
          <Link 
            key={i} 
            href="/builder"
            className="aspect-square bg-white border-2 border-dashed border-[var(--rc-border-soft)] rounded-2xl flex flex-col items-center justify-center gap-2 text-[var(--rc-text-muted)] hover:border-[var(--rc-accent-primary)] hover:bg-[var(--rc-accent-soft)] transition-all group active:scale-95 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--rc-bg-muted)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={20} strokeWidth={3} />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest hidden sm:block">Assign {i + 1}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 pt-2">
        <p className="text-xs text-[var(--rc-text-muted)] font-medium italic">Seu time ainda está vazio. Comece a montar agora.</p>
        <Link href="/builder" className="rc-btn-primary px-10 py-4 text-sm tracking-widest flex items-center gap-3 active:scale-95 shadow-xl shadow-[var(--rc-accent-glow)]">
          <Sword size={18} />
          Create Your Team
        </Link>
      </div>
    </div>
  );
}
