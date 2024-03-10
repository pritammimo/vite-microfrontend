import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        packagesApp:"http://localhost:5002/assets/remoteEntry.js"
      },
      exposes: {
        "./dashboard":"./src/dashboard",
      },
      shared: ["react", "react-dom","react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
