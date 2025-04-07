import "./styles.css";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadAbout from "./modules/about";

function setupEventListeners() {
  document.getElementById("home-button").addEventListener("click", loadHome);
  document.getElementById("menu-button").addEventListener("click", loadMenu);
  document.getElementById("about-button").addEventListener("click", loadAbout);
}

setupEventListeners();
loadHome();