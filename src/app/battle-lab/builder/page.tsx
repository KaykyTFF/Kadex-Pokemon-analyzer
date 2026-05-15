"use client";

import React from "react";
import { MOCK_POKEMON } from "@/data/mock/data";
import { Crosshair, Zap, Save, Settings2, Trash2 } from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

export default function BattleLabBuilder() {
  const activePokemon = MOCK_POKEMON[0]; // Mocking selection

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Editor Main */}
      <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="flex justify-between items-end border-b border-[var(--bl-hairline)] pb-6">
            <div>
               <div className="text-[10px] font-mono text-[var(--bl-accent-secondary)] uppercase tracking-widest mb-2">Slot 01 Editor</div>
               <h1 className="text-5xl font-black uppercase italic tracking-tighter text-[var(--bl-ink)]">{activePokemon.name}</h1>
            </div>
            <div className="flex gap-2">
              <TypeBadge type="Fairy" size="lg" />
              <TypeBadge type="Ghost" size="lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Configuration */}
            <div className="space-y-6">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)] flex items-center gap-2">
                 <Settings2 size={12} className="text-[var(--bl-accent-primary)]"/> Combat Parameters
               </h3>
               
               <div className="space-y-4">
                 <ConfigRow label="Held Item" value="Booster Energy" />
                 <ConfigRow label="Ability" value="Protosynthesis" />
                 <ConfigRow label="Tera Type" value="Fairy" />
                 <ConfigRow label="Nature" value="Timid (+Spe, -Atk)" />
               </div>

               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)] flex items-center gap-2 pt-6">
                 <Crosshair size={12} className="text-[var(--bl-accent-secondary)]"/> Moveset
               </h3>

               <div className="space-y-2">
                 <MoveRow name="Moonblast" type="Fairy" power="95" acc="100" />
                 <MoveRow name="Shadow Ball" type="Ghost" power="80" acc="100" />
                 <MoveRow name="Protect" type="Normal" power="-" acc="-" />
                 <MoveRow name="Dazzling Gleam" type="Fairy" power="80" acc="100" />
               </div>
            </div>

            {/* EV/IV Matrix */}
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--bl-ink-muted)] flex items-center gap-2">
                   <Zap size={12} className="text-[var(--bl-warning)]"/> Stat Matrix
                 </h3>
                 <span className="text-[10px] font-mono text-[var(--bl-ink-subtle)]">Remaining: <span className="text-[var(--bl-success)]">0</span></span>
               </div>

               <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] rounded-lg p-6 space-y-4">
                 <StatRow stat="HP" base={55} ev={4} total={131} percent={20} color="var(--bl-success)" />
                 <StatRow stat="Atk" base={55} ev={0} total={58} percent={10} color="var(--bl-danger)" />
                 <StatRow stat="Def" base={55} ev={0} total={75} percent={15} color="var(--bl-warning)" />
                 <StatRow stat="SpA" base={135} ev={252} total={187} percent={85} color="var(--bl-accent-secondary)" />
                 <StatRow stat="SpD" base={135} ev={0} total={155} percent={45} color="var(--bl-ink-muted)" />
                 <StatRow stat="Spe" base={135} ev={252} total={205} percent={95} color="var(--bl-accent-primary)" />
               </div>

               <div className="flex gap-4 pt-4">
                 <button className="flex-1 py-3 bg-[var(--bl-accent-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-[0_0_15px_var(--bl-accent-primary-dim)] hover:bg-opacity-90 transition-all text-center">
                   Save Configuration
                 </button>
                 <button className="px-4 py-3 bg-[var(--bl-surface-2)] border border-[var(--bl-hairline)] text-[var(--bl-danger)] text-[10px] font-bold uppercase tracking-widest rounded hover:border-[var(--bl-danger)] transition-all flex items-center justify-center">
                   <Trash2 size={16} />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfigRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-[8px] uppercase tracking-widest text-[var(--bl-ink-subtle)] mb-1">{label}</div>
      <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] hover:border-[var(--bl-accent-secondary)] rounded px-4 py-3 text-sm font-bold text-[var(--bl-ink)] cursor-pointer transition-colors flex justify-between items-center">
        {value}
        <span className="text-[var(--bl-ink-subtle)] text-[10px]">▼</span>
      </div>
    </div>
  );
}

function MoveRow({ name, type, power, acc }: { name: string, type: string, power: string, acc: string }) {
  return (
    <div className="bg-[var(--bl-surface-1)] border border-[var(--bl-hairline)] p-3 rounded flex items-center gap-3 cursor-pointer hover:border-[var(--bl-accent-primary)] transition-colors">
      <TypeBadge type={type} size="sm" />
      <span className="flex-1 font-bold text-sm uppercase tracking-tight text-[var(--bl-ink)]">{name}</span>
      <div className="flex gap-4 font-mono text-[10px]">
        <span className="text-[var(--bl-ink-subtle)]">PWR <span className="text-[var(--bl-ink)]">{power}</span></span>
        <span className="text-[var(--bl-ink-subtle)]">ACC <span className="text-[var(--bl-ink)]">{acc}</span></span>
      </div>
    </div>
  );
}

function StatRow({ stat, base, ev, total, percent, color }: { stat: string, base: number, ev: number, total: number, percent: number, color: string }) {
  return (
    <div className="flex items-center gap-3 font-mono">
      <div className="w-8 text-[10px] text-[var(--bl-ink-muted)] font-bold uppercase">{stat}</div>
      <div className="w-8 text-[10px] text-[var(--bl-ink-subtle)] text-right">{base}</div>
      <div className="w-12 text-[10px] text-center bg-[var(--bl-surface-2)] border border-[var(--bl-hairline)] rounded py-1 text-[var(--bl-ink)] cursor-ns-resize">{ev}</div>
      <div className="flex-1 h-1.5 bg-[var(--bl-surface-2)] rounded-full overflow-hidden">
        <div className="h-full rounded-full opacity-80" style={{ width: `${percent}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
      </div>
      <div className="w-8 text-right text-sm font-bold text-[var(--bl-ink)]">{total}</div>
    </div>
  );
}
