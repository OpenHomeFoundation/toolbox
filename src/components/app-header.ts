import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    header {
      border-bottom: 1px solid #e0e0e0;
    }
    img {
      height: 35px;
      padding: 10px;
    }
  `;

  render() {
    return html`
      <header class="navbar">
        <img
          src="/open-home-foundation.svg"
          alt="Open Home Foundation"
          class="img"
        />
      </header>
    `;
  }
}
