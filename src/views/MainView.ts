import BaseComponent from "../core/Component";
import type { UnknownObject } from "../types";

export default class MainView extends BaseComponent {
  constructor(target: HTMLElement, props?: UnknownObject) {
    super(target);
  }

  protected initialState() {
    this.setState({ title: "hello" });
    this.render();
  }
  protected componentDidMount(): void {}

  protected template(): string {
    return /* html */ `
        <div class="">${this.state?.title}</div>
    `;
  }
}
