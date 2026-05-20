"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ShieldAlert, Target, ShieldCheck, Database, Hexagon, Swords, Info, TrendingUp, Zap } from "lucide-react";
import { MOCK_TYPES } from "@/data/mock/types";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import Link from "next/link";

const TYPE_COLORS: Record<string, string> = {
  normal: "156, 163, 175",
  fire: "239, 68, 68",
  water: "59, 130, 246",
  electric: "234, 179, 8",
  grass: "34, 197, 94",
  ice: "56, 189, 248",
  fighting: "217, 119, 6",
  poison: "168, 85, 247",
  ground: "217, 119, 6",
  flying: "125, 211, 252",
  psychic: "236, 72, 153",
  bug: "132, 204, 22",
  rock: "180, 83, 9",
  ghost: "139, 92, 246",
  dragon: "99, 102, 241",
  dark: "30, 41, 59",
  steel: "148, 163, 184",
  fairy: "244, 114, 182"
};

export default function TypeDetailPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params?.slug;
  const typeSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const typeData = typeSlug ? MOCK_TYPES[typeSlug.toLowerCase()] : null;

  if (!typeData) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade bg-transparent">
        <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-400 border border-slate-200 shadow-inner">
          <Hexagon size={48} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Type não encontrado
          </h1>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Não encontramos dados para esta tipagem em nossa base.
          </p>
        </div>
        <button 
          onClick={() => router.push('/types')}
          className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <ArrowLeft size={16} />
          Voltar para Lista
        </button>
      </div>
    );
  }

  // Find Pokémon that have this type
  const typePokemon = MOCK_POKEMON.filter(p => 
    p.types.map(t => t.toLowerCase()).includes(typeData.type.toLowerCase())
  );

  const typeColor = TYPE_COLORS[typeData.type.toLowerCase()] || "156, 163, 175";

  return (
    <div className="relative">
      
      {/* --- DYNAMIC TOP GRADIENT --- */}
      <div 
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(${typeColor}, 0.15), transparent 70%),
            linear-gradient(180deg, rgba(255,255,255,0) 0%, transparent 100%)
          `
        }}
      />

      <div className="kadex-page-container rc-animate-fade pb-32">
        
        {/* 1. HERO SECTION */}
        <div className="flex flex-col gap-8 text-left border-b border-slate-200/60 pb-12 mb-12 md:mb-16 relative z-10 kadex-page-hero">
          <div className="space-y-6">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-600 transition-colors group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Return to Elements
            </button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-[24px] flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `rgba(${typeColor}, 0.15)`, border: `1px solid rgba(${typeColor}, 0.2)` }}
                  >
                    <TypeBadge type={typeData.type} size="lg" />
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                    {typeData.type}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-5 rounded-[32px] border border-white shadow-sm">
                 <div className="text-right">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Tactical Population</div>
                    <div className="text-3xl font-black text-slate-900 italic">{typePokemon.length} <span className="text-xs not-italic text-slate-400">Available</span></div>
                 </div>
                 <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <TrendingUp size={24} />
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[32px] p-8 shadow-sm max-w-4xl relative overflow-hidden group">
            <div 
              className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none -mr-20 -mt-20"
              style={{ background: `radial-gradient(circle, rgba(${typeColor}, 1), transparent 70%)` }}
            />
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed italic relative z-10">
              "{typeData.description}"
            </p>
          </div>
        </div>

        {/* 2. TACTICAL ANALYSIS GRID */}
        <div className="space-y-12 relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-6 bg-red-600 rounded-full" />
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">Tactical Effectiveness</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Strong Against */}
             <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-8 pb-4 border-b border-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center"><Target size={14} /></div>
                  Offensive Mastery
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {typeData.strongAgainst.length > 0 ? typeData.strongAgainst.map(t => (
                    <TypeBadge key={t} type={t} size="sm" />
                  )) : <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Neutral</span>}
                </div>
                <div className="mt-auto pt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Deals 2.0x Damage</div>
             </div>

             {/* Weak To */}
             <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-8 pb-4 border-b border-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center"><ShieldAlert size={14} /></div>
                  Defense Risks
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {typeData.weakTo.length > 0 ? typeData.weakTo.map(t => (
                    <TypeBadge key={t} type={t} size="sm" />
                  )) : <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">None</span>}
                </div>
                <div className="mt-auto pt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Receives 2.0x Damage</div>
             </div>

             {/* Resists */}
             <div className="bg-white border border-slate-100 rounded-[40px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 mb-8 pb-4 border-b border-slate-50">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center"><ShieldCheck size={14} /></div>
                  Strategic Resist
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {typeData.resists.length > 0 ? typeData.resists.map(t => (
                    <TypeBadge key={t} type={t} size="sm" />
                  )) : <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Neutral</span>}
                </div>
                <div className="mt-auto pt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Receives 0.5x Damage</div>
             </div>

             {/* Immunities */}
             <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-8 shadow-xl flex flex-col text-white">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 pb-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-red-500"><Zap size={14} /></div>
                  Absolute Guard
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {typeData.immunities.length > 0 ? typeData.immunities.map(t => (
                    ALL_TYPES.includes(t) ? <TypeBadge key={t} type={t} size="md" /> : 
                    <span key={t} className="px-3 py-1 bg-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/10 shadow-sm">{t}</span>
                  )) : <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">None</span>}
                </div>
                <div className="mt-auto pt-4 text-[9px] font-bold text-white/40 uppercase tracking-widest">Full Immunity Index</div>
             </div>
          </div>
        </div>

        {/* 3. POKÉMON UNIT ROSTER */}
        <div className="space-y-12 pt-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">
                Core Units <span className="text-slate-400">Index</span>
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Database size={12} className="text-red-600" />
                Database Registry: {typePokemon.length} Active Records
              </p>
            </div>
          </div>

          {typePokemon.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {typePokemon.map((p, idx) => (
                <div 
                  key={`${p.slug}-${idx}`} 
                  className="rc-card p-0 group overflow-hidden relative"
                >
                  <Link href={`/pokemon/${p.slug}`} className="block h-full w-full">
                    {/* Card Header Background */}
                    <div className="h-20 bg-gradient-to-br from-slate-50 to-white border-b border-[var(--rc-border-soft)] relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 text-5xl font-black text-black/5 italic pointer-events-none group-hover:scale-110 transition-transform duration-700">
                        #{String(p.id).padStart(3, '0')}
                      </div>
                    </div>

                    <div className="px-5 pb-6 -mt-12 relative z-10 flex flex-col items-center">
                      <div className="w-24 h-24 bg-white border border-[var(--rc-border-strong)] rounded-3xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                        <img 
                          src={p.spriteUrl} 
                          alt={p.name} 
                          className="w-16 h-16 object-contain drop-shadow-sm group-hover:drop-shadow-xl transition-all" 
                        />
                      </div>
                      
                      <div className="mt-4 text-center w-full space-y-3">
                        <div className="font-black text-sm uppercase tracking-tight text-[var(--rc-text-primary)] group-hover:text-red-600 transition-colors truncate">{p.name}</div>
                        
                        <div className="flex justify-center gap-1.5">
                          {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Hover Accent Glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rc-accent-primary)]/40 rounded-[32px] pointer-events-none transition-colors" />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/40 backdrop-blur-sm border border-dashed border-slate-200 rounded-[48px] py-32 text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-slate-200 shadow-inner">
                 <Database size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 italic">Database Entry Empty</p>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">No primary units discovered with this elemental signature.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

const ALL_TYPES = [
  "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
  "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
  "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
];
