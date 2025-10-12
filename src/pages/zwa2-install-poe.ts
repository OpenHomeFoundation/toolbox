import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import '../components/warning-card.js';

@customElement('zwa2-install-poe')
export class Zwa2InstallPoEPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  render() {
    const isSerialUnavailable = !('serial' in navigator);

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
            (2025.10.2 or newer)
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

        <p
          style="background: var(--wa-color-neutral-fill-quiet); border: 1px solid var(--wa-color-neutral-border-normal); border-radius: 8px; padding: 16px; margin: 20px 0;"
        >
          <strong>Note:</strong> Once the Waveshare board has Portable Z-Wave
          installed, the USB port is only able to talk to the ZWA-2. To be able
          to install software on it again: long press the BOOT button, press
          RESET at the same time, then release RESET, then release the BOOT
          button. (<a
            href="https://www.waveshare.com/wiki/ESP32-S3-ETH#accordion1"
            target="_blank"
            rel="noopener noreferrer"
            >Waveshare wiki</a
          >)
        </p>

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
            Make sure the Power-over-Ethernet cable is not connected to the
            Waveshare board.
          </li>
          <li>
            Connect the Waveshare board to your computer via USB, click this
            button and follow the instructions to install:
            ${isSerialUnavailable
              ? html`<div
                  style="
                    background: var(--wa-color-warning-fill-quiet);
      border: 1px solid var(--wa-color-warning-border-normal);
                    border-radius:8px;
                    padding:24px;
                    display:flex;
                    gap:16px;
                    align-items:flex-start;
                    margin: 20px 0;
                  "
                >
                  <svg
                    style="flex-shrink:0;width:24px;height:24px;color: var(--wa-color-warning-50);margin-top:3px;"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                    />
                  </svg>
                  <div style="flex:1;">
                    <h3
                      style="margin:0 0 8px 0;font-size:1.1rem;font-weight:600;var(--wa-color-warning-on-normal);"
                    >
                      Your browser does not support Web Serial
                    </h3>
                    <p
                      style="margin:0;var(--wa-color-warning-on-quiet);line-height:1.5;"
                    >
                      Open this page in Google Chrome or Microsoft Edge instead.
                    </p>
                  </div>
                </div>`
              : html`<div style="margin: 12px 0;">
                    <esp-web-install-button
                      manifest="https://firmware.esphome.io/ha-connect-zwa-2/home-assistant-zwa-2-poe/manifest.json"
                    ></esp-web-install-button>
                  </div>
                  <p style="font-style: italic;">
                    Don’t worry about the error at the end. Our installer can no
                    longer connect to the device because it now expects the
                    ZWA-2.
                  </p>`}
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
            <b>
              This step is for people running a recommended Z-Wave installation:
            </b>
            <br />
            (Home Assistant OS with Z-Wave JS add-on managed by the Z-Wave
            integration)
            <ol type="a">
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
            </ol>
          </li>
          <li>
            <b>This step is for other installation methods:</b>
            <br />
            (if you are managing your own Z-Wave JS server)
            <ol type="a">
              <li>
                Find the IP address of the Waveshare board on your network.
              </li>
              <li>
                Configure the Z-Wave JS Server to use the following serial port:
                <code>esphome://WAVESHARE-BOARD-IP</code>. Replace
                WAVESHARE-BOARD-IP with the IP address of your Waveshare board.
                If the IP address of your Waveshare board is
                <code>192.168.1.100</code>, the serial port would be
                <code>esphome://192.168.1.100</code>. <br /><br />
                <i>
                  Note: this is for the configuration of the Z-Wave JS Server,
                  not inside Home Assistant!
                </i>
              </li>
            </ol>
          </li>
          <li>
            If you have moved the ZWA-2 to a different location, go to the
            Z-Wave config panel in Home Assistant and hit
            <i>rebuild network routes</i>.
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
            href="https://toolbox.openhomefoundation.org/home-assistant-connect-zwa-2/install"
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
      back-href="/home-assistant-connect-zwa-2/"
    ></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-install-poe': Zwa2InstallPoEPage;
  }
}
