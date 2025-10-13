import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/action-item.js';
import '../components/details.js';

@customElement('zwa2-details')
export class ZWA2Details extends LitElement {
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

    p[slot='description'],
    p[slot='secondary-description'] {
      color: var(--app-text-secondary);
      line-height: 1.6;
      margin: 0;
      font-size: 1.05rem;
    }

    p[slot='secondary-description'] {
      margin-top: 12px;
    }

    action-item .experimental {
      color: #e78e21;
    }
  `;

  render() {
    return html`
      <details-page>
        <span slot="title">Home Assistant Connect ZWA-2</span>
        <p slot="subtitle">800 series Z-Wave Long Range adapter</p>
        <p slot="description">
          The ultimate way to connect Z-Wave devices to Home Assistant.
        </p>
        <p slot="secondary-description">
          Features the latest Z-Wave 800 series chip with Long Range support,
          SmartStart, and enhanced security for your smart home.
        </p>

        <div slot="actions">
          <action-item
            href="/home-assistant-connect-zwa-2/install"
            icon="/svgs/install.svg"
            trailing-icon="/svgs/chevron-right.svg"
          >
            <h3>Install original firmware</h3>
            <p>
              The original firmware that allows to connect the ZWA-2 directly to
              Home Assistant hub via USB cable.
            </p>
          </action-item>

          <action-item
            href="/home-assistant-connect-zwa-2/install-portable"
            icon="/svgs/install.svg"
            trailing-icon="/svgs/chevron-right.svg"
          >
            <h3>Install portable Z-Wave firmware</h3>
            <p style="color: var(--app-text-secondary);">
              <span style="color: #e78e21;">Experimental.</span> Place the ZWA-2
              in the most optimal position and connect it to Home Assistant via
              Wi-Fi.
            </p>
          </action-item>

          <action-item
            href="/home-assistant-connect-zwa-2/use-poe"
            icon="/svgs/install.svg"
            trailing-icon="/svgs/chevron-right.svg"
          >
            <h3>Use Portable Z-Wave with Power-over-Ethernet</h3>
            <p style="color: var(--app-text-secondary);">
              <span style="color: #e78e21;">Experimental.</span> Place the ZWA-2
              in the most optimal position and connect it to Home Assistant via
              Power-over-Ethernet.
            </p>
          </action-item>

          <action-item
            href="https://support.nabucasa.com/hc/en-us/categories/28669861145885"
            icon="/svgs/doc.svg"
          >
            <h3>Documentation</h3>
            <p>User documentation, troubleshooting, and resources</p>
          </action-item>

          <action-item
            href="https://www.home-assistant.io/connect/zwa-2/"
            icon="/svgs/product.svg"
          >
            <h3>Product info</h3>
            <p>
              Learn more about the Connect ZWA-2 features, specifications, and
              where to buy
            </p>
          </action-item>

          <action-item
            href="https://github.com/NabuCasa/zwave-firmware"
            icon="/svgs/github.svg"
          >
            <h3>Source code</h3>
            <p>View the open-source Z-Wave firmware code</p>
          </action-item>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-details': ZWA2Details;
  }
}
