export default class Store {
  constructor(
    protected observers: any[],
    protected state: object,
    initState: object
  ) {
    this.observers = [];
    this.state = initState;
  }

  setState(nextState: object) {
    this.state = { ...this.state, ...nextState };
    console.log(`💝 store `, this.state);
    this.notify();
  }

  subscribe(func: Function) {
    this.observers.push(func);
  }

  unsubscribe(func: Function) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  unsubscribeAll() {
    this.observers = [];
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}
