import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import '../components/warning-card.js';

@customElement('vpe-install')
export class VPEInstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--app-bg-primary);
      color: var(--app-text-primary);
      padding: 20px;
    }
    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--wa-color-brand-50);
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s ease;
      margin-bottom: 50px;
      background: var(--app-category-bg);
    }

    .back-button:hover {
      background: var(--app-bg-secondary);
    }

    .back-button svg {
      margin-top: 2px;
      width: 14px;
      height: 14px;
    }

    .warning-card {
      margin: 0 -40px;
    }
  `;

  private _goBack() {
    window.location.href = '/vpe/';
  }

  render() {
    const isSerialUnavailable = !('serial' in navigator);

    const config = {
      hero: {
        title: 'Install firmware',
        subtitle:
          'Flash the latest Voice PE firmware directly to your device using our web installer',
        description:
          'Home Assistant will be able to provide the latest firmware when you have the Home Assistant Voice Preview Edition set up. To factory reset the device, you can hold the middle button pressed for 30 seconds or install new firmware below:',
      },
      actions: [],
      footer: html`
        <div style="margin: 20px 0;">
          <esp-web-install-button
            manifest="https://firmware.esphome.io/home-assistant-voice-pe/home-assistant-voice/manifest.json"
          >
          </esp-web-install-button>
        </div>
      `,
    } as const;

    return isSerialUnavailable
      ? html` <a
            href="/"
            class="back-button"
            @click=${(e: Event) => {
              e.preventDefault();
              this._goBack();
            }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Back
          </a>
          <div class="warning-card">
            <warning-card></warning-card>
          </div>`
      : html`<details-page .config=${config} back-href="/vpe/"></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vpe-install': VPEInstallPage;
  }
}
