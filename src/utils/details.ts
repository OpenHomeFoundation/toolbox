import type { DetailsConfig } from '../components/details';

export const vpeDetails: DetailsConfig = {
  hero: {
    title: 'Home Assistant Voice Preview Edition',
    subtitle: 'Local voice control for your smart home',
    description:
      'Experience the future of voice control with complete local processing. The Voice Preview Edition brings fast, private voice commands to your smart home without sending data to the cloud.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install firmware',
      description:
        'Flash the latest Voice PE firmware directly to your device using our web installer',
      href: 'https://esphome.github.io/home-assistant-voice-pe/',
      label: 'Install firmware',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Voice control documentation',
      description:
        'Complete guide to setting up voice control, wake words, and commands',
      href: 'https://www.home-assistant.io/voice_control/',
      label: 'Setup guide',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn about Voice PE features, hardware specifications, and where to buy',
      href: 'https://www.home-assistant.io/voice-pe/',
      label: 'Product details',
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
    subtitle: '800 series Z-Wave Long Range adapter',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant.',
    secondaryDescription:
      'Features the latest Z-Wave 800 series chip with Long Range support, SmartStart, and enhanced security for your smart home.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install/update firmware',
      description:
        'Flash the latest firmware directly to your Connect ZWA-2 using our web-based toolbox',
      href: 'https://home-assistant.github.io/zwa2-toolbox/',
      label: 'Open toolbox',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Documentation',
      description: 'User documentation, troubleshooting, and resources',
      href: 'https://support.nabucasa.com/hc/en-us/categories/28669861145885',
      label: 'Get support',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn more about the Connect ZWA-2 features, specifications, and where to buy',
      href: 'https://www.home-assistant.io/connect/zwa-2/',
      label: 'Product page',
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
    subtitle: 'Zigbee 3.0 USB adapter',
    description:
      'The Home Assistant Connect ZBT-1 (formerly SkyConnect) is a powerful Zigbee 3.0 USB adapter that connects your Zigbee devices to Home Assistant. Easy setup, reliable performance, and seamless integration.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Firmware update',
      description:
        'Update your Connect ZBT-1 firmware to the latest version directly from your browser',
      href: 'https://home-assistant-skyconnect.netlify.app/firmware-update/',
      label: 'Update firmware',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Getting started',
      description:
        'Step-by-step guide to set up your Connect ZBT-1 and connect Zigbee devices',
      href: 'https://home-assistant-skyconnect.netlify.app/',
      label: 'Setup guide',
      variant: 'secondary',
      icon: '/svgs/start.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn more about Connect ZBT-1 product features, specifications, and where to buy',
      href: 'https://www.home-assistant.io/connectzbt1',
      label: 'Product page',
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
    subtitle: 'Install and manage ESPHome firmware',
    description:
      'Flash ESPHome firmware directly from your browser to ESP32, ESP8266, and Raspberry Pi Pico devices. No installation required. Just connect your device and get started with smart home automation.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Prepare device',
      description:
        'Connect and prepare your ESP32, ESP8266 device for ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Connect device',
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
      title: 'View logs',
      description:
        'Monitor device logs in real-time to debug and verify your ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Open logs',
      variant: 'secondary',
      icon: '/svgs/raspberry.svg',
    },
    {
      title: 'ESPHome documentation',
      description:
        'Complete guide to ESPHome components, configuration, and advanced features',
      href: 'https://esphome.io/',
      label: 'Learn more',
      variant: 'secondary',
      icon: '/svgs/doc.svg',
    },
  ],
};

export const mediaPlayerDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome media players',
    subtitle: 'Smart, connected audio powered by ESPHome',
    description:
      'Create an internet-connected media player that integrates with Home Assistant. Install ready-made firmware and explore supported devices.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (ready‑made projects)',
      description:
        'Use the browser installer to flash a supported media player device',
      href: 'https://esphome.io/projects/index.html?type=media',
      label: 'Open installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Source code',
      description:
        'View known, tested devices and configurations for ESPHome media players',
      href: 'https://github.com/esphome/media-players',
      label: 'Open repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const bluetoothProxyDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome Bluetooth proxy',
    subtitle: 'Extend Bluetooth reach for Home Assistant',
    description:
      'Turn ESP32 devices into Bluetooth proxies that forward BLE traffic to Home Assistant, improving coverage and reliability.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (ready‑made projects)',
      description:
        'Use the browser installer to flash a supported Bluetooth proxy device',
      href: 'https://esphome.io/projects/index.html?type=bluetooth',
      label: 'Open installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Source code',
      description:
        'View known, tested devices and configurations for Bluetooth proxies',
      href: 'https://github.com/esphome/bluetooth-proxies',
      label: 'Open repository',
      variant: 'secondary',
      icon: '/svgs/github.svg',
    },
  ],
};

export const emptyESPHomeDetails: DetailsConfig = {
  hero: {
    title: 'Empty ESPHome device',
    subtitle: 'Start from a clean slate',
    description:
      'Install a minimal ESPHome firmware with no special features built-in. Perfect starting point to build your own device.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install (ready‑made projects)',
      description: 'Use the browser installer to flash an empty ESPHome device',
      href: 'https://esphome.io/projects/index.html?type=empty',
      label: 'Open installer',
      icon: '/svgs/install.svg',
    },
    {
      title: 'ESPHome docs',
      description:
        'Explore components and configuration options to build your device',
      href: 'https://esphome.io/',
      label: 'Open documentation',
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
      label: 'Open website',
      icon: '/svgs/wifi.svg',
    },
    {
      title: 'BLE provisioning',
      description: 'Provision devices to Wi‑Fi over Bluetooth Low Energy',
      href: 'https://www.improv-wifi.com/ble/',
      label: 'Open BLE',
      variant: 'secondary',
      icon: '/svgs/ble.svg',
    },
    {
      title: 'Serial provisioning',
      description: 'Provision devices to Wi‑Fi over Serial / Web Serial',
      href: 'https://www.improv-wifi.com/serial/',
      label: 'Open serial',
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
