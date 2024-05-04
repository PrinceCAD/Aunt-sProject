import { nav, messageDiv, clicks } from "../getDOM.js";

function getMaxHeight() {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight
  );

  return height;
}

function getSliders() {
  var sliders = [];
  for (let i = 0; i < nav.length; i++) {
    var slide_kid = nav[i].childNodes[1];
    sliders.push(slide_kid);
  }
  return sliders;
}

function getHomeMessageCount() {
  for (let k = 1; k < messageDiv.childNodes.length; k = k + 2) {
    var divNode = document.createElement("div");
    divNode.classList.add("click");
    clicks.appendChild(divNode);
  }

  var clickers = [];
  for (let i = 1; i < clicks.childNodes.length; i++) {
    clickers.push(clicks.childNodes[i]);
  }
  return clickers;
}
export { getMaxHeight, getSliders, getHomeMessageCount };
