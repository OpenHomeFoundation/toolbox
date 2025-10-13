import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('action-item')
export class ActionItem extends LitElement {
  @property({ type: String }) href = '';
  @property({ type: String }) icon = '';
  @property({ type: String, attribute: 'trailing-icon' }) trailingIcon = '';

  static styles = css`
    :host {
      display: block;
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
      background: var(--app-bg-secondary);
    }

    .action-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--app-category-bg);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-mask {
      width: 20px;
      height: 20px;
      background-color: var(--app-category-text);
      -webkit-mask: var(--icon-url) no-repeat center / contain;
      mask: var(--icon-url) no-repeat center / contain;
    }

    .action-content {
      min-width: 0;
    }

    .action-content ::slotted(h3),
    .action-content ::slotted([slot='title']) {
      margin: 0 0 6px 0;
      color: var(--app-text-primary);
      font-size: 1rem;
      font-weight: 600;
    }

    .action-content ::slotted(p),
    .action-content ::slotted([slot='description']) {
      margin: 0;
      color: var(--app-text-secondary);
      font-size: 0.95rem;
      line-height: 1.45;
    }

    .action-content ::slotted(.experimental) {
      color: #e78e21;
    }

    .action-trailing svg {
      width: 16px;
      height: 16px;
      fill: var(--app-text-muted);
    }

    .chevron-icon {
      color: var(--app-text-primary);
      width: 20px !important;
      height: 20px !important;
    }
  `;

  private _handleClick() {
    const isExternal = this.href.startsWith('http');
    if (isExternal) {
      window.open(this.href, '_blank', 'noopener,noreferrer');
      return;
    }
    window.location.href = this.href;
  }

  render() {
    return html`
      <div class="action-item" @click=${this._handleClick}>
        <div class="action-icon">
          <div class="icon-mask" style="--icon-url: url(${this.icon})"></div>
        </div>
        <div class="action-content">
          <slot></slot>
        </div>
        <div class="action-trailing">
          ${this.trailingIcon
            ? html`<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="chevron-icon"
              >
                <path
                  fill="currentColor"
                  d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                />
              </svg>`
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'action-item': ActionItem;
  }
}
