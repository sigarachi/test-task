import type { Theme } from "@emotion/react";
import type { Colors, ThemeMode } from "../../../../@types/emotion";

const ligthTheme: Colors = {
  bg: {
    base: "#FFFFFF",
    primary: "#F3F3F3",
  },
  stroke: {
    cardBorder: "#EDEDED",
    field: "#DDDDDD",
  },
  accent: {
    base: "#0084FF",
    hover: "#007AEC",
  },
  control: {
    base: "#F3F9FB",
    hover: "#E8F4F8",
  },
  text: {
    primary: "#333333",
    secondary: "#666666",
    teritary: "#999999",
    inverted: "#FFFFFF",
  },
};

const darkTheme: Colors = {
  bg: {
    base: "#151515",
    primary: "#3D3D3D",
  },
  stroke: {
    cardBorder: "#333333",
    field: "#333333",
  },
  accent: {
    base: "#0084FF",
    hover: "#007AEC",
  },
  control: {
    base: "#282C2D",
    hover: "#3D4344",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#999999",
    teritary: "#999999",
    inverted: "#FFFFFF",
  },
};

export const getTheme = (
  mode: ThemeMode,
  toggleMode: Theme["toggleMode"],
): Theme => {
  return {
    mode,
    toggleMode,
    colors: mode === "light" ? ligthTheme : darkTheme,
    breakPoints: {
      mobile: "768px",
      tablet: "890px",
      laptop: "992px",
      desktop: "1200px",
    },
  };
};
