import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('zwa2-install-original')
export class Zwa2InstallOriginalPage extends LitElement {
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
        title: 'Install original firmware',
        subtitle: 'Connect ZWA-2 directly to Home Assistant via USB',
        description:
          'This installation will flash the original firmware to your ZWA-2 so it can be used directly over USB with your Home Assistant hub.',
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
    'zwa2-install-original': Zwa2InstallOriginalPage;
  }
}
