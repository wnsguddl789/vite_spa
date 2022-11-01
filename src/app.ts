import BaseComponent from "./core/Component";

import Header from "./components/Header";

import { getDom } from "./utils";
import "./styles/reset.css";

export default class App extends BaseComponent {
  constructor(target: HTMLElement) {
    super(target);
    this.state = {};
  }

  componentDidMount() {
    const headerRoot = getDom("#header");

    new Header(headerRoot);
  }

  template() {
    return /* html */ `
        <header id="header"></header>
        <main id="main"></main>
    `;
  }
}
