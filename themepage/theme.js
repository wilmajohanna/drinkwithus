"use strict";

async function renderThemePage() {
    const searchQuery = window.location.search;
    const getParam = new URLSearchParams(searchQuery);
    const paramValue = getParam.get("theme");


    // Läs in JSON-filen med temadrinks
    const themeRequest = new Request(`./theme.php?theme=${paramValue}`)
    let data = await fetchThemeRecipe(themeRequest);
    console.log(data);
    // Hitta rätt drink baserat på temat
    const selectedTheme = data;

    selectedTheme.forEach(drink => {
        // Skapa elementen för temadrinken'
        console.log(drink.image);
        const themeContainer = document.createElement('div');
        themeContainer.className = 'theme_container';
        themeContainer.style.backgroundImage = `url('${drink.image}')`;

        const themeText = document.createElement('p');
        themeText.className = 'theme_name';
        themeText.textContent = drink.name;

        themeContainer.appendChild(themeText);
        document.getElementById('theme_wrapper').appendChild(themeContainer);

        themeContainer.addEventListener("click", e => {
            const drinkName = e.target.querySelector("p").textContent;
            console.log(drinkName);
            window.location = `../recipepage/recipe.html?drink=${drinkName}`
        })
    });
}
renderThemePage();



