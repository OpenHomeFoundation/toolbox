import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('vpe-install')
export class VPEInstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--app-bg-primary);
      color: var(--app-text-primary);
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

    .footer-content {
      margin: 20px 0;
    }
  `;

  render() {
    return html`
      <details-page back-href="/home-assistant-voice-preview-edition/" back-label="Back">
        <span slot="title">Install firmware</span>
        <p slot="subtitle">
          Flash the latest Voice PE firmware directly to your device using our
          web installer
        </p>
        <p slot="description">
          Home Assistant will be able to provide the latest firmware when you
          have the Home Assistant Voice Preview Edition set up. To factory reset
          the device, you can hold the middle button pressed for 30 seconds or
          install new firmware below:
        </p>

        <div slot="footer" class="footer-content">
          <esp-web-install-button
            manifest="https://firmware.esphome.io/home-assistant-voice-pe/home-assistant-voice/manifest.json"
          >
          </esp-web-install-button>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vpe-install': VPEInstallPage;
  }
}
