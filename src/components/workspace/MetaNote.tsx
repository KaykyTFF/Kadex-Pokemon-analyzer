"use client";

import React from "react";
import { Lightbulb } from "lucide-react";

export function MetaNote() {
  return (
    <div className="space-y-4 h-full">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1">Meta Note</h3>
      <div className="rc-card p-6 bg-[var(--rc-bg-muted)] border-[var(--rc-border-soft)] h-full flex flex-col justify-center">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white text-[var(--rc-accent-primary)] flex items-center justify-center shrink-0 shadow-sm">
            <Lightbulb size={20} />
          </div>
          <div>
            <h4 className="font-black text-sm text-[var(--rc-text-primary)] mb-1">Speed Control Dependency</h4>
            <p className="text-xs text-[var(--rc-text-secondary)] leading-relaxed font-medium">
              Em formatos rápidos (Reg G), todo time precisa de respostas claras contra speed control, prioridade e pressão ofensiva imediata. Verifique se o seu core defensivo aguenta os dois primeiros turnos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
