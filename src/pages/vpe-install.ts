import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/details.js';

@customElement('vpe-install')
export class VPEInstallPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
  `;

  render() {
    const config = {
      hero: {
        title: 'Install firmware',
        subtitle:
          'Flash the latest Voice PE firmware directly to your device using our web installer',
        description:
          'Home Assistant will be able to provide the latest firmware when you have the Home Assistant Voice Preview Edition set up. To factory reset the device, you can hold the middle button pressed for 30 seconds or install new firmware below:',
      },
      actions: [],
      footer: html`
        <div style="margin: 20px 0;">
          <esp-web-install-button
            manifest="https://firmware.esphome.io/home-assistant-voice-pe/home-assistant-voice/manifest.json"
          >
          </esp-web-install-button>
        </div>
      `,
    } as const;

    return html`<details-page
      .config=${config}
      history-back
      back-href="/vpe"
    ></details-page>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vpe-install': VPEInstallPage;
  }
}
