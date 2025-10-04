import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { getTheme } from "./constants";
import { useAppTheme } from "./use-app-theme";

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { mode, toggleMode } = useAppTheme();

  return (
    <EmotionThemeProvider theme={getTheme(mode, toggleMode)}>
      {children}
    </EmotionThemeProvider>
  );
};
