import React from "react";
import type { FlexProps } from "./interfaces";
import { StyledFlexWrapper } from "./style";

export const FlexLayout: React.FC<FlexProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <StyledFlexWrapper {...props}>{children}</StyledFlexWrapper>;
};
