import "./styles.css";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadAbout from "./modules/about";
import insideRestaurantImage from "./images/inside-restaurant.jpg"

function createHomePage(){
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Our Restaurant";

    const description = document.createElement("p");
    description.textContent = "The best place for delicious food.";

    content.appendChild(headline);
    content.appendChild(description);
}

function setupEventListeners(){
    document.getElementById("home-button").addEventListener("click", loadHome);
    document.getElementById("menu-button").addEventListener("click", loadMenu);
    document.getElementById("about-button").addEventListener("click", loadAbout);
}

const insideRestaurant = document.createElement("img");
insideRestaurant.src = insideRestaurantImage;
insideRestaurant.alt = "Inside Restaurant";
document.getElementById("content").appendChild(insideRestaurant);

createHomePage();
setupEventListeners();
loadHome();