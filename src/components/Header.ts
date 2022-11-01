import BaseComponent from "../core/Component";

import "../styles/header.css";

export default class App extends BaseComponent {
  constructor(target: HTMLElement, props?: unknown) {
    super(target);
  }

  protected initialState() {
    this.render();
  }

  template() {
    return /* html */ `
      <nav class="header-wrapper">
        <a href="/" class="nav__link" data-link>Home</a>
        <a href="/login" class="nav__link" data-link>Login</a>
      </nav>
    `;
  }
}
