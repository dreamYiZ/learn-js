import _ from "lodash";
import "./style.css";
import Icon from "./pic.jpeg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

function component2() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console";
  element.onclick = printMe;
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component2());
