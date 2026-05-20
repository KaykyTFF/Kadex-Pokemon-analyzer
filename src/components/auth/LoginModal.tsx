"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, Lock, LogIn, User, ArrowLeft, ShieldCheck } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = "login" | "register";
type AuthTheme = "red-core" | "black";

/**
 * Google Icon SVG Component
 */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/**
 * LoginModal Component
 * Implements a premium, responsive authentication interface with theme support.
 */
export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controls CSS transitions
  const [mode, setMode] = useState<AuthMode>("login");
  const [theme, setTheme] = useState<AuthTheme>("red-core"); // "red-core" is the new default

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ... (Themes configuration remains same)
  const themes = {
    "red-core": {
      overlay: "bg-[#f8f7f4]/72",
      cardBg: "bg-white",
      cardBorder: "border-[rgba(225,29,46,0.14)]",
      accentGlow: "shadow-[0_20px_50px_rgba(225,29,46,0.08)]",
      inputBg: "bg-white",
      inputBorder: "border-[rgba(16,24,39,0.10)]",
      inputFocusRing: "focus:ring-[var(--rc-accent-primary)]/10",
      inputFocusBorder: "focus:border-[var(--rc-accent-primary)]/40",
      iconBg: "bg-slate-50",
      iconText: "text-slate-400",
      labelColor: "text-[#8a94a6]",
      dividerBg: "bg-white",
      footerText: "text-[#667085]",
      textPrimary: "text-[#101827]",
      textSecondary: "text-[#667085]",
      textMuted: "text-[#8a94a6]",
      socialBg: "bg-white",
      socialHover: "hover:bg-slate-50",
      socialText: "text-[#101827]"
    },
    "black": {
      overlay: "bg-black/80",
      cardBg: "bg-[#0d0d0f]/95",
      cardBorder: "border-white/10",
      accentGlow: "shadow-[0_0_50px_rgba(225,29,46,0.12)]",
      inputBg: "bg-white/[0.03]",
      inputBorder: "border-white/10",
      inputFocusRing: "focus:ring-[var(--rc-accent-primary)]/5",
      inputFocusBorder: "focus:border-[var(--rc-accent-primary)]/50",
      iconBg: "bg-white/5",
      iconText: "text-zinc-500",
      labelColor: "text-zinc-500",
      dividerBg: "bg-[#0d0d0f]",
      footerText: "text-zinc-500",
      textPrimary: "text-white",
      textSecondary: "text-zinc-500",
      textMuted: "text-zinc-600",
      socialBg: "bg-white/[0.03]",
      socialHover: "hover:bg-white/[0.07]",
      socialText: "text-white"
    }
  };

  const activeTheme = themes[theme];

  // Handle mounting for Portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle scroll lock and layout shift prevention
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      setIsAnimating(true);
      // Trigger entry animation slightly after mount
      timer = setTimeout(() => setIsVisible(true), 10);

      // 1. Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // 2. Lock scroll and compensate layout shift
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // Also compensate fixed headers if they exist
        const header = document.querySelector('header');
        if (header) {
          header.style.paddingRight = `${scrollbarWidth}px`;
        }
      }
    } else {
      setIsVisible(false); // Trigger exit animation
      
      timer = setTimeout(() => {
        setIsAnimating(false);

        // 3. Restore body and header styles
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        const header = document.querySelector('header');
        if (header) {
          header.style.paddingRight = "";
        }

        setMode("login"); 
      }, 500); // Wait for the transition to finish
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted || (!isOpen && !isAnimating)) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode} attempt:`, { name, email, password });
    alert(`Kadex: ${mode === 'login' ? 'Login' : 'Cadastro'} visual acionado.`);
  };

  const modalContent = (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
      role="presentation"
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 ${activeTheme.overlay} backdrop-blur-md transition-opacity duration-500`} 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Card */}
      <div 
        role="dialog" 
        aria-modal="true" 
        className={`relative w-full max-w-[440px] max-h-[90vh] flex flex-col ${activeTheme.cardBg} backdrop-blur-3xl border ${activeTheme.cardBorder} rounded-[2.5rem] ${activeTheme.accentGlow} overflow-hidden transition-all duration-500 transform ${isVisible ? (isOpen ? 'rc-animate-fade opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 blur-md') : 'opacity-0 translate-y-8 scale-95 blur-md'}`}
        style={theme === 'red-core' ? {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)), url("/images/pokemon-pattern.png")',
          backgroundSize: '420px auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        } : {}}
      >
        {/* Aesthetic Accents */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--rc-accent-primary)] to-transparent opacity-60 z-30" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--rc-accent-primary)]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[var(--rc-accent-primary)]/5 blur-[80px] rounded-full pointer-events-none" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className={`absolute top-6 right-6 p-2.5 ${activeTheme.textSecondary} hover:text-[var(--rc-accent-primary)] hover:bg-slate-100 rounded-full transition-all duration-200 z-30 outline-none`}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto scrollbar-stealth relative z-10 px-8 py-10 sm:px-10 sm:py-12">
          
          <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[22px] bg-[var(--rc-accent-primary)] text-white shadow-[0_12px_24px_rgba(225,29,46,0.2)] mb-2">
                 {mode === "login" ? <LogIn size={32} /> : <User size={32} />}
              </div>
              <div className="space-y-1">
                <h2 className={`text-3xl font-black ${activeTheme.textPrimary} uppercase italic tracking-tighter leading-none`}>
                  {mode === "login" ? "Entrar na " : "Criar Conta "}
                  <span className="text-[var(--rc-accent-primary)]">Kadex</span>
                </h2>
                <p className={`${activeTheme.textSecondary} font-medium text-sm`}>
                  {mode === "login" ? "Próxima geração de inteligência Pokémon." : "Junte-se à elite competitiva hoje."}
                </p>
              </div>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div className="space-y-1.5">
                  <label className={`text-[9px] font-black uppercase tracking-[0.25em] ${activeTheme.labelColor} ml-1`}>Seu Nome</label>
                  <div className="relative group">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl ${activeTheme.iconBg} border ${activeTheme.inputBorder} group-focus-within:border-[var(--rc-accent-primary)]/40 transition-all`}>
                      <User size={14} className={`${activeTheme.iconText} group-focus-within:text-[var(--rc-accent-primary)] transition-colors`} />
                    </div>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Red Ash"
                      className={`w-full ${activeTheme.inputBg} border ${activeTheme.inputBorder} ${activeTheme.textPrimary} rounded-[1.1rem] pl-14 pr-4 py-3.5 outline-none ${activeTheme.inputFocusBorder} focus:ring-4 ${activeTheme.inputFocusRing} transition-all placeholder:text-slate-300 font-medium text-sm`}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className={`text-[9px] font-black uppercase tracking-[0.25em] ${activeTheme.labelColor} ml-1`}>Identity / E-mail</label>
                <div className="relative group">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl ${activeTheme.iconBg} border ${activeTheme.inputBorder} group-focus-within:border-[var(--rc-accent-primary)]/40 transition-all`}>
                    <Mail size={14} className={`${activeTheme.iconText} group-focus-within:text-[var(--rc-accent-primary)] transition-colors`} />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="treinador@kadex.com"
                    className={`w-full ${activeTheme.inputBg} border ${activeTheme.inputBorder} ${activeTheme.textPrimary} rounded-[1.1rem] pl-14 pr-4 py-3.5 outline-none ${activeTheme.inputFocusBorder} focus:ring-4 ${activeTheme.inputFocusRing} transition-all placeholder:text-slate-300 font-medium text-sm`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between px-1">
                  <label className={`text-[9px] font-black uppercase tracking-[0.25em] ${activeTheme.labelColor}`}>Security / Senha</label>
                  {mode === "login" && (
                    <button type="button" className={`text-[9px] font-black uppercase tracking-widest text-[var(--rc-accent-primary)] hover:opacity-70 transition-opacity outline-none`}>
                      Esqueci?
                    </button>
                  )}
                </div>
                <div className="relative group">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl ${activeTheme.iconBg} border ${activeTheme.inputBorder} group-focus-within:border-[var(--rc-accent-primary)]/40 transition-all`}>
                    <Lock size={14} className={`${activeTheme.iconText} group-focus-within:text-[var(--rc-accent-primary)] transition-colors`} />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className={`w-full ${activeTheme.inputBg} border ${activeTheme.inputBorder} ${activeTheme.textPrimary} rounded-[1.1rem] pl-14 pr-4 py-3.5 outline-none ${activeTheme.inputFocusBorder} focus:ring-4 ${activeTheme.inputFocusRing} transition-all placeholder:text-slate-300 font-medium text-sm`}
                    required
                  />
                </div>
              </div>

              {mode === "register" && (
                <div className="space-y-1.5">
                  <label className={`text-[9px] font-black uppercase tracking-[0.25em] ${activeTheme.labelColor} ml-1`}>Confirm Security</label>
                  <div className="relative group">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl ${activeTheme.iconBg} border ${activeTheme.inputBorder} group-focus-within:border-[var(--rc-accent-primary)]/40 transition-all`}>
                      <ShieldCheck size={14} className={`${activeTheme.iconText} group-focus-within:text-[var(--rc-accent-primary)] transition-colors`} />
                    </div>
                    <input 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className={`w-full ${activeTheme.inputBg} border ${activeTheme.inputBorder} ${activeTheme.textPrimary} rounded-[1.1rem] pl-14 pr-4 py-3.5 outline-none ${activeTheme.inputFocusBorder} focus:ring-4 ${activeTheme.inputFocusRing} transition-all placeholder:text-slate-300 font-medium text-sm`}
                      required
                    />
                  </div>
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-[var(--rc-accent-primary)] hover:bg-[var(--rc-accent-secondary)] text-white font-black py-4 rounded-[1.1rem] shadow-[0_15px_30px_rgba(225,29,46,0.2)] flex items-center justify-center gap-3 transition-all active:scale-[0.98] uppercase tracking-widest text-xs mt-4 border border-white/10 group relative overflow-hidden"
              >
                <span className="relative z-10">{mode === "login" ? "Acessar Plataforma" : "Finalizar Cadastro"}</span>
                <LogIn size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>

            {/* Alternative Options */}
            <div className="space-y-6">
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${activeTheme.inputBorder}`}></div>
                </div>
                <div className={`relative flex justify-center text-[8px] uppercase tracking-[0.35em] font-black`}>
                  <span className={`${activeTheme.dividerBg} px-4 text-slate-400`}>Quick Connect</span>
                </div>
              </div>

              <button className={`w-full ${activeTheme.socialBg} ${activeTheme.socialHover} border ${activeTheme.inputBorder} ${activeTheme.socialText} font-bold py-3.5 rounded-[1.1rem] flex items-center justify-center gap-3 transition-all active:scale-[0.98] text-xs`}>
                <GoogleIcon className="w-4 h-4" />
                <span>Google Account</span>
              </button>
            </div>

            {/* Footer Navigation */}
            <div className="text-center pt-2">
              <p className={`text-[11px] ${activeTheme.footerText} font-medium`}>
                {mode === "login" ? "Ainda não tem acesso?" : "Já possui uma conta?"}
                <button 
                  onClick={() => setMode(mode === "login" ? "register" : "login")}
                  className="text-[var(--rc-accent-primary)] font-black uppercase tracking-widest hover:underline ml-1.5 outline-none"
                >
                  {mode === "login" ? "Registre-se agora" : "Entrar"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
