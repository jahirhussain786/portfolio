import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Puts all dependencies into a separate 'vendor' chunk
          }
        },
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // This increases the limit to 1000 kB
  },
  plugins: [react()],
  base: "/portfolio/",
});
