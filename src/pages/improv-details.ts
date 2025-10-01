import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import 'improv-wifi-sdk';
import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('improv-details')
export class ImprovDetails extends LitElement {
  render() {
    const base = detailsByKey.improv;
    const config = {
      ...base,
      heroCta: undefined,
      customActions: html`
        <improv-wifi-launch-button>
          <div class="action-item" slot="activate">
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
              <img
                src="/svgs/chevron-right.svg"
                alt=""
                style="width: 20px; height: 20px;"
              />
            </div>
          </div>
        </improv-wifi-launch-button>
      `,
    } as typeof detailsByKey.improv & { customActions: unknown };

    return html`<details-page .config=${config}></details-page>`;
  }
}
