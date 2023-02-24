class Bridge {
  constructor(count) {
    for (let i = 0; i < count; i++) {
      this.addButton();
    }
  }

  addButton() {
    const b = new OnOff(false, 0);
    const ch = new view("c");

    /*ch.addEventListener("click", (b) => {
          //h.click(b);
        });*/

    ch.addEventListener("click", () => {
      b.state = !b.state;
    });

    ch.update(b);

    b.addEventListener("update", (board) => {
      ch.update(board);
    });
  }
}
