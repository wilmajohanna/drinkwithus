"use strict";

// Add event listener to recipe container
document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("theme_wrapper");

    recipeContainer.addEventListener("click", () => {
        console.log(recipeContainer);

        let clicked_drink_name = recipeContainer.querySelector(".theme_name").innerHTML;
        localStorage.setItem("selected_drink", clicked_drink_name);

        relocateToRecipe(localStorage.getItem("selected_drink"));
    });

});

// Function to relocate to recipe page with drink name as query parameter
function relocateToRecipe(drinkName) {
    window.location.replace(`../php/recipee.php?drink=${drinkName}`);
}
