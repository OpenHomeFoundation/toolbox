import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('troubleshooting-portable')
export class TroubleshootingPortable extends LitElement {
  static styles = css`
    .troubleshooting-container {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 30px;
    }

    .troubleshooting-card {
      background: var(--app-bg-card);
      border-radius: 16px;
      padding: 26px 32px;
      padding-bottom: 10px;
      box-shadow: 0 2px 8px var(--app-shadow);
      margin: 20px 0 30px;
    }

    .troubleshooting-card h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .troubleshooting-card p {
      margin: 12px 0;
      line-height: 1.6;
    }

    .troubleshooting-card ul,
    .troubleshooting-card ol {
      margin: 8px 0;
      padding-left: 24px;
    }

    .troubleshooting-card li {
      margin: 8px 0;
      line-height: 1.6;
    }

    .troubleshooting-card a {
      color: var(--wa-color-brand-50);
      text-decoration: none;
    }

    .troubleshooting-card a:hover {
      text-decoration: underline;
    }

    @media (max-width: 1200px) {
      .troubleshooting-container {
        padding: 0 20px;
      }
    }
  `;

  render() {
    return html`
      <div class="troubleshooting-container">
        <div class="troubleshooting-card">
          <h3>Troubleshooting</h3>
          <p>
            Make sure the ZWA-2 is connected to the same network as Home
            Assistant.
          </p>
          <p>
            Make sure you configure both the discovered ZWA-2 ESPHome and Z-Wave
            configurations in Home Assistant.
          </p>
          <p>
            If Home Assistant is connected and you are not able to see your
            Z-Wave devices, restore the backup.
          </p>
          <ol type="a">
            <li>
              You can do this on the
              <a
                href="https://my.home-assistant.io/redirect/config_zwave_js/"
                target="_blank"
                rel="noopener noreferrer"
                >Z-Wave config panel in Home Assistant</a
              >. Config -> Devices & services -> Z-Wave -> Settings icon.
            </li>
            <li>Restore backup is at the bottom of the page.</li>
          </ol>
          <p>
            If you are unable to get it to work, revert back by
            <a href="/home-assistant-connect-zwa-2/install"
              >installing the original firmware</a
            >
            and connect it directly to Home Assistant.
          </p>
        </div>
      </div>
    `;
  }
}
