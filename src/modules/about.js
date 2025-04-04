export default function loadAbout(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const description = document.createElement("p");
    description.textContent = "Find us at 123 Food Street!"

    content.appendChild(headline);
    content.appendChild(description);
}