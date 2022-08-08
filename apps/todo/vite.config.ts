import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

const useDevMode = true;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...(useDevMode ? [] : [react({ fastRefresh: true })]),
    qiankun("Todo-mvc", {
      useDevMode,
    }),
  ],
  server: {
    port: 5174,
  },
  // base: "http://xxx.com/", TODO prod
});
