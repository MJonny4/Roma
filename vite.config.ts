import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'preact'
    })
  ],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    minify: 'swc',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['preact']
        }
      }
    }
  }
})