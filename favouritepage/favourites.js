"use strict";
const favourite_button = document.getElementsById("favourites");

function relocateToFavourites(event) {
    window.location.replace(`../favouritepage/`);

}

favourite_button.addEventListener("click", relocateToFavourites);

const body_object = { drinkname: "Paloma", username: "Wilma" };
fetch("favourites.php", {
    method: "POST",
    header: { "content-type": "application/json" },
    body: JSON.stringify(body_object),
})
    .then((r) => r.json())
    .then(console.log);


