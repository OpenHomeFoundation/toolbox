import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('zwa2-install-original')
export class Zwa2InstallOriginalPage extends LitElement {
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
        title: 'Install original firmware',
        subtitle: 'Connect ZWA-2 directly to Home Assistant via USB',
      },
      actions: [],
      footer: html`
        <p style="margin-top: 6px;">
          This is the original firmware that is pre-installed on the Home
          Assistant Connect ZWA-2. It allows you to use the device directly
          connected to Home Assistant with the included USB cable.
        </p>
        <p>
          Follow this tutorial to restore the original firmware on your ZWA-2.
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
          <li>Make a backup of your Z-Wave network in Home Assistant.</li>
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
          <li>Install the ESP Serial Bridge firmware</li>
        </ol>
        <button class="install" @click=${this.handleInstall}>Install</button>
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
    'zwa2-install-original': Zwa2InstallOriginalPage;
  }
}
