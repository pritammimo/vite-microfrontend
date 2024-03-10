import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      remotes: {
        host: "http://localhost:5173/assets/remoteEntry.js",
        packagesApp:"http://localhost:5002/assets/remoteEntry.js"
      },
      exposes: {
        "./counter":"./src/counter",
        "./login":"./src/login",
        "./remotecomponent":"./src/component/Remotecomponent",
        "./productdetails":"./src/component/productdetails",
      },
      shared: ["react", "react-dom","react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});