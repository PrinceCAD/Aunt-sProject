import { screen, nav,header } from "../getDOM.js"
import { getMaxHeight, getSliders } from "./functions.js"
import { letHeader } from "../code.js"

const screenSizing = () =>{
    let percent_scroll = Math.floor((window.scrollY/getMaxHeight())*100)
    var mod_fifth_percent = Math.floor((window.scrollY%714)*100/714)
    var mod_fifth_percent_accurate = ((window.scrollY%714)*100/714)
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
    var myDesiredColor = `rgb(${letHeader[0]},${letHeader[1]},${letHeader[2]})`;
    if (
      screenSizing()[2] == 1 &&
      screenSizing()[3] > 20 &&
      screenSizing()[3] < 80
    ) {
        header.style.background = `linear-gradient(rgba(0, 0, 0, ${0.617+((screenSizing()[3]-20)/60)/0.1}),${50+(screenSizing()[3]-20)}%,transparent)`;
    } else if (
      screenSizing()[2] == 1 &&
      screenSizing()[3] > 80 &&
      screenSizing()[3] < 95
    ) {
      header.style.background = `linear-gradient(rgb(
        ${0 + ((screenSizing()[4] - 80) / 15) * letHeader[0]}
      ,${0 + ((screenSizing()[4] - 80) / 15) * letHeader[1]}
      ,${0 + ((screenSizing()[4] - 80) / 15) * letHeader[2]}),100%,transparent)`;
    }yu0ulk
    console.log(screenSizing()[2], screenSizing()[3]);
}