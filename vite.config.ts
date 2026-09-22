import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Serve the Hub for addresses GitHub Pages has no file for.
 *
 * Pages serves static files, so it answered every path other than the root with its
 * own 404 page. `/academy`, `/events` and every course address were dead on arrival,
 * which meant a link to a course could not be pasted into a browser, a message or the
 * public site even once the app knew how to read it.
 *
 * Pages serves `404.html` for anything it cannot find, so the Hub's own shell placed
 * there boots and reads the path. The status stays 404, which is correct for a crawler
 * and invisible to a member, and the Hub is noindex today in any case.
 */
const pagesSpaFallback = (): Plugin => ({
  name: 'hmc-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const index = path.join(dist, 'index.html');
    if (fs.existsSync(index)) fs.copyFileSync(index, path.join(dist, '404.html'));
  },
});

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), pagesSpaFallback()],
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
