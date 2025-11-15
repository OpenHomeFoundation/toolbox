import fs from 'fs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'dist',
  publicDir: '../public',
  base: './',
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

        if (id.endsWith('.txt')) {
          if (code.startsWith('export default "data:text/plain;base64,')) {
            const match = code.match(/data:text\/plain;base64,(.+?)"$/);
            if (match) {
              const base64Content = match[1];
              const decodedContent = Buffer.from(
                base64Content,
                'base64'
              ).toString('utf-8');
              return {
                code: `export default ${JSON.stringify(decodedContent)};`,
                map: null,
              };
            }
          }
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
        '.txt': 'text',
      },
    },
  },
  build: {
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dist/index.html'),
        homeAssistantVoicePreviewEdition: resolve(
          __dirname,
          'dist/home-assistant-voice-preview-edition/index.html'
        ),
        homeAssistantVoicePreviewEditionInstall: resolve(
          __dirname,
          'dist/home-assistant-voice-preview-edition/install/index.html'
        ),
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
        homeAssistantConnectZbt1: resolve(
          __dirname,
          'dist/home-assistant-connect-zbt-1/index.html'
        ),
        homeAssistantConnectZbt1Install: resolve(
          __dirname,
          'dist/home-assistant-connect-zbt-1/install/index.html'
        ),
        improv: resolve(__dirname, 'dist/improv/index.html'),
        homeAssistantConnectZbt2: resolve(
          __dirname,
          'dist/home-assistant-connect-zbt-2/index.html'
        ),
        homeAssistantConnectZbt2Install: resolve(
          __dirname,
          'dist/home-assistant-connect-zbt-2/install/index.html'
        ),
      },
    },
  },
});
