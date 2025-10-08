import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('zwa2-install-portable')
export class Zwa2InstallPortablePage extends LitElement {
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
        title: 'Install portable Z-Wave firmware',
        subtitle: 'Place ZWA-2 optimally and connect via Wi‑Fi',
      },
      actions: [],
      footer: html`
        <p style="margin-top: 6px;">
          This experiment allows the ZWA-2 to be placed anywhere, and connect to
          your wifi network to establish a connection with Home Assistant.
          <a
            href="https://www.home-assistant.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.home-assistant.io/blog/</a
          >.
        </p>

        <p>
          Follow this tutorial to install the portable Z-Wave experiment on your
          Home Assistant Connect ZWA-2.
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
              href="https://amzn.to/4mLqa6S"
              target="_blank"
              rel="noopener noreferrer"
              >USB-C to C cable</a
            >
          </li>
        </ul>

        <p>To get started, follow these steps:</p>
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
          </li>
        </ol>
        <button class="install" @click=${this.handleInstall}>Install</button>

        <h3>Troubleshooting</h3>
        <p>
          Make sure the Waveshare ESP32-PoE board is connected to the same
          network as Home Assistant.
        </p>
        <p>
          Make sure you configure both the discovered ZWA-2 ESPHome and Z-Wave
          configurations in Home Assistant.Make sure you configure both the
          discovered ZWA-2 ESPHome and Z-Wave configurations in Home Assistant.
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
          If you are unable to get it to work, revert back by disconnecting the
          ZWA-2 from the Waveshare board and connect it directly to Home
          Assistant.
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
    'zwa2-install-portable': Zwa2InstallPortablePage;
  }
}
