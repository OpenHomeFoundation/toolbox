import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/details.js';

@customElement('zwa2-install-portable')
export class Zwa2InstallPortablePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p[slot='subtitle'] {
      color: var(--wa-color-brand-50);
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0 0 10px 0;
    }

    .footer-content {
      margin-top: 6px;
    }

    .footer-content h3 {
      margin-top: 24px;
      margin-bottom: 12px;
    }

    .footer-content ul,
    .footer-content ol {
      margin: 8px 0;
      padding-left: 24px;
    }

    .footer-content li {
      margin: 8px 0;
      line-height: 1.6;
    }

    .footer-content p {
      margin: 12px 0;
      line-height: 1.6;
    }

    .footer-content a {
      color: var(--wa-color-brand-50);
      text-decoration: none;
    }

    .footer-content a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <details-page
        back-href="/home-assistant-connect-zwa-2/"
        back-label="Back"
      >
        <span slot="title">Install portable Z-Wave firmware</span>
        <p slot="subtitle">Place ZWA-2 optimally and connect via Wi‑Fi</p>

        <div slot="footer" class="footer-content">
          <p>
            This experiment allows the ZWA-2 to be placed anywhere, and connect
            to your wifi network to establish a connection with Home Assistant.
            <a
              href="https://www.home-assistant.io/blog/"
              target="_blank"
              rel="noopener noreferrer"
              >https://www.home-assistant.io/blog/</a
            >.
          </p>

          <p>
            Follow this tutorial to install the portable Z-Wave experiment on
            your Home Assistant Connect ZWA-2.
          </p>

          <h3>Requirements</h3>
          <ul>
            <li>
              <a
                href="https://www.home-assistant.io"
                target="_blank"
                rel="noopener noreferrer"
                >Home Assistant</a
              >
              (2025.10.2 or newer)
            </li>
            <li>
              <a
                href="https://www.home-assistant.io/connect/zwa-2/"
                target="_blank"
                rel="noopener noreferrer"
                >Home Assistant Connect ZWA-2</a
              >
            </li>
            <li>
              <a
                href="https://amzn.to/4mLqa6S"
                target="_blank"
                rel="noopener noreferrer"
                >USB-C to C cable</a
              >
            </li>
          </ul>

          <p>To get started, follow these steps:</p>
          <ol>
            <li>
              Make a backup of your Z-Wave network in Home Assistant.<br />
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
                <li>Download backup is at the bottom of the page.</li>
              </ol>
            </li>
            <li>
              Connect the ZWA-2 to your computer via USB and use the installer
              below to flash the firmware:
              <p>
                <a href="#installer" @click=${this._scrollToInstaller}
                  >Go to Installer</a
                >
              </p>
            </li>
            <li>
              <b>
                This step is for people running a recommended Z-Wave
                installation:
              </b>

              <br />

              (Home Assistant OS with Z-Wave JS add-on managed by the Z-Wave
              integration)

              <ol type="a">
                <li>
                  Open Home Assistant and check for discovered ESPHome devices
                  on

                  <a
                    href="https://my.home-assistant.io/redirect/config_flow_start/?domain=esphome"
                    target="_blank"
                    rel="noopener noreferrer"
                    >the integrations page</a
                  >. Configure the discovered device.
                </li>

                <li>
                  On the same page, once ESPHome has been configured, look for
                  the discovered Z-Wave device. Configure it
                </li>
              </ol>
            </li>

            <li>
              <b>This step is for other installation methods:</b>

              <br />

              (if you are managing your own Z-Wave JS server)

              <ol type="a">
                <li>Find the IP address of the ZWA-2 on your network.</li>

                <li>
                  Configure the Z-Wave JS Server to use the following serial
                  port:

                  <code>esphome://ZWA-2-IP</code>. Replace ZWA-2-IP with the IP
                  address of your ZWA-2. If the IP address of your ZWA-2 is

                  <code>192.168.1.100</code>, the serial port would be

                  <code>esphome://192.168.1.100</code>. <br /><br />

                  <i>
                    Note: this is for the configuration of the Z-Wave JS Server,
                    not inside Home Assistant!
                  </i>
                </li>
              </ol>
            </li>
            <li>
              If you have moved the ZWA-2 to a different location, go to the
              Z-Wave config panel in Home Assistant and hit

              <i>rebuild network routes</i>.
            </li>
          </ol>
        </div>
      </details-page>
    `;
  }

  private _scrollToInstaller(e: Event) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zwa2-install-portable': Zwa2InstallPortablePage;
  }
}
