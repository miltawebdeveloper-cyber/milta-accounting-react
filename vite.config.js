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
    assetsInlineLimit: 8096, // Increase to 8KB for small logo/icons base64 to save round-trips
    chunkSizeWarningLimit: 2000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router-dom"))
              return "react-core"; 

            if (id.includes("@mui") || id.includes("@emotion"))
              return "mui-framework"; 

            if (id.includes("swiper") || id.includes("framer-motion") || id.includes("slick")) 
              return "animation-vendor";

            return "vendors";
          }
        },
      },
    },

  },
});
