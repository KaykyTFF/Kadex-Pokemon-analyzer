"use client";

import React from "react";
import Link from "next/link";
import { PlusCircle, UploadCloud, Search, ArrowRight } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ActionCard 
        title="New Team"
        desc="Comece uma nova composição do zero."
        icon={<PlusCircle size={20} />}
        href="/builder"
      />
      <ActionCard 
        title="Import Paste"
        desc="Cole um time do Showdown para revisar."
        icon={<UploadCloud size={20} />}
        href="/builder"
      />
      <ActionCard 
        title="Analyze Team"
        desc="Veja fraquezas, resistências e cobertura."
        icon={<Search size={20} />}
        href="/analyzer"
      />
      <ActionCard 
        title="Browse Pokédex"
        desc="Encontre Pokémon, tipos e opções de suporte."
        icon={<Search size={20} />}
        href="/pokemon"
      />
    </div>
  );
}

function ActionCard({ title, desc, icon, href }: { title: string, desc: string, icon: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="rc-card p-5 hover:border-[var(--rc-accent-primary)] group transition-all flex flex-col justify-between min-h-[120px]">
      <div className="flex items-start gap-3">
         <div className="w-8 h-8 rounded-lg bg-[var(--rc-bg-muted)] text-[var(--rc-text-secondary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--rc-accent-soft)] group-hover:text-[var(--rc-accent-primary)] transition-colors">
            {icon}
         </div>
         <div>
            <h3 className="text-sm font-black uppercase tracking-tight text-[var(--rc-text-primary)] group-hover:text-[var(--rc-accent-primary)] transition-colors">{title}</h3>
            <p className="text-[11px] text-[var(--rc-text-secondary)] mt-1 font-medium leading-relaxed">{desc}</p>
         </div>
      </div>
    </Link>
  );
}
