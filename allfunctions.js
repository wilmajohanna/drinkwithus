"use strict";

login_register_button.addEventListener("click", login_or_register);

function loading_alert(alert) {

    let alert_box = document.createElement("div");
    alert_box.id = "white_box";
    document.querySelector("body").prepend(alert_box); //prepend = hamnar längst upp
    alert_box.innerHTML = `<div class="loading_text">${alert}</div>`;
}

function remove_loading_alert() {
    document.querySelector("#white_box").remove();
}

function relocateToFavourites() {
    window.location.replace("../favouritepage/");
}

function relocateToAllRecipes() {
    window.location.replace("../allrecipepage");
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

// Funktion för att flytta till recipe med dryckens namn query parameter
function relocateToRecipe(drinkName) {
    const previousPage = window.location.href; // Spara den nuvarande sidans URL som den föregående sidan
    window.history.pushState({ previousPage }, "", ""); // Lägg till den föregående sidan i webbläsarens historikstack
    window.location.replace(`../recipepage/index.php?drink=${drinkName}`); // Byt till den nya sidan
}

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.previousPage) {
        window.location.href = event.state.previousPage;
    }
    window.history.back();
});
