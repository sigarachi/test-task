import React from "react";
import { ButtonWrapper } from "./style";

export const Button: React.FC<React.ComponentProps<"button">> = ({
  ...props
}) => {
  return <ButtonWrapper {...props}></ButtonWrapper>;
};
