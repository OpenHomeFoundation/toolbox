import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vpe: resolve(__dirname, 'vpe/index.html'),
        vpeInstall: resolve(__dirname, 'vpe/install.html'),
        homeAssistantConnectZwa2: resolve(
          __dirname,
          'home-assistant-connect-zwa-2/index.html'
        ),
        homeAssistantConnectZwa2Install: resolve(
          __dirname,
          'home-assistant-connect-zwa-2/install.html'
        ),
        homeAssistantConnectZwa2InstallPortable: resolve(
          __dirname,
          'home-assistant-connect-zwa-2/install-portable.html'
        ),
        homeAssistantConnectZwa2UsePoe: resolve(
          __dirname,
          'home-assistant-connect-zwa-2/use-poe.html'
        ),
        zbt1: resolve(__dirname, 'zbt1.html'),
        improv: resolve(__dirname, 'improv.html'),
      },
    },
  },
});
