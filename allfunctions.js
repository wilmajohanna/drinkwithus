"use strict";

document.addEventListener("DOMContentLoaded", function () {
    if (login_register_button !== undefined) {
        login_register_button.addEventListener("click", login_or_register);
    };

    function home_button_page() {
        window.location.replace("../index.html")
    };

    home_button.addEventListener("click", home_button_page);

    document.querySelectorAll(".fp_images").forEach(container => {
        container.addEventListener("click", event => {
            console.log(event);
            const themeName = event.explicitOriginalTarget.id;

            window.location = `../themepage/theme.html?theme=${themeName.toUpperCase()}`;
        })
    });
});

function relocateToFavourites() {
    window.location.replace("../favouritepage");
};

function relocateToAllRecipes() {
    window.location.replace("../allrecipepage");
};


if (document.getElementById("see_all") !== null) {
    const see_all_button = document.getElementById("see_all");
    see_all_button.addEventListener("click", relocateToAllRecipes);
}


function home_button_page() {
    window.location.replace("../index.html")
};

home_button.addEventListener("click", home_button_page);

document.querySelectorAll(".fp_images").forEach(container => {
    container.addEventListener("click", event => {
        console.log(event);
        const themeName = event.explicitOriginalTarget.id;

        window.location = `../themepage/theme.html?theme=${themeName.toUpperCase()}`;
    })
});
