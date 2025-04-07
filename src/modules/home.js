import insideRestaurantImage from "../images/inside-restaurant.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const description = document.createElement("p");
  description.textContent = "The best place for delicious food.";

  const image = document.createElement("img");
  image.src = insideRestaurantImage;
  image.alt = "Inside Restaurant";
  image.classList.add("restaurant-image");

  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(image);
}