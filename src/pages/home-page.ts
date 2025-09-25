import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/tool-card.js';
import tools from '../utils/tools.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .hero {
      text-align: center;
      padding: 40px 20px;
      margin-bottom: 40px;
    }

    .hero .title {
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 600;
      color: #333;
    }

    .hero p {
      font-size: 1.1rem;
      color: #666;
      margin: 0;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      .hero .title {
        font-size: 2rem;
      }

      .tools-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .container {
        padding: 16px;
      }
    }
  `;
  render() {
    return html`<div class="container">
      <div class="hero">
        <div class="title">Device Toolbox</div>
        <p>
          Flash firmware, configure devices, and manage your smart home hardware
          directly from your browser. No installation required.
        </p>
      </div>

      <div class="tools-grid">
        ${tools.map(
          tool => html`
            <tool-card
              title="${tool.title}"
              description="${tool.description}"
              image="${tool.image}"
              url="${tool.url}"
              category="${tool.category ?? ''}"
              .links=${tool.links}
            ></tool-card>
          `
        )}
      </div>
    </div>`;
  }
}
