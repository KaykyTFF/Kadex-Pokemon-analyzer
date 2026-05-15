import React from "react";
import { TypeBadge } from "./TypeBadge";

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    role: string;
    spriteUrl: string;
    baseStats: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };
  };
  onClick?: () => void;
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const bst = Object.values(pokemon.baseStats).reduce((a, b) => a + b, 0);

  return (
    <div 
      onClick={onClick}
      className="bg-card border border-soft hover:bg-card-hover hover:border-strong rounded-lg p-3 cursor-pointer transition-all duration-200 flex flex-col gap-3 group relative overflow-hidden"
    >
      {/* Sprite & Identity */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 bg-app rounded-md flex items-center justify-center p-1 border border-soft group-hover:border-accent-primary/50 transition-colors">
          <img src={pokemon.spriteUrl} alt={pokemon.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-text-muted font-mono">#{String(pokemon.id).padStart(4, '0')}</div>
          <div className="font-semibold text-text-primary truncate">{pokemon.name}</div>
          <div className="text-[11px] text-text-secondary truncate mt-0.5">{pokemon.role}</div>
        </div>
      </div>

      {/* Types */}
      <div className="flex gap-1.5">
        {pokemon.types.map(t => (
          <TypeBadge key={t} type={t} size="sm" />
        ))}
      </div>

      {/* Mini Stats */}
      <div className="mt-auto pt-2 border-t border-soft/50 flex justify-between items-center text-[10px] font-mono text-text-muted">
        <span>BST: {bst}</span>
        <span className="flex gap-1.5">
          <span className="text-status-danger">Atk {pokemon.baseStats.atk}</span>
          <span className="text-status-success">Spe {pokemon.baseStats.spe}</span>
        </span>
      </div>
    </div>
  );
}
