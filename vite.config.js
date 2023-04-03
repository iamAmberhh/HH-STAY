import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
/* global process */
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "/HH-STAY/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
