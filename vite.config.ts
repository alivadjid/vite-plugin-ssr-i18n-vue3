import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  base: "/",
  plugins: [vue(), ssr({ prerender: true })],

  resolve: {
    alias: {
      "@": __dirname,
    },
  },
};

export default config;
