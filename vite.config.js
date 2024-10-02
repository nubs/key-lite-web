import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.KEY_LITE_WEB_PORT || 3001,
  },
});

export default viteConfig;
