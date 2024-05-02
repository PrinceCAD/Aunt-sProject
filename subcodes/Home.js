import { getHomeMessageCount } from "./functions.js";
import { messageDiv } from "../getDOM.js";

const myHomeCarrosel = () => {
    var clickers = getHomeMessageCount()
    clickers[0].style.scale = '1.8'
    clickers[0].style.background = '#fff'

    clickers.forEach((e, index) => {
      e.addEventListener("click", () => {

          messageDiv.style.transform = `translateY(-${index}00%)`;
          
          e.style.scale = '1.8'
          e.classList.add('white')
          e.style.background = '#fff'

          for(let j=1;j<clickers.length;j++){
              clickers[(index+j)%clickers.length].style.scale = '1'
              clickers[(index + j) % clickers.length].style.background = "none";
        }
      });
      
    });

    clickers.forEach((e, index) => {
      e.addEventListener("mouseover", () => {
        e.style.scale = "1.5";
        for (let j = 1; j < clickers.length; j++) {
          clickers[(index + j) % clickers.length].style.scale = "1";
        }
      });
    });

    clickers.forEach((e, index) => {
      e.addEventListener("mouseout", () => {
        for (let j = 0; j < clickers.length; j++) {
          clickers[(index + j) % clickers.length].style.scale = "1";
          clickers[j].classList.remove('white')
        }
      });
    }
  );
}
export function HomeFunctions(){
    myHomeCarrosel()
}