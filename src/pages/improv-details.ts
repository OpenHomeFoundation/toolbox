import 'improv-wifi-sdk';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/action-item.js';
import '../components/details.js';

@customElement('improv-details')
export class ImprovDetails extends LitElement {
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

    improv-wifi-launch-button {
      display: block;
      width: 100%;
    }

    .improv-action {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 16px;
      padding: 18px 16px;
      cursor: pointer;
      border-radius: 6px;
    }

    .improv-action:hover {
      background: var(--app-bg-secondary);
    }

    .action-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--app-category-bg);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-mask {
      width: 20px;
      height: 20px;
      background-color: var(--app-category-text);
      -webkit-mask: var(--icon-url) no-repeat center / contain;
      mask: var(--icon-url) no-repeat center / contain;
    }

    .action-content h3 {
      margin: 0 0 6px 0;
      color: var(--app-text-primary);
      font-size: 1rem;
      font-weight: 600;
    }

    .action-content p {
      margin: 0;
      color: var(--app-text-secondary);
      font-size: 0.95rem;
      line-height: 1.45;
    }

    .action-trailing img {
      width: 20px;
      height: 20px;
    }
  `;

  render() {
    return html`
      <details-page>
        <span slot="title">Improv Wi‑Fi</span>
        <p slot="subtitle">Provision Wi‑Fi for devices without a custom app</p>
        <p slot="description">
          Use the open Improv protocol to provision Wi‑Fi via BLE or Serial from
          your browser. Great for makers and product developers.
        </p>

        <div slot="actions">
          <improv-wifi-launch-button>
            <div class="improv-action" slot="activate">
              <div class="action-icon">
                <div
                  class="icon-mask"
                  style="--icon-url: url(/svgs/wifi.svg)"
                ></div>
              </div>
              <div class="action-content">
                <h3>Connect device to Wi‑Fi</h3>
                <p>
                  Provision your device over Bluetooth Low Energy using Improv.
                </p>
              </div>
              <div class="action-trailing">
                <img src="/svgs/chevron-right.svg" alt="" />
              </div>
            </div>
          </improv-wifi-launch-button>

          <action-item href="https://www.improv-wifi.com/" icon="/svgs/doc.svg">
            <h3>Documentation</h3>
            <p>Learn about the Improv protocol and supported transports</p>
          </action-item>
        </div>
      </details-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'improv-details': ImprovDetails;
  }
}
