import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Removing custom server entry to allow Vercel to use its default Node/Edge handler
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { 
      preset: "vercel"
    },
  },
});
