import React from "react";
import { Plus } from "lucide-react";

interface TeamSlotProps {
  pokemon?: {
    name: string;
    spriteUrl: string;
    types: string[];
  };
  isSelected?: boolean;
  onClick?: () => void;
}

export function TeamSlot({ pokemon, isSelected, onClick }: TeamSlotProps) {
  return (
    <div 
      onClick={onClick}
      className={`relative h-24 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center group overflow-hidden ${
        isSelected 
          ? "bg-elevated border-2 border-accent-primary shadow-[0_0_20px_rgba(225,29,46,0.15)] scale-[1.02] z-10" 
          : "bg-card border border-soft hover:border-strong hover:bg-card-hover"
      } ${!pokemon ? "border-dashed" : ""}`}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-accent-primary/5 pointer-events-none" />
      )}
      {pokemon ? (
        <>
          <div className="h-14 w-14 mb-1 relative z-10">
            <img src={pokemon.spriteUrl} alt={pokemon.name} className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`} />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-tight truncate w-full text-center px-2 relative z-10 ${isSelected ? 'text-accent-primary' : 'text-text-secondary'}`}>
            {pokemon.name}
          </span>
        </>
      ) : (
        <Plus className="text-text-muted opacity-50 w-6 h-6 group-hover:opacity-100 group-hover:text-accent-primary transition-all" />
      )}
    </div>
  );
}
