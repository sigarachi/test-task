import type React from "react";

export interface Icon extends React.ComponentProps<"svg"> {
  color: string;
}
