import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('bluetooth-proxy-details')
export class BluetoothProxyDetails extends LitElement {
  render() {
    return html`<details-page
      .config=${detailsByKey.bluetooth}
    ></details-page>`;
  }
}
