"use client";

import React from "react";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

export function QuickCheck() {
  return (
    <div className="rc-card p-6 h-full flex flex-col">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)] mb-5">Quick Check</h3>
      
      <div className="flex-1 space-y-4">
         <CheckItem 
           type="warning" 
           title="Weak to Ground" 
           desc="O time possui poucas respostas seguras contra pressão Ground." 
         />
         <CheckItem 
           type="positive" 
           title="Good Speed Control" 
           desc="Flutter Mane e Tailwind support ajudam no controle de velocidade." 
         />
         <CheckItem 
           type="info" 
           title="Missing Water Resist" 
           desc="Considere adicionar uma resposta mais consistente contra Water." 
         />
         <CheckItem 
           type="positive" 
           title="Strong Special Pressure" 
           desc="O time pressiona bem defesas especiais frágeis." 
         />
      </div>
    </div>
  );
}

function CheckItem({ type, title, desc }: { type: "warning" | "positive" | "info", title: string, desc: string }) {
  const icons = {
    warning: <AlertTriangle size={16} className="text-[var(--rc-danger)]" />,
    positive: <CheckCircle2 size={16} className="text-[var(--rc-success)]" />,
    info: <Info size={16} className="text-[var(--rc-warning)]" />
  };

  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0">{icons[type]}</div>
      <div>
        <div className="text-xs font-bold text-[var(--rc-text-primary)]">{title}</div>
        <p className="text-[11px] text-[var(--rc-text-secondary)] mt-0.5 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
