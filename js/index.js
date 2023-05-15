
"use strict";
document.getElementById("about_us").addEventListener("click", () => {
    relocateToRecipe("Bee's Knees")
})
function relocateToRecipe(drinkName) {
    window.location = `/html/recipe.php?drink=${drinkName}`;
}

//ett event som vi kallar på  hämtar titeln som man klickar på.
//kalla på relocateToRecipe med drinknamnet som argument.
// och sidan kommer ändras till recipe sidan, där displays all info via PHP(recipe.php)





"use strict";

// Add event listener to theme container
document.addEventListener("DOMContentLoaded", () => {
    const themeContainers = document.querySelectorAll(".theme_container");

    // Loop through theme containers and add event listener
    themeContainers.forEach(themeContainer => {
        themeContainer.addEventListener("click", () => {
            // Retrieve theme name from clicked container's h1 element
            const themeName = themeContainer.querySelector("p").textContent;

            // Call relocateToTheme function with theme name as argument
            relocateToTheme(themeName);
        });
    });
});

// Function to relocate to theme page with theme name as query parameter
function relocateToTheme(themeName) {
    //window.location = `/html/theme.html?theme=${encodeURIComponent(themeName)}`;
    window.location = `/html/theme.html?theme=${themeName}`;
}



