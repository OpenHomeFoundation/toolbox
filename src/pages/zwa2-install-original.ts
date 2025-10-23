import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/details.js';

@customElement('zwa2-install-original')
export class Zwa2InstallOriginalPage extends LitElement {
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
      margin-top: 6px;
    }

    .footer-content h3 {
      margin-top: 24px;
      margin-bottom: 12px;
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
  `;

  render() {
    return html`
      <details-page
        back-href="/home-assistant-connect-zwa-2/"
        back-label="Back"
      >
        <span slot="title">Install original firmware</span>
        <p slot="subtitle">Connect ZWA-2 directly to Home Assistant via USB</p>

        <div slot="footer" class="footer-content">
          <p>
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
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-install-original': Zwa2InstallOriginalPage;
  }
}
