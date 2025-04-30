import { pageLoad } from "./pageload";
import {loadMenu} from "./menu";
import { loadContact } from "./contact";
import "./styles.css";

const render = function(){
    pageLoad();

    const homeButton = document.getElementById("Home");
    homeButton.addEventListener("click",()=>{
        document.body.innerHTML = "";
        pageLoad();
    });

    const menuButton = document.getElementById("Menu");
    menuButton.addEventListener("click",()=>{
        loadMenu();
    });

    const contactButton = document.getElementById("Contact");
    contactButton.addEventListener("click",()=>{
        loadContact();
    });
}

render();