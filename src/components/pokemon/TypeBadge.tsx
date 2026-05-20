"use client";

import React from "react";
import { TYPE_COLORS } from "@/data/mock/data";

interface TypeBadgeProps {
  type?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * TypeBadge Component
 * Extremely hardened version to prevent any runtime crashes.
 */
export function TypeBadge({ type, size = "md" }: TypeBadgeProps) {
  // 1. Validate type is a non-empty string
  const hasType = typeof type === 'string' && type.trim().length > 0;
  const safeType = hasType ? type.trim() : "Unknown";
  
  // 2. Safe color lookup with default fallback
  // Using a robust fallback color (Gray)
  const defaultColors = { from: "#64748b", to: "#334155" };
  const colors = (TYPE_COLORS && TYPE_COLORS[safeType]) || defaultColors;
  
  // 3. Safe size handling
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[9px] rounded",
    md: "px-2.5 py-1 text-[10px] rounded-md",
    lg: "px-3 py-1.5 text-xs rounded-lg"
  };
  
  const currentSizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md;

  return (
    <span 
      className={`inline-flex items-center justify-center font-bold uppercase tracking-widest text-white select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.3)] ring-1 ring-black/20 ${currentSizeClass}`}
      style={{
        background: `linear-gradient(180deg, ${colors.from} 0%, ${colors.to} 100%)`,
        textShadow: "0px 1px 1px rgba(0,0,0,0.4)"
      }}
      title={`Type: ${safeType}`}
    >
      {safeType}
    </span>
  );
}
