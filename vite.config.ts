import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8008,
  },
  resolve: {
    alias: {
      '@main': path.resolve(__dirname, './src/main'),
      '@resources': path.resolve(__dirname, './src/resources'),
    },
  }
})
