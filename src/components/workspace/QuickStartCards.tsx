"use client";

import React from "react";
import { PlusCircle, UploadCloud, BarChart2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function QuickStartCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
      <QuickCard 
        icon={<PlusCircle size={24} />} 
        title="Start from Scratch"
        desc="Monte um time competitivo do zero com as melhores ferramentas."
        cta="Create Team"
        href="/builder"
      />
      <QuickCard 
        icon={<UploadCloud size={24} />} 
        title="Import Team"
        desc="Cole um time exportado e analise a estrutura instantaneamente."
        cta="Import Now"
        href="/builder"
        accent="cyan"
      />
      <QuickCard 
        icon={<BarChart2 size={24} />} 
        title="Analyze Current"
        desc="Veja fraquezas, resistências e cobertura do seu time ativo."
        cta="View Analysis"
        href="/analyzer"
        accent="amber"
      />
    </div>
  );
}

function QuickCard({ icon, title, desc, cta, href, accent = "red" }: { icon: React.ReactNode, title: string, desc: string, cta: string, href: string, accent?: "red" | "cyan" | "amber" }) {
  const accentColors = {
    red: "text-[var(--rc-accent-primary)] bg-[var(--rc-accent-soft)]",
    cyan: "text-cyan-600 bg-cyan-50",
    amber: "text-amber-600 bg-amber-50"
  };

  return (
    <Link href={href} className="rc-card p-8 flex flex-col justify-between group h-full hover:scale-[1.02] active:scale-[0.98]">
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColors[accent]}`}>
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-black text-[var(--rc-text-primary)] uppercase tracking-tight italic">{title}</h3>
          <p className="text-sm text-[var(--rc-text-secondary)] leading-relaxed font-medium">{desc}</p>
        </div>
      </div>
      <div className="pt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--rc-accent-primary)] opacity-80 group-hover:opacity-100 transition-opacity">
        {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
