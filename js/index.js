"use strict";

/*document.getElementById("about_us").addEventListener("click", () => {
    relocateToRecipe("Bee's Knees")
})
function relocateToRecipe(drinkName) {
    window.location = `/php/recipee.php?drink=${drinkName}`; */

// Add event listener to theme container

document.addEventListener("DOMContentLoaded", () => {
    const themeContainers = document.querySelectorAll(".theme_container");

    // Loop through theme containers and add event listener
    themeContainers.forEach(themeContainer => {
        themeContainer.addEventListener("click", () => {
            console.log(themeContainer);
            // Retrieve theme name from clicked container's p element
            let pElement = themeContainer.querySelector("p");
            if (pElement) {
                let clicked_theme_name = pElement.textContent;
                localStorage.setItem("selected_theme", clicked_theme_name);

                relocateToTheme(localStorage.getItem("selected_theme"));
            } else {
                console.error("Could not find 'p' element inside theme container:", themeContainer);
            }
        });
    });
});

// Function to relocate to theme page with theme name as query parameter
function relocateToTheme(themeName) {
    // Empty localStorage
    localStorage.clear();

    window.location.replace(`../php/theme.php?theme=${themeName}`);
}








/*
document.addEventListener("DOMContentLoaded", () => {
    const themeContainers = document.querySelectorAll(".theme_container");

    // Loop through theme containers and add event listener
    themeContainers.forEach(themeContainer => {
        themeContainer.addEventListener("click", () => {
            console.log(themeContainer);
            // Retrieve theme name from clicked container's p element
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
    const recipeContainer = document.querySelector(".theme_text");

    recipeContainer.addEventListener("click", () => {
        console.log(recipeContainer);

        let clicked_drink_name = recipeContainer.querySelector(".theme_name");
        localStorage.setItem("selected_drink", clicked_drink_name.textContent);

        relocateToRecipe(localStorage.getItem("selected_drink"));
    });
});

function relocateToRecipe(drinkName) {
    window.location.replace(`../php/recipee.php?drink=${drinkName}`);
    */










