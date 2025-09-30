import { Router } from '@vaadin/router';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

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
import './pages/zwa2-install-original';
import './pages/zwa2-install-portable';

// Using Vaadin Router for client-side routing

@customElement('main-app')
export class MainApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: white;
    }
  `;

  firstUpdated() {
    const outlet = this.renderRoot.querySelector(
      '#outlet'
    ) as HTMLElement | null;
    if (!outlet) {
      return;
    }

    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/vpe', component: 'vpe-details' },
      { path: '/zwa2', component: 'zwa2-details' },
      { path: '/zwa2/install', component: 'zwa2-install-original' },
      { path: '/zwa2/install-portable', component: 'zwa2-install-portable' },
      { path: '/zbt1', component: 'zbt1-details' },
      { path: '/esphome', component: 'esphome-details' },
      { path: '/media-player', component: 'media-player-details' },
      { path: '/improv', component: 'improv-details' },
      { path: '/empty-esphome', component: 'empty-esphome-details' },
      { path: '/bluetooth-proxy', component: 'bluetooth-proxy-details' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html`
      <div>
        <app-header></app-header>
        <main id="outlet"></main>
      </div>
    `;
  }
}
