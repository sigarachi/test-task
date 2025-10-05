import React from "react";
import type { TextProps } from "./interfaces";
import { TextWrapper } from "./styles";

export const TextBlock: React.FC<TextProps> = ({
  variant,
  color = "primary",
  textAlign = "start",
  bold = false,
  children,
}) => {
  const Component = variant !== "body1" && variant !== "body2" ? variant : "p";

  return (
    <TextWrapper
      variant={variant}
      textAlign={textAlign}
      bold={bold}
      textColor={color}
    >
      <Component>{children}</Component>
    </TextWrapper>
  );
};
