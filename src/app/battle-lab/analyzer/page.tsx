"use client";

import React from "react";
import { ShieldAlert, Zap, Layers, AlertCircle } from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function BattleLabAnalyzer() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      <div className="flex justify-between items-end border-b border-[var(--bl-hairline)] pb-6">
         <div>
            <div className="text-[10px] font-mono text-[var(--bl-accent-primary)] uppercase tracking-widest mb-2">Tactical Assessment</div>
            <h1 className="text-5xl font-black uppercase italic tracking-tighter text-[var(--bl-ink)]">Team Analyzer</h1>
         </div>
         <div className="text-right">
            <div className="text-[54px] font-black font-mono leading-none tracking-tighter text-[var(--bl-ink)]">
              86<span className="text-2xl text-[var(--bl-ink-muted)]">/100</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
         {/* Defensive Profile */}
         <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)] flex items-center gap-2">
              <ShieldAlert size={12} className="text-[var(--bl-danger)]"/> Defensive Gaps
            </h3>
            
            <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded-lg overflow-hidden font-mono text-[10px] uppercase tracking-widest">
               <div className="grid grid-cols-2 p-3 bg-[var(--bl-surface-2)] border-b border-[var(--bl-hairline)] text-[var(--bl-ink-muted)]">
                 <div>Type</div>
                 <div>Vulnerability</div>
               </div>
               
               <AnalyzerRow type="Ice" count={3} severity="critical" />
               <AnalyzerRow type="Fairy" count={3} severity="critical" />
               <AnalyzerRow type="Ground" count={2} severity="warning" />
               <AnalyzerRow type="Steel" count={1} severity="normal" />
            </div>

            <div className="bg-[var(--bl-accent-primary-dim)] border border-[var(--bl-accent-primary)] rounded-lg p-4 flex gap-4">
              <AlertCircle size={20} className="text-[var(--bl-accent-primary)] shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--bl-accent-primary)] mb-1">Critical Overlap</div>
                <p className="text-[10px] text-[var(--bl-ink)] leading-relaxed">
                  Half of your formation shares a weakness to Ice and Fairy. A fast attacker like Iron Bundle can exploit this structure. Consider a Steel or Poison pivot.
                </p>
              </div>
            </div>
         </div>

         {/* Speed Hierarchy */}
         <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)] flex items-center gap-2">
              <Zap size={12} className="text-[var(--bl-accent-secondary)]"/> Speed Hierarchy vs Meta
            </h3>

            <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded-lg p-6 space-y-4">
               <SpeedRow name="Dragapult" speed={213} isMeta={true} />
               <SpeedRow name="Flutter Mane" speed={205} isMeta={false} highlight={true} />
               <SpeedRow name="Chien-Pao" speed={188} isMeta={true} />
               <SpeedRow name="Ogerpon-Wellspring" speed={178} isMeta={false} highlight={true} />
               <SpeedRow name="Urshifu-Rapid" speed={163} isMeta={true} />
               <SpeedRow name="Raging Bolt" speed={155} isMeta={false} highlight={true} />
            </div>
         </div>

      </div>
    </div>
  );
}

function AnalyzerRow({ type, count, severity }: { type: string, count: number, severity: 'critical' | 'warning' | 'normal' }) {
  const colorClass = severity === 'critical' ? 'text-[var(--bl-danger)]' : severity === 'warning' ? 'text-[var(--bl-warning)]' : 'text-[var(--bl-ink)]';
  return (
    <div className="grid grid-cols-2 p-3 border-b border-[var(--bl-hairline)] items-center">
      <div><TypeBadge type={type} size="sm" /></div>
      <div className={`font-bold ${colorClass} flex items-center gap-2`}>
        {count}x Weak
        {severity === 'critical' && <div className="w-1.5 h-1.5 rounded-full bg-[var(--bl-danger)] animate-pulse" />}
      </div>
    </div>
  );
}

function SpeedRow({ name, speed, isMeta, highlight = false }: { name: string, speed: number, isMeta: boolean, highlight?: boolean }) {
  const barColor = highlight ? 'bg-[var(--bl-accent-secondary)] shadow-[0_0_10px_var(--bl-accent-secondary)]' : isMeta ? 'bg-[var(--bl-ink-subtle)]' : 'bg-[var(--bl-ink)]';
  const textColor = highlight ? 'text-[var(--bl-ink)] font-bold' : isMeta ? 'text-[var(--bl-ink-muted)]' : 'text-[var(--bl-ink)]';

  return (
    <div className="flex items-center gap-4 font-mono text-[10px] uppercase">
       <div className={`w-8 text-right ${highlight ? 'text-[var(--bl-accent-secondary)] font-bold' : 'text-[var(--bl-ink-muted)]'}`}>{speed}</div>
       <div className="flex-1 h-1 bg-[var(--bl-surface-2)] rounded-full overflow-hidden">
         <div className={`h-full ${barColor}`} style={{ width: `${(speed / 250) * 100}%` }}></div>
       </div>
       <div className={`w-32 truncate ${textColor}`}>
         {isMeta ? `[META] ${name}` : name}
       </div>
    </div>
  );
}
