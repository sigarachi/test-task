import React from "react";
import { InputWrapper, StyledInput } from "./style";
import type { InputProps } from "./interfaces";

export const Input: React.FC<InputProps> = ({ leftIcon, ...props }) => {
  return (
    <InputWrapper>
      {leftIcon}
      <StyledInput {...props} />
    </InputWrapper>
  );
};
