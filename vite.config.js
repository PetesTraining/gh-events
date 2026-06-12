import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    api: {
      host: 'localhost', // or 127.0.0.1 (Do not use 0.0.0.0)
      allowWrite: false, // Prevents editing code through the UI
      allowExec: false   // Prevents executing arbitrary code
    }
  },
});
