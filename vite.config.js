// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        // Split vendor and app code
        manualChunks: {
          react: ["react", "react-dom", "react-icons"],
          threejs: ["three", "@react-three/fiber", "@react-three/drei"],
          animation: ["gsap", "framer-motion"],
          utilities: ["react-scroll", "react-intersection-observer"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increasing warning limit (optional)
  },
});