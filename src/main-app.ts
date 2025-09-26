import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { match } from 'ts-pattern';

import './components/app-header.js';

import './pages/bluetooth-proxy-details';
import './pages/empty-esphome-details';
import './pages/esphome-details';
import './pages/home-page.js';
import './pages/improv-details';
import './pages/media-player-details';
import './pages/vpe-details';
import './pages/zbt1-details';
import './pages/zwa2-details';

import { router } from './utils/router';

@customElement('main-app')
export class MainApp extends LitElement {
  @state() private currentRoute = '/';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: white;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('route-changed', this._handleRouteChange);
    this.currentRoute = router.getCurrentRoute();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('route-changed', this._handleRouteChange);
  }

  private _handleRouteChange = (e: Event) => {
    const event = e as CustomEvent<{ path: string }>;
    this.currentRoute = event.detail.path;
  };

  private _renderPage() {
    return match(this.currentRoute)
      .with('/vpe', () => html`<vpe-details></vpe-details>`)
      .with('/zwa2', () => html`<zwa2-details></zwa2-details>`)
      .with('/zbt1', () => html`<zbt1-details></zbt1-details>`)
      .with('/esphome', () => html`<esphome-details></esphome-details>`)
      .with(
        '/media-player',
        () => html`<media-player-details></media-player-details>`
      )
      .with('/improv', () => html`<improv-details></improv-details>`)
      .with(
        '/empty-esphome',
        () => html`<empty-esphome-details></empty-esphome-details>`
      )
      .with(
        '/bluetooth-proxy',
        () => html`<bluetooth-proxy-details></bluetooth-proxy-details>`
      )
      .otherwise(() => html`<home-page></home-page>`);
  }

  render() {
    return html`
      <div>
        <app-header></app-header>
        ${this._renderPage()}
      </div>
    `;
  }
}
