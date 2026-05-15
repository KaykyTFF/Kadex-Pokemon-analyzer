"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";

export default function AnalyzerError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for diagnostic purposes
    console.error("[Analyzer Error Context]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center rc-animate-fade">
      <div className="w-20 h-20 bg-red-50 text-[var(--rc-danger)] rounded-full flex items-center justify-center mb-6 shadow-sm">
        <AlertCircle size={40} />
      </div>
      
      <h1 className="text-3xl font-black text-[var(--rc-text-primary)] tracking-tight uppercase italic mb-3">
        Analyzer failed to load
      </h1>
      
      <p className="text-[var(--rc-text-secondary)] max-w-md mx-auto mb-10 leading-relaxed font-medium">
        Encontramos um problema técnico ao processar a análise tática do seu time. 
        Isso pode ser causado por um erro de renderização ou dados inconsistentes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => reset()}
          className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95"
        >
          <RotateCcw size={16} /> Tentar novamente
        </button>
        
        <Link 
          href="/builder"
          className="px-8 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <ArrowLeft size={16} /> Voltar para Builder
        </Link>
      </div>

      <div className="mt-12 p-4 bg-[var(--rc-bg-muted)] rounded-lg border border-[var(--rc-border-soft)] max-w-lg overflow-hidden">
        <div className="text-[9px] font-black text-[var(--rc-text-muted)] uppercase tracking-widest mb-1 text-left">Error ID</div>
        <code className="text-[10px] font-mono text-[var(--rc-text-secondary)] block truncate">
          {error.digest || "INTERNAL_UI_EXCEPTION"}
        </code>
      </div>
    </main>
  );
}
