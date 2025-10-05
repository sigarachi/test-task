import React from "react";
import { DividerLine } from "./style";
import type { DividerProps } from "./interfaces";

export const Divider: React.FC<DividerProps> = ({ width }) => {
  return <DividerLine width={width}></DividerLine>;
};
