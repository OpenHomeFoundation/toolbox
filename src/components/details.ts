import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('details-page')
export class DetailsPage extends LitElement {
  @property({ type: String, attribute: 'back-href' }) backHref = '/';
  @property({ type: String, attribute: 'back-label' }) backLabel =
    'Back to Home';
  @state() private isDescriptionExpanded = false;

  static styles = css`
    :host {
      display: block;
      padding-top: 20px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: var(--app-text-primary);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    a {
      color: var(--wa-color-brand-50);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--wa-color-brand-50);
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s ease;
      margin-bottom: 20px;
      background: var(--app-category-bg);
    }

    .back-button:hover {
      background: var(--app-bg-secondary);
    }

    .back-button svg {
      margin-top: 2px;
      width: 14px;
      height: 14px;
    }

    .layout {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 24px;
      align-items: stretch;
      grid-auto-rows: 1fr;
      margin-bottom: 30px;
    }

    .layout.single {
      grid-template-columns: 1fr;
    }

    .hero {
      background: var(--app-bg-card);
      border-radius: 16px;
      padding: 0 32px;
      box-shadow: 0 2px 8px var(--app-shadow);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .hero-title {
      color: var(--app-text-primary);
      margin-top: 32px;
      font-size: 2.2rem;
      font-weight: 600;
    }

    .hero ::slotted([slot='subtitle']) {
      color: var(--wa-color-brand-50);
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 10px 0;
    }

    .hero ::slotted([slot='description']) {
      color: var(--app-text-secondary);
      line-height: 1.6;
      margin: 0;
      font-size: 1.05rem;
    }

    .read-more {
      margin-top: 10px;
      background: transparent;
      border: none;
      color: var(--wa-color-brand-50);
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      display: none;
    }

    .actions-list {
      background: var(--app-bg-card);
      border-radius: 16px;
      padding: 8px;
      box-shadow: 0 2px 8px var(--app-shadow);
      height: 100%;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      :host {
        padding: 20px 0 0 0;
      }

      .hero[data-expanded='false'] ::slotted([slot='secondary-description']),
      .hero[data-expanded='false'] ::slotted([slot='tertiary-description']) {
        display: none;
      }

      .read-more {
        display: inline-block;
      }

      .layout {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: 10px;
      }

      .hero {
        padding: 16px 20px;
        height: auto;
        display: block;
      }

      .hero-title {
        font-size: 1.8rem;
        margin-top: 0;
      }

      .actions-list {
        height: auto;
        margin-top: 16px;
        display: block;
      }
    }
  `;

  private _goBack() {
    window.location.href = this.backHref || '/';
  }

  private _hasSlot(name: string): boolean {
    return !!this.querySelector(`[slot="${name}"]`);
  }

  render() {
    const hasActions = this._hasSlot('actions');

    return html`
      <div class="container">
        <a
          href="/"
          class="back-button"
          @click=${(e: Event) => {
            e.preventDefault();
            this._goBack();
          }}
        >
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          ${this.backLabel}
        </a>

        <div class="layout ${hasActions ? '' : 'single'}">
          <div
            class="hero"
            data-expanded="${this.isDescriptionExpanded ? 'true' : 'false'}"
          >
            <div class="hero-title">
              <slot name="title"></slot>
            </div>
            <slot name="subtitle"></slot>
            <slot name="description"></slot>
            <slot name="secondary-description"></slot>
            <slot name="tertiary-description"></slot>
            <slot name="learn-more"></slot>

            <button
              class="read-more"
              @click=${() =>
                (this.isDescriptionExpanded = !this.isDescriptionExpanded)}
            >
              ${this.isDescriptionExpanded ? 'Read less' : 'Read more'}
            </button>

            <slot name="cta"></slot>
            <slot name="footer"></slot>
          </div>

          ${hasActions
            ? html`<div class="actions-list">
                <slot name="actions"></slot>
              </div>`
            : ''}
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
