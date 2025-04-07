export default function loadMenu(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuHeadline = document.createElement("h1");
    menuHeadline.textContent = "Menu";

    content.appendChild(menuHeadline);

    const menu = {
        Appetizers: [
            {
                name: "Garlic Bread",
                price: "$6.99",
            },
            {
                name: "Potato Wedges",
                price: "$6.99",
            },
            {
                name: "Onion Rings",
                price: "$6.99",
            },
            {
                name: "French Fries",
                price: "$6.99",
            },
            {
                name: "Meat Balls",
                price: "$6.99",
            },
        ],
        Entrees: [
            {
                name: "Grilled Salmon",
                price: "$14.99",
                description: "Grilled salmon fillet season with herbs and lemon butter.",
            },
            {
                name: "Chicken Parmesan",
                price: "$14.99",
                description: "Breaded chicken breast topped with narinara sauce and melted mozzerella.",
            },
            {
                name: "Vegetable Stir-Fry",
                price: "$14.99",
                description: "Mixed vegetables stir-fried in a savory soy-ginger sauce."
            },
        ],
        Desserts: [
            {
                name: "Chocolate Lava Cake",
                price: "$8.99",
                description: "Warm chocolate cake served with vanilla ice cream.",
            },
            {
                name: "Tiramisu",
                price: "$8.99",
                description: "Layers of coffee-soaked ladyfingers and mascarpone cheese.",
            },
            {
                name: "Fruit Sorbet",
                price: "$8.99",
                description: "Refreshing fruit sorbet served in a crisp waffle cone or cup.",
            },
        ],
        Drinks: [
            {
                name: "Coke Products",
                price: "$2.99",
            },
            {
                name: "Lemonade",
                price: "$2.99",
            },
            {
                name: "Orange Juice",
                price: "$2.99",
            },
            {
                name: "Tea",
                price: "$2.99",
            },
            {
                name: "Signature Cocktails",
                price: "$6.99",
            },
        ],
    };

    Object.keys(menu).forEach((sectionName) => {
        const section = renderMenuSection(sectionName, menu[sectionName]);
        content.appendChild(section);
    });
}

function renderMenuSection(title, items){
    const section = document.createElement("section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    items.forEach((item) =>{
        const itemName = document.createElement("h3");
        itemName.textContent = `${item.name}: ${item.price}`;
        section.appendChild(itemName);

        if(item.description){
            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;
            section.appendChild(itemDescription);
        }
    });

    return section;
}