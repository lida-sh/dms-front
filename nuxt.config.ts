// https://nuxt.com/docs/api/configuration/nuxt-config
import 'reflect-metadata';
import { PROXY_CONFIG } from "./composables/api/api.config";
import visualizer from 'rollup-plugin-visualizer';
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@vueuse/nuxt",
    "six-dropzone",
    "six-dropzone",
    "@pinia/nuxt"
  ],
  build: {
    transpile: ["gsap", 'class-transformer'],
  },
  
  nitro: {
    devProxy: PROXY_CONFIG,
  },
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
      }
    },
    optimizeDeps: {
      include: ['reflect-metadata'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      }
      
  },
  plugins: [
    visualizer({
      open: true,
    }) as any, // استفاده از `as any` برای جلوگیری از خطاهای TypeScript
  ],}
});
