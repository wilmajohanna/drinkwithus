"use strict";

async function renderRecipePage() {

    const sentDrink = new URLSearchParams(window.location.search).get("drink");
    let recipeRequest = new Request(`./recipe.php?drink=${sentDrink}`);
    let data = await fetchThemeRecipe(recipeRequest);
    let name = data.name;
    let image = data.image;
    let ingredients = data.ingredients;
    let instructions = data.instructions;
    let description = data.description;

    console.log(data);

    document.getElementById("drink_name").textContent = name;
    document.getElementById("desc").innerHTML = description;
    document.getElementById("drink_bg_image").setAttribute("src", image);

    const ingredientList = document.getElementById("ingredient");
    console.log(ingredients); // Log the ingredients array
    ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    });

    const instructionList = document.getElementById("instruction");
    instructions.forEach(instruction => {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(instruction));
        instructionList.appendChild(listItem);
    });

}

renderRecipePage();