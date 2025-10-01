import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import { Router } from '@vaadin/router';
import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
export interface DetailsAction {
  title: string;
  description: string;
  href: string;
  label: string;
  icon: string;
  experimental?: boolean;
  trailingIcon?: string;
}

export interface DetailsConfig {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    secondaryDescription?: string;
    tertiaryDescription?: string;
    learnMoreHref?: string;
    learnMoreLabel?: string;
  };
  actions: DetailsAction[];
  heroCtaLabel?: string;
  heroCta?: unknown;
}

@customElement('details-page')
export class DetailsPage extends LitElement {
  @property({ type: Object }) config!: DetailsConfig;
  @property({ type: Boolean, attribute: 'history-back' }) historyBack = false;
  @property({ type: String, attribute: 'back-href' }) backHref = '/';
  @state() private isDescriptionExpanded = false;

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .container {
      max-width: 1200px;
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
      background: white;
      border-radius: 16px;
      padding: 0 32px 0 32px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .hero h1 {
      color: #333;
      margin: 32px 0 16px 0;
      font-size: 2.2rem;
      font-weight: 600;
    }

    .hero .subtitle {
      color: #03a9f4;
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 20px 0;
    }

    .hero .description {
      color: #666;
      line-height: 1.6;
      margin: 0;
      font-size: 1.05rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .hero .secondary-description {
      color: #666;
      line-height: 1.6;
      font-size: 1.05rem;
    }

    .hero .tertiary-description {
      color: #666;
      line-height: 1.6;
      font-size: 1.05rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .hero h1 {
        margin-top: 0;
      }
    }

    @media (max-width: 768px) {
      .hero .description.clamped {
        -webkit-line-clamp: 5;
      }
    }

    .read-more {
      margin-top: 10px;
      background: transparent;
      border: none;
      color: #1976d2;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      display: none;
    }

    .hero-cta {
      margin: 16px 0 24px 0;
      display: block;
      width: 100%;
    }

    .hero-cta button.install {
      color: #03a9f4;
      background: #fff;
      border: 1px solid #03a9f4;
      border-radius: 8px;
      padding: 10px 16px;
      font-weight: 600;
      cursor: pointer;
    }

    .hero-cta button.install:hover {
      background: #03a9f4;
      color: #fff;
    }

    .actions-list {
      background: white;
      border-radius: 16px;
      padding: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .action-item {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 16px;
      padding: 18px 16px;
      cursor: pointer;
      border-radius: 6px;
    }

    .action-item:hover {
      background: #fafafa;
    }

    .action-item:last-child {
      border-bottom: none;
    }

    .action-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e3f2fd;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-mask {
      width: 20px;
      height: 20px;
      background-color: #1976d2;
      -webkit-mask: var(--icon-url) no-repeat center / contain;
      mask: var(--icon-url) no-repeat center / contain;
    }

    .action-content h3 {
      margin: 0 0 6px 0;
      color: #333;
      font-size: 1rem;
    }

    .action-content p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
      line-height: 1.45;
    }

    .action-subtitle {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .experimental {
      color: #e78e21;
      font-size: 1rem;
      line-height: 1.45;
    }

    .action-trailing svg {
      width: 16px;
      height: 16px;
      fill: #9e9e9e;
    }

    .action-trailing img {
      width: 16px;
      height: 16px;
      display: block;
    }

    @media (max-width: 768px) {
      .hero[data-expanded='false'] .secondary-description {
        display: none;
      }

      .hero[data-expanded='false'] .tertiary-description {
        display: none;
      }

      .read-more {
        display: inline-block;
      }

      .layout {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
      }

      .hero {
        padding: 24px 20px;
        height: auto;
        display: block;
      }

      .hero h1 {
        font-size: 1.8rem;
      }

      .actions-list {
        height: auto;
        margin-top: 16px;
        display: block;
      }
    }
  `;

  private _goBack() {
    if (this.historyBack && window.history.length > 1) {
      window.history.back();
      return;
    }
    Router.go(this.backHref || '/');
  }

  private _handleActionClick(href: string) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    Router.go(href);
  }

  render() {
    const { hero, actions, heroCtaLabel, heroCta } =
      this.config ?? ({} as DetailsConfig);
    if (!hero) {
      return null;
    }

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
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          ${this.historyBack ? 'Back' : 'Back to Home'}
        </a>

        <div class="layout ${actions && actions.length ? '' : 'single'}">
          <div
            class="hero"
            data-expanded="${this.isDescriptionExpanded ? 'true' : 'false'}"
          >
            <h1>${hero.title}</h1>
            ${hero.subtitle
              ? html`<p class="subtitle">${hero.subtitle}</p>`
              : nothing}
            <p
              class="description ${this.isDescriptionExpanded ? '' : 'clamped'}"
            >
              ${hero.description}
            </p>
            ${hero.secondaryDescription
              ? html`<p class="secondary-description">
                  ${hero.secondaryDescription}
                </p>`
              : nothing}
            ${hero.tertiaryDescription
              ? html`<p class="tertiary-description">
                  ${hero.tertiaryDescription}
                </p>`
              : nothing}
            ${hero.learnMoreHref
              ? html`<p class="secondary-description">
                  <a
                    href="${hero.learnMoreHref}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >${hero.learnMoreLabel || 'Learn more'}</a
                  >
                </p>`
              : nothing}
            ${html`<button
              class="read-more"
              @click=${() =>
                (this.isDescriptionExpanded = !this.isDescriptionExpanded)}
            >
              ${this.isDescriptionExpanded ? 'Read less' : 'Read more'}
            </button>`}
            ${heroCta
              ? html`<div class="hero-cta">${heroCta}</div>`
              : heroCtaLabel
                ? html`<div class="hero-cta">
                    <wa-button variant="primary">${heroCtaLabel}</wa-button>
                  </div>`
                : nothing}
          </div>

          ${actions && actions.length
            ? html`<div class="actions-list">
                ${actions.map(
                  a => html`
                    <div
                      class="action-item"
                      @click=${() => this._handleActionClick(a.href)}
                    >
                      <div class="action-icon">
                        <div
                          class="icon-mask"
                          style="--icon-url: url(${a.icon})"
                        ></div>
                      </div>
                      <div class="action-content">
                        <h3>${a.title}</h3>
                        <p>
                          ${a.experimental
                            ? html`<span class="experimental"
                                >Experimental.</span
                              >`
                            : nothing}
                          <span>${a.description}</span>
                        </p>
                      </div>
                      <div class="action-trailing">
                        ${a.trailingIcon
                          ? html`<img
                              src="${a.trailingIcon}"
                              alt=""
                              style="width: 20px; height: 20px;"
                            />`
                          : html`<svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"
                              />
                            </svg>`}
                      </div>
                    </div>
                  `
                )}
              </div>`
            : nothing}
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
