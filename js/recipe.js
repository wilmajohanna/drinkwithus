"use strict";


/*
// Vänta tills DOM laddas innan koden körs
fetch("../JSON/drinksData.json")
    .then(response => response.json())
    .then(data => {
        const sentDrink = new URLSearchParams(window.location.search).get("drink");
        const drink = data.find(d => d.name === sentDrink);

        const drinkName = document.getElementById('drink_name');
        const rating = document.getElementById('rating');
        const drinkInfo = document.getElementById('drink_info');
        const drinkImage = document.querySelector("#drink_bg_image");
        const ingredientsList = document.getElementById('ingredients');
        const instructionsList = document.getElementById('instructions');

        drinkName.textContent = drink.name;
        rating.innerHTML = '&starf;&starf;&starf;&starf;'; // Stjärnorna som är statiska för tillfället, för synes skull
        drinkInfo.textContent = drink.description;
        drinkImage.src = drink.image;

        for (const ingredient in drink.ingredients) {
            if (drink.ingredients.hasOwnProperty(ingredient)) {
                ingredientsList.innerHTML += `<li><input type="checkbox"> ${drink.ingredients[ingredient]}</li>`;
            }
        }

        for (const instruction in drink.instructions) {
            if (drink.instructions.hasOwnProperty(instruction)) {
                instructionsList.innerHTML += `<li><input type="checkbox"> ${instruction}: ${drink.instructions[instruction]}</li>`;
            }
        }
    })
    .catch(error => console.error(error));

*/
