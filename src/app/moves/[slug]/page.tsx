"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, ShieldAlert, Zap, Target, BookOpen, ChevronRight, 
  LayoutDashboard, Database, Swords, Shield, Info, Activity, 
  Layers, Crosshair, Users, RotateCcw, Filter, Star
} from "lucide-react";
import { MOCK_MOVE_DETAILS, Learner } from "@/data/mock/moveDetails";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import Link from "next/link";

export default function MoveDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeMethod, setActiveMethod] = useState<string>("Level Up");

  // 1. SAFE PARAM & DATA LOOKUP
  const slug = params?.slug;
  const moveSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const move = moveSlug ? MOCK_MOVE_DETAILS[moveSlug] : null;

  // 2. RENDER NOT FOUND STATE
  if (!move) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade bg-transparent">
        <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-400 shadow-inner border border-slate-200">
          <ShieldAlert size={48} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Move não encontrado
          </h1>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Não encontramos dados para este movimento em nosso banco tático.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => router.back()}
            className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // Filter learners by active method
  const filteredLearners = move.learnedBy?.filter(p => p.method === activeMethod) || [];
  
  const methods = [
    { id: "Level Up", label: "Nível", icon: <Star size={12} /> },
    { id: "TM", label: "TM / HM", icon: <Database size={12} /> },
    { id: "Egg", label: "Ovo", icon: <Layers size={12} /> },
    { id: "Tutor", label: "Tutor", icon: <Users size={12} /> },
    { id: "Evolution", label: "Evolução", icon: <RotateCcw size={12} /> }
  ];

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col gap-6 text-left w-full min-w-0 border-b border-slate-200/60 pb-10 kadex-page-hero">
        <div className="space-y-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-600 transition-colors group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none break-words">
              {move.name}
            </h1>
            <div className="flex flex-wrap gap-3 pt-2 items-center">
              <TypeBadge type={move.type} size="lg" />
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                move.category === 'Physical' ? 'bg-orange-600 text-white border-orange-700' : 
                move.category === 'Special' ? 'bg-blue-600 text-white border-blue-700' : 
                'bg-slate-700 text-white border-slate-800'
              } shadow-sm`}>
                {move.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-xl text-slate-700 font-bold leading-relaxed max-w-3xl italic border-l-4 border-red-500/20 pl-6 bg-white/40 backdrop-blur-sm py-3 rounded-r-2xl">
          "{move.description}"
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4 text-left">
          <div className="space-y-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Power</div>
            <div className="text-xl font-black text-slate-800">{move.power || "—"}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Accuracy</div>
            <div className="text-xl font-black text-slate-800">{move.accuracy ? `${move.accuracy}%` : "—"}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PP</div>
            <div className="text-xl font-black text-slate-800">{move.pp}</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Priority</div>
            <div className={`text-xl font-black ${move.priority > 0 ? 'text-emerald-600' : move.priority < 0 ? 'text-red-600' : 'text-slate-800'}`}>
              {move.priority > 0 ? `+${move.priority}` : move.priority}
            </div>
          </div>
        </div>
      </div>

      {/* --- DETAILED MOVE DATA --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Battle Mechanics */}
        <div className="lg:col-span-2 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Extended Data Table */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                <Activity size={14} className="text-red-600" />
                Move Properties
              </h3>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-50">
                    <PropertyRow label="Target" value={move.target} />
                    <PropertyRow label="Contact" value={move.makesContact ? "Yes" : "No"} />
                    <PropertyRow label="Generation" value={`Gen ${move.generation}`} />
                    <PropertyRow label="Affected by Protect" value={move.flags.protect ? "Yes" : "No"} />
                    <PropertyRow label="Sound Move" value={move.flags.sound ? "Yes" : "No"} />
                    {move.flags.punch && <PropertyRow label="Punching Move" value="Yes" />}
                    {move.flags.bite && <PropertyRow label="Biting Move" value="Yes" />}
                    {move.flags.pulse && <PropertyRow label="Pulse Move" value="Yes" />}
                    {move.flags.ballistic && <PropertyRow label="Ballistic Move" value="Yes" />}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Battle Effect Detailed */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                Battle Effect
              </h3>
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6 relative overflow-hidden h-full">
                <div className="space-y-4 relative z-10">
                  <p className="text-sm font-bold text-slate-900 leading-relaxed">
                    {move.effect}
                  </p>
                  
                  {move.secondaryEffectChance && (
                    <div className="space-y-2.5">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secondary Effect</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-[10px] font-black text-amber-600 uppercase tracking-widest">
                          <RotateCcw size={10} />
                          {move.secondaryEffectChance}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-4 relative z-10">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <Shield size={12} className="text-red-600" />
                    Competitive Insight
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 leading-relaxed">
                    {move.competitiveNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Type Effectiveness */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <Layers size={14} className="text-red-600" />
              Offensive Type Matchup
            </h3>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <EffectivenessGroup label="Super Effective (2x)" types={move.typeEffectiveness.superEffective} color="text-emerald-600" />
                <EffectivenessGroup label="Not Very Effective (0.5x)" types={move.typeEffectiveness.notVeryEffective} color="text-red-500" />
                <EffectivenessGroup label="No Effect (0x)" types={move.typeEffectiveness.noEffect} color="text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR: RELATED MOVES ONLY */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <BookOpen size={14} className="text-red-600" />
              Related Moves
            </h3>
            <div className="space-y-3">
              {move.relatedMoves?.map((rel, idx) => (
                <Link 
                  key={`${rel.slug}-${idx}`}
                  href={`/moves/${rel.slug}`}
                  className="bg-white border border-slate-100 rounded-2xl p-4 block hover:border-red-500 hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[11px] font-black uppercase tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">{rel.name}</div>
                    <TypeBadge type={rel.type} size="sm" />
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 leading-relaxed italic line-clamp-2">
                    "{rel.reason}"
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- LEARNED BY SECTION (FULL WIDTH GRID) --- */}
      <div className="space-y-8 pt-12 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <Database size={14} className="text-red-600" />
              Who Learns {move.name}
            </h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-6">
              Database Results: {filteredLearners.length} Pokémon Found
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-slate-100/80 p-1 rounded-xl gap-1">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMethod(m.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all ${
                  activeMethod === m.id 
                    ? 'bg-white text-red-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                {m.icon}
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Pokemon */}
        {filteredLearners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredLearners.map((p, idx) => (
              <div 
                key={`${p.slug}-${idx}`} 
                className="rc-card p-0 group overflow-hidden relative"
              >
                <Link href={`/pokemon/${p.slug}`} className="block h-full w-full">
                  {/* Card Header Background */}
                  <div className="h-16 bg-gradient-to-br from-[var(--rc-bg-muted)] to-white border-b border-[var(--rc-border-soft)] relative overflow-hidden">
                    <div className="absolute -right-3 -top-3 text-4xl font-black text-black/5 italic pointer-events-none">
                      #{String(p.id).padStart(3, '0')}
                    </div>
                  </div>

                  <div className="px-4 pb-5 -mt-10 relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white border border-[var(--rc-border-strong)] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                      <img src={p.sprite} alt={p.name} className="w-14 h-14 object-contain drop-shadow-sm" />
                    </div>
                    
                    <div className="mt-3 text-center w-full">
                      <div className="font-black text-xs uppercase tracking-tight text-[var(--rc-text-primary)] truncate">{p.name}</div>
                      
                      <div className="text-[9px] font-bold text-red-600 mt-1 uppercase tracking-widest">
                        {p.detail || "Basic"}
                      </div>
                      
                      <div className="flex justify-center gap-1.5 mt-3">
                        {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Hover Accent Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rc-accent-primary)] rounded-xl pointer-events-none transition-colors" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-200 rounded-[40px] p-20 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-200">
               <Filter size={32} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
              No Pokémon found for method: {activeMethod}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

function PropertyRow({ label, value }: { label: string, value: string | number }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="py-3 font-black text-[9px] uppercase tracking-widest text-slate-400">{label}</td>
      <td className="py-3 font-bold text-slate-900 text-right">{value}</td>
    </tr>
  );
}

function EffectivenessGroup({ label, types, color }: { label: string, types: string[], color: string }) {
  return (
    <div className="space-y-4">
      <div className={`text-[9px] font-black uppercase tracking-widest ${color}`}>{label}</div>
      <div className="flex flex-wrap gap-2">
        {types.length > 0 ? types.map(t => (
          <TypeBadge key={t} type={t} size="sm" />
        )) : <span className="text-[10px] font-medium text-slate-400 italic">None</span>}
      </div>
    </div>
  );
}
