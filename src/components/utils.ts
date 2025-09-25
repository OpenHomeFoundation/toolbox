export interface ToolLink {
  text: string;
  url: string;
  primary?: boolean;
}

export interface ToolDefinition {
  title: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  links: ToolLink[];
}

export const tools: ToolDefinition[] = [
  {
    title: 'Home Assistant Connect ZWA-2',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant.',
    image: '/images/zwa2.webp',
    url: '#',
    links: [
      {
        text: 'Configure Device',
        url: 'https://home-assistant.github.io/zwa2-toolbox/',
        primary: true,
      },
      { text: 'GitHub', url: 'https://github.com/home-assistant/zwa2-toolbox' },
    ],
  },
  {
    title: 'Home Assistant Voice Preview Edition',
    description:
      'Bring choice to voice – the best way to get started with voice',
    image: '/images/voice.jpg',
    url: '#',
    links: [
      { text: 'Setup Voice PE', url: '#', primary: true },
      {
        text: 'Documentation',
        url: 'https://www.home-assistant.io/voice_control/',
      },
    ],
  },
  {
    title: 'SkyConnect Firmware Update',
    description: 'Update firmware for your SkyConnect Zigbee coordinator',
    image: '/images/zbt1.jpg',
    url: 'https://home-assistant-skyconnect.netlify.app/firmware-update/',
    links: [
      {
        text: 'Update Firmware',
        url: 'https://home-assistant-skyconnect.netlify.app/firmware-update/',
        primary: true,
      },
      {
        text: 'Getting Started',
        url: 'https://home-assistant-skyconnect.netlify.app/',
      },
    ],
  },
  {
    title: 'ESPHome Web',
    description:
      'Install and manage ESPHome firmware directly from your browser',
    image: '/images/esphome.png',
    url: 'https://web.esphome.io/',
    links: [
      {
        text: 'Open ESPHome Web',
        url: 'https://web.esphome.io/',
        primary: true,
      },
      { text: 'Documentation', url: 'https://esphome.io/' },
    ],
  },
  {
    title: 'Ready-Made Projects',
    description:
      'Unleash the potential of your device by installing ready-made ESPHome projects',
    image: '/images/ready-make.png',
    url: 'https://esphome.io/projects/index.html',
    links: [
      {
        text: 'Install Projects',
        url: 'https://esphome.io/projects/index.html',
        primary: true,
      },
    ],
  },
  {
    title: 'Improv Wi-Fi',
    description: 'Connect devices to Wi-Fi via Bluetooth from your browser',
    image: '/images/improv.png',
    url: '#',
    links: [
      {
        text: 'Connect Device',
        url: 'https://www.improv-wifi.com/',
        primary: true,
      },
      { text: 'GitHub', url: 'https://github.com/improv-wifi' },
    ],
  },
  {
    title: 'ESP Web Tools',
    description: 'Flash ESP32/ESP8266 devices with custom firmware',
    image: '/images/esp-web-tools.png',
    url: '#',
    links: [
      { text: 'Flash Firmware', url: '#', primary: true },
      { text: 'GitHub', url: 'https://github.com/esphome/esp-web-tools' },
    ],
  },
  {
    title: 'WLED Installer',
    description: 'Install WLED firmware on ESP32/ESP8266 for LED control',
    image: '/images/wled.png',
    url: 'https://install.wled.me/',
    category: 'Community',
    links: [
      { text: 'Install WLED', url: 'https://install.wled.me/', primary: true },
      { text: 'WLED Project', url: 'https://kno.wled.ge/' },
    ],
  },
];

export default tools;
