import React from "react";
import { PageHeaderSkeleton, GridSkeleton } from "@/components/ui/Skeleton";

export default function PokemonListLoading() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-10 rc-animate-fade pb-32">
      <PageHeaderSkeleton />
      <GridSkeleton count={18} />
    </div>
  );
}
