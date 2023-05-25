"use strict";

let current_username = localStorage.getItem("username");
if (current_username !== null) {
  display_FavoriteDrinks();
}

async function display_FavoriteDrinks() {
  try {
    const response = await fetch(`./favourites.php?username=${current_username}`);
    const data = await response.json();

    console.log(current_username);

    // Check if the response contains favorite drinks
    if (Array.isArray(data) && data.length > 0) {
      // Display the favorite drinks
      const container = document.getElementById("container");
      container.innerHTML = ""; // Clear the container

      data.forEach((drink) => {
        const drinkContainer = document.createElement("div");
        drinkContainer.classList.add("drink-container");

        const drinkName = document.createElement("p");
        drinkName.textContent = drink.name;

        const image = document.createElement("img");
        image.setAttribute("src", drink.image);
        drinkContainer.appendChild(image);

        drinkContainer.appendChild(drinkName);
        container.appendChild(drinkContainer);

        drinkContainer.addEventListener("click", (event) => {
          const drinkName = event.target.parentElement.querySelector("p").textContent
          window.location = `../recipepage/recipe.html?drink=${drinkName}`;
        });
      });
    } else {
      const indexP = document.querySelector(".index_p");
      indexP.style.display = "block";
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
}
