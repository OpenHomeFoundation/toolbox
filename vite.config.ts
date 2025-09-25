import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  base: process.env.NODE_ENV === 'production' ? '/toolbox/' : '/',
});
