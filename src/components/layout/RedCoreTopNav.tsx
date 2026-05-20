"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Sword, Target, Crosshair, Hexagon, LogIn, Package, Zap, Layers } from "lucide-react";
import { LoginModal } from "../auth/LoginModal";

export function RedCoreTopNav() {
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="h-[64px] bg-[var(--rc-bg-surface)]/80 backdrop-blur-md border-b border-[var(--rc-border-soft)] flex items-center justify-between px-6 shrink-0 z-50 sticky top-0 shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
           <div className="w-9 h-9 rounded-xl bg-[var(--rc-accent-primary)] text-white flex items-center justify-center shadow-[0_4px_12px_var(--rc-accent-glow)] group-hover:scale-105 transition-transform">
              <Hexagon size={20} fill="currentColor" className="opacity-80" />
           </div>
           <span className="font-black text-2xl tracking-tighter text-[var(--rc-text-primary)]">KADEX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-[var(--rc-bg-muted)]/50 p-1 rounded-full border border-[var(--rc-border-soft)]">
           <TopNavLink href="/builder" icon={<Sword size={16} />} label="Builder" active={pathname === '/builder'} />
           <TopNavLink href="/analyzer" icon={<Crosshair size={16} />} label="Analyzer" active={pathname === '/analyzer'} />
           <TopNavLink href="/pokemon" icon={<Search size={16} />} label="Pokédex" active={pathname === '/pokemon'} />
           <TopNavLink href="/items" icon={<Package size={16} />} label="Items" active={pathname === '/items'} />
           <TopNavLink href="/abilities" icon={<Zap size={16} />} label="Abilities" active={pathname === '/abilities'} />
           <TopNavLink href="/types" icon={<Layers size={16} />} label="Types" active={pathname === '/types'} />
        </nav>
      </div>

      <div className="flex items-center gap-4">
         {/* Global Command Search */}
         <div className="relative hidden lg:block w-72 group">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--rc-text-muted)] group-focus-within:text-[var(--rc-accent-primary)] transition-colors" />
            <input 
              type="text" 
              placeholder="Search anything... (⌘K)" 
              className="w-full bg-[var(--rc-bg-muted)] border border-transparent focus:bg-[var(--rc-bg-surface)] focus:border-[var(--rc-accent-primary)] rounded-xl pl-10 pr-4 py-2 text-sm text-[var(--rc-text-primary)] transition-all outline-none focus:ring-4 focus:ring-[var(--rc-accent-soft)] placeholder:text-[var(--rc-text-muted)]"
            />
         </div>

         <div className="w-px h-6 bg-[var(--rc-border-soft)] mx-2 hidden sm:block" />

         <button 
           onClick={() => setIsLoginOpen(true)}
           className="flex items-center gap-2 px-5 py-2 bg-[var(--rc-accent-primary)] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[var(--rc-accent-secondary)] transition-all shadow-[0_4px_12px_var(--rc-accent-glow)] active:scale-95 border border-white/10"
         >
           <LogIn size={14} />
           <span>Entrar</span>
         </button>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}

function TopNavLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full transition-all ${
        active 
          ? 'bg-[var(--rc-accent-soft)] text-[var(--rc-accent-primary)]' 
          : 'text-[var(--rc-text-secondary)] hover:bg-[var(--rc-bg-muted)] hover:text-[var(--rc-text-primary)]'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
