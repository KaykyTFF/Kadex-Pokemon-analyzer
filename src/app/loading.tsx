import React from "react";
import { SkeletonBlock, SkeletonCard } from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-16 rc-animate-fade pb-32">
      <div className="flex flex-col items-center text-center space-y-8 mt-12">
        <SkeletonBlock className="w-24 h-24 rounded-full" />
        <SkeletonBlock className="w-64 md:w-96 h-16 rounded-xl" />
        <SkeletonBlock className="w-full max-w-2xl h-16 rounded-full" />
        <div className="flex gap-4">
          <SkeletonBlock className="w-32 h-12 rounded-full" />
          <SkeletonBlock className="w-32 h-12 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
