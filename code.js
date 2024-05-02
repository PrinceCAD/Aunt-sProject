import { NavigationEvent,navGainColor } from "./subcodes/navbar.js"
import { HomeFunctions } from "./subcodes/Home.js";

HomeFunctions()

window.addEventListener('scroll', () =>{
    NavigationEvent()   
    navGainColor()
})



