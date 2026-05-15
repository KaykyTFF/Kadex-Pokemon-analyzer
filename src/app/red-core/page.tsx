"use client";

import React from "react";
import Link from "next/link";
import { Plus, ArrowRight, Sword, ShieldAlert, Users } from "lucide-react";
import { MOCK_POKEMON, MOCK_SAVED_TEAMS } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function RedCoreWorkspace() {
  const activeTeam = [...MOCK_POKEMON, null, null]; // 4 out of 6

  return (
    <div className="p-8 lg:p-12 space-y-16 rc-animate-slide">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
           <div className="inline-flex items-center gap-2 bg-white border border-[var(--rc-border-soft)] px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-secondary)] shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--rc-accent-primary)] animate-pulse" />
              Active Workspace: VGC 2024 Reg G
           </div>
           <h1 className="text-5xl md:text-6xl font-black text-[var(--rc-text-primary)] tracking-tighter leading-none italic uppercase">
             Tailwind <span className="text-[var(--rc-accent-primary)]">Hyper</span> Offense
           </h1>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold text-sm rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all shadow-sm active:scale-95">
             Import Paste
           </button>
           <button className="rc-btn-primary px-8 py-3 text-sm active:scale-95">
             Save Team
           </button>
        </div>
      </div>

      {/* The Team Dock (Center Stage) */}
      <section className="rc-card p-1">
         <div className="flex items-center justify-between p-6 pb-2">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-[var(--rc-accent-primary)]" />
              <h2 className="text-sm font-black uppercase tracking-widest text-[var(--rc-text-primary)]">Current Formation</h2>
            </div>
            <Link href="/red-core/builder" className="text-xs font-bold text-[var(--rc-text-muted)] hover:text-[var(--rc-accent-primary)] transition-colors flex items-center gap-2 group">
              Manage Roster <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-2">
            {activeTeam.map((p, i) => (
              <div key={i} className="aspect-[4/5] relative group bg-[var(--rc-bg-muted)]/30 rounded-lg border border-[var(--rc-border-soft)] overflow-hidden transition-all hover:border-[var(--rc-accent-primary)] hover:bg-white hover:shadow-xl hover:z-10">
                {p ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                    <div className="absolute top-2 left-3 font-mono text-[10px] text-[var(--rc-text-muted)] font-bold">0{i+1}</div>
                    <img src={p.spriteUrl} alt={p.name} className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
                    <div className="mt-4 w-full text-center">
                      <div className="text-[10px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] truncate px-2">{p.name}</div>
                      <div className="flex justify-center gap-1 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        {p.types.slice(0,1).map(t => <TypeBadge key={t} type={t} size="sm" />)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-[var(--rc-text-muted)] hover:text-[var(--rc-accent-primary)] transition-colors cursor-pointer group/add">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-current flex items-center justify-center group-hover/add:scale-110 transition-transform">
                      <Plus size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Assign Slot</span>
                  </div>
                )}
              </div>
            ))}
         </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Quick Analysis */}
         <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-bold text-[var(--rc-text-primary)]">Tactical Briefing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white border border-[var(--rc-border-soft)] rounded-xl p-6 shadow-[var(--rc-shadow-sm)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--rc-accent-soft)] text-[var(--rc-accent-primary)] flex items-center justify-center mb-4">
                    <Sword size={20} />
                  </div>
                  <h3 className="font-bold text-[var(--rc-text-primary)] mb-1">Excellent Speed Tier</h3>
                  <p className="text-sm text-[var(--rc-text-secondary)]">Your core outspeeds 85% of the format. Flutter Mane acts as your primary speed control.</p>
               </div>
               <div className="bg-white border border-[var(--rc-border-soft)] rounded-xl p-6 shadow-[var(--rc-shadow-sm)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-[var(--rc-warning)]" />
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[var(--rc-warning)] flex items-center justify-center mb-4">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="font-bold text-[var(--rc-text-primary)] mb-1">Ground Weakness</h3>
                  <p className="text-sm text-[var(--rc-text-secondary)]">You have no Ground-type resists or immunities. Consider adding a Flying type or Levitate user.</p>
               </div>
            </div>
         </div>

         {/* Saved Vault */}
         <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[var(--rc-text-primary)]">Your Vault</h2>
              <button className="text-[var(--rc-text-muted)] hover:text-[var(--rc-text-primary)] transition-colors"><Plus size={20}/></button>
            </div>
            <div className="space-y-3">
               {MOCK_SAVED_TEAMS.slice(0,3).map(team => (
                 <div key={team.id} className="bg-white border border-[var(--rc-border-soft)] rounded-xl p-4 flex items-center justify-between hover:border-[var(--rc-border-strong)] transition-colors cursor-pointer shadow-[var(--rc-shadow-sm)] group">
                    <div>
                      <div className="font-bold text-sm text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors">{team.name}</div>
                      <div className="text-xs text-[var(--rc-text-muted)] mt-0.5">{team.format}</div>
                    </div>
                    <div className="flex -space-x-2">
                      {team.pokemon.slice(0,3).map((p, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[var(--rc-bg-muted)] border-2 border-white flex items-center justify-center z-10">
                          <img src={p.spriteUrl} alt={p.name} className="w-6 h-6 object-contain" />
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
}
