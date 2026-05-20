"use client";

import React, { useState } from "react";
import { Plus, Search, Zap, Layers, Trash2, Crosshair, Users, ArrowRight, Save, UploadCloud, DownloadCloud, BarChart2, Tag, ChevronDown } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import Link from "next/link";
import { FormatChecklist } from "@/components/builder/FormatChecklist";
import { QuickTeamNotes } from "@/components/builder/QuickTeamNotes";

export default function RedCoreBuilder() {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [teamName, setTeamName] = useState("Tailwind Hyper Offense");
  
  // Use MOCK_POKEMON but fix the Urshifu URL if needed, and ensure exactly 6 slots
  const team = [...MOCK_POKEMON].map(p => {
    if (p.name === "Urshifu") {
      return { ...p, spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png" };
    }
    return p;
  });
  
  const activePokemon = team[selectedSlot];

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
      
      {/* 1. TEAM HEADER (Refined with Settings) */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8 border-b border-[var(--rc-border-soft)] pb-8 kadex-page-hero">
        <div className="space-y-4 flex-1 w-full">
           {/* Top Metadata Rail */}
           <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-primary)] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-sm cursor-pointer hover:opacity-90 transition-all">
                VGC 2024 REG G <ChevronDown size={12} strokeWidth={3} />
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-[var(--rc-border-strong)] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-secondary)] shadow-sm cursor-pointer hover:border-[var(--rc-text-primary)] transition-all">
                Format: Doubles <ChevronDown size={12} strokeWidth={3} />
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-amber-700 shadow-sm cursor-pointer hover:border-amber-400 transition-all">
                Style: Hyper Offense <ChevronDown size={12} strokeWidth={3} />
              </div>
           </div>

           {/* Editable Team Name */}
           <div className="relative group max-w-2xl">
             <input 
               type="text" 
               value={teamName}
               onChange={(e) => setTeamName(e.target.value)}
               className="text-4xl lg:text-5xl font-black text-[var(--rc-text-primary)] tracking-tighter italic uppercase bg-transparent border-none outline-none focus:ring-0 w-full p-0 m-0"
             />
             <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[var(--rc-accent-primary)] opacity-0 group-focus-within:opacity-100 transition-opacity" />
           </div>

           {/* Team Tags */}
           <div className="flex flex-wrap items-center gap-2 pt-2">
             <Tag size={14} className="text-[var(--rc-text-muted)] mr-1" />
             <span className="px-2.5 py-1 bg-white shadow-sm text-[9px] font-black text-[var(--rc-text-secondary)] rounded-md uppercase tracking-widest border border-[var(--rc-border-soft)]">Tailwind</span>
             <span className="px-2.5 py-1 bg-white shadow-sm text-[9px] font-black text-[var(--rc-text-secondary)] rounded-md uppercase tracking-widest border border-[var(--rc-border-soft)]">Speed Control</span>
             <span className="px-2.5 py-1 bg-white shadow-sm text-[9px] font-black text-[var(--rc-text-secondary)] rounded-md uppercase tracking-widest border border-[var(--rc-border-soft)]">Fairy Core</span>
             <button className="text-[9px] font-black text-[var(--rc-accent-primary)] uppercase tracking-widest ml-2 hover:underline flex items-center gap-1"><Plus size={12} /> Add Tag</button>
           </div>
        </div>

        <div className="flex flex-wrap gap-3 xl:pt-4">
           <button className="px-6 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all shadow-sm active:scale-95 flex items-center gap-2">
             <UploadCloud size={14} /> Import
           </button>
           <button className="px-6 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all shadow-sm active:scale-95 flex items-center gap-2">
             <DownloadCloud size={14} /> Export
           </button>
           <Link href="/analyzer" className="px-6 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:border-[var(--rc-accent-primary)] hover:text-[var(--rc-accent-primary)] transition-all shadow-sm active:scale-95 flex items-center gap-2">
             <BarChart2 size={14} /> Analyze
           </Link>
           <button className="rc-btn-primary px-8 py-3 text-[10px] uppercase tracking-widest active:scale-95 flex items-center gap-2">
             <Save size={14} /> Save Team
           </button>
        </div>
      </div>


      {/* 2. CURRENT FORMATION PANEL (Refined & Compact) */}
      <section className="rc-card bg-white overflow-hidden p-1 shadow-[var(--rc-shadow-card)] mb-12">
         <div className="flex items-center justify-between p-5 pb-3">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-[var(--rc-accent-primary)]" />
              <h2 className="text-xs font-black uppercase tracking-widest text-[var(--rc-text-primary)]">Current Formation</h2>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] hover:text-[var(--rc-accent-primary)] transition-colors flex items-center gap-2 group">
              Manage Roster <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-2">
            {team.map((p, i) => {
              const isActive = selectedSlot === i;
              const safeTypes = p && Array.isArray(p.types) ? p.types : [];
              
              return (
                <button 
                  key={i}
                  onClick={() => setSelectedSlot(i)}
                  className={`relative aspect-[4/4.5] group flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all overflow-hidden ${
                    isActive 
                      ? 'bg-white border-[var(--rc-accent-primary)] shadow-lg shadow-[var(--rc-accent-soft)]' 
                      : 'bg-[var(--rc-bg-muted)]/30 border-transparent hover:border-[var(--rc-border-strong)] hover:bg-white'
                  }`}
                >
                  <div className={`absolute top-2 left-3 font-mono text-[9px] font-bold ${isActive ? 'text-[var(--rc-accent-primary)]' : 'text-[var(--rc-text-muted)]'}`}>0{i+1}</div>
                  
                  {p ? (
                    <>
                      <img 
                        src={p.spriteUrl} 
                        alt={p.name} 
                        className={`w-20 h-20 object-contain transition-transform duration-500 drop-shadow-md ${isActive ? 'scale-110 rotate-2' : 'group-hover:scale-105'}`} 
                      />
                      <div className="mt-3 w-full text-center">
                        <div className={`text-[10px] font-black uppercase tracking-tight truncate px-1 ${isActive ? 'text-[var(--rc-text-primary)]' : 'text-[var(--rc-text-secondary)]'}`}>{p.name}</div>
                        <div className="flex justify-center gap-1 mt-1.5 opacity-80 flex-wrap px-1">
                          {safeTypes.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-[var(--rc-text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
                      <Plus size={20} strokeWidth={3} />
                      <span className="text-[9px] font-black uppercase tracking-widest">Assign</span>
                    </div>
                  )}
                </button>
              );
            })}
         </div>
      </section>

      {/* 3. WORKSPACE GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        
        {/* CENTER-LEFT: Editor Workspace (Spans 3 cols) */}
        <div className="xl:col-span-3 bg-white border border-[var(--rc-border-soft)] rounded-[32px] shadow-[var(--rc-shadow-card)] flex flex-col overflow-hidden relative">
          {activePokemon ? (
            <>
              {/* Background Accent Gradient */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[var(--rc-accent-soft)] to-transparent opacity-40 -mr-48 -mt-48 pointer-events-none" />

              {/* Editor Header */}
              <div className="p-8 lg:p-10 border-b border-[var(--rc-border-soft)] flex flex-col md:flex-row gap-10 items-end bg-[var(--rc-bg-app)]/30 backdrop-blur-sm relative z-10">
                 <div className="w-40 h-40 bg-white border border-[var(--rc-border-strong)] rounded-3xl flex items-center justify-center shadow-xl shrink-0 relative group">
                   <img src={activePokemon.spriteUrl} alt={activePokemon.name} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" />
                   <div className="absolute -bottom-3 right-3 flex gap-2">
                     {(activePokemon.types || []).map(t => <TypeBadge key={t} type={t} size="sm" />)}
                   </div>
                 </div>
                 <div className="flex-1 pb-2">
                   <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 bg-[var(--rc-accent-primary)] text-white text-[9px] font-black rounded uppercase tracking-[0.2em] shadow-lg shadow-[var(--rc-accent-glow)]">Editing Mode</span>
                      <span className="text-[9px] font-mono text-[var(--rc-text-muted)] font-bold tracking-widest italic opacity-60">ID_{activePokemon.id}</span>
                   </div>
                   <h2 className="text-5xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">{activePokemon.name}</h2>
                   <div className="flex items-center gap-2 mt-4 text-[10px] font-black text-[var(--rc-text-muted)] uppercase tracking-[0.2em]">
                      Role: <span className="text-[var(--rc-accent-primary)]">{activePokemon.role}</span>
                   </div>
                 </div>
              </div>

              {/* Config Area */}
              <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                 {/* Column 1: Config & Moves */}
                 <div className="space-y-10">
                   <div className="space-y-6">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2 border-b border-[var(--rc-border-soft)] pb-3">
                       <Layers size={14} className="text-[var(--rc-accent-primary)]" /> Combat Parameters
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        <ConfigSelect label="Held Item" value="Booster Energy" />
                        <ConfigSelect label="Ability" value="Protosynthesis" />
                        <ConfigSelect label="Tera Type" value="Fairy" />
                        <ConfigSelect label="Nature" value="Timid" />
                     </div>
                   </div>

                   <div className="space-y-6">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2 border-b border-[var(--rc-border-soft)] pb-3">
                       <Crosshair size={14} className="text-[var(--rc-accent-primary)]" /> Moveset
                     </h3>
                     <div className="grid grid-cols-1 gap-2.5">
                       <MoveSlot name="Moonblast" type="Fairy" bp="95" acc="100" />
                       <MoveSlot name="Shadow Ball" type="Ghost" bp="80" acc="100" />
                       <MoveSlot name="Protect" type="Normal" bp="-" acc="-" />
                       <MoveSlot name="Dazzling Gleam" type="Fairy" bp="80" acc="100" />
                     </div>
                   </div>
                 </div>

                 {/* Column 2: Stats */}
                 <div className="space-y-8">
                    <div className="flex justify-between items-end border-b border-[var(--rc-border-soft)] pb-3">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2">
                        <Zap size={14} className="text-[var(--rc-warning)]" /> Stat Matrix
                      </h3>
                      <div className="text-[9px] font-mono font-bold text-[var(--rc-success)] uppercase tracking-widest">Optimized: 508 EVs</div>
                    </div>
                    
                    <div className="bg-[var(--rc-bg-muted)]/20 p-6 rounded-2xl space-y-5 border border-[var(--rc-border-soft)]">
                       <StatRow stat="HP" base={55} ev={4} total={131} percent={20} />
                       <StatRow stat="Atk" base={55} ev={0} total={58} percent={10} color="var(--rc-danger)" />
                       <StatRow stat="Def" base={55} ev={0} total={75} percent={15} color="var(--rc-warning)" />
                       <StatRow stat="SpA" base={135} ev={252} total={187} percent={85} highlight />
                       <StatRow stat="SpD" base={135} ev={0} total={155} percent={45} />
                       <StatRow stat="Spe" base={135} ev={252} total={205} percent={95} highlight />
                    </div>

                    <div className="flex gap-4 pt-4">
                       <button className="flex-1 rc-btn-primary py-3.5 text-[10px] uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-[var(--rc-accent-glow)]">
                         Confirm Selection
                       </button>
                       <button className="w-12 h-12 bg-white border border-[var(--rc-border-strong)] rounded-xl flex items-center justify-center text-[var(--rc-text-muted)] hover:text-[var(--rc-danger)] hover:border-[var(--rc-danger)] transition-all shadow-sm active:scale-95">
                          <Trash2 size={18} />
                       </button>
                    </div>
                 </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-20 text-center rc-animate-fade">
               <div className="w-20 h-20 bg-[var(--rc-bg-app)] border border-[var(--rc-border-soft)] rounded-full flex items-center justify-center text-[var(--rc-text-muted)] mb-6 shadow-inner">
                 <Search size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-black text-[var(--rc-text-primary)] mb-3 tracking-tight uppercase italic">No Pokémon Selected</h3>
               <p className="text-sm text-[var(--rc-text-secondary)] max-w-xs mb-8 leading-relaxed font-medium">Select a slot from your formation above to edit its technical parameters.</p>
               <button className="rc-btn-primary px-8 py-3.5 text-[10px] tracking-widest active:scale-95 shadow-xl shadow-[var(--rc-accent-glow)] uppercase font-black">
                 Search Index
               </button>
            </div>
          )}
        </div>

        {/* RIGHT: Tactical Strip (Quick Analyzer + Checklist + Notes) */}
        <div className="space-y-6">
           {/* Quick Analysis Strip */}
           <div className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-card)] space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[var(--rc-accent-primary)] text-white flex items-center justify-center">
                    <Zap size={16} />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-widest text-[var(--rc-text-primary)]">Quick Analysis</h3>
              </div>
              
              <div className="space-y-4">
                 <div className="p-4 bg-[var(--rc-bg-app)] rounded-2xl border border-[var(--rc-border-soft)]">
                    <div className="text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest mb-1">Synergy Score</div>
                    <div className="text-4xl font-black italic tracking-tighter text-[var(--rc-text-primary)]">86<span className="text-sm opacity-30">/100</span></div>
                 </div>

                 <div className="p-4 bg-[var(--rc-bg-app)] rounded-2xl border border-[var(--rc-border-soft)] space-y-3">
                    <div className="text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">Defensive Profile</div>
                    <div className="flex flex-wrap gap-1.5">
                       <TypeBadge type="Ice" size="sm" />
                       <TypeBadge type="Fairy" size="sm" />
                       <span className="text-[10px] font-bold text-[var(--rc-danger)] uppercase tracking-tighter">Critical Gaps</span>
                    </div>
                 </div>
              </div>

              <Link href="/analyzer" className="w-full py-3 bg-[var(--rc-bg-muted)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[var(--rc-border-soft)] transition-colors flex items-center justify-center gap-2">
                 View Full Analyzer <ArrowRight size={14} />
              </Link>
           </div>

           {/* Format Checklist */}
           <FormatChecklist />

           {/* Quick Team Notes */}
           <QuickTeamNotes />
        </div>

      </div>

    </div>
  );
}

function ConfigSelect({ label, value }: { label: string, value: string }) {
  return (
    <div className="group">
      <div className="text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-wider mb-2 px-1">{label}</div>
      <div className="bg-white border-2 border-[var(--rc-border-soft)] rounded-xl p-3 text-[11px] font-black text-[var(--rc-text-primary)] flex justify-between items-center cursor-pointer transition-all group-hover:border-[var(--rc-accent-primary)] group-hover:shadow-sm">
        {value}
        <span className="text-[var(--rc-text-muted)] text-[9px] group-hover:text-[var(--rc-accent-primary)] transition-colors">▼</span>
      </div>
    </div>
  );
}

function MoveSlot({ name, type, bp, acc }: { name: string, type: string, bp: string, acc: string }) {
  return (
    <div className="flex items-center gap-3 bg-white border-2 border-[var(--rc-border-soft)] p-2.5 rounded-xl hover:border-[var(--rc-accent-primary)] cursor-pointer transition-all group active:scale-[0.98]">
      <TypeBadge type={type} size="sm" />
      <span className="flex-1 text-[11px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors">{name}</span>
      <div className="flex gap-4 font-mono text-[9px] font-bold text-[var(--rc-text-muted)] opacity-60">
        <span>BP <span className="text-[var(--rc-text-primary)]">{bp}</span></span>
        <span>ACC <span className="text-[var(--rc-text-primary)]">{acc}</span></span>
      </div>
    </div>
  );
}

function StatRow({ stat, base, ev, total, percent, highlight=false, color }: { stat: string, base: number, ev: number, total: number, percent: number, highlight?: boolean, color?: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-8 text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">{stat}</div>
      <div className="w-8 text-[9px] font-mono font-bold text-[var(--rc-text-muted)] text-right opacity-30">{base}</div>
      <div className="w-12 bg-white border border-[var(--rc-border-soft)] rounded-lg py-1 text-center text-[10px] font-black text-[var(--rc-text-primary)] cursor-ns-resize group-hover:border-[var(--rc-accent-primary)] transition-colors">{ev}</div>
      <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden border border-[var(--rc-border-soft)] shadow-inner">
        <div className={`h-full rounded-full transition-all duration-1000 ${highlight ? 'bg-[var(--rc-accent-primary)]' : color || 'bg-[var(--rc-text-muted)]'}`} style={{ width: `${percent}%` }}></div>
      </div>
      <div className={`w-10 text-right text-xs font-black tracking-tighter ${highlight ? 'text-[var(--rc-accent-primary)] scale-110' : 'text-[var(--rc-text-primary)]'} transition-all`}>{total}</div>
    </div>
  );
}
