import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Removing custom server entry to allow Vercel to use its default Node/Edge handler
export default defineConfig({
  tanstackStart: {
    server: { 
      preset: "vercel"
    },
  },
});
