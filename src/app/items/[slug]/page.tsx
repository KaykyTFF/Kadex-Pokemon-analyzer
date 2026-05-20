"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Package, ShieldCheck, Info, Zap, ChevronRight, BookOpen, LayoutDashboard } from "lucide-react";
import { MOCK_ITEMS } from "@/data/mock/items";
import Link from "next/link";

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();

  // Safe slug lookup
  const slug = params?.slug;
  const itemSlug = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const item = MOCK_ITEMS.find(i => i.id === itemSlug);

  // Not Found State
  if (!item) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade bg-transparent">
        <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-slate-400 border border-slate-200 shadow-inner">
          <Package size={48} />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            Item não encontrado
          </h1>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Não encontramos dados para este item em nossa base tática.
          </p>
        </div>
        <button 
          onClick={() => router.push('/items')}
          className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          <ArrowLeft size={16} />
          Voltar para Lista
        </button>
      </div>
    );
  }

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
            Back to Inventory
          </button>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              {item.name}
            </h1>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-red-700 shadow-sm">
                {item.category}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">ID: {item.id}</span>
            </div>
          </div>
        </div>

        <p className="text-xl text-slate-700 font-bold leading-relaxed max-w-3xl italic border-l-4 border-red-500/20 pl-6 bg-white/40 backdrop-blur-sm py-3 rounded-r-2xl">
          "{item.description}"
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Tactical Info */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Battle Mechanics */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <Zap size={14} className="text-amber-500" />
              Battle Effect & Mechanics
            </h3>
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-6 relative overflow-hidden">
               <p className="text-sm font-bold text-slate-900 leading-relaxed relative z-10">
                  {item.battleEffect}
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
              Competitive Use Case
            </h3>
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-6">
               <div className="space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   Strategic Application
                 </div>
                 <p className="text-sm font-medium text-slate-600 leading-relaxed">
                   {item.competitiveEffect}
                 </p>
               </div>
               
               <div className="pt-6 border-t border-slate-50 space-y-4">
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                   Best Synergies & Combinations
                 </div>
                 <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                   {item.bestCombinations}
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          
          {/* Important Notes */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <Info size={14} className="text-red-600" />
              Tactical Notes
            </h3>
            <div className="bg-red-600 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <BookOpen size={80} />
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-80">Pro Observation</h4>
               <p className="text-xs font-bold leading-relaxed relative z-10">
                  {item.notes}
               </p>
            </div>
          </div>

          {/* Common Users */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
              <LayoutDashboard size={14} className="text-red-600" />
              Common Users
            </h3>
            <div className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-sm space-y-3">
              {item.commonUsers.map((user, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all group">
                   <span className="text-xs font-black uppercase tracking-tight text-slate-900">{user}</span>
                   <ChevronRight size={14} className="text-slate-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
