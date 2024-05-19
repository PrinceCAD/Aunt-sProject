import { getHomeMessageCount } from "./functions.js";
import { messageDiv, B_Left, B_Right, HomePage } from "../getDOM.js";
import { backgrounds } from "../code.js";

const myHomeCarrosel = () => {
  var clickers = getHomeMessageCount();
  clickers[0].style.scale = "1.8";
  clickers[0].style.background = "#fff";

  clickers.forEach((e, index) => {
    e.addEventListener("click", () => {
      messageDiv.style.transform = `translateY(-${index}00%)`;

      e.style.scale = "1.8";
      e.classList.add("white");
      e.style.background = "#fff";

      for (let j = 1; j < clickers.length; j++) {
        clickers[(index + j) % clickers.length].style.scale = "1";
        clickers[(index + j) % clickers.length].style.background = "none";
      }
    });
  });
};

const backgroundOverlay = () => {
  let arr = [B_Left, B_Right];
  let photoI = 0;
  HomePage.style = `--bgp:url(${backgrounds[0]})`

  arr.forEach((e) => {
    e.addEventListener("click", () => {
      photoI++;
      HomePage.style = `--bgp:url(${backgrounds[photoI % backgrounds.length]});`;});});
};
export function HomeFunctions() {
  myHomeCarrosel();
  backgroundOverlay();
}
