"use client";

import React from "react";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

export function QuickCheck() {
  return (
    <div className="rc-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-primary)]">Quick Analysis</h3>
        <span className="text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest">4 Alerts</span>
      </div>
      
      <div className="flex-1 space-y-3">
         <CheckItem 
           status="danger" 
           title="Weak to Ground" 
           desc="Baixa resistência a Ground" 
         />
         <CheckItem 
           status="success" 
           title="Speed Control" 
           desc="Ótimo controle de velocidade" 
         />
         <CheckItem 
           status="warning" 
           title="Water Resist" 
           desc="Falta resposta contra Water" 
         />
         <CheckItem 
           status="success" 
           title="Special Pressure" 
           desc="Alta pressão especial" 
         />
      </div>
      
      <div className="mt-6 pt-6 border-t border-[var(--rc-border-soft)]">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
          <span className="text-[var(--rc-text-secondary)]">Team Rating</span>
          <span className="text-[var(--rc-success)]">Competitive</span>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ 
  status, 
  title, 
  desc 
}: { 
  status: "danger" | "success" | "warning", 
  title: string, 
  desc: string 
}) {
  const configs = {
    danger: { 
      icon: <AlertTriangle size={14} />, 
      color: "text-[var(--rc-danger)]",
      bg: "bg-[var(--rc-danger)]/10"
    },
    success: { 
      icon: <CheckCircle2 size={14} />, 
      color: "text-[var(--rc-success)]",
      bg: "bg-[var(--rc-success)]/10"
    },
    warning: { 
      icon: <Info size={14} />, 
      color: "text-[var(--rc-warning)]",
      bg: "bg-[var(--rc-warning)]/10"
    }
  };

  const config = configs[status];

  return (
    <div className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-[var(--rc-border-soft)] hover:bg-[var(--rc-bg-app)] transition-all">
      <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${config.bg} ${config.color}`}>
        {config.icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] leading-tight">{title}</div>
        <p className="text-[10px] text-[var(--rc-text-secondary)] mt-0.5 font-medium truncate">{desc}</p>
      </div>
    </div>
  );
}
