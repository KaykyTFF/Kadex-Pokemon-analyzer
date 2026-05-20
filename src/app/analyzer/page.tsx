"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  ShieldAlert, 
  Zap, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sword, 
  Activity,
  Plus
} from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { 
  TEAM_WEAKNESSES, 
  FIX_POKEMON, 
  FIX_REPLACEMENTS, 
  FIX_MOVES 
} from "@/data/mock/analyzerWeaknesses";
import { TeamMemberInsightPanel } from "@/components/analyzer/TeamMemberInsightPanel";

// --- 1. AUDITED TACTICAL DATA (Inlined for zero-import failure) ---
const tacticalData = {
  header: {
    teamName: "Tailwind Hyper Offense",
    format: "VGC 2024 Reg G",
    playstyle: "Hyper Offense",
  },
  scores: { overall: 82, offense: "High", defense: "Medium", speed: "Good" },
  summary: "Alta pressão ofensiva e bom controle de velocidade, mas com riscos defensivos claros contra Ground e Trick Room.",
  priorities: [
    { num: "01", title: "Ground pressure is dangerous", impact: "High", action: "Add Ground immunity or stronger resist.", color: "danger" as "danger" },
    { num: "02", title: "Trick Room instability", impact: "Medium", action: "Add denial or slower mode.", color: "warning" as "warning" },
    { num: "03", title: "Water resist is limited", impact: "Medium", action: "Consider a stable defensive answer.", color: "warning" as "warning" }
  ],
  weaknesses: [
    { type: "Ground", label: "High Risk", color: "danger" as "danger" },
    { type: "Ice", label: "High Risk", color: "danger" as "danger" },
    { type: "Fairy", label: "Medium", color: "warning" as "warning" }
  ],
  resistances: ["Grass", "Electric", "Dark", "Fairy"],
  strongInto: ["Dragon", "Dark", "Fighting", "Water"],
  threats: [
    { name: "Miraidon", level: "High", reason: "Electric Terrain + special pressure", answer: "Partial (Rillaboom needed)" },
    { name: "Calyrex-Shadow", level: "High", reason: "Speed + spread pressure", answer: "Weak" },
    { name: "Incineroar", level: "Medium", reason: "Fake Out + Intimidate cycle", answer: "Manageable" }
  ],
  nextActions: [
    "Add a Ground immunity",
    "Test Trick Room matchup",
    "Add secondary speed control",
    "Review Water defensive answer"
  ]
};

const teamSprites = [
  { name: "Flutter Mane", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png", types: ["Ghost", "Fairy"] },
  { name: "Koraidon", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png", types: ["Fighting", "Dragon"] },
  { name: "Rillaboom", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png", types: ["Grass"] },
  { name: "Incineroar", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png", types: ["Fire", "Dark"] },
  { name: "Urshifu", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png", types: ["Fighting", "Water"] },
  { name: "Amoonguss", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png", types: ["Grass", "Poison"] }
];

// --- 2. LOCAL SUB-COMPONENTS (Audited & Safe) ---

function TacticalMeter({ icon, label, status, color }: { icon: React.ReactNode, label: string, status: string, color: 'success' | 'warning' | 'danger' }) {
  const colorClass = color === 'success' ? 'text-emerald-600' : color === 'warning' ? 'text-amber-600' : 'text-red-600';
  return (
    <div className="space-y-1">
      <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] flex items-center gap-1.5">{icon} {label}</div>
      <div className={`text-sm font-black uppercase tracking-widest ${colorClass}`}>{status}</div>
    </div>
  );
}

function SuggestionHeader({ title, icon }: { title: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-[var(--rc-border-soft)] pb-4 mb-6">
      <div className="text-[var(--rc-accent-primary)]">{icon}</div>
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">{title}</h2>
    </div>
  );
}

function ConfidenceBadge({ level }: { level: string }) {
  const colors = {
    High: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Medium: "bg-amber-50 text-amber-700 border-amber-100",
    Low: "bg-slate-50 text-slate-700 border-slate-100"
  };
  const color = colors[level as keyof typeof colors] || colors.Low;
  return (
    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${color}`}>
      Confidence: {level}
    </span>
  );
}

// --- 3. MAIN ANALYZER COMPONENT (CLIENT COMPONENT) ---
export default function RedCoreAnalyzer() {
  const [selectedPokemonSlug, setSelectedPokemonSlug] = useState<string | null>("flutter-mane");
  const [lastValidSlug, setLastValidSlug] = useState<string>("flutter-mane");

  // Toggle selection: if clicking the same, close it.
  const handlePokemonClick = (slug: string) => {
    if (selectedPokemonSlug === slug) {
      setSelectedPokemonSlug(null);
    } else {
      setSelectedPokemonSlug(slug);
      setLastValidSlug(slug);
    }
  };
  
  // Safe Mappings
  const priorities = tacticalData.priorities || [];
  const weaknesses = tacticalData.weaknesses || [];
  const resistances = tacticalData.resistances || [];
  const strongInto = tacticalData.strongInto || [];
  const threats = tacticalData.threats || [];
  const team = teamSprites || [];
  const nextActions = tacticalData.nextActions || [];

  return (
    <div className="kadex-page-container rc-animate-fade pb-32 min-h-screen">
      
      {/* 1. HEADER SECTION (Directly on background) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--rc-border-soft)] pb-6 kadex-page-hero">
         <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[var(--rc-accent-primary)] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Tactical Analysis</span>
              <span className="text-[10px] font-black text-[var(--rc-success)] uppercase tracking-widest px-2 border-l border-[var(--rc-border-strong)] flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--rc-success)] animate-pulse" />
                Ready
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">{tacticalData.header.teamName}</h1>
            <div className="flex items-center gap-3 text-xs font-bold text-[var(--rc-text-secondary)] uppercase tracking-widest mt-4">
              <span>{tacticalData.header.format}</span>
              <span className="text-[var(--rc-border-strong)]">•</span>
              <span className="text-[var(--rc-accent-secondary)]">{tacticalData.header.playstyle}</span>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <Link href="/builder" className="px-6 py-2.5 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all flex items-center gap-2 shadow-sm"><ArrowLeft size={14} /> Back</Link>
         </div>
      </div>

      {/* 2. TEAM SNAPSHOT (Compact Integrated Rail) */}
      <section className="bg-white/40 backdrop-blur-md border border-[var(--rc-border-soft)] rounded-3xl py-3 px-4 shadow-sm flex items-center min-h-[80px]">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full items-center">
            {team.map((p, i) => {
              const slug = p.name.toLowerCase().replace(/\s+/g, '-');
              const isSelected = selectedPokemonSlug === slug;
              
              return (
                <button 
                  key={i}
                  onClick={() => handlePokemonClick(slug)}
                  className={`flex items-center gap-3 p-2.5 rounded-[20px] transition-all border-2 text-left relative group h-full ${
                    isSelected 
                      ? 'bg-white border-[var(--rc-accent-primary)] shadow-sm scale-[1.01] z-10' 
                      : 'bg-transparent border-transparent hover:bg-white/80 hover:border-[var(--rc-border-strong)]'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-red-50' : 'bg-white/80 border border-[var(--rc-border-soft)]'
                  }`}>
                    <img src={p.url} alt={p.name} className="w-9 h-9 object-contain transition-transform group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <div className={`text-[10px] font-black uppercase tracking-tight truncate ${isSelected ? 'text-[var(--rc-accent-primary)]' : 'text-[var(--rc-text-primary)]'}`}>{p.name}</div>
                    <div className="flex gap-1 mt-0.5">
                      {p.types?.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                    </div>
                  </div>
                </button>
              );
            })}
         </div>
      </section>

      <div className="space-y-16">
        
        {/* 1. SELECTED POKEMON INSIGHT */}
        <div className={`transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden ${selectedPokemonSlug ? 'max-h-[4000px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
          <div className="pb-8">
            <TeamMemberInsightPanel slug={selectedPokemonSlug || lastValidSlug} />
          </div>
        </div>

        
        {/* 2. ANALYSIS SUMMARY (GLASS) */}
        <section className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="md:w-72 bg-[var(--rc-accent-primary)] rounded-[32px] p-8 text-white flex flex-col items-center justify-center text-center shadow-xl shadow-[var(--rc-accent-glow)] shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Team Score</div>
              <div className="text-8xl font-black italic tracking-tighter drop-shadow-md mb-2">{tacticalData.scores.overall}<span className="text-4xl opacity-50">/100</span></div>
              <div className="mt-4 bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border border-white/30">
                Strong but Risky
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white/80 backdrop-blur-md border border-white/60 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
             <p className="text-lg font-medium text-[var(--rc-text-primary)] leading-relaxed italic border-l-4 border-[var(--rc-accent-primary)] pl-6 mb-8">
                {tacticalData.summary}
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[var(--rc-border-soft)]">
                <TacticalMeter icon={<Sword size={14} />} label="Offense" status={tacticalData.scores.offense} color="success" />
                <TacticalMeter icon={<ShieldAlert size={14} />} label="Defense" status={tacticalData.scores.defense} color="warning" />
                <TacticalMeter icon={<Zap size={14} />} label="Speed" status={tacticalData.scores.speed} color="success" />
                <TacticalMeter icon={<Activity size={14} />} label="Consistency" status="Risky" color="danger" />
             </div>
          </div>
        </section>

        {/* 2. PRIORITY FIXES (GLASS) */}
        <section className="space-y-6">
           <div className="flex items-center gap-3 border-b border-[var(--rc-border-soft)] pb-4">
             <AlertCircle className="text-[var(--rc-danger)]" size={20} />
             <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">Priority Fixes</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {priorities.map((p, idx) => (
                <div key={idx} className={`bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-all border-l-4 ${p.color === 'danger' ? 'border-l-red-500' : 'border-l-amber-500'}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-black text-slate-200/50 italic tracking-tighter transition-opacity">{p.num}</div>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${p.color === 'danger' ? 'bg-red-50/50 text-red-700 border-red-100/50' : 'bg-amber-50/50 text-amber-700 border-amber-100/50'}`}>
                        Impact: {p.impact}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-[var(--rc-text-primary)] uppercase tracking-tight mb-3 leading-tight">{p.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-medium text-[var(--rc-text-secondary)] leading-relaxed">
                      {p.color === 'danger' ? 'Your team has limited safe switches into this pressure.' : 'The team relies heavily on specific advantages that can be countered.'}
                    </p>
                    <div className="p-3 bg-white/40 rounded-xl border border-white/20">
                      <span className="font-black text-[var(--rc-text-primary)] uppercase text-[9px] tracking-widest block mb-1">Recommended Action</span>
                      <span className="text-xs font-bold text-[var(--rc-accent-primary)]">{p.action}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* 3. TEAM WEAKNESSES (GLASS) */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 border-b border-[var(--rc-border-soft)] pb-4">
             <ShieldAlert className="text-[var(--rc-danger)]" size={20} />
             <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">Team Weaknesses</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TEAM_WEAKNESSES.map((w, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md border border-white/60 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`}>
                    <Target size={96} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <TypeBadge type={w.type} size="md" />
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                      w.impact === 'High' ? 'bg-red-50/50 text-red-600 border-red-100/50' : 'bg-amber-50/50 text-amber-600 border-amber-100/50'
                    }`}>
                      Impact: {w.impact}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[var(--rc-text-primary)] tracking-tight uppercase mb-4">{w.title}</h3>
                  
                  <div className="mb-6">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] mb-2">Affected Pokémon:</div>
                    <div className="flex flex-wrap gap-2">
                      {w.affected.map(p => (
                        <span key={p} className="text-[10px] font-bold text-[var(--rc-text-primary)] bg-white/40 px-2 py-1 rounded-lg border border-white/20">{p}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-medium text-[var(--rc-text-secondary)] leading-relaxed italic border-l-2 border-[var(--rc-border-soft)] pl-4 mb-8">
                    "{w.why}"
                  </p>

                  <div className="mt-auto">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] mb-3">Needs:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {w.needs.map(n => (
                        <span key={n} className="text-[9px] font-black uppercase text-[var(--rc-text-primary)] bg-white/60 border border-white/80 px-2.5 py-1 rounded-md shadow-sm">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* 4. HOW TO FIX (GLASS) */}
        <section className="space-y-12">
           <div className="flex items-center gap-3 border-b border-[var(--rc-border-soft)] pb-4">
             <CheckCircle2 className="text-[var(--rc-success)]" size={20} />
             <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">How to Fix</h2>
           </div>

           <div className="space-y-16">
              {/* Add or Test Pokémon */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2">
                  <Plus size={14} /> Add or Test Pokémon
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {FIX_POKEMON.map((p, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 shadow-sm hover:border-[var(--rc-accent-primary)] transition-all flex flex-col group">
                      <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <img src={p.sprite} alt={p.name} className="w-14 h-14 object-contain" />
                      </div>
                      <h4 className="text-sm font-black text-[var(--rc-text-primary)] uppercase tracking-tight mb-2">{p.name}</h4>
                      <div className="flex gap-1 mb-4">
                        {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                      </div>
                      <div className="space-y-2 mt-auto">
                        <div className="text-[8px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] mb-1">Helps with:</div>
                        <div className="flex flex-wrap gap-1">
                          {p.helps.map(h => (
                            <span key={h} className="text-[8px] font-bold text-[var(--rc-accent-primary)] bg-[var(--rc-accent-soft)] px-2 py-0.5 rounded-md uppercase">{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Possible Replacements */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2">
                  <Activity size={14} /> Possible Replacements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FIX_REPLACEMENTS.map((s, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 shadow-sm flex flex-col hover:border-[var(--rc-accent-primary)]/40 transition-all">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center border border-white/20">
                            <img src={s.outSprite} alt={s.out} className="w-12 h-12 object-contain grayscale opacity-40" />
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.out}</span>
                        </div>
                        <ArrowRight size={24} className="text-[var(--rc-border-strong)]" />
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-14 h-14 bg-red-50/50 rounded-2xl flex items-center justify-center border border-red-100 shadow-sm">
                            <img src={s.inSprite} alt={s.in} className="w-12 h-12 object-contain" />
                          </div>
                          <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">{s.in}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100/50">
                          <span className="text-[9px] font-black uppercase text-emerald-700 block mb-3">Gain</span>
                          <div className="flex flex-col gap-2">
                            {s.gains.map(g => (
                              <span key={g} className="text-[9px] font-bold text-emerald-800 flex items-center gap-2">
                                <CheckCircle2 size={10} className="text-emerald-500" /> {g}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 bg-red-50/40 rounded-2xl border border-red-100/50">
                          <span className="text-[9px] font-black uppercase text-red-700 block mb-3">Lose</span>
                          <div className="flex flex-col gap-2">
                            {s.loses.map(l => (
                              <span key={l} className="text-[9px] font-bold text-red-800 flex items-center gap-2">
                                <AlertCircle size={10} className="text-red-400" /> {l}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Moves */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--rc-text-muted)] flex items-center gap-2">
                  <Sword size={14} /> Coverage Moves
                </h3>
                <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-[32px] overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead className="bg-white/40 border-b border-white/20">
                        <tr>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Pokémon</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Recommended Move</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Helps against</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Replace</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {FIX_MOVES.map((m, i) => (
                          <tr key={i} className="hover:bg-white/30 transition-colors">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                                  <img src={m.pokemonSprite} alt={m.pokemon} className="w-8 h-8 object-contain" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-tight text-[var(--rc-text-primary)]">{m.pokemon}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <TypeBadge type={m.type} size="sm" />
                                <span className="text-sm font-black text-red-600 uppercase italic tracking-tighter">{m.move}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-xs font-bold text-[var(--rc-text-primary)] bg-white/40 px-3 py-1 rounded-lg border border-white/20">
                                {m.helps}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              {m.replace ? (
                                <span className="text-[10px] font-medium text-[var(--rc-text-secondary)] italic">
                                  "{m.replace}"
                                </span>
                              ) : (
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">N/A</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* 5. TEAM STRENGTHS */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 border-b border-[var(--rc-border-soft)] pb-4">
             <TrendingUp className="text-[var(--rc-success)]" size={20} />
             <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">Team Strengths</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-800 mb-2">Speed Control</h4>
                  <p className="text-xs font-medium text-emerald-700/80 leading-relaxed">Tailwind and Icy Wind give the team strong tempo control and positioning advantage.</p>
                </div>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sword size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-800 mb-2">Offensive Pressure</h4>
                  <p className="text-xs font-medium text-emerald-700/80 leading-relaxed">Flutter Mane and Koraidon apply immediate and overwhelming offensive pressure.</p>
                </div>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-800 mb-2">Support Core</h4>
                  <p className="text-xs font-medium text-emerald-700/80 leading-relaxed">Incineroar, Rillaboom and Amoonguss provide essential defensive utility and redirection.</p>
                </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}
