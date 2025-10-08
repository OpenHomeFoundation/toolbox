import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('warning-card')
export class WarningCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .warning-container {
      margin: -20px 40px 20px 40px;
    }

    .warning-card {
      background: #fff3e0;
      border: 1px solid #ffb74d;
      border-radius: 8px;
      padding: 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .warning-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      color: #eb9136;
      margin-top: 3px;
    }

    .warning-content {
      flex: 1;
    }

    .warning-title {
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #e16725;
    }

    .warning-description {
      margin: 0;
      color: #5d4037;
      line-height: 1.5;
    }
  `;

  render() {
    return html`
      <div class="warning-container">
        <div class="warning-card">
          <svg class="warning-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <div class="warning-content">
            <h3 class="warning-title">
              Your browser does not support Web Serial
            </h3>
            <p class="warning-description">
              Open this page in Google Chrome or Microsoft Edge instead.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'warning-card': WarningCard;
  }
}
