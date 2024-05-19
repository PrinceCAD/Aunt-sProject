import { screen, nav,header, navLinks, logo, B_Left, B_Right } from "../getDOM.js"
import { getMaxHeight, getSliders } from "./functions.js"

export const screenSizing = () =>{
    let percent_scroll = Math.floor((window.scrollY/getMaxHeight())*100)
    var mod_fifth_percent = Math.floor(
      ((window.scrollY % (getMaxHeight() / navLinks.length)) * 100) /
        (getMaxHeight() / navLinks.length)
    );
    var mod_fifth_percent_accurate =
      ((window.scrollY % (getMaxHeight() / navLinks.length)) * 100) /
      (getMaxHeight() / navLinks.length);
    var what_section = Math.floor(((window.scrollY*nav.length)/(getMaxHeight()+2))+1)

    return [percent_scroll,window.innerHeight,what_section,mod_fifth_percent,mod_fifth_percent_accurate]
}

const navRelay = () =>{
    return getSliders()
}

export const NavigationEvent = () =>{
    navRelay()[screenSizing()[2]-1].style.transform =  `translateX(-${0}%)`
    for (let index = 0; index < nav.length-2; index++) {
        navRelay()[(screenSizing()[2]+1+index)%nav.length].style.transform =  `translateX(-${102}%)`
    }
    navRelay()[screenSizing()[2]-1].style.transform =  `translateX(-${0 + screenSizing()[3]+5}%)`
    navRelay()[screenSizing()[2]].style.transform =  `translateX(-${105 - screenSizing()[3]}%)`
}

export const navGainColor =()=>{
    if (screenSizing()[2]==1 && screenSizing()[3]<92) {
      B_Left.style.border = '2px solid #fff'
      B_Right.style.border = '2px solid #fff'
      logo.style.transform = "translateX(0)";
      for(let i =0; i<5; i++){
        navLinks[i].style.color = '#fff'
        navRelay()[i].style.background = '#fff'
      }
    }
    else if (screenSizing()[3] > 93) {
      B_Left.style.border = '2px solid #000'
      B_Right.style.border = '2px solid #000'
      
      logo.style.transform = "translateX(-50%)";
      for (let i = 0; i < 5; i++) {
        navLinks[i].style.color = "#000";
        navRelay()[i].style.background = "#000";
      }
    }
}