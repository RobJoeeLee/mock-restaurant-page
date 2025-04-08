export default function loadAbout(){
    const aboutContent = document.getElementById("content");
    aboutContent.innerHTML = "";
    aboutContent.classList.add("about-content");

    const aboutHeadline = document.createElement("h1");
    aboutHeadline.textContent = "About Us";

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "Our menu is crafted with care, offering a variety of delicious dishes made from fresh, high-quality ingredients. We’re passionate about food and take pride in delivering bold flavors, generous portions, and something for everyone to enjoy — from timeless classics to creative new favorites. At [Restaurant Name], we believe that dining is about more than just food — it’s about connection. That’s why we’re committed to providing exceptional service in a welcoming atmosphere where guests can relax, laugh, and make memories. We’re proud to be a part of the community and grateful for every guest who walks through our doors. Thank you for dining with us — we can’t wait to serve you again soon!"
    aboutDescription.classList.add("about-description")

    const aboutHeadLineTwo = document.createElement("h1");
    aboutHeadLineTwo.textContent = "Come Find Us";


    const aboutAddress = document.createElement("p");
    aboutAddress.classList.add("about-address");
    aboutAddress.innerHTML = `
    <strong>Address</strong><br>
    123 Food Street<br>
    Snack Neighborhood<br>
    Chef Town, FD 12345
    `;

    const aboutHoursTitle = document.createElement("strong");
    aboutHoursTitle.classList.add("about-hours-title");
    aboutHoursTitle.textContent = "Hours";

    const aboutHoursList = document.createElement("ul");
    aboutHoursList.classList.add("about-hours-list");
    const hours = [
        "Monday - Thursday: 11:30 AM - 10:00 PM",
        "Friday: 11:30 AM - 11:00 PM",
        "Saturday: 10:00 AM - 11:00 PM",
        "Sunday: 10:00 AM - 9:00 PM",
    ];

    hours.forEach((hour) => {
        const li = document.createElement("li");
        li.textContent = hour;
        aboutHoursList.appendChild(li);
    });

    const aboutPhone = document.createElement("p");
    aboutPhone.classList.add("about-phone")
    aboutPhone.innerHTML = `
    <strong>Phone</strong><br>
    (555) 123-4567
    `;

    const aboutEmail = document.createElement("p");
    aboutEmail.classList.add("about-email");
    aboutEmail.innerHTML = `
    <strong>Email</strong><br>
    info@mockrestaurant.com
    `;

    const aboutReservations = document.createElement("p");
    aboutReservations.classList.add("about-reservations");
    aboutReservations.innerHTML = `
    <strong>Reservations</strong><br>
    For reservations, please call us or book online.
    `;

    aboutContent.appendChild(aboutHeadline);
    aboutContent.appendChild(aboutDescription);
    aboutContent.appendChild(aboutHeadLineTwo);
    aboutContent.appendChild(aboutAddress);
    aboutContent.appendChild(aboutHoursTitle);
    aboutContent.appendChild(aboutHoursList);
    aboutContent.appendChild(aboutPhone);
    aboutContent.appendChild(aboutEmail);
    aboutContent.appendChild(aboutReservations);
}