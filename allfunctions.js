"use strict";

if (login_register_button !== undefined) {
    login_register_button.addEventListener("click", login_or_register);
}

function relocateToFavourites() {
    window.location.replace("../favouritepage/");
}

function relocateToAllRecipes() {
    window.location.replace("../allrecipepage");
}

function home_button_page () {
    window.location.replace("../index.html")
}
home_button.addEventListener("click", home_button_page)

document.querySelectorAll(".fp_images").forEach(container => {
    container.addEventListener("click", e => {
        console.log(e);
        const themeName = e.explicitOriginalTarget.id;

        window.location = `./themepage/theme.html?theme=${themeName.toUpperCase()}`;
    })
})