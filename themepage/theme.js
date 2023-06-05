"use strict";

async function renderThemePage() {
    const searchQuery = window.location.search;
    const getParam = new URLSearchParams(searchQuery);
    const paramValue = getParam.get("theme");

    // Läs in JSON-filen med temadrinks
    const themeRequest = new Request(`../themepage/theme.php?theme=${paramValue}`);
    let data = await fetchThemeRecipe(themeRequest);
    console.log(data);

    // Hitta rätt drink baserat på temat
    const selectedTheme = data;

    const themeWrapper = document.getElementById("theme_wrapper");

    selectedTheme.forEach(drink => {
        // Skapa elementen för temadrinken
        console.log(drink.image);
        const themeContainer = document.createElement("div");
        themeContainer.className = "theme_container";

        const img = document.createElement("img");
        img.setAttribute("src", drink.image);
        themeContainer.appendChild(img);

        const themeText = document.createElement("p");
        themeText.className = "theme_name";
        themeText.textContent = drink.name;
        themeContainer.appendChild(themeText);

        themeContainer.addEventListener("click", () => {
            const drinkName = themeText.textContent;
            console.log(drinkName);
            window.location = `../recipepage/recipe.html?drink=${drinkName}`;
        });

        themeWrapper.appendChild(themeContainer);
    });
};


renderThemePage();