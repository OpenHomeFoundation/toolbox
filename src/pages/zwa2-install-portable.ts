import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('zwa2-install-portable')
export class Zwa2InstallPortablePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  handleInstall() {
    window.open(
      'https://home-assistant.github.io/zwa2-toolbox/',
      '_blank',
      'noopener,noreferrer'
    );
  }

  render() {
    const config = {
      hero: {
        title: 'Install portable Z-Wave firmware',
        subtitle: 'Place ZWA-2 optimally and connect via Wi‑Fi',
        description:
          'This installation will flash the portable Z-Wave firmware to your ZWA-2, enabling Wi‑Fi connectivity so you can place it in the best location for coverage.',
      },
      actions: [],
      heroCta: html`<button class="install" @click=${this.handleInstall}>
        Install
      </button>`,
    } as const;

    return html`<details-page
      .config=${config}
      history-back
      back-href="/zwa2"
    ></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-install-portable': Zwa2InstallPortablePage;
  }
}
