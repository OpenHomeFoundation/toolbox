import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/action-item.js';
import '../components/details.js';

@customElement('vpe-details')
export class VPEDetails extends LitElement {
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
        <span slot="title">Home Assistant Voice Preview Edition</span>
        <p slot="subtitle">Local voice control for your smart home</p>
        <p slot="description">
          Experience the future of voice control with complete local processing.
          The Voice Preview Edition brings fast, private voice commands to your
          smart home without sending data to the cloud.
        </p>

        <div slot="actions">
          <action-item
            href="/vpe/install"
            icon="/svgs/install.svg"
            trailing-icon="/svgs/chevron-right.svg"
          >
            <h3>Install firmware</h3>
            <p>Flash the latest Voice PE firmware</p>
          </action-item>

          <action-item
            href="https://www.home-assistant.io/voice_control/"
            icon="/svgs/doc.svg"
          >
            <h3>Voice control in Home Assistant</h3>
            <p>
              Complete guide to setting up voice control, wake words, and
              commands
            </p>
          </action-item>

          <action-item
            href="https://support.nabucasa.com/hc/en-us/categories/24451727188125-Home-Assistant-Voice-Preview-Edition"
            icon="/svgs/doc.svg"
          >
            <h3>Documentation</h3>
            <p>
              Complete documentation, troubleshooting guides, and technical
              specifications
            </p>
          </action-item>

          <action-item
            href="https://www.home-assistant.io/voice-pe/"
            icon="/svgs/product.svg"
          >
            <h3>Product info</h3>
            <p>
              Learn about Voice PE features, hardware specifications, and where
              to buy
            </p>
          </action-item>

          <action-item
            href="https://github.com/esphome/home-assistant-voice-pe"
            icon="/svgs/github.svg"
          >
            <h3>Source code</h3>
            <p>
              View the open-source Voice PE firmware code and contribute to
              development
            </p>
          </action-item>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vpe-details': VPEDetails;
  }
}
