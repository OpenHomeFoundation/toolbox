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
    subtitle: 'Zooz 800 Series Z-Wave Long Range Stick',
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

export type DetailsKey = 'vpe' | 'zwa2';
export const detailsByKey: Record<DetailsKey, DetailsConfig> = {
  vpe: vpeDetails,
  zwa2: zwa2Details,
};
