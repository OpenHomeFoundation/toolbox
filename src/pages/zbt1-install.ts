import '@nabucasa/sl-web-tools';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/details.js';

@customElement('zbt1-install')
export class ZBT1InstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p[slot='subtitle'] {
      color: var(--wa-color-brand-50);
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 10px 0;
    }

    .footer-content {
      margin-bottom: 16px;
    }

    .footer-content h3 {
      margin-top: 24px;
    }

    .footer-content ul,
    .footer-content ol {
      margin: 8px 0;
      padding-left: 24px;
    }

    .footer-content li {
      margin: 8px 0;
      line-height: 1.6;
    }

    .footer-content p {
      margin: 12px 0;
      line-height: 1.6;
    }

    .footer-content a {
      color: var(--wa-color-brand-50);
      text-decoration: none;
    }

    .footer-content a:hover {
      text-decoration: underline;
    }

    .flasher-container {
      margin: 24px 0 12px 4px;
    }
  `;

  render() {
    return html`
      <details-page back-href="/zbt1/" back-label="Back">
        <span slot="title">Install firmware</span>
        <p slot="subtitle">
          Update your ZBT-1 with the latest Zigbee or Thread firmware
        </p>

        <div slot="footer" class="footer-content">
          <p>
            Home Assistant will automatically detect updates for the Home
            Assistant Connect ZBT-1 and allow you to install them. This page is
            only needed if you are using the device with other software than
            Home Assistant.
          </p>
          <p>
            <strong>Warning:</strong> Firmware update through web flasher is
            only available for Home Assistant SkyConnect devices and Home
            Assistant ZBT-1 devices purchased after October 20, 2024.
          </p>
          <p>
            This firmware installer supports installing both the latest version
            of the Zigbee and Thread firmware.
          </p>
          <div class="flasher-container">
            <nabucasa-zigbee-flasher
              manifest="/assets/manifests/zbt1.json"
            >
              <span slot="button">Install firmware</span>
            </nabucasa-zigbee-flasher>
          </div>
          <h3>Update content of Voice PE firmware installer</h3>
          <p>
            Home Assistant will automatically detect updates for the Home
            Assistant Voice Preview Edition and allow you to install them. This
            page is only needed if you are using the device with other software
            than Home Assistant.
          </p>
          <p>
            If you are looking to factory reset the device, you can hold the
            middle button pressed for 30 seconds instead of re-installing the
            firmware.
          </p>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zbt1-install': ZBT1InstallPage;
  }
}
