export default function loadHome(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to My Restaurant";

    const description = document.createElement("p");
    description.textContent = "The best place for delicious food";
    
    content.appendChild(headline);
    content.appendChild(description);
}