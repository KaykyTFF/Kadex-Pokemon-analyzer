"use client";

import React from "react";
import { Activity, Hexagon } from "lucide-react";

/**
 * Root Loading Component
 * Prevents blank screens during global navigation/initial load.
 */
export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[999] bg-[#fafafa] flex flex-col items-center justify-center p-6 rc-animate-fade">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-[28px] bg-[#e11d2e] text-white flex items-center justify-center shadow-2xl shadow-red-100">
          <Hexagon size={40} fill="currentColor" className="opacity-80 animate-pulse" />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-black text-[#0f172a] uppercase italic tracking-tighter">
            Kadex System Initializing
          </h2>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Synchronizing Tactical Data...
          </p>
        </div>
        <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2 border border-slate-200 shadow-inner">
          <div className="h-full bg-[#e11d2e] animate-shimmer" style={{ width: '35%' }} />
        </div>
      </div>
    </div>
  );
}
