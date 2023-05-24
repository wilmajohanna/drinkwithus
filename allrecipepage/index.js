"use strict";

"use strict";

function redirectToRecipe(drinkName) {
    const encodedDrinkName = encodeURIComponent(drinkName);
    window.location.href = `../recipepage/recipe.html?drink=${encodedDrinkName}`;
}


function redirectToTheme(theme) {
    const encodedTheme = encodeURIComponent(theme);
    window.location.href = `../themepage/theme.html?theme=${encodedTheme}`;
}



