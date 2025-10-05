import React from "react";
import { InputWrapper, StyledInput } from "./style";
import type { InputProps } from "./interfaces";

export const Input: React.FC<InputProps> = ({ leftIcon, width, ...props }) => {
  return (
    <InputWrapper width={String(width)}>
      {leftIcon}
      <StyledInput {...props} />
    </InputWrapper>
  );
};
