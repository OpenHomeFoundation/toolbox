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
          <a
            href="https://github.com/OpenHomeFoundation/toolbox"
            class="github-link"
            target="_blank"
          >
            <svg class="github-icon" viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span class="github-text">GitHub</span>
          </a>
        </nav>
      </header>
    `;
  }
}
