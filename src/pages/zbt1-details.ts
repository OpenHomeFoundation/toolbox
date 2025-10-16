import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/action-item.js';
import '../components/details.js';

@customElement('zbt1-details')
export class ZBT1Details extends LitElement {
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

    p[slot='description'] {
      color: var(--app-text-secondary);
      line-height: 1.6;
      margin: 0;
      font-size: 1.05rem;
    }
  `;

  render() {
    return html`
      <details-page>
        <span slot="title">Home Assistant Connect ZBT-1</span>
        <p slot="subtitle">Zigbee 3.0 USB adapter</p>
        <p slot="description">
          The Home Assistant Connect ZBT-1 (formerly SkyConnect) is a powerful
          Zigbee 3.0 USB adapter that connects your Zigbee devices to Home
          Assistant. Easy setup, reliable performance, and seamless integration.
        </p>

        <div slot="actions">
          <action-item
            href="/zbt1/install"
            icon="/svgs/install.svg"
            trailing-icon="/svgs/chevron-right.svg"
          >
            <h3>Install firmware</h3>
            <p>Update your ZBT-1 with the latest Zigbee or Thread firmware</p>
          </action-item>
          <action-item
            href="https://support.nabucasa.com/hc/en-us/categories/24734620813469"
            icon="/svgs/doc.svg"
          >
            <h3>Documentation</h3>
            <p>
              Complete documentation, troubleshooting guides, and technical
              specifications
            </p>
          </action-item>

          <action-item
            href="https://www.home-assistant.io/connectzbt1"
            icon="/svgs/product.svg"
          >
            <h3>Product info</h3>
            <p>
              Learn more about Connect ZBT-1 product features, specifications,
              and where to buy
            </p>
          </action-item>

          <action-item
            href="https://github.com/NabuCasa/silabs-firmware-builder"
            icon="/svgs/github.svg"
          >
            <h3>Source code</h3>
            <p>View the open-source firmware code</p>
          </action-item>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zbt1-details': ZBT1Details;
  }
}
