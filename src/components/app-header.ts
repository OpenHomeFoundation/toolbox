import '@awesome.me/webawesome/dist/components/icon/icon.js';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 64px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo {
      height: 32px;
      width: auto;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 500;
      color: #333;
      margin: 0;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .nav-link {
      color: #666;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
      transition: all 0.2s ease;
      font-weight: 400;
    }

    .nav-link:hover {
      background: #f5f5f5;
      color: #333;
    }

    .github-link {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #666;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 6px;
      transition: all 0.2s ease;
      border: 1px solid #e0e0e0;
    }

    .github-link:hover {
      background: #f5f5f5;
      color: #333;
      border-color: #ccc;
    }

    .github-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    @media (max-width: 768px) {
      .nav-links {
        gap: 12px;
      }

      .nav-link,
      .github-link {
        padding: 6px 8px;
        font-size: 0.9rem;
      }

      .title {
        font-size: 1.1rem;
      }

      .github-link .github-text {
        display: none;
      }
    }

    @media (max-width: 480px) {
      header {
        padding: 0 16px;
      }

      .logo {
        height: 28px;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo-section">
          <img
            src="/open-home-foundation.svg"
            alt="Open Home Foundation"
            class="logo"
          />
        </div>

        <nav class="nav-links">
          <a
            href="https://www.openhomefoundation.org/"
            class="nav-link"
            target="_blank"
          >
            OHF
          </a>
          <a
            href="https://www.home-assistant.io/"
            class="nav-link"
            target="_blank"
          >
            Home Assistant
          </a>
        </nav>
      </header>
    `;
  }
}
