import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",               
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ fine
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  build: {
    target: "es2018",
    minify: "esbuild",
    sourcemap: false,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1600,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom"))
              return "react-vendor";          // ✅ fine

            if (id.includes("@mui") || id.includes("@emotion"))
              return "mui-vendor";            // ✅ fine

            if (id.includes("swiper")) return "swiper-vendor";
            if (id.includes("chart") || id.includes("recharts"))
              return "chart-vendor";

            return "vendor";
          }
        },
      },
    },
  },
});
