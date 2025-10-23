import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/home-page.js';
@customElement('main-app')
export class MainApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--app-bg-primary);
      color: var(--app-text-primary);
    }
  `;

  render() {
    return html` <home-page></home-page> `;
  }
}
