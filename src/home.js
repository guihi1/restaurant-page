export function homeDisplay() {
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

    const homePage = document.createElement("div");
    homePage.setAttribute("id","home");
    content.appendChild(homePage);

    const aboutUs = document.createElement("h2");
    aboutUs.textContent = "About us";
    homePage.appendChild(aboutUs);

    const firstP = document.createElement("p");
    firstP.textContent = "Our restaurant is awesome! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum voluptatibus eos magni. Tempora corrupti natus quod voluptatum temporibus quibusdam neque fuga ipsa, voluptates maxime, vel ipsam officiis, autem rerum!";
    homePage.appendChild(firstP);
    
    const regularTimes = document.createElement("h2");
    regularTimes.textContent = "Opening hours";
    homePage.appendChild(regularTimes);

    const secondP = document.createElement("p");
    secondP.textContent = "Weekday: 8 a.m to 10 p.m";
    homePage.appendChild(secondP);

    const thirdP = document.createElement("p");
    thirdP.textContent = "Weekend: 10 a.m to 2 p.m";
    homePage.appendChild(thirdP);
}