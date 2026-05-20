import React from "react";
import { PageHeaderSkeleton, SkeletonBlock, SkeletonCard } from "@/components/ui/Skeleton";

export default function AnalyzerLoading() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-10 rc-animate-fade pb-32">
      <PageHeaderSkeleton />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-[24px] h-32 animate-pulse shadow-sm" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
           <SkeletonBlock className="w-full h-[500px] rounded-[40px]" />
        </div>
        <div className="space-y-6">
           <SkeletonCard className="h-[240px]" />
           <SkeletonCard className="h-[240px]" />
        </div>
      </div>
    </div>
  );
}
