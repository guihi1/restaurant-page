import './styles.css'
import { menuDisplay } from './menu';
import { homeDisplay } from './home';
import { contactDisplay } from './contact';

const title = document.createElement("h1");
title.textContent = "Restaurant";
document.getElementById("content").appendChild(title);

const nav = document.createElement("nav");
document.getElementById("content").appendChild(nav);

const unList = document.createElement("ul");
nav.appendChild(unList);
const homeLink = document.createElement("li");
homeLink.textContent = "Home";
const menuLink = document.createElement("li");
menuLink.textContent = "Menu";
const contactLink = document.createElement("li");
contactLink.textContent = "Contact";
unList.appendChild(homeLink);
unList.appendChild(menuLink);
unList.appendChild(contactLink);

homeDisplay();
menuDisplay();
contactDisplay();

homeLink.addEventListener("click", () => {
    if(document.getElementById("contact").classList.contains("hide") === false){
        document.getElementById("contact").classList.add("hide");
    }
    if(document.getElementById("menu").classList.contains("hide") === false){
        document.getElementById("menu").classList.add("hide");
    }
    document.getElementById("home").classList.remove("hide");
});

menuLink.addEventListener("click", () => {
    if(document.getElementById("contact").classList.contains("hide") === false){
        document.getElementById("contact").classList.add("hide");
    }
    if(document.getElementById("home").classList.contains("hide") === false){
        document.getElementById("home").classList.add("hide");
    }
    document.getElementById("menu").classList.remove("hide");
});

contactLink.addEventListener("click", () => {
    if(document.getElementById("menu").classList.contains("hide") === false){
        document.getElementById("menu").classList.add("hide");
    }
    if(document.getElementById("home").classList.contains("hide") === false){
        document.getElementById("home").classList.add("hide");
    }
    document.getElementById("contact").classList.remove("hide");
});

const credit = document.createElement("div");
credit.classList.add("credit");
document.getElementById("content").appendChild(credit);

const backgroundCredit = document.createElement("a");
const linkText = document.createTextNode("Background image by Brooke lark");
backgroundCredit.appendChild(linkText);
backgroundCredit.href = "https://unsplash.com/photos/wMzx2nBdeng";
credit.appendChild(backgroundCredit);

const foodCredit = document.createElement("div");
foodCredit.textContent = "Click on the food images to see their photographers!";
credit.appendChild(foodCredit);