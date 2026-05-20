import React from "react";

export const SkeletonBlock = ({ className = "" }: { className?: string }) => (
  <div className={`bg-slate-200/70 animate-pulse rounded-lg ${className}`} />
);

export const SkeletonText = ({ className = "", lines = 1 }: { className?: string; lines?: number }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div 
        key={i} 
        className={`bg-slate-200/70 animate-pulse rounded-full h-4 ${
          i === lines - 1 && lines > 1 ? 'w-2/3' : 'w-full'
        }`} 
      />
    ))}
  </div>
);

export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm ${className}`}>
    <SkeletonBlock className="h-12 w-12 rounded-2xl mb-4" />
    <SkeletonBlock className="w-1/2 h-5 rounded-md mb-3" />
    <SkeletonText lines={2} />
  </div>
);

export const PokemonCardSkeleton = () => (
  <div className="bg-white border border-slate-200 rounded-[24px] p-0 overflow-hidden shadow-sm animate-pulse">
    <div className="h-20 bg-slate-50 border-b border-slate-100" />
    <div className="px-5 pb-6 -mt-12 flex flex-col items-center">
      <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl mb-4 shadow-sm" />
      <SkeletonBlock className="w-24 h-5 rounded-md mb-2" />
      <SkeletonBlock className="w-16 h-3 rounded-md mb-4" />
      <div className="flex gap-2">
        <SkeletonBlock className="w-12 h-6 rounded-full" />
        <SkeletonBlock className="w-12 h-6 rounded-full" />
      </div>
    </div>
  </div>
);

export const PageHeaderSkeleton = () => (
  <div className="space-y-6 mb-8">
    <div className="space-y-3">
       <SkeletonBlock className="w-32 h-6 rounded-full" />
       <SkeletonBlock className="w-64 md:w-96 h-12 md:h-16 rounded-xl" />
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      <SkeletonBlock className="w-full md:w-[580px] h-14 rounded-[18px]" />
      <SkeletonBlock className="w-full md:w-32 h-14 rounded-[18px]" />
    </div>
  </div>
);

export const DetailHeroSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
    <div className="lg:col-span-5 h-[400px] bg-white border border-slate-200 rounded-[40px] animate-pulse shadow-sm" />
    <div className="lg:col-span-7 space-y-6 pt-4">
      <div className="flex gap-3">
        <SkeletonBlock className="w-20 h-8 rounded-full" />
        <SkeletonBlock className="w-20 h-8 rounded-full" />
      </div>
      <SkeletonBlock className="w-3/4 h-16 rounded-2xl" />
      <SkeletonText lines={4} className="mt-6" />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  </div>
);

export const GridSkeleton = ({ 
  count = 12, 
  Component = PokemonCardSkeleton,
  columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
}: { 
  count?: number; 
  Component?: React.ComponentType;
  columns?: string;
}) => (
  <div className={`grid ${columns} gap-6`}>
    {Array.from({ length: count }).map((_, i) => (
      <Component key={i} />
    ))}
  </div>
);
