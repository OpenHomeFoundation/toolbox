import fs from 'fs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  publicDir: '../public',
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    {
      name: 'py-raw-loader',
      transform(code, id) {
        if (id.endsWith('.py')) {
          return { code: `export default ${JSON.stringify(code)};`, map: null };
        }
        return null;
      },
    },
    {
      name: 'html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && !req.url.includes('.') && !req.url.endsWith('/')) {
            // Try to find the HTML file in nested directories
            const htmlPath = path.join(server.config.root, req.url + '.html');
            if (fs.existsSync(htmlPath)) {
              req.url = req.url + '.html';
            } else {
              // Try to find index.html in a subdirectory
              const indexPath = path.join(
                server.config.root,
                req.url,
                'index.html'
              );
              if (fs.existsSync(indexPath)) {
                req.url = req.url + '/index.html';
              }
            }
          }
          next();
        });
      },
    },
  ],

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.py': 'text',
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dist/index.html'),
        vpe: resolve(__dirname, 'dist/vpe/index.html'),
        vpeInstall: resolve(__dirname, 'dist/vpe/install/index.html'),
        homeAssistantConnectZwa2: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/index.html'
        ),
        homeAssistantConnectZwa2Install: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/install/index.html'
        ),
        homeAssistantConnectZwa2InstallPortable: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/install-portable/index.html'
        ),
        homeAssistantConnectZwa2UsePoe: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/use-poe/index.html'
        ),
        zbt1: resolve(__dirname, 'dist/zbt1/index.html'),
        zbt1Install: resolve(__dirname, 'dist/zbt1/install/index.html'),
        improv: resolve(__dirname, 'dist/improv.html'),
      },
    },
  },
});
