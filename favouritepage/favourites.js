"use strict";

let current_username = localStorage.getItem("username");
const indexP = document.getElementById("index_p");

if (current_username !== null) {
  display_FavoriteDrinks();
}

async function display_FavoriteDrinks() {
  try {
    const response = await fetch(`${url_prefix}/favouritepage/favourites.php?username=${current_username}`);
    const data = await response.json();

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

        indexP.style.visibility = "hidden";

        drinkContainer.addEventListener("click", (event) => {
          const drinkName = event.target.parentElement.querySelector("p").textContent;
          window.location = `./recipe.html?drink=${drinkName}`;
        });
      });
    } else {
      indexP.style.visibility = "visible";
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
