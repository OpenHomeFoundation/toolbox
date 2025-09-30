import type { DetailsConfig } from '../components/details';

export const vpeDetails: DetailsConfig = {
  hero: {
    title: 'Home Assistant Voice PE',
    subtitle: 'Local Voice Control for Your Smart Home',
    description:
      'Experience the future of voice control with complete local processing. The Voice Preview Edition brings fast, private voice commands to your smart home without sending data to the cloud.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install Firmware',
      description:
        'Flash the latest Voice PE firmware directly to your device using our web installer',
      href: 'https://esphome.github.io/home-assistant-voice-pe/',
      label: 'Install Firmware',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Voice Control Setup',
      description:
        'Complete guide to setting up voice control, wake words, and commands',
      href: 'https://www.home-assistant.io/voice_control/',
      label: 'Setup Guide',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product Info',
      description:
        'Learn about Voice PE features, hardware specifications, and compatibility',
      href: 'https://www.home-assistant.io/voice-pe/',
      label: 'Product Details',
      variant: 'secondary',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Source Code',
      description:
        'View the open-source Voice PE firmware code and contribute to development',
      href: 'https://github.com/esphome/home-assistant-voice-pe',
      label: 'GitHub Repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const zwa2Details: DetailsConfig = {
  hero: {
    title: 'Home Assistant Connect ZWA-2',
    subtitle: '800 Series Z-Wave Long Range Stick',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant.',
    secondaryDescription:
      'Features the latest Z-Wave 800 series chip with Long Range support, SmartStart, and enhanced security for your smart home.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install/Update Firmware',
      description:
        'Flash the latest firmware directly to your ZWA-2 stick using our web-based toolbox',
      href: 'https://home-assistant.github.io/zwa2-toolbox/',
      label: 'Open Toolbox',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Documentation',
      description:
        'Complete setup guides, troubleshooting, and technical documentation',
      href: 'https://support.nabucasa.com/hc/en-us/categories/28669861145885',
      label: 'Get Support',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product Info',
      description:
        'Learn more about the ZWA-2 specifications, compatibility, and features',
      href: 'https://www.home-assistant.io/connect/zwa-2/',
      label: 'Product Page',
      variant: 'secondary',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Source Code',
      description: 'View the open-source Z-Wave firmware code',
      href: 'https://github.com/NabuCasa/zwave-firmware',
      label: 'GitHub Repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const zbt1Details: DetailsConfig = {
  hero: {
    title: 'Home Assistant Connect ZBT-1',
    subtitle: 'Zigbee 3.0 USB Coordinator',
    description:
      'The Home Assistant Connect ZBT-1 (formerly SkyConnect) is a powerful Zigbee 3.0 USB coordinator that connects your Zigbee devices to Home Assistant. Easy setup, reliable performance, and seamless integration.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Firmware Update',
      description:
        'Update your ZBT-1 coordinator firmware to the latest version directly from your browser',
      href: 'https://home-assistant-skyconnect.netlify.app/firmware-update/',
      label: 'Update Firmware',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Getting Started',
      description:
        'Step-by-step guide to set up your ZBT-1 and connect Zigbee devices',
      href: 'https://home-assistant-skyconnect.netlify.app/',
      label: 'Setup Guide',
      variant: 'secondary',
      icon: '/svgs/start.svg',
    },
    {
      title: 'Product Info',
      description:
        'Learn more about ZBT-1 specifications, compatibility, and features',
      href: 'https://www.home-assistant.io/connectzbt1',
      label: 'Product Page',
      variant: 'secondary',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Documentation',
      description:
        'Complete documentation, troubleshooting guides, and technical specifications',
      href: 'https://home-assistant-skyconnect.netlify.app/documentation/',
      label: 'View Docs',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
  ],
};

export const esphomeWebDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome Web',
    subtitle: 'Install & Manage ESPHome Firmware',
    description:
      'Flash ESPHome firmware directly from your browser to ESP32, ESP8266, and Raspberry Pi Pico devices. No installation required - just connect your device and get started with smart home automation.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Prepare Device',
      description:
        'Connect and prepare your ESP32, ESP8266 device for ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Connect Device',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Raspberry Pi Pico',
      description:
        'Install ESPHome on Raspberry Pi Pico W for wireless home automation projects',
      href: 'https://web.esphome.io/?pico',
      label: 'Flash Pico',
      variant: 'secondary',
      icon: '/svgs/raspberry.svg',
    },
    {
      title: 'ESPHome Documentation',
      description:
        'Complete guide to ESPHome components, configuration, and advanced features',
      href: 'https://esphome.io/',
      label: 'Learn More',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
  ],
};

export const mediaPlayerDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome Media Players',
    subtitle: 'Smart, connected audio powered by ESPHome',
    description:
      'Create an internet-connected media player that integrates with Home Assistant. Install ready-made firmware and explore supported devices.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (Ready‑Made Projects)',
      description:
        'Use the browser installer to flash a supported media player device',
      href: 'https://esphome.io/projects/index.html?type=media',
      label: 'Open Installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Source code',
      description:
        'View known, tested devices and configurations for ESPHome media players',
      href: 'https://github.com/esphome/media-players',
      label: 'Open Repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const bluetoothProxyDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome Bluetooth Proxy',
    subtitle: 'Extend Bluetooth reach for Home Assistant',
    description:
      'Turn ESP32 devices into Bluetooth proxies that forward BLE traffic to Home Assistant, improving coverage and reliability.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (Ready‑Made Projects)',
      description:
        'Use the browser installer to flash a supported Bluetooth proxy device',
      href: 'https://esphome.io/projects/index.html?type=bluetooth',
      label: 'Open Installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Source code',
      description:
        'View known, tested devices and configurations for Bluetooth proxies',
      href: 'https://github.com/esphome/bluetooth-proxies',
      label: 'Open Repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const emptyESPHomeDetails: DetailsConfig = {
  hero: {
    title: 'Empty ESPHome Device',
    subtitle: 'Start from a clean slate',
    description:
      'Install a minimal ESPHome firmware with no special features built-in. Perfect starting point to build your own device.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (Ready‑Made Projects)',
      description: 'Use the browser installer to flash an empty ESPHome device',
      href: 'https://esphome.io/projects/index.html?type=empty',
      label: 'Open Installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'ESPHome Docs',
      description:
        'Explore components and configuration options to build your device',
      href: 'https://esphome.io/',
      label: 'Open Documentation',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const improvDetails: DetailsConfig = {
  hero: {
    title: 'Improv Wi‑Fi',
    subtitle: 'Provision Wi‑Fi for devices without a custom app',
    description:
      'Use the open Improv protocol to provision Wi‑Fi via BLE or Serial from your browser. Great for makers and product developers.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Improv Wi‑Fi',
      description: 'Learn about the Improv protocol and supported transports',
      href: 'https://www.improv-wifi.com/',
      label: 'Open Website',
      icon: '/svgs/wifi.svg',
    },
    {
      title: 'BLE Provisioning',
      description: 'Provision devices to Wi‑Fi over Bluetooth Low Energy',
      href: 'https://www.improv-wifi.com/ble/',
      label: 'Open BLE',
      variant: 'secondary',
      icon: '/svgs/ble.svg',
    },
    {
      title: 'Serial Provisioning',
      description: 'Provision devices to Wi‑Fi over Serial / Web Serial',
      href: 'https://www.improv-wifi.com/serial/',
      label: 'Open Serial',
      variant: 'secondary',
      icon: '/svgs/serial.svg',
    },
    {
      title: 'SDK and code samples',
      description:
        'This page contains SDK and code samples to help you get started using Improv Wi-Fi in your projects.',
      href: 'https://www.improv-wifi.com/code/',
      label: 'Open SDK',
      variant: 'secondary',
      icon: '/svgs/code.svg',
    },
  ],
};

export type DetailsKey =
  | 'vpe'
  | 'zwa2'
  | 'zbt1'
  | 'esphome'
  | 'media'
  | 'bluetooth'
  | 'empty'
  | 'improv';
export const detailsByKey: Record<DetailsKey, DetailsConfig> = {
  vpe: vpeDetails,
  zwa2: zwa2Details,
  zbt1: zbt1Details,
  esphome: esphomeWebDetails,
  media: mediaPlayerDetails,
  bluetooth: bluetoothProxyDetails,
  empty: emptyESPHomeDetails,
  improv: improvDetails,
};
