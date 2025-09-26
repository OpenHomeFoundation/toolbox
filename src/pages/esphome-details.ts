import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('esphome-details')
export class ESPHomeDetails extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.esphome}></details-page>`;
  }
}
