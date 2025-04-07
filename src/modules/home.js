import insideRestaurantImage from "../images/inside-restaurant.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";
  headline.classList.add("home-headline");

  const image = document.createElement("img");
  image.src = insideRestaurantImage;
  image.alt = "Inside Restaurant";
  image.classList.add("restaurant-image");

  const description = document.createElement("p");
  description.textContent = "At [Restaurant Name], we're passionate about creating memorable dining experiences. Whether you're looking for a casual night out with friends, a romantic dinner, or a special occasion celebration, we're dedicated to providing a warm and inviting atmosphere where you can relax and enjoy delicious food.";
  description.classList.add("home-page-description");

  const homeHoursTitle = document.createElement("h1");
  homeHoursTitle.textContent = "Hours";
  homeHoursTitle.classList.add("home-hours-title");

  const homeHoursContent = document.createElement("ul");
  homeHoursContent.classList.add("home-hours-content");

  const hours = [
    "Monday: 11:30 AM - 10:00 PM",
    "Tuesday: 11:30 AM - 10:00 PM",
    "Wednesday: 11:30 AM - 10:00 PM",
    "Thursday: 11:30 AM - 10:00 PM",
    "Friday: 11:30 AM - 11:00 PM",
    "Saturday: 10:00 AM - 11:00 PM",
    "Sunday: 10:00 AM - 9:00 PM",
  ];

  hours.forEach(day => {
    const li = document.createElement("li");
    li.textContent = day;
    homeHoursContent.appendChild(li);
  })

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
  content.appendChild(homeHoursTitle);
  content.appendChild(homeHoursContent);
}