"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShieldAlert, Zap, AlertCircle, ArrowRight, CheckCircle2, Swords, Target, Plus } from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { TEAM_INSIGHTS, PokemonInsight } from "@/data/mock/analyzerTeamInsights";

interface TeamMemberInsightPanelProps {
  slug: string;
}

export function TeamMemberInsightPanel({ slug }: TeamMemberInsightPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Safe lookup
  const insight = TEAM_INSIGHTS.find(p => p.slug === slug);

  if (!slug) {
    return null;
  }

  if (!insight) {
    return (
      <div className="bg-[var(--rc-bg-muted)]/30 border border-dashed border-[var(--rc-border-strong)] rounded-3xl p-8 text-center rc-animate-fade mt-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">
          Selecione um Pokémon para ver os detalhes táticos.
        </p>
      </div>
    );
  }

  // Safe arrays
  const types = Array.isArray(insight.types) ? insight.types : [];
  const recommendedMoves = Array.isArray(insight.recommendedMoves) ? insight.recommendedMoves : [];
  const alternativeItems = Array.isArray(insight.alternativeItems) ? insight.alternativeItems : [];
  const alternativeTeras = Array.isArray(insight.alternativeTeraTypes) ? insight.alternativeTeraTypes : [];
  const strengths = Array.isArray(insight.strengths) ? insight.strengths : [];
  const concerns = Array.isArray(insight.concerns) ? insight.concerns : [];
  const adjustments = Array.isArray(insight.adjustments) ? insight.adjustments : [];
  const alternatives = Array.isArray(insight.alternatives) ? insight.alternatives : [];

  return (
    <div className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] shadow-[var(--rc-shadow-card)] overflow-hidden transition-all mt-6 rc-animate-slide">
      
      {/* HEADER (Always visible) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[var(--rc-bg-muted)]/50 to-transparent border-b border-[var(--rc-border-soft)] hover:bg-[var(--rc-bg-muted)] transition-colors text-left outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rc-accent-primary)]/30 focus-visible:ring-offset-0"
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[var(--rc-border-soft)] shrink-0">
            <img src={insight.sprite} alt={insight.name} className="w-14 h-14 object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-black uppercase italic tracking-tight text-[var(--rc-text-primary)]">{insight.name}</h3>
              <div className="flex gap-1">
                {types.map((t, i) => <TypeBadge key={i} type={t} size="sm" />)}
              </div>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)]">
              {insight.role}
            </div>
          </div>
        </div>
        <div className="text-[var(--rc-text-muted)] p-2">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {/* EXPANDABLE CONTENT */}
      {isExpanded && (
        <div className="p-6 md:p-8 space-y-10 rc-animate-fade">
          
          {/* 1. CURRENT BUILD & SUMMARY */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <p className="text-sm font-medium text-[var(--rc-text-secondary)] leading-relaxed italic border-l-2 border-[var(--rc-accent-primary)]/30 pl-4">
                "{insight.summary}"
              </p>
              
              <div className="bg-[var(--rc-bg-muted)]/30 rounded-2xl p-5 border border-[var(--rc-border-soft)] space-y-3">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] mb-3">Current Build</h4>
                <div className="flex justify-between items-center border-b border-[var(--rc-border-soft)] pb-2">
                  <span className="text-[10px] font-bold text-[var(--rc-text-secondary)] uppercase">Ability</span>
                  <span className="text-xs font-black text-[var(--rc-text-primary)]">{insight.ability}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[var(--rc-border-soft)] pb-2">
                  <span className="text-[10px] font-bold text-[var(--rc-text-secondary)] uppercase">Item</span>
                  <span className="text-xs font-black text-[var(--rc-text-primary)]">{insight.item}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[var(--rc-border-soft)] pb-2">
                  <span className="text-[10px] font-bold text-[var(--rc-text-secondary)] uppercase">Tera Type</span>
                  <TypeBadge type={insight.teraType} size="sm" />
                </div>
                <div className="flex justify-between items-center border-b border-[var(--rc-border-soft)] pb-2">
                  <span className="text-[10px] font-bold text-[var(--rc-text-secondary)] uppercase">Nature</span>
                  <span className="text-xs font-black text-[var(--rc-text-primary)]">{insight.nature}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[10px] font-bold text-[var(--rc-text-secondary)] uppercase">EV Spread</span>
                  <span className="text-[10px] font-mono font-bold text-[var(--rc-text-primary)]">{insight.evSpread}</span>
                </div>
              </div>
            </div>

            {/* 2. RECOMMENDED MOVES */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)] flex items-center gap-2">
                <Swords size={14} className="text-[var(--rc-accent-primary)]" />
                Recommended Moves
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {recommendedMoves.map((move, idx) => (
                  <div key={idx} className="p-4 border border-[var(--rc-border-soft)] rounded-2xl bg-white hover:border-[var(--rc-border-strong)] hover:shadow-sm transition-all flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <TypeBadge type={move.type} size="sm" />
                        <span className="text-xs font-black uppercase tracking-tight text-[var(--rc-text-primary)]">{move.name}</span>
                      </div>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${
                        move.priority === 'Core' ? 'bg-red-50 text-red-700 border-red-100' : 
                        move.priority === 'Recommended' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                        'bg-slate-50 text-slate-500 border-slate-200'
                      }`}>
                        {move.priority}
                      </span>
                    </div>
                    <p className="text-[10px] font-medium text-[var(--rc-text-secondary)] leading-snug">{move.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[var(--rc-border-soft)]">
            
            {/* 3. ALTERNATIVES */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)] flex items-center gap-2">
                <Target size={14} className="text-[var(--rc-accent-primary)]" />
                Alternatives
              </h4>
              <div className="space-y-3">
                <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] border-b border-[var(--rc-border-soft)] pb-1">Items</div>
                {alternativeItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-[var(--rc-text-primary)]">{item.name}</span>
                    <span className="text-[10px] font-medium text-[var(--rc-text-secondary)] leading-tight">{item.reason}</span>
                  </div>
                ))}
                
                <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] border-b border-[var(--rc-border-soft)] pb-1 mt-4">Tera Types</div>
                {alternativeTeras.map((tera, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center"><TypeBadge type={tera.type} size="sm" /></div>
                    <span className="text-[10px] font-medium text-[var(--rc-text-secondary)] leading-tight">{tera.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. STRENGTHS & CONCERNS */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)] flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                Tactical Profile
              </h4>
              <div className="space-y-4">
                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-2">
                  <div className="text-[9px] font-black uppercase tracking-widest text-emerald-700 flex items-center gap-1.5"><CheckCircle2 size={12} /> Strengths</div>
                  <ul className="space-y-1">
                    {strengths.map((s, i) => (
                      <li key={i} className="text-[10px] font-bold text-emerald-800 flex items-start gap-1.5">
                        <span className="mt-0.5">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50/30 p-4 rounded-xl border border-red-100 space-y-2">
                  <div className="text-[9px] font-black uppercase tracking-widest text-red-700 flex items-center gap-1.5"><ShieldAlert size={12} /> Concerns</div>
                  <ul className="space-y-1">
                    {concerns.map((c, i) => (
                      <li key={i} className="text-[10px] font-bold text-red-800 flex items-start gap-1.5">
                        <span className="mt-0.5">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. TEAM ADJUSTMENTS */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)] flex items-center gap-2">
                <ArrowRight size={14} className="text-[var(--rc-accent-primary)]" />
                Team Adjustments
              </h4>
              <div className="space-y-2">
                {adjustments.map((adj, i) => (
                  <div key={i} className="p-3 bg-white border border-[var(--rc-border-soft)] rounded-xl flex items-start gap-3 shadow-sm hover:border-[var(--rc-border-strong)] transition-colors">
                    <div className="w-5 h-5 bg-[var(--rc-bg-muted)] text-[var(--rc-text-muted)] rounded flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">{i + 1}</div>
                    <p className="text-[11px] font-medium text-[var(--rc-text-primary)] leading-snug">{adj}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* 6. ALTERNATIVE POKEMON */}
          {alternatives.length > 0 && (
            <div className="pt-10 border-t border-[var(--rc-border-soft)] space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--rc-text-primary)] flex items-center gap-2">
                <Plus size={14} className="text-[var(--rc-accent-primary)]" />
                Alternative Pokémon
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((alt, i) => (
                  <div key={i} className="bg-[var(--rc-bg-muted)]/30 border border-[var(--rc-border-soft)] rounded-3xl p-6 hover:border-[var(--rc-accent-primary)]/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-[var(--rc-border-soft)] shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                        <img src={alt.sprite} alt={alt.name} className="w-10 h-10 object-contain" />
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-[var(--rc-text-primary)] uppercase tracking-tight">{alt.name}</h5>
                        <div className="flex gap-1 mt-1">
                          {Array.isArray(alt.types) && alt.types.map(t => (
                            <TypeBadge key={t} type={t} size="sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-[8px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] mb-1">{alt.role}</div>
                        <p className="text-[10px] font-medium text-[var(--rc-text-secondary)] leading-relaxed italic">"{alt.why}"</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase text-emerald-600">Gains</span>
                          <div className="flex flex-col gap-0.5">
                            {Array.isArray(alt.gains) && alt.gains.map(g => (
                              <span key={g} className="text-[8px] font-bold text-emerald-800 flex items-center gap-1">
                                <CheckCircle2 size={8} /> {g}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase text-red-600">Loses</span>
                          <div className="flex flex-col gap-0.5">
                            {Array.isArray(alt.loses) && alt.loses.map(l => (
                              <span key={l} className="text-[8px] font-bold text-red-800 flex items-center gap-1">
                                <AlertCircle size={8} /> {l}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
