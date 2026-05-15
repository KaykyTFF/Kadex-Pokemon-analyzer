import React from "react";

export function LoadingSkeleton({ variant = "card" }: { variant?: "card" | "list" | "slot" }) {
  if (variant === "slot") {
    return (
      <div className="h-24 bg-card border border-soft rounded-xl animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 bg-app rounded-full" />
        <div className="w-16 h-2 bg-app rounded" />
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="flex items-center gap-4 p-4 border border-soft rounded-lg animate-pulse">
        <div className="w-12 h-12 bg-app rounded" />
        <div className="flex-1 space-y-2">
          <div className="w-1/3 h-3 bg-app rounded" />
          <div className="w-1/4 h-2 bg-app rounded" />
        </div>
        <div className="w-16 h-3 bg-app rounded" />
      </div>
    );
  }

  return (
    <div className="bg-card border border-soft rounded-xl p-5 animate-pulse space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 bg-app rounded-lg" />
        <div className="flex-1 space-y-2">
          <div className="w-1/2 h-3 bg-app rounded" />
          <div className="w-1/3 h-2 bg-app rounded" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-12 h-4 bg-app rounded" />
        <div className="w-12 h-4 bg-app rounded" />
      </div>
      <div className="pt-4 border-t border-soft flex justify-between">
        <div className="w-20 h-2 bg-app rounded" />
        <div className="w-20 h-2 bg-app rounded" />
      </div>
    </div>
  );
}
