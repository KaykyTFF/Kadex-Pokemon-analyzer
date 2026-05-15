import React from "react";
import { Activity } from "lucide-react";

export default function AnalyzerLoading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6 rc-animate-fade">
      <div className="w-16 h-16 bg-white border border-[var(--rc-border-soft)] rounded-[20px] flex items-center justify-center shadow-md text-red-600">
        <Activity size={32} className="animate-pulse" />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">
          Tactical Link Initializing
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          Syncing analysis parameters...
        </p>
      </div>
      <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-red-600" style={{ width: '30%' }} />
      </div>
    </div>
  );
}
