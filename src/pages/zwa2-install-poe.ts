import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('zwa2-install-poe')
export class Zwa2InstallPoEPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  handleInstall() {
    window.open(
      'https://home-assistant.github.io/zwa2-toolbox/',
      '_blank',
      'noopener,noreferrer'
    );
  }

  render() {
    const config = {
      hero: {
        title: 'Use Portable Z-Wave with Power-over-Ethernet',
        subtitle: 'Place ZWA-2 optimally and connect via Wi‑Fi',
      },
      actions: [],
      footer: html`
        <p style="margin-top: 6px;">
          This experiment allows the ZWA-2 to be placed anywhere, and connect
          via Power-over-Ethernet to your local network to establish a
          connection with Home Assistant.
          <a
            href="https://www.home-assistant.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
            >Learn more about it in our blog</a
          >.
        </p>

        <p>
          Follow this tutorial to get started with the portable Z-Wave
          experiment and a standalone ESP32 PoE module.
        </p>

        <h3>Requirements</h3>
        <ul>
          <li>
            <a
              href="https://www.home-assistant.io"
              target="_blank"
              rel="noopener noreferrer"
              >Home Assistant</a
            >
          </li>
          <li>
            <a
              href="https://www.home-assistant.io/connect/zwa-2/"
              target="_blank"
              rel="noopener noreferrer"
              >Home Assistant Connect ZWA-2</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/4h2T2q7"
              target="_blank"
              rel="noopener noreferrer"
              >Waveshare ESP32-S3 ETH Development Board with PoE module</a
            >
          </li>
          <li>
            Empty Ethernet port with Power-over-Ethernet in a network router or
            switch
          </li>
          <li>
            <a
              href="https://amzn.to/3IqnEFm"
              target="_blank"
              rel="noopener noreferrer"
              >Ethernet cable</a
            >
          </li>
          <li>
            <a
              href="https://amzn.to/4mLqa6S"
              target="_blank"
              rel="noopener noreferrer"
              >USB-C to C cable</a
            >
          </li>
          <li>
            Optional:
            <a
              href="https://makerworld.com/en/models/1536469-waveshare-esp32-s3-eth-poe-case-opendtu#profileId-1985828"
              target="_blank"
              rel="noopener noreferrer"
              >print this case for the Waveshare board</a
            >
          </li>
        </ul>

        <h3>Installation</h3>
        <ol>
          <li>
            Make a backup of your Z-Wave network in Home Assistant.<br />
            <ol type="a">
              <li>
                You can do this on the
                <a
                  href="https://my.home-assistant.io/redirect/config_zwave_js/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Z-Wave config panel in Home Assistant</a
                >. Config -> Devices & services -> Z-Wave -> Settings icon.
              </li>
              <li>Download backup is at the bottom of the page.</li>
            </ol>
          </li>
          <li>
            Connect the Waveshare board to your computer via USB, click this
            button and follow the instructions to install:
            <div style="margin: 12px 0;">
              <esp-web-install-button
                manifest="https://firmware.esphome.io/ha-connect-zwa-2/home-assistant-zwa-2-poe/manifest.json"
              ></esp-web-install-button>
            </div>
            <p style="font-style: italic;">
              Don’t worry about the error at the end. Our installer can no
              longer connect to the device because it now expects the ZWA-2.
            </p>
          </li>
          <li>Disconnect the Waveshare board from your computer.</li>
          <li>
            Connect the Waveshare board to the Home Assistant Connect ZWA-2
            (note: it needs to run the original firmware!).
          </li>
          <li>
            Plug in your Ethernet cable into your available Ethernet port with
            Power-over-Ethernet on one end, and into the Waveshare board on the
            other end. The light of the ZWA-2 should light up now, to indicate
            that it received power from the Waveshare board.
          </li>
          <li>
            Open Home Assistant and check for discovered ESPHome devices on
            <a
              href="https://my.home-assistant.io/redirect/config_flow_start/?domain=esphome"
              target="_blank"
              rel="noopener noreferrer"
              >the integrations page</a
            >. Configure the discovered device.
          </li>
          <li>
            On the same page, once ESPHome has been configured, look for the
            discovered Z-Wave device. Configure it
          </li>
          <li>Enjoy!</li>
        </ol>

        <h3>Troubleshooting</h3>
        <p>
          Make sure the Waveshare ESP32-PoE board is connected to the same
          network as Home Assistant.
        </p>
        <p>
          Make sure you configure both the discovered ZWA-2 ESPHome and Z-Wave
          configurations in Home Assistant.
        </p>
        <p>
          If Home Assistant is connected and you are not able to see your Z-Wave
          devices, restore the backup.
        </p>
        <ol type="a">
          <li>
            You can do this on the
            <a
              href="https://my.home-assistant.io/redirect/config_zwave_js/"
              target="_blank"
              rel="noopener noreferrer"
              >Z-Wave config panel in Home Assistant</a
            >. Config -> Devices & services -> Z-Wave -> Settings icon.
          </li>
          <li>Restore backup is at the bottom of the page.</li>
        </ol>
        <p>
          If you are unable to get it to work,
          <a
            href="https://toolbox.openhomefoundation.org/zwa2/install"
            target="_blank"
            rel="noopener noreferrer"
            >revert back to the original firmware</a
          >
          and connect the ZWA-2 directly to Home Assistant.
        </p>
      `,
    } as const;

    return html`<details-page
      .config=${config}
      history-back
      back-href="/zwa2"
    ></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-install-poe': Zwa2InstallPoEPage;
  }
}
