"use client";

import React, { useEffect } from "react";
import { ArrowLeft, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function PokemonError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Pokemon Detail Error]", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 rc-animate-fade">
      <div className="w-24 h-24 rounded-full bg-[var(--rc-danger)]/10 flex items-center justify-center text-[var(--rc-danger)] shadow-lg shadow-[var(--rc-danger)]/5">
        <RefreshCcw size={48} className="animate-spin-slow" />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[var(--rc-text-primary)]">
          Ops! Algo deu errado.
        </h1>
        <p className="text-[var(--rc-text-secondary)] font-medium max-w-md mx-auto">
          Ocorreu um erro ao carregar os detalhes do Pokémon. Isso pode ser um problema temporário de conexão ou dados.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <button
          onClick={() => reset()}
          className="rc-btn-primary px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <RefreshCcw size={16} />
          Tentar Novamente
        </button>
        
        <Link 
          href="/pokemon"
          className="px-8 py-3 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--rc-bg-muted)] transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <ArrowLeft size={16} />
          Voltar para Pokédex
        </Link>

        <Link 
          href="/"
          className="px-8 py-3 bg-[var(--rc-bg-muted)] text-[var(--rc-text-secondary)] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-[var(--rc-border-soft)] transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <Home size={16} />
          Home
        </Link>
      </div>
      
      {error.digest && (
        <div className="text-[10px] font-mono text-[var(--rc-text-muted)] opacity-50 pt-8">
          Error Digest: {error.digest}
        </div>
      )}
    </div>
  );
}
