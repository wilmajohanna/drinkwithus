"use strict";

// Vänta tills DOM laddas innan koden körs
document.addEventListener('DOMContentLoaded', () => {
    // Fetch drink data från drinksData.JSON file
    fetch('../JSON/drinksData.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const recipe = data[2]; //Använder index (recipe) data (drinksData.js);

            // hämtar DOM elements
            const drinkName = document.getElementById('drink_name');
            const rating = document.getElementById('rating');
            const drinkInfo = document.getElementById('drink_info');
            const drinkImage = document.querySelector("#drink_bg_image");
            const ingredientsList = document.getElementById('ingredients');
            const instructionsList = document.getElementById('instructions');

            // Sätter värde för DOM elements
            drinkName.textContent = recipe.name;
            rating.innerHTML = '&starf;&starf;&starf;&starf;'; // Stjärnorna som är statiska för tillfället, för synes skull
            drinkInfo.textContent = recipe.description;
            drinkImage.src = recipe.image;

            //console.log(drinkImage);
            //console.log(recipe);

            // Fyller i ingredienslistan
            for (const ingredient in recipe.ingredients) {
                if (recipe.ingredients.hasOwnProperty(ingredient)) {
                    ingredientsList.innerHTML += `<li><input type="checkbox"> ${recipe.ingredients[ingredient]}</li>`;
                }
            }

            // Fyller i instructions listan
            for (const instruction in recipe.instructions) {
                if (recipe.instructions.hasOwnProperty(instruction)) {
                    instructionsList.innerHTML += `<li><input type="checkbox"> ${recipe.instructions[instruction]}</li>`;
                    // addListItem(instructionsList, `${instruction}: ${recipe.instructions[instruction]}`);
                }
            }
        })
        .catch(error => console.error(error));

    // Hjälpfunktion för att lägga till ett listobjekt till ett givet listelement
    function addListItem(list, text) {
        const item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
    }
});


