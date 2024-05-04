import { NavigationEvent,navGainColor } from "./subcodes/navbar.js"
import { HomeFunctions } from "./subcodes/Home.js";

export var letHeader = [100,100,120]

HomeFunctions()

window.addEventListener('scroll', () =>{
    NavigationEvent()   
    navGainColor()
})



