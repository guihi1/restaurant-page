import Food1 from "./images/food1.jpg"
import Food2 from "./images/food2.jpg"
import Food3 from "./images/food3.jpg"
import Food4 from "./images/food4.jpg"

export function menuDisplay() {
    const menuPage = document.createElement("div");
    menuPage.setAttribute("id", "menu");
    menuPage.classList.add("hide");
    document.getElementById("content").appendChild(menuPage);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("grid-container");
    menuPage.appendChild(menuContainer);

    const food1Container = document.createElement("div");
    food1Container.classList.add("food-container");
    menuContainer.appendChild(food1Container);
    const myFood1 = new Image();
    myFood1.onclick = function() {
        window.location.href = "https://unsplash.com/photos/kcA-c3f_3FE";
    };
    myFood1.src = Food1;
    myFood1.classList.add("image");
    food1Container.appendChild(myFood1);
    const food1Text = document.createElement("div");
    food1Text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum blanditiis repellendus esse debitis repudiandae voluptas tempora neque adipisci nisi atque velit eos mollitia aperiam libero ducimus dignissimos, sit praesentium."
    food1Container.appendChild(food1Text);

    const food2Container = document.createElement("div");
    food2Container.classList.add("food-container");
    menuContainer.appendChild(food2Container);
    const myFood2 = new Image();
    myFood2.onclick = function() {
        window.location.href = "https://unsplash.com/photos/IGfIGP5ONV0";
    };
    myFood2.src = Food2;
    myFood2.classList.add("image");
    food2Container.appendChild(myFood2);
    const food2Text = document.createElement("div");
    food2Text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum blanditiis repellendus esse debitis repudiandae voluptas tempora neque adipisci nisi atque velit eos mollitia aperiam libero ducimus dignissimos, sit praesentium."
    food2Container.appendChild(food2Text);

    const food3Container = document.createElement("div");
    food3Container.classList.add("food-container");
    menuContainer.appendChild(food3Container);
    const myFood3 = new Image();
    myFood3.onclick = function() {
        window.location.href = "https://unsplash.com/photos/D-vDQMTfAAU";
    };
    myFood3.src = Food3;
    myFood3.classList.add("image");
    food3Container.appendChild(myFood3);
    const food3Text = document.createElement("div");
    food3Text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum blanditiis repellendus esse debitis repudiandae voluptas tempora neque adipisci nisi atque velit eos mollitia aperiam libero ducimus dignissimos, sit praesentium."
    food3Container.appendChild(food3Text);

    const food4Container = document.createElement("div");
    food4Container.classList.add("food-container");
    menuContainer.appendChild(food4Container);
    const myFood4 = new Image();
    myFood4.onclick = function() {
        window.location.href = "https://unsplash.com/photos/tkfRSPt-jdk";
    };
    myFood4.src = Food4;
    myFood4.classList.add("image");
    food4Container.appendChild(myFood4);
    const food4Text = document.createElement("div");
    food4Text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum blanditiis repellendus esse debitis repudiandae voluptas tempora neque adipisci nisi atque velit eos mollitia aperiam libero ducimus dignissimos, sit praesentium."
    food4Container.appendChild(food4Text);
}