import React from "react";
import { Search, Bell, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 h-16 bg-app/80 backdrop-blur-md border-b border-soft flex items-center justify-between px-8">
      {/* Search Command */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-muted group-focus-within:text-accent-primary transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-soft rounded-md leading-5 bg-card text-text-primary placeholder-text-muted focus:outline-none focus:bg-elevated focus:border-accent-primary sm:text-sm transition-colors cursor-text"
            placeholder="Search Pokémon, Moves, Items... (Ctrl+K)"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs text-text-muted border border-soft rounded px-1.5 py-0.5 bg-app">⌘K</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 ml-4">
        <button className="text-text-secondary hover:text-primary transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-accent-primary ring-2 ring-app"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-card border border-soft flex items-center justify-center text-text-primary overflow-hidden">
          <User size={16} />
        </div>
      </div>
    </header>
  );
}
