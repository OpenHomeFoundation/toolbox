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
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Voice control documentation',
      description:
        'Complete guide to setting up voice control, wake words, and commands',
      href: 'https://www.home-assistant.io/voice_control/',
      label: 'Setup guide',
      variant: 'secondary',
      iconPath:
        'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z',
    },
    {
      title: 'Source code',
      description:
        'View the open-source Voice PE firmware code and contribute to development',
      href: 'https://github.com/esphome/home-assistant-voice-pe',
      label: 'GitHub repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'Product info',
      description:
        'Learn about Voice PE features, hardware specifications, and where to buy',
      href: 'https://www.home-assistant.io/voice-pe/',
      label: 'Product details',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
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
        'Flash the latest firmware directly to your ZWA-2 stick using our web-based toolbox',
      href: 'https://home-assistant.github.io/zwa2-toolbox/',
      label: 'Open toolbox',
      iconPath:
        'M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 4.3L19 8.2V10C19 15 16.2 18.7 12 19.8C7.8 18.7 5 15 5 10V8.2L12 4.3ZM11 16V18H13V16H11ZM15.07 11.25L16.5 12.68C15.14 14.04 13.1 14.04 11.74 12.68L13.16 11.25C13.95 12.04 15.28 12.04 16.07 11.25H15.07Z',
    },
    {
      title: 'Documentation',
      description:
        'User documentation, troubleshooting, and resources',
      href: 'https://support.nabucasa.com/hc/en-us/categories/28669861145885',
      label: 'Get support',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
    {
      title: 'Source code',
      description:
        'View the open-source toolbox code, contribute, or report issues',
      href: 'https://github.com/home-assistant/zwa2-toolbox',
      label: 'GitHub repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'Product info',
      description:
        'Learn more about the ZWA-2 specifications, compatibility, and features',
      href: 'https://www.home-assistant.io/connect/zwa-2/',
      label: 'Product page',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
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
      iconPath:
        'M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 4.3L19 8.2V10C19 15 16.2 18.7 12 19.8C7.8 18.7 5 15 5 10V8.2L12 4.3ZM11 16V18H13V16H11ZM15.07 11.25L16.5 12.68C15.14 14.04 13.1 14.04 11.74 12.68L13.16 11.25C13.95 12.04 15.28 12.04 16.07 11.25H15.07Z',
    },
    {
      title: 'Getting started',
      description:
        'Step-by-step guide to set up your ZBT-1 and connect Zigbee devices',
      href: 'https://home-assistant-skyconnect.netlify.app/',
      label: 'Setup guide',
      variant: 'secondary',
      iconPath:
        'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z',
    },
    {
      title: 'Documentation',
      description:
        'User documentation, troubleshooting, and resources',
      href: 'https://home-assistant-skyconnect.netlify.app/documentation/',
      label: 'View docs',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
    {
      title: 'Product info',
      description:
        'Learn more about Connect ZBT-1 product features and where to buy',
      href: 'https://www.home-assistant.io/connectzbt1',
      label: 'Product page',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
  ],
};

export const esphomeWebDetails: DetailsConfig = {
  hero: {
    title: 'ESPHome Web',
    subtitle: 'Install & manage ESPHome firmware',
    description:
      'Flash ESPHome firmware directly from your browser to ESP32, ESP8266, and Raspberry Pi Pico devices. No installation required. Just connect your device and get started with smart home automation.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Prepare device',
      description:
        'Connect and prepare your ESP32, ESP8266, or Pico device for ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Connect device',
      iconPath:
        'M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z',
    },
    {
      title: 'Raspberry Pi Pico',
      description:
        'Install ESPHome on Raspberry Pi Pico W for wireless home automation projects',
      href: 'https://web.esphome.io/?pico',
      label: 'Flash Pico',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z',
    },
    {
      title: 'View logs',
      description:
        'Monitor device logs in real-time to debug and verify your ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Open logs',
      variant: 'secondary',
      iconPath:
        'M3,3H21V5H3V3M4,6H20V8H4V6M3,9H21V11H3V9M4,12H20V14H4V12M3,15H21V17H3V15M4,18H20V20H4V18Z',
    },
    {
      title: 'ESPHome documentation',
      description:
        'Complete guide to ESPHome components, configuration, and advanced features',
      href: 'https://esphome.io/',
      label: 'Learn more',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Supported devices (GitHub)',
      description:
        'View known, tested devices and configurations for ESPHome media players',
      href: 'https://github.com/esphome/media-players',
      label: 'Open repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Supported devices (GitHub)',
      description:
        'View known, tested devices and configurations for Bluetooth proxies',
      href: 'https://github.com/esphome/bluetooth-proxies',
      label: 'Open repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'ESPHome docs',
      description:
        'Explore components and configuration options to build your device',
      href: 'https://esphome.io/',
      label: 'Open documentation',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
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
      iconPath:
        'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'BLE provisioning',
      description: 'Provision devices to Wi‑Fi over Bluetooth Low Energy',
      href: 'https://www.improv-wifi.com/ble/',
      label: 'Open BLE',
      variant: 'secondary',
      iconPath:
        'M12,2L19,8L12,14L5,8L12,2M12,10.5L15.5,8L12,5.5V10.5M12,18V22H10V18H12Z',
    },
    {
      title: 'Serial provisioning',
      description: 'Provision devices to Wi‑Fi over Serial / Web Serial',
      href: 'https://www.improv-wifi.com/serial/',
      label: 'Open serial',
      variant: 'secondary',
      iconPath:
        'M3,3H21V5H3V3M5,7H19V9H5V7M3,11H21V13H3V11M5,15H19V17H5V15M3,19H21V21H3V19Z',
    },
    {
      title: 'Developer Docs',
      description: 'Embed Improv in your firmware and websites',
      href: 'https://www.improv-wifi.com/code/',
      label: 'Open Docs',
      variant: 'secondary',
      iconPath: 'M9,7H15V9H9V7M9,11H15V13H9V11M9,15H15V17H9V15',
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
