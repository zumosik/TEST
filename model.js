class OnOff {
  constructor(state, value) {
    this.stateVal = state;
    this.val = value;
    this.eventHandlers = {
      update: [],
    };
  }

  set value(value) {
    this.val = value;
  }

  get value() {
    return this.val;
  }

  set state(state) {
    this.stateVal = state;
    this.update();
    this.countChange()
  }

  countChange() {
    if (this.stateVal === true) {
      setTimeout(() => {
        this.val += 1;
        this.countChange();
        this.update();
      }, 100);
    }
  }

  get state() {
    return this.stateVal;
  }

  update() {
    this.eventHandlers.update.forEach((eh) => eh(this));
  }

  addEventListener(eventType, eventHandler) {
    this.eventHandlers[eventType].push(eventHandler);
  }
}
