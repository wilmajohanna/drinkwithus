"use strict";

if (login_register_button !== undefined) {
    login_register_button.addEventListener("click", login_or_register);
};

function relocateToFavourites() {
    window.location.href = "./favouritepage";
};

function relocateToAllRecipes() {
    window.location.href = "./allrecipepage";
};

function home_button_page() {
    window.location.href = "../index.html";
};

function settings_toggle() {

    const toggle = document.createElement("button");
    dom.classList.toggle("settings_option");

};

home_button.addEventListener("click", home_button_page);

document.querySelectorAll(".fp_images").forEach(container => {
    container.addEventListener("click", event => {
        console.log(event);
        const themeName = event.explicitOriginalTarget.id;

        window.location = `./themepage/theme.html?theme=${themeName.toUpperCase()}`;
    })
});