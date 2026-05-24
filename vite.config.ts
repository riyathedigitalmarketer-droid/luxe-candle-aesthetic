import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindcss(),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
  ],
  resolve: {
    alias: { "@": "/src" },
  },
});
