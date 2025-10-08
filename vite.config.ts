import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vpe: resolve(__dirname, 'vpe/index.html'),
        vpeInstall: resolve(__dirname, 'vpe/install.html'),
        zwa2: resolve(__dirname, 'zwa2/index.html'),
        zwa2Install: resolve(__dirname, 'zwa2/install.html'),
        zwa2InstallPortable: resolve(__dirname, 'zwa2/install-portable.html'),
        zwa2UsePoe: resolve(__dirname, 'zwa2/use-poe.html'),
        zbt1: resolve(__dirname, 'zbt1.html'),
        improv: resolve(__dirname, 'improv.html'),
      },
    },
  },
});
