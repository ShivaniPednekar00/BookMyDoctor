// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/BookMyDoctor/", // this must match the GitHub repo name (case-sensitive)
  plugins: [react()],
});
