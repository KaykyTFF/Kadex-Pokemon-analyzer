"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, Sword, Database, Bookmark, Settings, Sun, Moon, Palette, Hexagon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Sidebar() {
  const { theme, variant, toggleTheme, setVariant } = useTheme();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar border-r border-soft flex flex-col z-30 transition-colors duration-300">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-soft">
        <div className="flex items-center gap-2 text-text-primary font-bold text-xl tracking-tight">
          <Sword className="w-5 h-5 text-accent-primary" />
          <span>Kadex</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        <div className="px-3 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
          Main Menu
        </div>
        
        <NavLink href="/" icon={<LayoutDashboard size={18} />} label="Dashboard" active />
        <NavLink href="/red-core" icon={<Hexagon size={18} className="text-red-500" />} label="Kadex Red Core" />
        <NavLink href="/battle-lab" icon={<Hexagon size={18} className="text-accent-primary" />} label="Kadex Battle Lab" />
        <NavLink href="/workbench" icon={<Sword size={18} />} label="Tactical Workbench" />
        <NavLink href="/builder" icon={<Sword size={18} />} label="Team Builder" />
        <NavLink href="/analyzer" icon={<Database size={18} />} label="Analyzer" />
        <NavLink href="/saved" icon={<Bookmark size={18} />} label="Saved Teams" />
        <NavLink href="/style-lab" icon={<Palette size={18} />} label="Style Lab" />

        <div className="mt-8 px-3 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
          Formats
        </div>
        <FormatSelector />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-soft space-y-2">
        <div className="px-3 py-2">
          <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
            <Palette size={10} /> Visual Variant
          </div>
          <div className="flex flex-col gap-1.5">
            <button 
              onClick={() => setVariant("blue-core")}
              className={`py-1.5 px-3 text-[10px] font-bold rounded border transition-all text-left flex items-center justify-between ${variant === "blue-core" ? "bg-accent-primary/10 text-accent-primary border-accent-primary/30" : "bg-app/50 text-text-muted border-soft hover:border-strong"}`}
            >
              BLUE CORE
              {variant === "blue-core" && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>}
            </button>
            <button 
              onClick={() => setVariant("crimson-tactical")}
              className={`py-1.5 px-3 text-[10px] font-bold rounded border transition-all text-left flex items-center justify-between ${variant === "crimson-tactical" ? "bg-accent-primary/10 text-accent-primary border-accent-primary/30" : "bg-app/50 text-text-muted border-soft hover:border-strong"}`}
            >
              CRIMSON TACTICAL
              {variant === "crimson-tactical" && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>}
            </button>
            <button 
              onClick={() => setVariant("neo-console")}
              className={`py-1.5 px-3 text-[10px] font-bold rounded border transition-all text-left flex items-center justify-between ${variant === "neo-console" ? "bg-accent-primary/10 text-accent-primary border-accent-primary/30" : "bg-app/50 text-text-muted border-soft hover:border-strong"}`}
            >
              NEO CONSOLE
              {variant === "neo-console" && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></span>}
            </button>
          </div>
        </div>

        <button 
          onClick={toggleTheme}
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-card-hover rounded-md transition-all group"
        >
          {theme === "dark" ? (
            <>
              <Sun size={18} className="text-status-warning group-hover:rotate-12 transition-transform" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={18} className="text-accent-primary group-hover:-rotate-12 transition-transform" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-card-hover rounded-md transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}

function NavLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href}>
      <span className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? "bg-accent-glow text-accent-primary" : "text-text-secondary hover:text-primary hover:bg-card-hover"}`}>
        {icon}
        {label}
      </span>
    </Link>
  );
}

function FormatSelector() {
  return (
    <div className="px-3">
      <select className="w-full bg-card border border-soft text-text-primary text-sm rounded-md py-2 px-3 focus:outline-none focus:border-accent-primary appearance-none cursor-pointer">
        <option>VGC 2024 Reg G</option>
        <option>Singles OU</option>
        <option>Doubles OU</option>
      </select>
    </div>
  );
}
