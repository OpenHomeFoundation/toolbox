import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('empty-esphome-details')
export class EmptyESPHomeDetails extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.empty}></details-page>`;
  }
}
