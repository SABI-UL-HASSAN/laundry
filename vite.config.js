import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['react-icons/fa'],
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },


})
