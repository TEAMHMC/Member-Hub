import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        rollupOptions: {
          input: {
            // The Hub itself.
            main: path.resolve(__dirname, 'index.html'),
            // No-login walkthrough for review and demo recording. Renders the
            // real Hub shell with two seeded demo members and no real data.
            // Marked noindex; it is reachable only to someone given the URL.
            'academy-preview': path.resolve(__dirname, 'academy-preview.html'),
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
