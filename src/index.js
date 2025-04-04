import "./styles.css";

function createHomePage(){
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to My Restaurant";

    const description = document.createElement("p");
    description.textContent = "The best place for delicious food.";

    content.appendChild(headline);
    content.appendChild(description);
}

createHomePage();