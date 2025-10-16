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

    .warning-card {
      background: var(--wa-color-warning-fill-quiet);
      border: 1px solid var(--wa-color-warning-border-normal);
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.5rem;
      padding: 1rem;
    }

    .warning-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
    }

    .warning-title {
      color: var(--wa-color-warning-on-normal);
      line-height: 1.4;
    }

    .warning-icon svg {
      width: 100%;
      height: 100%;
      stroke: var(--wa-color-warning-50);
    }

    .warning-content {
      flex: 1;
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
          <div class="warning-card">
            <div class="warning-icon">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="warning-content">
              <div class="warning-title">
                Firmware update through web flasher is only available for Home
                Assistant SkyConnect devices and Home Assistant ZBT-1 devices
                purchased after October 20, 2024.
              </div>
            </div>
          </div>
          <p>
            This firmware installer supports installing both the latest version
            of the Zigbee and Thread firmware.
          </p>
          <div class="flasher-container">
            <nabucasa-zigbee-flasher manifest="/assets/manifests/zbt1.json">
              <span slot="button">Install firmware</span>
            </nabucasa-zigbee-flasher>
          </div>
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
