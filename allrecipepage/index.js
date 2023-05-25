"use strict";

function redirectToRecipe(drinkName) {
    const encodedDrinkName = encodeURIComponent(drinkName);
    window.location.href = `../recipepage/recipe.html?drink=${encodedDrinkName}`;
}


function redirectToTheme(theme) {
    const encodedTheme = encodeURIComponent(theme);
    window.location.href = `../themepage/theme.html?theme=${encodedTheme}`;
}



// see_all_button.addEventListener("click", relocateToAllRecipes);

// function load_allrecipes_page(event) {

// }

document.addEventListener("DOMContentLoaded", () => {

    async function send_to_favorites(event) {
        const heartsSpan = event.currentTarget;
        heartsSpan.classList.toggle('liked');

        if (heartsSpan.classList.contains('liked')) {
            heartsSpan.style.color = 'red'; // Set heart color to red
        } else {
            heartsSpan.style.color = ''; // Remove inline color style to revert to original color
        }
        // LocalStorage är ett objekt. Här hämtar vi namnet på användarens namn som vi har sparat i nyckeln "username".
        let current_username = localStorage.getItem("username");
        let drink_name = event.target.parentElement.querySelector("p").textContent;

        let data_to_send = {
            username: current_username,
            drinkname: drink_name,
        };

        try {
            await fetch("./favouritepage/favourites.php", {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data_to_send)

            })

        } catch (error) {
            console.log("An error occurred:", error);
        }
    }

    // Lägger eventlistener på like-knapparna
    const like_buttons = document.querySelectorAll(".hearts");
    like_buttons.forEach((like_button) =>
        like_button.addEventListener("click", send_to_favorites)
    );


}


);

// fetch("localhost:1234/recipe.php?drinkname=localStorage")