"use client";

import React from "react";
import Link from "next/link";
import { CurrentTeamCard } from "@/components/workspace/CurrentTeamCard";
import { QuickActions } from "@/components/workspace/QuickActions";
import { QuickCheck } from "@/components/workspace/QuickCheck";
import { RecentTeams } from "@/components/workspace/RecentTeams";
import { MetaNote } from "@/components/workspace/MetaNote";
import { Target, Plus, Upload } from "lucide-react";

/**
 * WorkspacePage (Archived)
 * This page has been moved from src/app/workspace/page.tsx to preserve its content.
 */
export function WorkspacePage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 space-y-10 rc-animate-fade max-w-[1400px] mx-auto w-full pb-24">
      
      {/* 1. Header da Página */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-2 border-b border-[var(--rc-border-soft)]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">
            <Target size={12} className="text-[var(--rc-accent-primary)]" />
            Competitive Season 2024
          </div>
          <h1 className="text-4xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">
            Workspace
          </h1>
          <p className="text-sm text-[var(--rc-text-secondary)] font-medium max-w-lg">
            Seu centro tático de comando e gestão de times.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-white border border-[var(--rc-border-soft)] text-[var(--rc-text-primary)] font-bold text-[10px] uppercase tracking-widest rounded-lg hover:border-[var(--rc-border-strong)] transition-all active:scale-95 flex items-center justify-center gap-2">
            <Upload size={14} />
            Import
          </button>
          <Link href="/builder" className="flex-1 md:flex-none rc-btn-primary px-6 py-2.5 text-[10px] uppercase tracking-[0.1em] flex items-center justify-center gap-2 active:scale-95">
            <Plus size={14} />
            New Team
          </Link>
        </div>
      </div>

      {/* 2. Grid Principal: Current Team & Quick Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="lg:col-span-3">
            <CurrentTeamCard />
         </div>
         <div className="lg:col-span-1">
            <QuickCheck />
         </div>
      </div>

      {/* 3. Quick Access Actions */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] px-1">Quick Access</h3>
        <QuickActions />
      </div>

      {/* 4. Secondary Grid: Recent Teams & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="lg:col-span-3">
            <RecentTeams />
         </div>
         <div className="lg:col-span-1">
            <div className="space-y-6">
              <MetaNote />
              <div className="rc-card p-6 bg-[var(--rc-accent-primary)] text-white relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Target size={80} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 relative z-10">Pro Tip</h4>
                <p className="text-[11px] font-medium leading-relaxed relative z-10 opacity-90">
                  Use o Team Analyzer para descobrir se seu time atual é vulnerável a Trick Room ou Priority Moves.
                </p>
              </div>
            </div>
         </div>
      </div>

    </div>
  );
}
