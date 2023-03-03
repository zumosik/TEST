class OnOff extends SimpleEvent {
  constructor(state, value) {
    super();
    this.stateVal = state;
    this.val = value;
    
  }

  set value(value) {
    this.val = value;
  }

  get value() {
    return this.val;
  }

  set state(state) {
    this.stateVal = state;
    this.dispatchEvent("update");
    this.countChange()
  }

  countChange() {
    if (this.stateVal === true) {
      setTimeout(() => {
        if (this.val < 99){
        this.val += 1;
        this.countChange();
        this.dispatchEvent("update");}
      }, 100);
    }
  }

  get state() {
    return this.stateVal;
  }



  
}
