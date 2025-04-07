import insideRestaurantImage from "../images/inside-restaurant.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const image = document.createElement("img");
  image.src = insideRestaurantImage;
  image.alt = "Inside Restaurant";
  image.classList.add("restaurant-image");

  const description = document.createElement("p");
  description.textContent = "At [Restaurant Name], we're passionate about creating memorable dining experiences. Whether you're looking for a casual night out with friends, a romantic dinner, or a special occasion celebration, we're dedicated to providing a warm and inviting atmosphere where you can relax and enjoy delicious food";
  description.classList.add("home-page-description");

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}