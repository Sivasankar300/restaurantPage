import "./styles.css";
import { pageLoad } from "./pageLoad";
import { loadAboutpage } from "./about";
import { loadHomepage } from "./homepage";
import { loadMenupage } from "./menu";

pageLoad();

const pageSwitch = (function(){
    const homepage = document.querySelector(".homepage")
    const menu = document.querySelector(".menu");
    const about = document.querySelector(".about");
    const nav = document.querySelector("nav");

    nav.addEventListener("click",(event)=>{
        switch(event.target.classList[0]){
            case "homepage":
                clearDOM();
                loadHomepage()
                break;
            case "aboutpage":
                clearDOM();
                loadAboutpage()
                break;
            case "menupage":
                clearDOM();
                loadMenupage()
                break;
                
                
        }

    })
    
})()

function clearDOM(){
    const content = document.querySelector("#content");

    while (content.firstChild){
        content.removeChild(content.lastChild);
    }
}


