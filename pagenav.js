"use strict";

// DOMContentLoaded är ett evenemang som inträffar när webbläsaren har laddat in och strukturerat webbsidans HTML-kod
//vilket möjliggör manipulation av sidans innehåll med JavaScript. 
//Det används för att köra kod eller utföra operationer som är beroende av att hela DOM-trädet är tillgängligt.
document.addEventListener("DOMContentLoaded", () => {
    const themeImages = document.querySelectorAll(".theme_container > .fp_images");

    // gör så att vi kan klicka på enbart bilden för att komma till theme ist för hela containern i detta fallet theme_container i theme.php
    themeImages.forEach((themeSingleImage) => {
        themeSingleImage.addEventListener("click", () => {


            // Hämta temanamn från den klickade containers p-element
            const drink_name =
                themeSingleImage.parentElement.querySelector("p").textContent;
            relocateToTheme(drink_name.replace(/ /g, ""));
            // G = global -> global e för alla drinknamn
            // Tar bort mellanrummet i drinkname

            console.log(themeSingleImage);

        });
    });
});

// Funktion för att flytta till temasida med temanamn som query parameter
function relocateToTheme(themeName) {
    const previousPage = window.location.href; // Spara den nuvarande sidans URL som den föregående sidan
    window.history.pushState({ previousPage }, "", ""); // Lägg till den föregående sidan i webbläsarens historikstack
    window.location.replace(`../themepage/index.php?theme=${themeName}`); // Byt till den nya sidan
}

/// -------------------------------------------------  recipe.js   ---------------------------------------------------------------- //

document.querySelectorAll(".theme_container").forEach((item) =>
    item.addEventListener("click", fetch_drink_page)
);

// Funktion för att flytta till recipe med dryckens namn query parameter
function relocateToRecipe(drinkName) {
    const previousPage = window.location.href; // Spara den nuvarande sidans URL som den föregående sidan
    window.history.pushState({ previousPage }, "", ""); // Lägg till den föregående sidan i webbläsarens historikstack
    window.location.replace(`../recipepage/index.php?drink=${drinkName}`); // Byt till den nya sidan
}

window.addEventListener("popstate", function (event) {
    if (event.state && event.state.previousPage) {
        window.location.href = event.state.previousPage;
    }
    window.history.back();
});