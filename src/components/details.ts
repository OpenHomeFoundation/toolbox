import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { router } from '../utils/router.js';

export interface DetailsAction {
  variant?: 'primary' | 'default' | 'secondary';
  title: string;
  description: string;
  href: string;
  label: string;
  iconPath?: string;
}

export interface DetailsFeature {
  iconPath: string;
  header: string;
  text: string;
}

export interface DetailsConfig {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
  };
  actions: DetailsAction[];
  features: { title: string; items: DetailsFeature[] };
}

@customElement('details-page')
export class DetailsPage extends LitElement {
  @property({ type: Object }) config!: DetailsConfig;

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #03a9f4;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s ease;
      margin-bottom: 20px;
    }

    .back-button:hover {
      background: #e3f2fd;
    }

    .hero {
      background: white;
      border-radius: 16px;
      padding: 40px;
      margin-bottom: 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .hero h1 {
      color: #333;
      margin: 0 0 16px 0;
      font-size: 2.2rem;
      font-weight: 600;
    }

    .hero .subtitle {
      color: #03a9f4;
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 20px 0;
    }

    .hero p {
      color: #666;
      line-height: 1.6;
      margin: 0;
      font-size: 1.1rem;
    }

    .actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .action-card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      text-align: center;
    }

    .action-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .action-card.primary {
      background: linear-gradient(135deg, #03a9f4 0%, #0288d1 100%);
      color: white;
    }

    .action-card.primary h3 {
      color: white;
    }

    .action-card.primary p {
      color: rgba(255, 255, 255, 0.9);
    }

    .action-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 16px auto;
      padding: 12px;
      border-radius: 50%;
      background: #e3f2fd;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-card.primary .action-icon {
      background: rgba(255, 255, 255, 0.2);
    }

    .action-icon svg {
      width: 24px;
      height: 24px;
      fill: #03a9f4;
    }

    .action-card.primary .action-icon svg {
      fill: white;
    }

    .action-card h3 {
      color: #333;
      margin: 0 0 12px 0;
      font-size: 1.25rem;
    }

    .action-card p {
      color: #666;
      margin: 0 0 20px 0;
      line-height: 1.5;
    }

    .action-button {
      display: inline-block;
      background: #03a9f4;
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
    }

    .action-button:hover {
      background: #0288d1;
    }

    .action-button.secondary {
      background: transparent;
      color: #03a9f4;
      border: 2px solid #03a9f4;
    }

    .action-button.secondary:hover {
      background: #e3f2fd;
    }

    .action-card.primary .action-button {
      background: white;
      color: #03a9f4;
    }

    .action-card.primary .action-button:hover {
      background: #f5f5f5;
    }

    .features {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .features h2 {
      color: #333;
      margin: 0 0 20px 0;
      font-size: 1.5rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .feature {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .feature-icon {
      width: 20px;
      height: 20px;
      fill: #4caf50;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .feature-content h4 {
      margin: 0 0 4px 0;
      color: #333;
      font-size: 1rem;
    }

    .feature-content p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 30px 20px;
      }

      .hero h1 {
        font-size: 1.8rem;
      }

      .actions {
        grid-template-columns: 1fr;
      }

      .features {
        padding: 24px 20px;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private _goHome() {
    router.navigate('/');
  }

  private renderIcon(path?: string) {
    if (!path) {
      return null;
    }
    return html`<svg viewBox="0 0 24 24"><path d="${path}" /></svg>`;
  }

  render() {
    const { hero, actions, features } = this.config ?? ({} as DetailsConfig);
    if (!hero || !actions || !features) {
      return null;
    }

    return html`
      <div class="container">
        <a
          href="/"
          class="back-button"
          @click=${(e: Event) => {
            e.preventDefault();
            this._goHome();
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Back to Home
        </a>

        <div class="hero">
          <h1>${hero.title}</h1>
          ${hero.subtitle
            ? html`<p class="subtitle">${hero.subtitle}</p>`
            : nothing}
          <p>${hero.description}</p>
        </div>

        <div class="actions">
          ${actions.map(
            a => html`
              <div
                class="action-card ${a.variant === 'primary' ? 'primary' : ''}"
              >
                <div class="action-icon">${this.renderIcon(a.iconPath)}</div>
                <h3>${a.title}</h3>
                <p>${a.description}</p>
                <a
                  href="${a.href}"
                  class="action-button ${a.variant === 'secondary'
                    ? 'secondary'
                    : ''}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${a.label}
                </a>
              </div>
            `
          )}
        </div>

        <div class="features">
          <h2>${features.title}</h2>
          <div class="features-grid">
            ${features.items.map(
              f => html`
                <div class="feature">
                  <svg class="feature-icon" viewBox="0 0 24 24">
                    <path d="${f.iconPath}" />
                  </svg>
                  <div class="feature-content">
                    <h4>${f.header}</h4>
                    <p>${f.text}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'details-page': DetailsPage;
  }
}
