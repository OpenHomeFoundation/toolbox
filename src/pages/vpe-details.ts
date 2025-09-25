import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('vpe-details')
export class VPEDetails extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.vpe}></details-page>`;
  }
}
