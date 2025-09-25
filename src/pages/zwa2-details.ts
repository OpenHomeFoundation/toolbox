import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('zwa2-details')
export class ZWA2Details extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.zwa2}></details-page>`;
  }
}
