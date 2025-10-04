import { useState } from "react";
import type { ThemeMode } from "../../../../@types/emotion";

export type UseAppTheme = {
  mode: ThemeMode;
  toggleMode: (value?: ThemeMode) => void;
};

export const getPreferredColorScheme = (): ThemeMode => {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  return "light";
};

export const useAppTheme = (): UseAppTheme => {
  const [mode, setMode] = useState<ThemeMode>(getPreferredColorScheme());

  const toggleMode = (value?: ThemeMode) => {
    setMode((prev) => value ?? (prev === "light" ? "dark" : "light"));
  };

  return {
    mode,
    toggleMode,
  };
};
