import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('troubleshooting-poe')
export class TroubleshootingPoe extends LitElement {
  static styles = css`
    .troubleshooting-container {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 30px;
    }

    .troubleshooting-card {
      background: var(--app-bg-card);
      border-radius: 16px;
      padding: 1px 32px;

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
            Make sure the Waveshare ESP32-PoE board is connected to the same
            network as Home Assistant.
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
            If you are unable to get it to work,
            <a
              href="https://toolbox.openhomefoundation.org/home-assistant-connect-zwa-2/install"
              target="_blank"
              rel="noopener noreferrer"
              >revert back to the original firmware</a
            >
            and connect the ZWA-2 directly to Home Assistant.
          </p>
          <p>
            If you want to further customize the ESPHome-based portable Z-Wave
            firmware that runs on the ZWA-2, you can adopt it inside ESPHome
            Device Builder. To ensure it continues to work, after adoption, you
            have to edit the generated YAML and remove the
            <code>encryption</code> and <code>key</code> sections under
            <code>api:</code>. Z-Wave JS does not currently support ESPHome
            encryption and the Z-Wave serial protocol has their own encryption
            mechanism.
          </p>
        </div>
      </div>
    `;
  }
}
