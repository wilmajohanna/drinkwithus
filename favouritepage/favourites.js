"use strict";
const favourite_button = document.getElementById("heart");

function activate_favourites(event) {

    // if (favourite_button.addEventListener)

};

const body_object = { name: "Paloma", username: "Wilma" }
fetch("favourites.php", {
    method: "POST",
    header: { "content-type": "application/json" },
    body: JSON.stringify(body_object)
}).then(r => r.json()).then(console.log)

favourite_button.addEventListener("click", activate_favourites);