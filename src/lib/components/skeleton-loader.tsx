// SkeletonLoader.tsx
import React from "react";

export default function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 h-64 w-full rounded-md"></div>
      <div className="bg-gray-200 h-8 w-1/2 rounded-md mt-4"></div>
      <div className="bg-gray-200 h-4 w-1/3 rounded-md mt-2"></div>
      <div className="bg-gray-200 h-4 w-3/4 rounded-md mt-4"></div>
      <div className="bg-gray-200 h-4 w-5/6 rounded-md mt-2"></div>
      <div className="bg-gray-200 h-4 w-4/5 rounded-md mt-2"></div>
    </div>
  );
}
