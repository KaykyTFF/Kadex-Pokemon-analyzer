"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BarChart3, ShieldAlert, Swords, History, Info, ChevronRight, LayoutDashboard, Database, Zap, Shield, Activity, Layers, Crosshair, Users, RotateCcw } from "lucide-react";
import { MOCK_POKEMON_DETAILS } from "@/data/mock/pokemonDetails";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import Link from "next/link";

const ALL_TYPES = [
  "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
  "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
  "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
];

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

export default function PokemonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"stats" | "moves" | "evolution">("stats");

  // 1. SAFE PARAM & DATA LOOKUP
  const slug = params?.slug;
  const pokemonSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const pokemon = pokemonSlug ? MOCK_POKEMON_DETAILS[pokemonSlug] : null;

  // 2. RENDER NOT FOUND STATE
  if (!pokemon) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade bg-[#fafafa]">
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shadow-inner border border-slate-200">
          <ShieldAlert size={48} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Pokémon não encontrado
          </h1>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Não encontramos dados para este Pokémon em nosso banco de dados tático.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/pokemon"
            className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <ArrowLeft size={16} />
            Voltar para Pokédex
          </Link>
          <Link 
            href="/builder"
            className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <LayoutDashboard size={16} />
            Ir para Builder
          </Link>
        </div>
      </div>
    );
  }

  // 3. DATA PREPARATION WITH FALLBACKS
  const types = Array.isArray(pokemon.types) ? pokemon.types : [];
  const abilities = Array.isArray(pokemon.abilities) ? pokemon.abilities : [];
  const eggGroups = Array.isArray(pokemon.eggGroups) ? pokemon.eggGroups : [];
  const evolution = Array.isArray(pokemon.evolution) ? pokemon.evolution : [];
  const competitiveRoles = Array.isArray(pokemon.competitiveRoles) ? pokemon.competitiveRoles : [];
  const baseStats = pokemon.baseStats || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  
  const movesObj = pokemon.moves || {};
  const levelMoves = Array.isArray(movesObj.levelUp) ? movesObj.levelUp : [];
  const tmMoves = Array.isArray(movesObj.tm) ? movesObj.tm : [];
  const eggMoves = Array.isArray(movesObj.egg) ? movesObj.egg : [];

  // 4. GENERATE FULL TYPE MATCHUP GRID (18 TYPES)
  const fullMatchupGrid = ALL_TYPES.map(type => {
    const weakness = pokemon.typeMatchup?.weaknesses?.find(m => m.type === type);
    const resistance = pokemon.typeMatchup?.resistances?.find(m => m.type === type);
    const immunity = pokemon.typeMatchup?.immunities?.find(m => m.type === type);
    
    return {
      type,
      multiplier: weakness?.multiplier || resistance?.multiplier || immunity?.multiplier || "1x"
    };
  });

  const statLabels: Record<string, string> = {
    hp: "HP",
    atk: "Attack",
    def: "Defense",
    spa: "Sp. Atk",
    spd: "Sp. Def",
    spe: "Speed"
  };

  const primaryType = types[0]?.toLowerCase() || 'normal';
  const secondaryType = types[1]?.toLowerCase() || primaryType;

  return (
    <div className="relative">
      
      {/* --- DYNAMIC TOP GRADIENT (FULL WIDTH) --- */}
      <div 
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(${TYPE_COLORS[primaryType]}, 0.12), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(${TYPE_COLORS[secondaryType]}, 0.10), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(${TYPE_COLORS[primaryType]}, 0.05), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,0) 0%, transparent 100%)
          `
        }}
      />

      <div className="kadex-page-container rc-animate-fade pb-32">
      
        {/* --- HEADER / HERO SECTION --- */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start kadex-page-hero">
          {/* Artwork Card: High-Fidelity Premium Version */}
          <div className="relative group shrink-0">
            <div 
              className="relative w-72 h-72 rounded-[56px] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] flex items-center justify-center p-10 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-16px_rgba(225,29,46,0.14)]"
              style={{
                background: `
                  radial-gradient(circle at 18% 20%, rgba(${TYPE_COLORS[primaryType]}, 0.32), transparent 36%),
                  radial-gradient(circle at 82% 24%, rgba(${TYPE_COLORS[secondaryType] || TYPE_COLORS[primaryType]}, 0.28), transparent 34%),
                  radial-gradient(circle at 50% 88%, rgba(15, 23, 42, 0.12), transparent 42%),
                  linear-gradient(135deg, #fff8fc 0%, #f8f4ff 48%, #f3f8ff 100%)
                `
              }}
            >
              {/* ID Watermark - Positioned as in Pokedex cards but larger */}
              <div className="absolute -right-4 -top-4 text-[150px] font-black text-black/[0.03] italic pointer-events-none select-none leading-none z-0">
                #{String(pokemon.id).padStart(3, '0')}
              </div>

              {/* Premium Metallic Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/10 pointer-events-none z-0" />
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Edge Glints (Highlights) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />

              {/* Main Sprite - Floating with deep shadow */}
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="relative w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('official-artwork')) {
                    target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                  }
                }}
              />
            </div>
          </div>          {/* Branding & Summary */}
          <div className="flex-1 space-y-6 text-center md:text-left w-full min-w-0">
            <div className="space-y-2">
              <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-600 transition-colors mb-4 mx-auto md:mx-0 group"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Back
              </button>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none break-words">
                {pokemon.name}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                {types.map((t, idx) => (
                  <TypeBadge key={`${t}-${idx}`} type={t} size="lg" />
                ))}
              </div>
            </div>

            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              {pokemon.description || "Sem descrição disponível para este Pokémon."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 text-left border-t border-slate-100">
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</div>
                <div className="text-sm font-bold text-slate-800">{pokemon.category || "-"}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Abilities</div>
                <div className="flex flex-col">
                  {abilities.length > 0 ? abilities.map(a => (
                    <span key={a} className="text-sm font-bold text-slate-800">{a}</span>
                  )) : <span className="text-sm font-bold text-slate-400">-</span>}
                  {pokemon.hiddenAbility && (
                    <span className="text-xs font-bold text-red-600 mt-0.5">{pokemon.hiddenAbility} (H)</span>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Height</div>
                <div className="text-sm font-bold text-slate-800">{pokemon.height || "-"}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Weight</div>
                <div className="text-sm font-bold text-slate-800">{pokemon.weight || "-"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex gap-4 border-b border-slate-200 overflow-x-auto no-scrollbar">
          <TabButton 
            active={activeTab === "stats"} 
            onClick={() => setActiveTab("stats")}
            icon={<BarChart3 size={16} />}
            label="Stats & Info"
          />
          <TabButton 
            active={activeTab === "moves"} 
            onClick={() => setActiveTab("moves")}
            icon={<Swords size={16} />}
            label="Moveset"
          />
          <TabButton 
            active={activeTab === "evolution"} 
            onClick={() => setActiveTab("evolution")}
            icon={<History size={16} />}
            label="Evolution"
          />
        </div>

        {/* --- TAB CONTENT --- */}
        <div className="min-h-[400px]">
          {/* TAB 1: STATS & TRAINING */}
          {activeTab === "stats" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] rc-animate-fade pt-10">
              {/* Stats Bars */}
              <div className="space-y-10">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2 mb-8">
                  <BarChart3 size={14} className="text-red-600" />
                  Base Stats
                </h3>
                <div className="space-y-6">
                  {Object.entries(baseStats).map(([stat, value]) => (
                    <div key={stat} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-slate-500">{statLabels[stat] || stat}</span>
                        <span className="text-slate-900 font-bold">{value}</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ease-out ${
                            Number(value) > 120 ? 'bg-emerald-500' : Number(value) > 80 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min((Number(value) / 180) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Stat Total</span>
                    <span className="text-2xl font-black text-slate-900 italic">
                      {Object.values(baseStats).reduce((a, b) => a + (Number(b) || 0), 0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Training Card */}
              <div className="space-y-10">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2 mb-8">
                  <Info size={14} className="text-red-600" />
                  Training & Competitive
                </h3>
                <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">Egg Groups</div>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                        <Database size={14} className="text-slate-300" />
                        {eggGroups.length > 0 ? eggGroups.join(", ") : "None"}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">Gender Ratio</div>
                      <div className="text-sm font-bold text-slate-800">
                        {pokemon.genderRatio ? (
                          <div className="flex gap-4">
                            <span className="text-blue-500">{pokemon.genderRatio.male}% ♂</span>
                            <span className="text-pink-500">{pokemon.genderRatio.female}% ♀</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 uppercase tracking-widest text-[10px]">Genderless</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Type Matchup Grid Section (Full Index) */}
                  <div className="space-y-6 pt-10 border-t border-slate-100">
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <ShieldAlert size={12} className="text-[var(--rc-accent-primary)]" />
                      Type Matchup Index
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {fullMatchupGrid.map((m) => {
                        const is4x = m.multiplier === '4x';
                        const is2x = m.multiplier === '2x';
                        const is1x = m.multiplier === '1x';
                        const is1_2x = m.multiplier === '1/2x';
                        const is1_4x = m.multiplier === '1/4x';
                        const is0x = m.multiplier === '0x';

                        const themeClass = is4x 
                          ? "bg-red-50 border-red-200" 
                          : is2x
                            ? "bg-white border-red-100"
                            : is1x
                              ? "bg-white border-slate-100"
                              : is1_2x
                                ? "bg-white border-emerald-100"
                                : is1_4x
                                  ? "bg-emerald-50 border-emerald-200"
                                  : "bg-slate-50 border-slate-200";

                        const textClass = is4x 
                          ? "text-red-700 bg-red-100/50" 
                          : is2x
                            ? "text-red-600 bg-red-50"
                            : is1x
                              ? "text-slate-400 bg-slate-50 font-semibold"
                              : is1_2x
                                ? "text-emerald-600 bg-emerald-50"
                                : is1_4x
                                  ? "text-emerald-700 bg-emerald-100/50"
                                  : "text-slate-600 bg-slate-100 font-bold";

                        return (
                          <div 
                            key={m.type} 
                            className={`flex flex-col items-center justify-between p-3 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-md cursor-default ${themeClass} ${is1x ? 'opacity-70 hover:opacity-100' : 'shadow-sm'}`}
                          >
                            <TypeBadge type={m.type} size="sm" />
                            <div className={`mt-3 w-full py-1 rounded-lg flex items-center justify-center ${textClass}`}>
                              <span className="text-[10px] font-black tracking-widest uppercase leading-none">
                                {m.multiplier}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MOVESET */}
          {activeTab === "moves" && (
            <div className="space-y-12 rc-animate-fade">
              <MoveTable title="Level Up Mastery" moves={levelMoves} showLevel />
              <MoveTable title="Technical Machines (TM)" moves={tmMoves} />
              {eggMoves.length > 0 && <MoveTable title="Egg Moves" moves={eggMoves} />}
            </div>
          )}

          {/* TAB 3: EVOLUTION */}
          {activeTab === "evolution" && (
            <div className="flex flex-col items-center justify-center space-y-12 py-10 rc-animate-fade">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Evolution Network</h3>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                {evolution.length > 0 ? evolution.map((stage, idx) => (
                  <React.Fragment key={stage.slug || idx}>
                    <Link 
                      href={stage.slug ? `/pokemon/${stage.slug}` : "#"}
                      className={`flex flex-col items-center gap-4 p-8 rounded-[40px] border-2 transition-all hover:shadow-xl active:scale-95 relative group ${
                      stage.isCurrent ? 'bg-red-50 border-red-200' : 'bg-white border-slate-100 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                    }`}>
                      {stage.isCurrent && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">
                          Current
                        </div>
                      )}
                      <img src={stage.sprite} alt={stage.name} className="w-24 h-24 object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stage.method || "Base Form"}</div>
                        <div className="text-sm font-black uppercase tracking-tight text-slate-900">{stage.name}</div>
                      </div>
                    </Link>
                    {idx < evolution.length - 1 && (
                      <div className="flex flex-col items-center text-slate-200">
                        <ChevronRight size={32} />
                      </div>
                    )}
                  </React.Fragment>
                )) : (
                  <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-12 text-center">
                    <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Evolution Network Offline</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-8 py-5 flex items-center gap-3 border-b-2 transition-all shrink-0 ${
        active 
          ? 'border-red-600 text-red-600' 
          : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
      }`}
    >
      {icon}
      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
    </button>
  );
}

function MoveTable({ title, moves, showLevel = false }: { title: string, moves: any[], showLevel?: boolean }) {
  if (!Array.isArray(moves) || moves.length === 0) {
    return (
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">{title}</h3>
        <div className="bg-white border border-dashed border-slate-200 p-8 rounded-3xl text-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
          Nenhum movimento registrado
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 pl-1 font-bold">{title}</h3>
      <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="bg-slate-50/80 border-b border-slate-100">
              <tr>
                {showLevel && <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Lvl</th>}
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Move</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Type</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Cat</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-center">Pwr</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {moves.map((move, i) => (
                <tr key={`${move?.name || i}`} className="hover:bg-slate-50 transition-colors group">
                  {showLevel && (
                    <td className="px-6 py-5 text-[10px] font-mono font-black text-slate-300 group-hover:text-red-500 transition-colors">{move?.level || "—"}</td>
                  )}
                  <td className="px-6 py-5 text-xs font-black uppercase tracking-tight text-slate-900 transition-colors">
                    <Link 
                      href={`/moves/${move?.name?.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="hover:text-red-600 transition-colors underline decoration-slate-200 underline-offset-4"
                    >
                      {move?.name || "Unknown"}
                    </Link>
                  </td>
                  <td className="px-6 py-5">
                    <TypeBadge type={move?.type} size="sm" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-lg ring-1 ring-inset ${
                      move?.category === 'Physical' ? 'bg-orange-50 text-orange-700 ring-orange-600/20' : 
                      move?.category === 'Special' ? 'bg-blue-50 text-blue-700 ring-blue-600/20' : 
                      'bg-slate-100 text-slate-600 ring-slate-600/10'
                    }`}>
                      {move?.category || "???"}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-[11px] font-mono font-bold text-slate-900 text-center">
                    {move?.power || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
