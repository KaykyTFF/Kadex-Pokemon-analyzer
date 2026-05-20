import React from "react";
import { DetailHeroSkeleton } from "@/components/ui/Skeleton";

export default function AbilityDetailLoading() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-10 rc-animate-fade pb-32">
      <DetailHeroSkeleton />
    </div>
  );
}
