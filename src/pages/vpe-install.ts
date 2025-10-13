import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import '../components/warning-card.js';
import { isSerialUnavailable } from '../utils/const.js';

@customElement('vpe-install')
export class VPEInstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--app-bg-primary);
      color: var(--app-text-primary);
    }

    .fallback-container {
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

  private _goBack() {
    window.location.href = '/vpe/';
  }

  render() {
    return isSerialUnavailable
      ? html`
          <div class="fallback-container">
            <a
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
            </div>
          </div>
        `
      : html`
          <details-page back-href="/vpe/" back-label="Back">
            <span slot="title">Install firmware</span>
            <p slot="subtitle">
              Flash the latest Voice PE firmware directly to your device using
              our web installer
            </p>
            <p slot="description">
              Home Assistant will be able to provide the latest firmware when
              you have the Home Assistant Voice Preview Edition set up. To
              factory reset the device, you can hold the middle button pressed
              for 30 seconds or install new firmware below:
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
