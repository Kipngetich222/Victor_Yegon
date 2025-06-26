// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";


// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: "dist",
//     rollupOptions: {
//       output: {
//         // Split vendor and app code
//         manualChunks: {
//           react: ["react", "react-dom", "react-icons"],
//           threejs: ["three", "@react-three/fiber", "@react-three/drei"],
//           animation: ["gsap", "framer-motion"],
//           utilities: ["react-scroll", "react-intersection-observer"],
//         },
//       },
//     },
//     chunkSizeWarningLimit: 1000, // Increasing warning limit (optional)
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-icons"],
          threejs: ["three", "@react-three/fiber", "@react-three/drei"],
          animation: ["gsap", "framer-motion"],
          utilities: ["react-scroll", "react-intersection-observer"],
        },
        // Ensure consistent chunk naming (avoids cache busting issues)
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  // Ensure static files (like .nojekyll) are copied to dist
  publicDir: "public",
});