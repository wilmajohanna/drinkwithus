"use strict";

"use strict";

function redirectToRecipe(drinkName) {
    const encodedDrinkName = encodeURIComponent(drinkName);
    window.location.href = `../recipepage/recipe.html?drink=${encodedDrinkName}`;
}


