/*BTN.addEventListener("click", () => {
  onoff.state = !onoff.state;
  
  if (onoff.state === false) {
    TEXT.innerHTML = "OFF";
  }else {
    TEXT.innerHTML = "ON";
  }
});*/

class view  extends SimpleEvent {
  constructor(containerID) {
    super()
    //console.log(document.getElementById("text"));
    this.c = document.getElementById(containerID);

    const d = document.createElement("div");
    d.setAttribute("id", `${containerID}-d`);

    this.btn = document.createElement("button");
    this.btn.addEventListener("click", () => {
      this.dispatchEvent("click");
    });
    this.btn.innerHTML = "OFF";
    d.appendChild(this.btn);


    this.txt = document.createElement("span");
    this.txt.innerHTML = "val";
    d.appendChild(this.txt);

    this.c.appendChild(d);

    //this.c.appendChild(document.createElement("br"));


  }


  update(model) {
    if (model.state === false) {
      this.btn.innerHTML = "OFF";
      this.btn.style.backgroundColor = "red";
      
    } else {
      this.btn.innerHTML = "ON";
      this.btn.style.backgroundColor = "green";
    }

    this.txt.innerHTML = model.value
    
  }

}
