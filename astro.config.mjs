// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always',
  },

  adapter: vercel(),

  // TODO: Agregar el dominio correcto
  site: "https://lucasco.dev/",
});