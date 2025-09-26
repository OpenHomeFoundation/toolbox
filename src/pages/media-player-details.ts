import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';
import { detailsByKey } from '../utils/details.js';

@customElement('media-player-details')
export class MediaPlayerDetails extends LitElement {
  render() {
    return html`<details-page .config=${detailsByKey.media}></details-page>`;
  }
}
