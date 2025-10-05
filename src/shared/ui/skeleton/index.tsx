import React from "react";
import { SkeletonLoader } from "./style";

export const Skeleton: React.FC<{ br: string }> = ({ br }) => {
  return <SkeletonLoader br={br} />;
};
