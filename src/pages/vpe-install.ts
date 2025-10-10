import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import '../components/warning-card.js';

@customElement('vpe-install')
export class VPEInstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #03a9f4;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s ease;
      margin-bottom: 20px;
      background: #e3f2fd;
    }

    .back-button:hover {
      background: #c0e1f8;
    }

    .back-button svg {
      margin-top: 2px;
      width: 14px;
      height: 14px;
    }

    .warning-card {
      background: #fff3e0;
      border: 1px solid #ffb74d;
      border-radius: 8px;
      padding: 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .warning-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      color: #eb9136;
      margin-top: 3px;
    }

    .warning-content {
      flex: 1;
    }

    .warning-title {
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #e16725;
    }

    .warning-description {
      margin: 0;
      color: #5d4037;
      line-height: 1.5;
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
            <svg class="warning-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            <div class="warning-content">
              <h3 class="warning-title">
                Your browser does not support Web Serial
              </h3>
              <p class="warning-description">
                Open this page in Google Chrome or Microsoft Edge instead.
              </p>
            </div>
          </div>`
      : html`<details-page .config=${config} back-href="/vpe/"></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vpe-install': VPEInstallPage;
  }
}
