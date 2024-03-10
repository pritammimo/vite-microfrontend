import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "packages_app",
      filename: "remoteEntry.js",
      // remotes: {
      //   host: "http://localhost:5173/assets/remoteEntry.js",
      // },
      exposes: {
        "./Button": "./src/Button",
        "./store": "./src/store",
        "./Queryprovider": "./src/QueryProvider",
        "./shadcn":"./src/components/ui/index",
        "./AuthLayout":"./src/layout/AuthLayout",
      },
      shared: ["react", "react-dom", "jotai","react-router-dom","@tanstack/react-query","@radix-ui/react-slot","class-variance-authority"],
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