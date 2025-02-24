// https://nuxt.com/docs/api/configuration/nuxt-config
import 'reflect-metadata';
import { PROXY_CONFIG } from "./composables/api/api.config";
import visualizer from 'rollup-plugin-visualizer';
import typescript from "@rollup/plugin-typescript";
// import swc from "rollup-plugin-swc";
import swc from "vite-plugin-swc-transform";
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
    plugins: [
      swc({
        swcOptions: {
          jsc: {
            target: "ES2021",
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
            },
            // externalHelpers: true,
          },
        },
      }),
  ],
  // esbuild: false,
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
      },
      
  },
  }
});
