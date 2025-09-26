import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('zbt1-details')
export class ZBT1Details extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.zbt1}></details-page>`;
  }
}
