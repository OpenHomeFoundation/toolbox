export interface ToolDefinition {
  title: string;
  description: string;
  image: string;
  url: string;
  category?: string;
}

export const tools: ToolDefinition[] = [
  {
    title: 'Home Assistant Connect ZWA-2',
    description:
      'The ultimate way to connect Z-Wave devices to Home Assistant.',
    image: '/images/zwa2.webp',
    url: '/zwa2/',
  },
  {
    title: 'Home Assistant Voice Preview Edition',
    description:
      'Bring choice to voice. The best way to get started with voice',
    image: '/images/voice.jpg',
    url: '/vpe',
  },
  {
    title: 'Home Assistant Connect ZBT-1',
    description: 'Update firmware for your Connect ZBT-1 adapter',
    image: '/images/zbt1.jpg',
    url: '/zbt1',
  },
  {
    title: 'Bluetooth proxy',
    description:
      'Create a device to allow Home Assistant to control Bluetooth devices.',
    image: '/images/bluetooth-proxy.png',
    url: 'https://esphome.io/projects/index.html?type=bluetooth',
  },
  {
    title: 'Media player',
    description: 'Create an internet connected smart media player.',
    image: '/images/media-player.png',
    url: 'https://esphome.io/projects/index.html?type=media',
  },
  {
    title: 'Empty ESPHome',
    description: 'No special features built-in. Ready to make it your own.',
    image: '/images/empty-esphome.png',
    url: 'https://esphome.io/projects/index.html?type=empty',
  },
  {
    title: 'Improv Wi-Fi',
    description: 'Connect devices to Wi-Fi via Bluetooth from your browser',
    image: '/images/improv.png',
    url: '/improv',
  },
  {
    title: 'ESPHome Web',
    description:
      'Install and manage ESPHome firmware directly from your browser',
    image: '/images/esphome.png',
    url: 'https://web.esphome.io/',
  },
  {
    title: 'WLED installer',
    description: 'Install WLED firmware on ESP32/ESP8266 for LED control',
    image: '/images/wled.png',
    url: 'https://install.wled.me/',
    category: 'Collaboration partner',
  },
];
