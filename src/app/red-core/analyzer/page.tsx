"use client";

import React from "react";
import { ShieldAlert, Zap, AlertCircle, Layers, ArrowRight } from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function RedCoreAnalyzer() {
  return (
    <div className="p-8 lg:p-12 max-w-6xl mx-auto space-y-12 rc-animate-slide">
      
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1 bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-10 shadow-[var(--rc-shadow-card)] relative overflow-hidden flex flex-col justify-center">
            {/* Decorative background number */}
            <div className="absolute -right-8 -bottom-12 text-[240px] font-black text-[var(--rc-bg-muted)]/50 italic tracking-tighter pointer-events-none select-none">86</div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-soft)] px-3 py-1.5 rounded-lg text-[10px] font-black text-[var(--rc-accent-primary)] mb-6 uppercase tracking-[0.2em]">
                Live Formation Health
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none mb-4">
                Tactical <br /><span className="text-[var(--rc-accent-primary)]">Assessment</span>
              </h1>
              <p className="text-[var(--rc-text-secondary)] font-medium max-w-md leading-relaxed">
                Comprehensive diagnostic of your current roster. High synergy detected, but structural vulnerabilities remain in defensive pivots.
              </p>
            </div>
        </div>

        <div className="w-full lg:w-[320px] bg-[var(--rc-accent-primary)] rounded-[32px] p-8 text-white flex flex-col items-center justify-center text-center shadow-2xl shadow-[var(--rc-accent-glow)] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
           <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Synergy Coefficient</div>
           <div className="text-8xl font-black italic tracking-tighter group-hover:scale-110 transition-transform duration-500">86</div>
           <div className="mt-6 w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
             <div className="h-full bg-white shadow-[0_0_15px_white]" style={{ width: '86%' }} />
           </div>
           <div className="mt-4 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Optimized Configuration</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
         {/* Defensive Profile */}
         <div className="space-y-8">
            <div className="flex items-center justify-between px-2 border-b border-[var(--rc-border-soft)] pb-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-primary)] flex items-center gap-2">
                 <ShieldAlert size={16} className="text-[var(--rc-danger)]"/> Structural Gaps
               </h3>
               <span className="text-[10px] font-mono font-bold text-[var(--rc-danger)] uppercase tracking-widest">High Risk Detected</span>
            </div>
            
            <div className="bg-white border border-[var(--rc-border-soft)] rounded-3xl shadow-[var(--rc-shadow-card)] overflow-hidden">
               <div className="grid grid-cols-2 p-5 bg-[var(--rc-bg-app)]/50 border-b border-[var(--rc-border-soft)] text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">
                 <div>Primary Type</div>
                 <div>Threat Level</div>
               </div>
               
               <AnalyzerRow type="Ice" count={3} severity="critical" />
               <AnalyzerRow type="Fairy" count={3} severity="critical" />
               <AnalyzerRow type="Ground" count={2} severity="warning" />
               <AnalyzerRow type="Steel" count={1} severity="normal" />
            </div>

            <div className="bg-red-50/50 border-2 border-red-100 rounded-3xl p-8 flex gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-2xl bg-red-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                <AlertCircle size={24} />
              </div>
              <div className="relative z-10">
                <div className="text-sm font-black uppercase tracking-tight text-red-700 mb-2">Critical Overlap: Landorus-T</div>
                <p className="text-sm text-red-900/80 leading-relaxed font-medium">
                  50% of your roster shares a primary weakness to <span className="font-bold underline decoration-red-400">Ice</span> and <span className="font-bold underline decoration-red-400">Fairy</span>. Fast scarf users or Tera-Ice attackers can isolate and dismantle your core.
                </p>
              </div>
            </div>
         </div>

         {/* Speed Hierarchy */}
         <div className="space-y-8">
            <div className="flex items-center justify-between px-2 border-b border-[var(--rc-border-soft)] pb-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-primary)] flex items-center gap-2">
                 <Zap size={16} className="text-[var(--rc-warning)]"/> Speed Hierarchy
               </h3>
               <span className="text-[10px] font-mono font-bold text-[var(--rc-accent-primary)] uppercase tracking-widest">Live Meta Sync</span>
            </div>

            <div className="bg-white border border-[var(--rc-border-soft)] rounded-3xl shadow-[var(--rc-shadow-card)] p-8 space-y-6">
               <SpeedRow name="Dragapult" speed={213} isMeta={true} />
               <SpeedRow name="Flutter Mane" speed={205} isMeta={false} highlight={true} />
               <SpeedRow name="Chien-Pao" speed={188} isMeta={true} />
               <SpeedRow name="Ogerpon-Wellspring" speed={178} isMeta={false} highlight={true} />
               <SpeedRow name="Urshifu-Rapid" speed={163} isMeta={true} />
               <SpeedRow name="Raging Bolt" speed={155} isMeta={false} highlight={true} />
            </div>

            <div className="bg-white border border-[var(--rc-border-soft)] rounded-3xl p-6 flex items-center justify-between shadow-[var(--rc-shadow-sm)] hover:border-[var(--rc-accent-primary)] transition-colors cursor-pointer group">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--rc-bg-muted)] flex items-center justify-center text-[var(--rc-accent-primary)] group-hover:scale-110 transition-transform">
                     <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-tight text-[var(--rc-text-primary)]">Advanced Speed Control</div>
                    <div className="text-[10px] font-bold text-[var(--rc-text-muted)]">Check Tailwind and Icy Wind interactions</div>
                  </div>
               </div>
               <ArrowRight size={18} className="text-[var(--rc-text-muted)] group-hover:text-[var(--rc-accent-primary)] transition-colors" />
            </div>
         </div>

      </div>
    </div>
  );
}

function AnalyzerRow({ type, count, severity }: { type: string, count: number, severity: 'critical' | 'warning' | 'normal' }) {
  const colorClass = severity === 'critical' ? 'text-[var(--rc-danger)]' : severity === 'warning' ? 'text-[var(--rc-warning)]' : 'text-[var(--rc-text-primary)]';
  const bgClass = severity === 'critical' ? 'bg-red-500' : severity === 'warning' ? 'bg-orange-500' : 'bg-[var(--rc-text-muted)]';
  
  return (
    <div className="grid grid-cols-2 p-5 border-b border-[var(--rc-border-soft)] items-center last:border-0 bg-white hover:bg-[var(--rc-bg-app)]/50 transition-colors group">
      <div><TypeBadge type={type} size="sm" /></div>
      <div className={`font-black text-xs uppercase tracking-tight ${colorClass} flex items-center gap-3`}>
        <div className={`w-2 h-2 rounded-full ${bgClass} ${severity === 'critical' ? 'animate-pulse shadow-[0_0_8px_currentColor]' : ''}`} />
        {count}x Weak
      </div>
    </div>
  );
}

function SpeedRow({ name, speed, isMeta, highlight = false }: { name: string, speed: number, isMeta: boolean, highlight?: boolean }) {
  const barColor = highlight ? 'bg-[var(--rc-accent-primary)]' : isMeta ? 'bg-[var(--rc-border-strong)]' : 'bg-[var(--rc-text-muted)]';
  const textColor = highlight ? 'text-[var(--rc-text-primary)] font-black italic underline decoration-[var(--rc-accent-soft)] decoration-2' : isMeta ? 'text-[var(--rc-text-muted)] font-bold' : 'text-[var(--rc-text-secondary)] font-medium';

  return (
    <div className="flex items-center gap-6 group">
       <div className={`w-10 text-right font-mono text-[10px] font-black ${highlight ? 'text-[var(--rc-accent-primary)]' : 'text-[var(--rc-text-muted)]'}`}>{speed}</div>
       <div className="flex-1 h-1.5 bg-[var(--rc-bg-muted)] rounded-full overflow-hidden shadow-inner relative">
         <div className={`h-full ${barColor} rounded-full transition-all duration-1000 group-hover:scale-y-125`} style={{ width: `${(speed / 250) * 100}%` }}></div>
       </div>
       <div className={`w-44 truncate text-[10px] uppercase tracking-widest ${textColor}`}>
         {isMeta ? `[META] ${name}` : name}
       </div>
    </div>
  );
}
