"use client";

import React from "react";
import { MOCK_SAVED_TEAMS } from "@/data/mock/data";

export function RecentTeams() {
  const safeTeams = MOCK_SAVED_TEAMS || [];

  return (
    <div className="space-y-4 h-full">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1">Recent Teams</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeTeams.map((team, index) => (
          <div key={team.id} className="rc-card p-5 hover:border-[var(--rc-accent-primary)] group cursor-pointer transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] font-bold text-[var(--rc-text-muted)] bg-[var(--rc-bg-muted)] px-2 py-0.5 rounded-full">{team.format}</div>
              </div>
              <h4 className="font-black text-sm text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors truncate">{team.name}</h4>
              <div className="text-[10px] text-[var(--rc-text-muted)] font-medium mt-1 uppercase tracking-widest truncate">
                {index === 0 ? "Speed Control, Hyper Offense" : index === 1 ? "Balance, Physical Pressure" : "Trick Room, Bulky Offense"}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex -space-x-2">
                {(team.pokemon || []).slice(0, 4).map((p, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[var(--rc-bg-muted)] border-2 border-white flex items-center justify-center z-10 shadow-sm">
                    {p && <img src={p.spriteUrl} alt={p.name} className="w-6 h-6 object-contain" />}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                Open
              </span>
            </div>
          </div>
        ))}
        
        {/* Placeholder for 3rd team if mock data only has 2 */}
        {MOCK_SAVED_TEAMS.length < 3 && (
          <div className="rc-card p-5 hover:border-[var(--rc-accent-primary)] group cursor-pointer transition-all flex flex-col justify-between h-full border-dashed border-[var(--rc-border-strong)] bg-white/50">
             <div>
              <div className="flex justify-between items-start mb-2">
                <div className="text-[10px] font-bold text-[var(--rc-text-muted)] bg-[var(--rc-bg-muted)] px-2 py-0.5 rounded-full">Doubles</div>
              </div>
              <h4 className="font-black text-sm text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors truncate">Trick Room Core</h4>
              <div className="text-[10px] text-[var(--rc-text-muted)] font-medium mt-1 uppercase tracking-widest truncate">Trick Room, Bulky Offense</div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[var(--rc-bg-muted)] border-2 border-white flex items-center justify-center z-10 shadow-sm"></div>
                <div className="w-8 h-8 rounded-full bg-[var(--rc-bg-muted)] border-2 border-white flex items-center justify-center z-10 shadow-sm"></div>
                <div className="w-8 h-8 rounded-full bg-[var(--rc-bg-muted)] border-2 border-white flex items-center justify-center z-10 shadow-sm"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity">Open</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
