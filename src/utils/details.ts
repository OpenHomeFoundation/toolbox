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
      title: 'Install firmware',
      description:
        'Flash the latest Voice PE firmware directly to your device using our web installer',
      href: 'https://esphome.github.io/home-assistant-voice-pe/',
      label: 'Install firmware',
      icon: '/svgs/install.svg',
    },
    {
      title: 'Voice control in Home Assistant',
      description:
        'Complete guide to setting up voice control, wake words, and commands',
      href: 'https://www.home-assistant.io/voice_control/',
      label: 'Setup guide',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Documentation',
      description:
        'Complete documentation, troubleshooting guides, and technical specifications',
      href: 'https://support.nabucasa.com/hc/en-us/categories/24451727188125-Home-Assistant-Voice-Preview-Edition',
      label: 'Get support',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn about Voice PE features, hardware specifications, and where to buy',
      href: 'https://www.home-assistant.io/voice-pe/',
      label: 'Product details',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Source code',
      description:
        'View the open-source Voice PE firmware code and contribute to development',
      href: 'https://github.com/esphome/home-assistant-voice-pe',
      label: 'GitHub Repository',
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
      title: 'Install original firmware',
      description:
        'The original firmware that allows to connect the ZWA-2 directly to Home Assistant hub via USB cable.',
      href: '/zwa2/install.html',
      label: 'Open original toolbox',
      icon: '/svgs/install.svg',
      trailingIcon: '/svgs/chevron-right.svg',
    },
    {
      title: 'Install portable Z-Wave firmware',
      description:
        'Place the ZWA-2 in the most optimal position and connect it to Home Assistant via Wi-Fi.',
      href: '/zwa2/install-portable.html',
      label: 'Open toolbox',
      icon: '/svgs/install.svg',
      trailingIcon: '/svgs/chevron-right.svg',
      experimental: true,
    },
    {
      title: 'Documentation',
      description: 'User documentation, troubleshooting, and resources',
      href: 'https://support.nabucasa.com/hc/en-us/categories/28669861145885',
      label: 'Get support',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn more about the Connect ZWA-2 features, specifications, and where to buy',
      href: 'https://www.home-assistant.io/connect/zwa-2/',
      label: 'Product page',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Source code',
      description: 'View the open-source Z-Wave firmware code',
      href: 'https://github.com/NabuCasa/zwave-firmware',
      label: 'GitHub Repository',
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
    // {
    //   title: 'Firmware update',
    //   description:
    //     'Update your Connect ZBT-1 firmware to the latest version directly from your browser',
    //   href: 'https://home-assistant-skyconnect.netlify.app/firmware-update/',
    //   label: 'Update firmware',
    //   icon: '/svgs/install.svg',
    // },
    {
      title: 'Documentation',
      description:
        'Complete documentation, troubleshooting guides, and technical specifications',
      href: 'https://support.nabucasa.com/hc/en-us/categories/24734620813469',
      label: 'View Docs',
      icon: '/svgs/doc.svg',
    },
    {
      title: 'Product info',
      description:
        'Learn more about Connect ZBT-1 product features, specifications, and where to buy',
      href: 'https://www.home-assistant.io/connectzbt1',
      label: 'Product page',
      icon: '/svgs/product.svg',
    },
    {
      title: 'Source code',
      description: 'View the open-source firmware code',
      href: 'https://github.com/NabuCasa/silabs-firmware-builder',
      label: 'GitHub Repository',
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
      title: 'Documentation',
      description: 'Learn about the Improv protocol and supported transports',
      href: 'https://www.improv-wifi.com/',
      label: 'Open website',
      icon: '/svgs/doc.svg',
    },
  ],
};

export type DetailsKey = 'vpe' | 'zwa2' | 'zbt1' | 'improv';
export const detailsByKey: Record<DetailsKey, DetailsConfig> = {
  vpe: vpeDetails,
  zwa2: zwa2Details,
  zbt1: zbt1Details,
  improv: improvDetails,
};
