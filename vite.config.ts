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
      enforce: 'pre',
      load(id) {
        if (id.endsWith('.py') || id.endsWith('.txt')) {
          const content = fs.readFileSync(id, 'utf-8');
          return { code: `export default ${JSON.stringify(content)};`, map: null };
        }
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
              } else {
                // Unknown route: serve the 404 page
                req.url = '/404.html';
              }
            }
          }
          next();
        });
      },
    },
  ],

  optimizeDeps: {
    include: ['@nabucasa/sl-web-tools'],
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
        notFound: resolve(__dirname, 'dist/404.html'),
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
        homeAssistantConnectZwa2Recover: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/recover/index.html'
        ),
        homeAssistantConnectZwa2InstallController: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/install-controller/index.html'
        ),
        homeAssistantConnectZwa2InstallRepeater: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/install-repeater/index.html'
        ),
        homeAssistantConnectZwa2InstallZniffer: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/install-zniffer/index.html'
        ),
        homeAssistantConnectZwa2ConfigureZwa2: resolve(
          __dirname,
          'dist/home-assistant-connect-zwa-2/configure-zwa2/index.html'
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
