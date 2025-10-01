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

  handleLearnMore() {
    // Placeholder link for future blog post
    window.open(
      'https://www.home-assistant.io/blog/',
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
          'This firmware is experimental. If you experience any issues, revert back to the original firmware.',
        secondaryDescription:
          'This experiment allows you to put your ZWA-2 in the most optimal location to reach your Z-Wave devices, which might very well not have been the basement where you have tucked away your Home Assistant hub!',
        tertiaryDescription:
          'It does this by activating the ESP32-S3 wifi chip in the Home Assistant Connect ZWA-2 and turning the ZWA-2 into a wirelessly connected Z-Wave proxy that seamlessly integrates with Home Assistant.',
        learnMoreHref: 'https://www.home-assistant.io/blog/',
        learnMoreLabel: 'Learn more',
      },
      actions: [],
      heroCta: html`
        <button class="install" @click=${this.handleInstall}>Install</button>
      `,
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
