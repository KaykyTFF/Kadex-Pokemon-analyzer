"use client";

import React, { useState, useMemo } from "react";
import { Search, Plus, Filter, X, ChevronDown, Trash2, Check } from "lucide-react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

import Link from "next/link";

const TYPES = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
const GENS = ["Gen I", "Gen II", "Gen III", "Gen IV", "Gen V", "Gen VI", "Gen VII", "Gen VIII", "Gen IX"];
const ROLES = ["Special Sweeper", "Physical Sweeper", "Support", "Pivot", "Wallbreaker", "Tank", "Speed Control"];
const FORMATS = ["VGC", "Singles", "Doubles"];

export default function RedCorePokemon() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGens, setSelectedGens] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedGens([]);
    setSelectedRoles([]);
    setSelectedFormats([]);
    setSearch("");
  };

  const filteredPokemon = useMemo(() => {
    return MOCK_POKEMON.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.role.toLowerCase().includes(search.toLowerCase()) ||
                           p.types.some(t => t.toLowerCase().includes(search.toLowerCase()));
      
      const matchesType = selectedTypes.length === 0 || p.types.some(t => selectedTypes.includes(t));
      const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(p.role);
      // Note: In a real app, Generation and Format would be part of the data model.
      // For now we simulate with the existing mocks.
      
      return matchesSearch && matchesType && matchesRole;
    });
  }, [search, selectedTypes, selectedRoles]);

  const activeFiltersCount = selectedTypes.length + selectedGens.length + selectedRoles.length + selectedFormats.length;

  return (
    <div className="kadex-page-container rc-animate-fade pb-32">
       
       <div className="flex flex-col">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 kadex-page-hero">
            <div className="space-y-2">
               <div className="inline-flex items-center gap-2 bg-[var(--rc-accent-primary)] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-sm">
                  Global Roster Access
               </div>
               <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-[var(--rc-text-primary)] uppercase italic leading-none">
                 Global <span className="text-[var(--rc-accent-primary)]">Index</span>
               </h1>
            </div>

            <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)]">Results</div>
                  <div className="text-2xl font-black text-[var(--rc-text-primary)] italic">
                     {filteredPokemon.length} <span className="text-xs not-italic text-[var(--rc-text-muted)]">/ {MOCK_POKEMON.length}</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center gap-3 relative z-20 mb-12">
            <div className="relative group w-full md:w-[580px]">
               <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                 <Search size={18} className="text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
               </div>
               <input 
                 type="text" 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 placeholder="Search by name, type, or role..." 
                 className="w-full bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] text-base rounded-[18px] pl-12 pr-6 py-3.5 focus:outline-none focus:border-[var(--rc-accent-primary)] focus:ring-4 focus:ring-[var(--rc-accent-soft)] transition-all placeholder:text-[var(--rc-text-muted)] shadow-sm font-medium"
               />
            </div>

            <button 
               onClick={() => setIsFilterOpen(!isFilterOpen)}
               className={`flex items-center gap-2.5 px-5 py-3.5 rounded-[18px] font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 border shadow-sm whitespace-nowrap h-[54px] ${
                  isFilterOpen || activeFiltersCount > 0
                  ? 'bg-[var(--rc-accent-primary)] text-white border-[var(--rc-accent-primary)]'
                  : 'bg-white text-[var(--rc-text-primary)] border-[var(--rc-border-strong)] hover:border-[var(--rc-accent-primary)]'
               }`}
            >
               <Filter size={14} />
               <span>Filtros</span>
               {activeFiltersCount > 0 && (
                  <span className="bg-white text-[var(--rc-accent-primary)] w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black">
                     {activeFiltersCount}
                  </span>
               )}
            </button>

            {/* Filter Panel - Absolutely positioned to avoid layout shift */}
            <div className={`absolute top-full left-0 right-0 mt-4 z-50 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
               isFilterOpen 
               ? 'opacity-100 translate-y-0 scale-100' 
               : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none'
            }`}>
               <div className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] relative overflow-hidden">
                  {/* Background icon clipped safely */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none select-none">
                     <Filter size={120} />
                  </div>

                  <div className="max-h-[70vh] overflow-y-auto custom-scrollbar relative z-10">
                     <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Types */}
                        <div className="space-y-4">
                           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] flex items-center gap-2">
                              Type Categories
                           </h3>
                           <div className="flex flex-wrap gap-2">
                              {TYPES.map(t => (
                                 <button 
                                    key={t}
                                    onClick={() => toggleFilter(selectedTypes, setSelectedTypes, t)}
                                    className={`transition-all ${selectedTypes.includes(t) ? 'scale-105' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}
                                 >
                                    <TypeBadge type={t} size="sm" />
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Generations */}
                        <div className="space-y-4">
                           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">
                              Origin / Gen
                           </h3>
                           <div className="grid grid-cols-3 gap-2">
                              {GENS.map(g => (
                                 <button 
                                    key={g}
                                    onClick={() => toggleFilter(selectedGens, setSelectedGens, g)}
                                    className={`px-2 py-1.5 rounded-lg border text-[9px] font-black uppercase transition-all ${
                                       selectedGens.includes(g)
                                       ? 'bg-[var(--rc-accent-primary)] border-[var(--rc-accent-primary)] text-white'
                                       : 'bg-white border-[var(--rc-border-soft)] text-[var(--rc-text-secondary)] hover:border-[var(--rc-accent-primary)]'
                                    }`}
                                 >
                                    {g}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Competitive Roles */}
                        <div className="space-y-4">
                           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">
                              Tactical Role
                           </h3>
                           <div className="flex flex-col gap-1.5">
                              {ROLES.map(r => (
                                 <button 
                                    key={r}
                                    onClick={() => toggleFilter(selectedRoles, setSelectedRoles, r)}
                                    className={`flex items-center justify-between px-3 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-tight transition-all ${
                                       selectedRoles.includes(r)
                                       ? 'bg-red-50 border-[var(--rc-accent-primary)] text-[var(--rc-accent-primary)]'
                                       : 'bg-white border-transparent text-[var(--rc-text-secondary)] hover:bg-[var(--rc-bg-muted)]'
                                    }`}
                                 >
                                    {r}
                                    {selectedRoles.includes(r) && <Check size={10} />}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Format & Actions */}
                        <div className="flex flex-col justify-between gap-8">
                           <div className="space-y-4">
                              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)]">
                                 Battle Format
                              </h3>
                              <div className="flex flex-col gap-1.5">
                                 {FORMATS.map(f => (
                                    <button 
                                       key={f}
                                       onClick={() => toggleFilter(selectedFormats, setSelectedFormats, f)}
                                       className={`flex items-center justify-between px-3 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-tight transition-all ${
                                          selectedFormats.includes(f)
                                          ? 'bg-red-50 border-[var(--rc-accent-primary)] text-[var(--rc-accent-primary)]'
                                          : 'bg-white border-transparent text-[var(--rc-text-secondary)] hover:bg-[var(--rc-bg-muted)]'
                                       }`}
                                    >
                                       {f}
                                       {selectedFormats.includes(f) && <Check size={10} />}
                                    </button>
                                 ))}
                              </div>
                           </div>

                           <div className="space-y-3">
                              <button 
                                 onClick={clearFilters}
                                 className="w-full flex items-center justify-center gap-2 py-3 border border-transparent text-[10px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] hover:text-red-600 transition-colors"
                              >
                                 <Trash2 size={12} />
                                 Limpar filtros
                              </button>
                              <button 
                                 onClick={() => setIsFilterOpen(false)}
                                 className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-md active:scale-95"
                              >
                                 Aplicar Filtros
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
       </div>

       {filteredPokemon.length > 0 ? (
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
           {filteredPokemon.map((p, i) => (
             <div 
               key={p.id} 
               className="rc-card p-0 group overflow-hidden relative"
               style={{ animationDelay: `${i * 50}ms` }}
             >
                <Link href={`/pokemon/${p.slug}`} className="block h-full w-full">
                  {/* Card Header Background */}
                  <div className="h-20 bg-gradient-to-br from-[var(--rc-bg-muted)] to-white border-b border-[var(--rc-border-soft)] relative overflow-hidden">
                     <div className="absolute -right-4 -top-4 text-4xl font-black text-black/5 italic pointer-events-none">#{String(p.id).padStart(3, '0')}</div>
                  </div>

                  <div className="px-5 pb-6 -mt-12 relative z-10 flex flex-col items-center">
                     <div className="w-24 h-24 bg-white border border-[var(--rc-border-strong)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        <img src={p.spriteUrl} alt={p.name} className="w-16 h-16 object-contain drop-shadow-md" />
                     </div>
                     
                     <div className="mt-4 text-center w-full">
                        <div className="font-black text-sm uppercase tracking-tight text-[var(--rc-text-primary)] truncate">{p.name}</div>
                        <div className="text-[10px] font-bold text-[var(--rc-text-muted)] mt-1 uppercase tracking-widest">{p.role}</div>
                        
                        <div className="flex justify-center gap-1.5 mt-4">
                          {p.types.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                        </div>
                     </div>
                  </div>
                </Link>

                <div className="px-5 pb-6">
                  <button className="w-full py-2 bg-[var(--rc-bg-muted)] text-[var(--rc-text-primary)] text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 group-hover:bg-[var(--rc-accent-primary)] group-hover:text-white transition-all shadow-sm">
                    Add to Team
                  </button>
                </div>

                {/* Hover Accent Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--rc-accent-primary)] rounded-xl pointer-events-none transition-colors" />
             </div>
           ))}

           {/* Load More Trigger */}
           <div className="col-span-full py-12 flex justify-center">
              <button className="px-8 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-muted)] font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:text-[var(--rc-text-primary)] hover:border-[var(--rc-text-primary)] transition-all active:scale-95">
                Sequence Complete // Load Extended Data
              </button>
           </div>
         </div>
       ) : (
         <div className="bg-white border border-dashed border-slate-200 rounded-[40px] py-32 text-center space-y-4">
            <Filter size={48} className="mx-auto text-slate-200" />
            <div className="space-y-1">
               <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Nenhum Pokémon encontrado</p>
               <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Tente ajustar seus filtros ou busca.</p>
            </div>
            <button 
               onClick={clearFilters}
               className="rc-btn-primary px-8 py-2 text-[10px] uppercase tracking-widest inline-flex items-center gap-2"
            >
               <Trash2 size={12} />
               Resetar Busca
            </button>
         </div>
       )}
    </div>
  );
}
