import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('zwa2-details')
export class ZWA2Details extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }

    .firmware-section {
      max-width: 900px;
      margin: 0 auto;
    }

    .firmware-option {
      margin: 10px 0;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    h3 {
      margin-top: 0;
    }
  `;

  render() {
    return html`<details-page .config=${detailsByKey.zwa2}></details-page>
      <div class="firmware-section">
        <h2>Install Firmware</h2>

        <div class="firmware-option">
          <h3>Home Assistant ZWA-2</h3>
          <p>Official Home Assistant firmware for ZWA-2</p>
          <esp-web-install-button
            manifest="https://firmware.esphome.io/ha-connect-zwa-2/home-assistant-zwa-2/manifest.json"
          ></esp-web-install-button>
        </div>

        <div class="firmware-option">
          <h3>Z-Wave ESP Bridge</h3>
          <p>Z-Wave proxy firmware</p>
          <esp-web-install-button
            manifest="https://firmware.esphome.io/ha-connect-zwa-2/zwave-esp-bridge/manifest.json"
          ></esp-web-install-button>
        </div>
      </div>`;
  }
}
