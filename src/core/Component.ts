import type { UnknownObject } from "../types";

export default class Component {
  constructor(
    private target: HTMLElement,
    protected element?: HTMLElement,
    protected props?: UnknownObject,
    protected state?: UnknownObject
  ) {
    this.initialState();
  }

  protected initialState() {
    this.render();
  }

  protected setState(nextState: object) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  protected componentDidMount() {}

  protected template() {
    return ``;
  }

  protected render() {
    this.element = this.target;
    this.target.innerHTML = this.template();

    this.componentDidMount();
  }
}
