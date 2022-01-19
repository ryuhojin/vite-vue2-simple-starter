import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin } from 'vite-plugin-vue2'
import viteCompression from 'vite-plugin-compression';
import path from 'path';

const HOST = "0.0.0.0"
const PORT = 3000;
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default defineConfig({
  base: "./",
  server: {
    host: HOST,
    port: PORT,
  },
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: REPLACEMENT,
      },
      {
        find: 'src/',
        replacement: REPLACEMENT,
      },
    ],
  },
  plugins: [
    createVuePlugin(/* options */),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    viteCompression()
  ],
})
