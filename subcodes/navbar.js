import { screen, nav } from "../getDOM.js"
import { getMaxHeight, getSliders } from "./functions.js"

const screenSizing = () =>{
    let percent_scroll = Math.floor((window.scrollY/getMaxHeight())*100)
    var mod_fifth_percent = Math.floor((window.scrollY%714)*100/714)
    var what_section = Math.floor(((window.scrollY*nav.length)/(getMaxHeight()+2))+1)

    return [percent_scroll,window.innerHeight,what_section,mod_fifth_percent]
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
    var myDesired = [20,20,20]
    var myDesiredColor = `rgb(${myDesired[0]},${myDesired[1]},${myDesired[2]})`;
    if ((screenSizing()[2]>1 && screenSizing()[3]>80)) {
        
    }
    console.log(screenSizing()[2], screenSizing()[3]);
}