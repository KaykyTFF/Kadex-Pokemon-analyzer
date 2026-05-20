import React from "react";
import { PageHeaderSkeleton, GridSkeleton, SkeletonCard } from "@/components/ui/Skeleton";

export default function ItemsListLoading() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-10 rc-animate-fade pb-32">
      <PageHeaderSkeleton />
      <GridSkeleton count={12} Component={SkeletonCard} columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
    </div>
  );
}
