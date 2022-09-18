export function contactDisplay() {
    const contactPage = document.createElement("div");
    contactPage.setAttribute("id", "contact");
    contactPage.classList.add("hide");
    document.getElementById("content").appendChild(contactPage);

    const email = document.createElement("h2");
    email.textContent = "Email";
    contactPage.appendChild(email);

    const firstP = document.createElement("p");
    firstP.textContent = "veryrealemail@email.com";
    contactPage.appendChild(firstP);
    
    const telNum = document.createElement("h2");
    telNum.textContent = "Telephone";
    contactPage.appendChild(telNum);

    const secondP = document.createElement("p");
    secondP.textContent = "11 91111 1111";
    contactPage.appendChild(secondP);
}