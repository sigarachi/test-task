import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme } from "./constants";

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
