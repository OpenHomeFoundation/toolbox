import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface CardLink {
  text: string;
  url: string;
  primary?: boolean;
}

@customElement('tool-card')
export class ToolCard extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';
  @property({ type: String }) image = '';
  @property({ type: String }) url = '';
  @property({ type: String }) category = '';
  @property({ type: Array }) links: CardLink[] = [];

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: #f0f0f0;
    }

    .card-content {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-header {
      margin-bottom: 12px;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin: 0 0 8px 0;
      line-height: 1.3;
    }

    .card-category {
      display: inline-block;
      background: #e3f2fd;
      color: #1976d2;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .card-description {
      color: #666;
      line-height: 1.5;
      margin: 0 0 20px 0;
      flex: 1;
    }

    .card-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: auto;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      font-size: 0.9rem;
    }

    .card-link.primary {
      background: #03a9f4;
      color: white;
    }

    .card-link.primary:hover {
      background: #0288d1;
    }

    .card-link.secondary {
      background: transparent;
      color: #03a9f4;
      border-color: #03a9f4;
    }

    .card-link.secondary:hover {
      background: #e3f2fd;
    }

    .external-icon {
      width: 14px;
      height: 14px;
      margin-left: 6px;
      fill: currentColor;
    }

    @media (max-width: 480px) {
      .card-content {
        padding: 16px;
      }

      .card-actions {
        gap: 6px;
      }

      .card-link {
        padding: 8px 12px;
        font-size: 0.85rem;
      }
    }
  `;

  private _isExternalLink(url: string): boolean {
    return url.startsWith('http') && !url.includes('#');
  }

  private _handleCardClick() {
    if (this.url && this.url !== '#') {
      const isExternal = this._isExternalLink(this.url);
      if (isExternal) {
        window.open(this.url, '_blank', 'noopener,noreferrer');
      } else {
        this.dispatchEvent(
          new CustomEvent('card-action', {
            detail: { url: this.url },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
  }

  private _handleLinkClick(link: CardLink, event: Event) {
    event.stopPropagation();

    if (link.url && link.url !== '#') {
      const isExternal = this._isExternalLink(link.url);
      if (isExternal) {
        window.open(link.url, '_blank', 'noopener,noreferrer');
      } else {
        this.dispatchEvent(
          new CustomEvent('tool-action', {
            detail: { url: link.url, text: link.text },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
  }

  render() {
    return html`
      <div class="card" @click="${this._handleCardClick}">
        <img src="${this.image}" alt="${this.title}" class="card-image" />

        <div class="card-content">
          <div class="card-header">
            ${this.category
              ? html` <div class="card-category">${this.category}</div> `
              : ''}
            <h3 class="card-title">${this.title}</h3>
          </div>

          <p class="card-description">${this.description}</p>

          <div class="card-actions">
            ${this.links.map(
              link => html`
                <a
                  href="${link.url || '#'}"
                  class="card-link ${link.primary ? 'primary' : 'secondary'}"
                  target="${this._isExternalLink(link.url)
                    ? '_blank'
                    : '_self'}"
                  rel="${this._isExternalLink(link.url)
                    ? 'noopener noreferrer'
                    : ''}"
                  @click="${(e: Event) => this._handleLinkClick(link, e)}"
                >
                  ${link.text}
                </a>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}
