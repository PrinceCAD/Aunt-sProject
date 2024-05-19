import { NavigationEvent,navGainColor } from "./subcodes/navbar.js"
import { HomeFunctions } from "./subcodes/Home.js";
export var backgrounds = [
  "../imgs/home.jpg",
  "../imgs/new/artem-kovalev-fk3XUcfTAvk-unsplash.jpg",
  "../imgs/new/ben-white-e92L8PwcHD4-unsplash.jpg",
  "../imgs/new/home.jpg",
  "../imgs/new/marcos-paulo-prado-LlrQF5JFRIs-unsplash.jpg",
  "../imgs/new/nik-shuliahin-BuNWp1bL0nc-unsplash.jpg",
  "../imgs/new/taylor-hernandez-NK-N6coeI5Y-unsplash.jpg",
  "../imgs/new/valentina-ivanova-IkaQsoxmkmU-unsplash.jpg",
  "../imgs/new/yingchou-han-IJrIeCs3D4g-unsplash.jpg",
];
HomeFunctions()

window.addEventListener('scroll', () =>{
    NavigationEvent()   
    navGainColor()
})



