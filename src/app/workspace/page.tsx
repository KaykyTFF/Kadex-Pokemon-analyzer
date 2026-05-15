"use client";

import React from "react";
import { CurrentTeamCard } from "@/components/workspace/CurrentTeamCard";
import { QuickActions } from "@/components/workspace/QuickActions";
import { QuickCheck } from "@/components/workspace/QuickCheck";
import { RecentTeams } from "@/components/workspace/RecentTeams";
import { MetaNote } from "@/components/workspace/MetaNote";
import { Target } from "lucide-react";

export default function WorkspacePage() {
  return (
    <div className="p-6 md:p-8 lg:p-10 space-y-10 rc-animate-fade max-w-[1400px] mx-auto w-full pb-24">
      
      {/* 1. Header da Página */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[var(--rc-border-soft)] pb-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-white border border-[var(--rc-border-soft)] px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-secondary)] shadow-sm">
            <Target size={12} className="text-[var(--rc-accent-primary)]" />
            VGC 2024 Reg G
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">
            Trainer Workspace
          </h1>
          <p className="text-sm text-[var(--rc-text-secondary)] font-medium max-w-lg leading-relaxed">
            Continue montando, analisando e refinando seus times competitivos.
          </p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-2.5 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--rc-bg-muted)] transition-all shadow-[var(--rc-shadow-sm)] active:scale-95 text-center">
             Import Paste
           </button>
           <button className="rc-btn-primary px-6 py-2.5 text-xs uppercase tracking-widest active:scale-95 text-center">
             New Team
           </button>
        </div>
      </div>

      {/* 2. Current Team & Quick Check Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2">
            <CurrentTeamCard />
         </div>
         <div className="lg:col-span-1">
            <QuickCheck />
         </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="pt-4">
        <QuickActions />
      </div>

      {/* 4. Recent Teams & Meta Note */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
         <div className="lg:col-span-2">
            <RecentTeams />
         </div>
         <div className="lg:col-span-1">
            <MetaNote />
         </div>
      </div>

    </div>
  );
}
