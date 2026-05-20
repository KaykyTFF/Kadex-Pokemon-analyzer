"use client";

import React from "react";
import Link from "next/link";
import { MOCK_SAVED_TEAMS } from "@/data/mock/data";
import { TypeBadge } from "../pokemon/TypeBadge";

export function RecentTeams() {
  const safeTeams = MOCK_SAVED_TEAMS || [];

  return (
    <div className="space-y-4 h-full">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">Recent Teams</h3>
        <button className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] hover:underline">View All</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeTeams.map((team) => (
          <Link 
            key={team.id} 
            href="/builder"
            className="rc-card p-5 hover:border-[var(--rc-accent-primary)] group transition-all flex flex-col justify-between h-full bg-white"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div className="text-[9px] font-black text-[var(--rc-text-muted)] bg-[var(--rc-bg-muted)] px-2 py-1 rounded uppercase tracking-widest">
                  {team.format}
                </div>
              </div>
              <h4 className="font-black text-sm text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors line-clamp-1">
                {team.name}
              </h4>
              <div className="flex flex-wrap gap-1 mt-2">
                {/* Getting unique types from the first 3 pokemon for the card preview tags */}
                {Array.from(new Set((team.pokemon || []).slice(0, 3).flatMap(p => p.types || []))).slice(0, 3).map(type => (
                  <TypeBadge key={type} type={type} size="sm" />
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex -space-x-3">
                {(team.pokemon || []).slice(0, 6).map((p, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white border border-[var(--rc-border-soft)] flex items-center justify-center z-10 shadow-sm overflow-hidden group-hover:border-[var(--rc-accent-primary)] transition-colors">
                    {p && <img src={p.spriteUrl} alt={p.name} className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />}
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                Open
              </div>
            </div>
          </Link>
        ))}
        
        <Link 
          href="/builder" 
          className="rc-card p-5 border-dashed border-[var(--rc-border-strong)] bg-white/50 hover:bg-white hover:border-[var(--rc-accent-primary)] transition-all flex flex-col items-center justify-center gap-3 min-h-[180px] group"
        >
          <div className="w-10 h-10 rounded-full border border-dashed border-[var(--rc-border-strong)] flex items-center justify-center text-[var(--rc-text-muted)] group-hover:border-[var(--rc-accent-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors">
            <span className="text-xl">+</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] group-hover:text-[var(--rc-accent-primary)] transition-colors">New Team</span>
        </Link>
      </div>
    </div>
  );
}
