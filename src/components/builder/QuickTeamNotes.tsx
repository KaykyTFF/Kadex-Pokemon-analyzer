"use client";

import React from "react";
import { StickyNote, Info } from "lucide-react";

export function QuickTeamNotes() {
  const notes = [
    { label: "Good speed control", type: "positive" },
    { label: "Watch for Ground pressure", type: "warning" },
    { label: "Missing consistent Water resist", type: "danger" },
    { label: "Strong special pressure", type: "positive" },
  ];

  return (
    <div className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-card)] space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--rc-bg-muted)] text-[var(--rc-text-primary)] flex items-center justify-center">
          <StickyNote size={16} />
        </div>
        <h3 className="text-xs font-black uppercase tracking-widest text-[var(--rc-text-primary)]">Quick Team Notes</h3>
      </div>

      <div className="space-y-2">
        {notes.map((note, i) => (
          <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[var(--rc-bg-muted)]/50 transition-colors">
            <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
              note.type === "positive" ? "bg-[var(--rc-success)]" : 
              note.type === "warning" ? "bg-[var(--rc-warning)]" : 
              "bg-[var(--rc-danger)]"
            }`} />
            <span className="text-[10px] font-bold text-[var(--rc-text-primary)] leading-snug">
              {note.label}
            </span>
          </div>
        ))}
      </div>
      
      <button className="w-full py-2.5 border-2 border-dashed border-[var(--rc-border-soft)] rounded-xl text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] hover:border-[var(--rc-accent-primary)] hover:text-[var(--rc-accent-primary)] transition-all">
        + Add Strategic Note
      </button>
    </div>
  );
}
