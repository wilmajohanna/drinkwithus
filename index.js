"use strict";

// Add event listener to theme container
document.addEventListener("DOMContentLoaded", () => {
    const themeImages = document.querySelectorAll(".theme_container > img");

    // Loop through theme containers and add event listener
    themeImages.forEach(themeSingleImage => {
        themeSingleImage.addEventListener("click", () => {
            console.log(themeSingleImage);

            // Retrieve theme name from clicked container's p element 
            // Tar bort mellanrummet i drinkname
            const drink_name = themeSingleImage.parentElement.querySelector("p").textContent;
            relocateToTheme(drink_name.replace(/ /g, ""));
            // G = global -> global e för alla drinknamn
        });
    });
});

// Function to relocate to theme page with theme name as query parameter
function relocateToTheme(themeName) {
    window.location.replace(`./themepage/theme.php?theme=${themeName}`);
}

// Add event listener to recipe container
document.querySelectorAll(".theme_container > img").forEach(image_event => {
    drink_images.addEventListener("click", (image) => console.log("hej"))
});

// Det här under bör vara med på recipe sidan.
addEventListener("DOMContentLoaded", () => {
 const recipeContainer = document.getElementById("theme_wrapper");

     recipeContainer.addEventListener("click", () => {
         console.log(recipeContainer);

         let clicked_drink_name = recipeContainer.querySelector(".theme_name").textContent;
         localStorage.setItem("selected_drink", clicked_drink_name);
         console.log(localStorage);

         relocateToRecipe(localStorage.getItem("selected_drink"));
     });

 });

// Function to relocate to recipe page with drink name as query parameter
function relocateToRecipe(drinkName) {
    window.location.replace(`../recipepage/recipee.php?drink=${drinkName}`);
}







