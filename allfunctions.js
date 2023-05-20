"use strict";
/*
const favourite_button = document.getElementById("favourites");
console.log(favourite_button);

favourite_button.addEventListener("click", relocateToFavourites);

function relocateToFavourites(event) {
    window.location.replace(`../favouritepage`);
}


function loading_alert(alert) {

    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.querySelector("body").prepend(alert_box); //prepend = hamnar längst upp
    alert_box.innerHTML = `<div class="loading_text">${alert}</div>`;
}

function remove_loading_alert() {
    document.querySelector("#white_box").remove();
}
*/

const favourite_button = document.getElementById("favourites");

if (favourite_button) {
    favourite_button.addEventListener("click", relocateToFavourites);
}

function relocateToFavourites() {
    window.location.replace("../favouritepage");
}

function loading_alert(alertMessage) {
    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.body.prepend(alert_box);
    alert_box.innerHTML = `<div class="loading_text">${alertMessage}</div>`;
}

function remove_loading_alert() {
    let alert_box = document.querySelector("#white_box");
    if (alert_box) {
        alert_box.remove();
    }
}
