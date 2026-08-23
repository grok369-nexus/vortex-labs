// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // ✅ default dev server port
    open: true, // ✅ auto-open browser on dev start
  },
  build: {
    outDir: "dist", // ✅ production build output
  },
});
