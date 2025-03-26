"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="flex gap-8 p-6">
      {/* Left Side - Thumbnail Images */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-16 w-16 rounded-lg" />
        <Skeleton className="h-16 w-16 rounded-lg" />
        <Skeleton className="h-16 w-16 rounded-lg" />
        <Skeleton className="h-16 w-16 rounded-lg" />
      </div>

      {/* Main Product Image */}
      <div className="flex-1">
        <Skeleton className="h-[300px] w-[300px] rounded-lg" />
      </div>

      {/* Right Side - Product Details */}
      <div className="flex-1 space-y-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-12 w-full" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>

        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-36" />

        <div className="flex gap-4">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
