import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose the server to the network
  },
  build: {
    outDir: 'dist', // Specify the output directory
    sourcemap: true, // Generate source maps for debugging
    emptyOutDir: true, // Clean the output directory before building
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for the src directory
    },
  },
});
