"use client";

import React from "react";
import Link from "next/link";
import { Plus, Upload, Search, BookOpen } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ActionCard 
        title="New Team"
        desc="Comece um time do zero"
        icon={<Plus size={18} />}
        href="/builder"
        variant="primary"
      />
      <ActionCard 
        title="Import Paste"
        desc="Cole um time do Showdown"
        icon={<Upload size={18} />}
        href="/builder"
      />
      <ActionCard 
        title="Analyze Team"
        desc="Veja fraquezas e coberturas"
        icon={<Search size={18} />}
        href="/analyzer"
      />
      <ActionCard 
        title="Browse Pokédex"
        desc="Explore a base de dados"
        icon={<BookOpen size={18} />}
        href="/pokemon"
      />
    </div>
  );
}

function ActionCard({ 
  title, 
  desc, 
  icon, 
  href, 
  variant = "secondary" 
}: { 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  href: string,
  variant?: "primary" | "secondary"
}) {
  return (
    <Link 
      href={href} 
      className={`rc-card p-5 group transition-all flex items-center gap-4 ${
        variant === "primary" 
          ? 'bg-[var(--rc-accent-soft)] border-[var(--rc-accent-primary)]/20' 
          : 'hover:border-[var(--rc-accent-primary)]'
      }`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
        variant === "primary"
          ? 'bg-[var(--rc-accent-primary)] text-white'
          : 'bg-[var(--rc-bg-muted)] text-[var(--rc-text-secondary)] group-hover:bg-[var(--rc-accent-primary)] group-hover:text-white'
      }`}>
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-xs font-black uppercase tracking-widest text-[var(--rc-text-primary)] leading-tight">{title}</h3>
        <p className="text-[10px] text-[var(--rc-text-secondary)] mt-1 font-medium truncate">{desc}</p>
      </div>
    </Link>
  );
}
