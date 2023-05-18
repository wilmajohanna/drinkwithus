"use strict";

// dom content loaded 
document.addEventListener("DOMContentLoaded", () => {
    const themeImages = document.querySelectorAll(".theme_container > img");
    /// ---------------------  behlver vi denna?


    // gör så att vi kan klicka på enbart bilden för att komma till theme ist för hela containern
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
    window.location.replace(`../themepage/theme.php?theme=${themeName}`);
}

/// -------------------------------------------------  recipe.js   ---------------------------------------------------------------- // 

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







