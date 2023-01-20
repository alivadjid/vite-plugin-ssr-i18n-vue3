import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    vue(),
    ssr({ prerender: true, includeAssetsImportedByServer: true }),
  ],

  base: "/",

  resolve: {
    alias: {
      "@": __dirname,
    },
  },
};

export default config;
