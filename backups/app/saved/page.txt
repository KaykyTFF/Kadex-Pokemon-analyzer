import React from "react";
import { Search } from "lucide-react";
import { MOCK_SAVED_TEAMS } from "@/data/mock/data";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function SavedTeamsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-12">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Saved Teams</h1>
          <p className="text-text-secondary text-sm">Manage and organize your competitive loadouts.</p>
        </div>
        <div className="relative">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
           <input 
             type="text" 
             placeholder="Search teams..." 
             className="pl-9 pr-4 py-2 bg-card border border-soft rounded-md text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SAVED_TEAMS.map(team => (
          <div key={team.id} className="bg-card border border-soft rounded-xl p-5 hover:border-strong transition-colors group relative cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">{team.name}</h3>
                <div className="text-xs text-text-muted mt-1">{team.format} • {new Date(team.updatedAt).toLocaleDateString()}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 bg-app p-3 rounded-lg border border-soft">
              {team.pokemon.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <img src={p.spriteUrl} alt={p.name} className="w-10 h-10 object-contain drop-shadow-md" />
                  <span className="text-[9px] text-text-secondary font-medium truncate w-full text-center">{p.name}</span>
                </div>
              ))}
              {Array.from({ length: 6 - team.pokemon.length }).map((_, i) => (
                <div key={`empty-${i}`} className="flex flex-col items-center justify-center h-14 border border-dashed border-soft/50 rounded" />
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-soft flex gap-2">
              <button className="flex-1 py-1.5 text-xs font-medium bg-app hover:bg-elevated border border-soft rounded transition-colors text-text-primary">
                Edit Team
              </button>
              <button className="flex-1 py-1.5 text-xs font-medium bg-app hover:bg-elevated border border-soft rounded transition-colors text-text-primary">
                Analyze
              </button>
            </div>
          </div>
        ))}

        {/* Create New Card */}
        <div className="bg-app border-2 border-dashed border-soft rounded-xl p-5 flex flex-col items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/50 transition-colors cursor-pointer min-h-[240px]">
           <div className="w-12 h-12 rounded-full bg-card border border-soft flex items-center justify-center mb-3">
             <span className="text-xl">+</span>
           </div>
           <span className="font-medium">Create New Team</span>
        </div>
      </div>
    </div>
  );
}
