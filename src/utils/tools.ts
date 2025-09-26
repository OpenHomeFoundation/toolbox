export interface ToolDefinition {
  title: string;
  description: string;
  image: string;
  url: string;
  text: string;
  category?: string;
}

export const tools: ToolDefinition[] = [
  {
    title: 'Home Assistant Connect ZWA-2',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant.',
    image: '/images/zwa2.webp',
    text: 'More Info',
    url: '/zwa2',
  },
  {
    title: 'Home Assistant Voice Preview Edition',
    description:
      'Bring choice to voice – the best way to get started with voice',
    image: '/images/voice.jpg',
    text: 'More Info',
    url: '/vpe',
  },
  {
    title: 'SkyConnect Firmware Update',
    description: 'Update firmware for your SkyConnect Zigbee coordinator',
    image: '/images/zbt1.jpg',
    text: 'More Info',
    url: '/zbt1',
  },
  {
    title: 'ESPHome Web',
    description:
      'Install and manage ESPHome firmware directly from your browser',
    image: '/images/esphome.png',
    text: 'More Info',
    url: 'https://web.esphome.io/',
  },
  {
    title: 'Bluetooth Proxy',
    description:
      'Create a device to allow Home Assistant to control Bluetooth devices.',
    image: '/images/ready-make.png',
    text: 'More Info',
    url: '/bluetooth-proxy',
  },
  {
    title: 'Empty ESPHome',
    description: 'No special features built-in. Ready to make it your own.',
    image: '/images/ready-make.png',
    text: 'More Info',
    url: '/empty-esphome',
  },
  {
    title: 'Media Player',
    description: 'Create an internet connected smart media player.',
    image: '/images/ready-make.png',
    text: 'More Info',
    url: '/media-player',
  },
  {
    title: 'Improv Wi-Fi',
    description: 'Connect devices to Wi-Fi via Bluetooth from your browser',
    image: '/images/improv.png',
    text: 'More Info',
    url: '/improv',
  },
  {
    title: 'ESP Web Tools',
    description: 'Flash ESP32/ESP8266 devices with custom firmware',
    image: '/images/esp-web-tools.png',
    text: 'More Info',
    url: 'https://esphome.github.io/esp-web-tools/',
  },
  {
    title: 'WLED Installer',
    description: 'Install WLED firmware on ESP32/ESP8266 for LED control',
    image: '/images/wled.png',
    text: 'More Info',
    url: 'https://install.wled.me/',
    category: 'Community',
  },
];
