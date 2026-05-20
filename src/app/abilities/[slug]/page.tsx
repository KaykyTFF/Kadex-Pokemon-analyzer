"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Zap, ShieldCheck, Info, Users, ChevronRight, Swords, ShieldAlert, Database, Filter } from "lucide-react";
import { MOCK_ABILITIES } from "@/data/mock/abilities";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import Link from "next/link";

export default function AbilityDetailPage() {
  const params = useParams();
  const router = useRouter();

  // Safe slug lookup
  const slug = params?.slug;
  const abilitySlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const ability = MOCK_ABILITIES.find(a => a.id === abilitySlug);

  // Not Found State
  if (!ability) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade bg-transparent">
        <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-400 border border-slate-200 shadow-inner">
          <Zap size={48} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Ability não encontrada
          </h1>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Não encontramos dados para esta habilidade em nossa base tática.
          </p>
        </div>
        <button 
          onClick={() => router.push('/abilities')}
          className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <ArrowLeft size={16} />
          Voltar para Lista
        </button>
      </div>
    );
  }

  // Find users of this ability from MOCK_POKEMON
  const abilityUsers = MOCK_POKEMON.filter(p => 
    p.abilities.includes(ability.name) || ability.commonUsers.includes(p.name)
  );

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
      
      {/* Header Section */}
      <div className="flex flex-col gap-6 text-left border-b border-slate-200/60 pb-10 kadex-page-hero">
        <div className="space-y-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-600 transition-colors group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Back to Abilities
          </button>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              {ability.name}
            </h1>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-red-700 shadow-sm">
                {ability.category}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">ID: {ability.id}</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-slate-700 font-bold leading-relaxed max-w-3xl italic border-l-4 border-red-500/20 pl-6 bg-white/40 backdrop-blur-sm py-3 rounded-r-2xl">
          "{ability.description}"
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Tactical Info */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Battle Mechanics */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <Swords size={14} className="text-red-600" />
              Battle Mechanics
            </h3>
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-6 relative overflow-hidden">
               <p className="text-sm font-bold text-slate-900 leading-relaxed relative z-10">
                  {ability.battleEffect}
               </p>
               <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-[0.03] rotate-12">
                 <Zap size={160} />
               </div>
            </div>
          </div>

          {/* Competitive Context */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <ShieldCheck size={14} className="text-red-600" />
              Strategic Insight
            </h3>
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-6">
               <div className="space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   Competitive Utility
                 </div>
                 <p className="text-sm font-medium text-slate-600 leading-relaxed">
                   {ability.competitiveEffect}
                 </p>
               </div>
               
               <div className="pt-6 border-t border-slate-50 space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   Synergies & Teammates
                 </div>
                 <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                   {ability.synergies}
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          
          {/* Counterplay */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <ShieldAlert size={14} className="text-red-600" />
              Counterplay & Risks
            </h3>
            <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={80} />
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 text-red-500">Threat Awareness</h4>
               <p className="text-xs font-bold leading-relaxed relative z-10 text-slate-300">
                  {ability.counters}
               </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- POKEMON WITH THIS ABILITY SECTION --- */}
      <div className="space-y-8 pt-12 border-t border-slate-200/60">
        <div className="space-y-1">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
            <Database size={14} className="text-red-600" />
            Pokémon with this Ability
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-6">
            Tactical Roster: {abilityUsers.length} Units Identified
          </p>
        </div>

        {abilityUsers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {abilityUsers.map((p, idx) => (
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
                      <img src={p.spriteUrl} alt={p.name} className="w-14 h-14 object-contain drop-shadow-sm" />
                    </div>
                    
                    <div className="mt-3 text-center w-full">
                      <div className="font-black text-xs uppercase tracking-tight text-[var(--rc-text-primary)] truncate">{p.name}</div>
                      
                      <div className="text-[9px] font-bold text-red-600 mt-1 uppercase tracking-widest">
                        {p.abilities.indexOf(ability.name) === p.abilities.length - 1 && p.abilities.length > 1 ? "Hidden Ability" : "Normal Ability"}
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
          <div className="bg-white/40 backdrop-blur-sm border border-dashed border-slate-200 rounded-[40px] p-20 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-slate-200">
               <Filter size={32} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
              No tactical data found for Pokémon with this ability.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
