
Gammla funktioner, har dem här sålänge om jag skulle behöva dem.// Besha


/*document.getElementById("about_us").addEventListener("click", () => {
    relocateToRecipe("Bee's Knees")
})
function relocateToRecipe(drinkName) {
    window.location = `/php/recipee.php?drink=${drinkName}`;
}

//ett event som vi kallar på  hämtar titeln som man klickar på.
//kalla på relocateToRecipe med drinknamnet som argument.
// och sidan kommer ändras till recipe sidan, där displays all info via PHP(recipe.php)
*/


--> till index.js om localstorage mellan theme och recipee:

/*document.addEventListener("DOMContentLoaded", () => {
    const themeContainers = document.querySelectorAll(".theme_container");

    themeContainers.forEach(themeContainer => {
        themeContainer.addEventListener("click", () => {
            console.log(themeContainer);
            let clicked_theme_name = themeContainer.querySelector("p").innerHTML;
            localStorage.setItem("selected_theme", clicked_theme_name);
            relocateToTheme(localStorage.getItem("selected_theme"));
        });
    });
});

function relocateToTheme(themeName) {
    window.location.replace(`../php/theme.php?theme=${themeName}`);
}

function relocateToRecipe(drinkName) {
    window.location.replace(`../php/recipee.php?drink=${drinkName}`);
}

*/




//GAMMAL
/*document.addEventListener("DOMContentLoaded", () => {
    const recipeContainers = document.querySelectorAll(".recipe_wrapper");

    recipeContainers.forEach(recipeContainer => {
        recipeContainer.addEventListener("click", () => {
            console.log(recipeContainer);

            let clicked_drink_name = themeContainer.querySelector("h1").innerHTML;
            localStorage.setItem("seleceted_drink", clicked_drink_name);

            relocateToRecipe(localStorage.getItem("selected_drink"));
        });
    });
});

function relocateToRecipe(drinkName) {
    window.location.replace(`../php/recipee.php?drink=${drinkName}`);
};

// Add event listener to theme container
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
};
*/
