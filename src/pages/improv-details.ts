import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('improv-details')
export class ImprovDetails extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.improv}></details-page>`;
  }
}
