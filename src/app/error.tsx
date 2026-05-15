"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[Kadex:GlobalError]", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-20 h-20 bg-red-50 text-[#e11d2e] rounded-full flex items-center justify-center mb-6 shadow-sm">
            <AlertTriangle size={40} />
          </div>
          
          <h1 className="text-3xl font-black text-[#0f172a] tracking-tight uppercase italic mb-3">
            System Synchronization Failure
          </h1>
          
          <p className="text-[#475569] max-w-md mx-auto mb-10 leading-relaxed font-medium">
            O aplicativo encontrou um erro crítico inesperado. A interface Red Core foi interrompida para proteger a integridade dos dados táticos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => reset()}
              className="bg-[#e11d2e] text-white px-8 py-3 text-xs font-black uppercase tracking-widest rounded-lg shadow-lg shadow-red-100 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <RotateCcw size={16} /> Reiniciar Interface
            </button>
            
            <Link 
              href="/"
              className="px-8 py-3 bg-white border border-[#cbd5e1] text-[#0f172a] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#f1f5f9] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Home size={16} /> Voltar ao Início
            </Link>
          </div>

          {process.env.NODE_ENV !== "production" && (
            <div className="mt-12 p-6 bg-white rounded-xl border border-red-100 max-w-2xl w-full overflow-hidden text-left shadow-sm">
              <div className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Technical Diagnostics</div>
              <div className="text-[10px] font-mono text-slate-500 break-words bg-slate-50 p-4 rounded border border-slate-100 max-h-40 overflow-y-auto">
                {error.stack || error.message}
              </div>
            </div>
          )}
        </main>
      </body>
    </html>
  );
}
