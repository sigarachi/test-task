import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@lib": `${path.resolve(__dirname, "./src/lib")}`,
      "@feature": `${path.resolve(__dirname, "./src/feature")}`,
      "@shared": `${path.resolve(__dirname, "./src/shared")}`,
    },
  },
});
