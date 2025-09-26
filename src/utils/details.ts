import type { DetailsConfig } from '../components/details';

export const vpeDetails: DetailsConfig = {
  hero: {
    title: 'Home Assistant Voice Preview Edition',
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
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Voice Control Setup',
      description:
        'Complete guide to setting up voice control, wake words, and commands',
      href: 'https://www.home-assistant.io/voice_control/',
      label: 'Setup Guide',
      variant: 'secondary',
      iconPath:
        'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z',
    },
    {
      title: 'Source Code',
      description:
        'View the open-source Voice PE firmware code and contribute to development',
      href: 'https://github.com/esphome/home-assistant-voice-pe',
      label: 'GitHub Repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'Product Info',
      description:
        'Learn about Voice PE features, hardware specifications, and compatibility',
      href: 'https://www.home-assistant.io/voice-pe/',
      label: 'Product Details',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
  ],
  features: {
    title: 'Voice PE Key Features',
    items: [
      {
        iconPath:
          'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z',
        header: '100% Local Processing',
        text: 'All voice processing happens locally - no cloud required for maximum privacy',
      },
      {
        iconPath:
          'M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L13.5,2.5L16.17,5.33L10.83,10.67L5.33,5.17L6.5,4L5,2.5L3.83,3.67L1,6.5L2.5,8L5.33,5.17L10.67,10.5L5.17,16L2.5,13.33L1,14.83L3.67,17.5L6.5,20.33L8,18.83L5.17,16L10.5,10.67L16,16.17L18.33,13.83L17.5,13L19,11.5L22,14.5V9H21Z',
        header: 'Fast Response',
        text: 'Lightning-fast voice recognition and command execution without internet delays',
      },
      {
        iconPath:
          'M12,14C10.89,14 10,13.1 10,12C10,10.89 10.89,10 12,10C13.11,10 14,10.89 14,12C14,13.1 13.11,14 12,14M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z',
        header: 'Wake Word Detection',
        text: 'Customizable wake words with accurate detection powered by openWakeWord',
      },
      {
        iconPath:
          'M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5A3.5,3.5 0 0,0 6.5,14A3.5,3.5 0 0,0 10,10.5V7H14V10.5A3.5,3.5 0 0,0 17.5,14A3.5,3.5 0 0,0 21,10.5V7A1,1 0 0,0 20,6H8A1,1 0 0,0 7,7V10.5A3.5,3.5 0 0,0 10.5,14A3.5,3.5 0 0,0 14,10.5Z',
        header: 'ESPHome Powered',
        text: 'Built on ESPHome for easy customization and integration with existing setups',
      },
    ],
  },
};

export const zwa2Details: DetailsConfig = {
  hero: {
    title: 'Home Assistant Connect ZWA-2',
    subtitle: '800 Series Z-Wave Long Range Stick',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant. Features the latest Z-Wave 800 series chip with Long Range support, SmartStart, and enhanced security for your smart home.',
  },
  actions: [
    {
      variant: 'primary',
      title: 'Install/Update Firmware',
      description:
        'Flash the latest firmware directly to your ZWA-2 stick using our web-based toolbox',
      href: 'https://home-assistant.github.io/zwa2-toolbox/',
      label: 'Open Toolbox',
      iconPath:
        'M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 4.3L19 8.2V10C19 15 16.2 18.7 12 19.8C7.8 18.7 5 15 5 10V8.2L12 4.3ZM11 16V18H13V16H11ZM15.07 11.25L16.5 12.68C15.14 14.04 13.1 14.04 11.74 12.68L13.16 11.25C13.95 12.04 15.28 12.04 16.07 11.25H15.07Z',
    },
    {
      title: 'Documentation',
      description:
        'Complete setup guides, troubleshooting, and technical documentation',
      href: 'https://support.nabucasa.com/hc/en-us/categories/28669861145885',
      label: 'Get Support',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
    {
      title: 'Source Code',
      description:
        'View the open-source toolbox code, contribute, or report issues',
      href: 'https://github.com/home-assistant/zwa2-toolbox',
      label: 'GitHub Repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'Product Info',
      description:
        'Learn more about the ZWA-2 specifications, compatibility, and features',
      href: 'https://www.home-assistant.io/connect/zwa-2/',
      label: 'Product Page',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
  ],
  features: {
    title: 'ZWA-2 Key Features',
    items: [
      {
        iconPath:
          'M9,11H7L9,13L11,11H9V9H11L9,7L7,9H9V11M13,7H15L13,5L11,7H13V9H11L13,11L15,9H13V7M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
        header: 'Z-Wave Long Range',
        text: 'Extended range up to 1+ mile line of sight with Z-Wave LR support',
      },
      {
        iconPath:
          'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z',
        header: 'SmartStart',
        text: 'Add devices to your network using QR codes for instant setup',
      },
      {
        iconPath:
          'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z',
        header: 'S2 Security',
        text: 'Enhanced security with the latest Z-Wave Plus v2 encryption',
      },
      {
        iconPath:
          'M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H13V15H15V13H21V11H15V9Z',
        header: '800 Series Chip',
        text: 'Latest generation Silicon Labs 800 series Z-Wave controller',
      },
    ],
  },
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
      iconPath:
        'M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2ZM12 4.3L19 8.2V10C19 15 16.2 18.7 12 19.8C7.8 18.7 5 15 5 10V8.2L12 4.3ZM11 16V18H13V16H11ZM15.07 11.25L16.5 12.68C15.14 14.04 13.1 14.04 11.74 12.68L13.16 11.25C13.95 12.04 15.28 12.04 16.07 11.25H15.07Z',
    },
    {
      title: 'Getting Started',
      description:
        'Step-by-step guide to set up your ZBT-1 and connect Zigbee devices',
      href: 'https://home-assistant-skyconnect.netlify.app/',
      label: 'Setup Guide',
      variant: 'secondary',
      iconPath:
        'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z',
    },
    {
      title: 'Documentation',
      description:
        'Complete documentation, troubleshooting guides, and technical specifications',
      href: 'https://home-assistant-skyconnect.netlify.app/documentation/',
      label: 'View Docs',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
    {
      title: 'Product Info',
      description:
        'Learn more about ZBT-1 specifications, compatibility, and features',
      href: 'https://www.home-assistant.io/connectzbt1',
      label: 'Product Page',
      variant: 'secondary',
      iconPath:
        'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
  ],
  features: {
    title: 'ZBT-1 Key Features',
    items: [
      {
        iconPath:
          'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z',
        header: 'Zigbee 3.0',
        text: 'Full Zigbee 3.0 support for maximum device compatibility and reliability',
      },
      {
        iconPath:
          'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z',
        header: 'Silicon Labs EFR32MG21',
        text: 'Powerful Silicon Labs chip with hardware encryption and advanced features',
      },
      {
        iconPath:
          'M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z',
        header: 'Multi-Protocol Ready',
        text: 'Upgradeable firmware supports both Zigbee and Thread protocols',
      },
      {
        iconPath:
          'M12,3L2,12H5V20H19V12H22L12,3M11.5,18V14.5H9L13,7V10.5H15.5L11.5,18Z',
        header: 'USB-C Connection',
        text: 'Modern USB-C connector for easy plug-and-play setup with any system',
      },
    ],
  },
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
        'Connect and prepare your ESP32, ESP8266, or Pico device for ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Connect Device',
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
      title: 'View Logs',
      description:
        'Monitor device logs in real-time to debug and verify your ESPHome installation',
      href: 'https://web.esphome.io/',
      label: 'Open Logs',
      variant: 'secondary',
      iconPath:
        'M3,3H21V5H3V3M4,6H20V8H4V6M3,9H21V11H3V9M4,12H20V14H4V12M3,15H21V17H3V15M4,18H20V20H4V18Z',
    },
    {
      title: 'ESPHome Documentation',
      description:
        'Complete guide to ESPHome components, configuration, and advanced features',
      href: 'https://esphome.io/',
      label: 'Learn More',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
  ],
  features: {
    title: 'ESPHome Web Key Features',
    items: [
      {
        iconPath:
          'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M16.59,7.58L10,14.17L7.41,11.59L6,13L10,17L18,9L16.59,7.58Z',
        header: 'Browser-Based Installation',
        text: 'No software to install - flash firmware directly from your web browser using WebSerial',
      },
      {
        iconPath:
          'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z',
        header: 'Pre-Built Configurations',
        text: 'Choose from ready-made configurations for common use cases like sensors and switches',
      },
      {
        iconPath:
          'M3,3H21V5H3V3M4,6H20V8H4V6M3,9H21V11H3V9M4,12H20V14H4V12M3,15H21V17H3V15M4,18H20V20H4V18Z',
        header: 'Real-Time Logs',
        text: 'View live logs from your device to monitor status and troubleshoot issues instantly',
      },
      {
        iconPath:
          'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z',
        header: 'Multi-Device Support',
        text: 'Works with ESP32, ESP8266, ESP32-S2/S3/C3, and Raspberry Pi Pico W',
      },
    ],
  },
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open Installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Supported Devices (GitHub)',
      description:
        'View known, tested devices and configurations for ESPHome media players',
      href: 'https://github.com/esphome/media-players',
      label: 'Open Repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
  ],
  features: {
    title: 'Media Player Features',
    items: [
      {
        iconPath:
          'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M10,8L16,12L10,16V8Z',
        header: 'Audio Playback',
        text: 'Stream and control audio from Home Assistant with volume and mute',
      },
      {
        iconPath:
          'M12,2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4A8,8 0 0,1 20,12H22A10,10 0 0,0 12,2Z',
        header: 'Device Integrations',
        text: 'Tested configs for M5Stack and Raspiaudio devices',
      },
      {
        iconPath: 'M3,3H21V5H3V3M4,6H20V8H4V6M3,9H21V11H3V9M4,12H20V14H4V12',
        header: 'Browser Installer',
        text: 'Flash supported devices directly from your browser',
      },
    ],
  },
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open Installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'Supported Devices (GitHub)',
      description:
        'View known, tested devices and configurations for Bluetooth proxies',
      href: 'https://github.com/esphome/bluetooth-proxies',
      label: 'Open Repository',
      variant: 'secondary',
      iconPath:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
    },
  ],
  features: {
    title: 'Bluetooth Proxy Features',
    items: [
      {
        iconPath:
          'M12,2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4A8,8 0 0,1 20,12H22A10,10 0 0,0 12,2Z',
        header: 'Improved Coverage',
        text: 'Place proxies around your home to improve BLE signal coverage',
      },
      {
        iconPath:
          'M12,20A8,8 0 0,1 4,12H2A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20Z',
        header: 'Home Assistant Integration',
        text: 'Devices auto-discovered and integrated via ESPHome',
      },
      {
        iconPath:
          'M12,2C6.48,2 2,6.48 2,12H6C6,8.69 8.69,6 12,6C15.31,6 18,8.69 18,12H22C22,6.48 17.52,2 12,2Z',
        header: 'Ethernet Options',
        text: 'Devices with Ethernet can disable Wi‑Fi for wired reliability',
      },
    ],
  },
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
      href: 'https://esphome.io/projects/index.html',
      label: 'Open Installer',
      iconPath: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    },
    {
      title: 'ESPHome Docs',
      description:
        'Explore components and configuration options to build your device',
      href: 'https://esphome.io/',
      label: 'Open Documentation',
      variant: 'secondary',
      iconPath:
        'M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
    },
  ],
  features: {
    title: 'Why start empty?',
    items: [
      {
        iconPath:
          'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
        header: 'Maximum Flexibility',
        text: 'Add only the components you need for your project',
      },
      {
        iconPath: 'M9,7H15V9H9V7M9,11H15V13H9V11M9,15H15V17H9V15',
        header: 'Simple Base',
        text: 'Start with minimal config and grow as requirements evolve',
      },
      {
        iconPath: 'M3,3H21V5H3V3M4,6H20V8H4V6',
        header: 'Browser Install',
        text: 'Get a device online quickly with WebSerial-based flashing',
      },
    ],
  },
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
      iconPath:
        'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    },
    {
      title: 'BLE Provisioning',
      description: 'Provision devices to Wi‑Fi over Bluetooth Low Energy',
      href: 'https://www.improv-wifi.com/ble/',
      label: 'Open BLE',
      variant: 'secondary',
      iconPath:
        'M12,2L19,8L12,14L5,8L12,2M12,10.5L15.5,8L12,5.5V10.5M12,18V22H10V18H12Z',
    },
    {
      title: 'Serial Provisioning',
      description: 'Provision devices to Wi‑Fi over Serial / Web Serial',
      href: 'https://www.improv-wifi.com/serial/',
      label: 'Open Serial',
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
  features: {
    title: 'Improv Highlights',
    items: [
      {
        iconPath:
          'M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2Z',
        header: 'Open Protocol',
        text: 'Royalty‑free, open standard for Wi‑Fi provisioning',
      },
      {
        iconPath:
          'M12,2A10,10 0 0,0 2,12H6A6,6 0 0,1 12,6A6,6 0 0,1 18,12H22A10,10 0 0,0 12,2Z',
        header: 'Multiple Transports',
        text: 'Supports BLE and Serial transports with web demos',
      },
      {
        iconPath: 'M12,2A10,10 0 0,0 2,12H8L12,8L16,12H22A10,10 0 0,0 12,2Z',
        header: 'Easy UX',
        text: 'Simple guided flow works directly in modern browsers',
      },
    ],
  },
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
