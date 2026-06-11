import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitLab Pages serves the site under /<project-name>/
  base: process.env.CI ? '/rakshit0702-project/' : '/',
  server: {
    proxy: {
      // Forward API calls to the Node.js backend during development
      '/api': 'http://localhost:3001'
    }
  }
});
