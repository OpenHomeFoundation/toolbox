import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/app-header.js";

@customElement("main-app")
export class MainApp extends LitElement {
  render() {
    return html`
      <div>
        <app-header></app-header>
      </div>
    `;
  }
}
