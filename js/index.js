"use strict";
// Add event listener to theme container
document.addEventListener("DOMContentLoaded", () => {
    const themeContainers = document.querySelectorAll(".theme_container");

    // Loop through theme containers and add event listener
    themeContainers.forEach(themeContainer => {
        themeContainer.addEventListener("click", () => {
            console.log(themeContainer);
            // Retrieve theme name from clicked container's p element
            console.log(themeContainer.querySelector("p"));
            let clicked_theme_name = themeContainer.querySelector("p").innerHTML;
            localStorage.setItem("selected_theme", clicked_theme_name);

            relocateToTheme(localStorage.getItem("selected_theme"));
        });
    });
});

// Function to relocate to theme page with theme name as query parameter
function relocateToTheme(themeName) {
    window.location.replace(`../php/theme.php?theme=${themeName}`);
}

// Add event listener to recipe container
document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("theme_wrapper");

    recipeContainer.addEventListener("click", () => {
        console.log(recipeContainer);

        let clicked_drink_name = recipeContainer.querySelector(".theme_name").textContent;
        localStorage.setItem("selected_drink", clicked_drink_name);

        relocateToRecipe(localStorage.getItem("selected_drink"));
    });

});

// Function to relocate to recipe page with drink name as query parameter
function relocateToRecipe(drinkName) {
    window.location.replace(`../php/recipee.php?drink=${drinkName}`);
}







