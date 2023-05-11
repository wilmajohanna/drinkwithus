
"use strict"
document.getElementById("about_us").addEventListener("click", () => {
    relocateToRecipe("Bee's Knees")
})
function relocateToRecipe(drinkName) {
    window.location = `/html/recipe.php?drink=${drinkName}`;
}

//ett event som vi kallar på  hämtar titeln som man klickar på.
//kalla på relocayeToRecipe med drinknamnet som argument.
// och sidan kommer ändras till recipe sidan, där displays all info via PHP(recipe.php)