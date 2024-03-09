import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
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
      },
      shared: ["react", "react-dom", "jotai","react-router-dom","@tanstack/react-query"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});