"use strict";

let current_username = localStorage.getItem("username");
document.addEventListener("DOMContentLoaded", () => {

  async function send_to_favorites(event) {
    // Hämtar värdet av "name" inuti den klickade containern
    /*     event.target.style.color = "red";
     */
    const heartsSpan = event.currentTarget;
    heartsSpan.classList.toggle('liked');

    if (heartsSpan.classList.contains('liked')) {
      heartsSpan.style.color = 'red'; // Set heart color to red
    } else {
      heartsSpan.style.color = ''; // Remove inline color style to revert to original color
    }
    // LocalStorage är ett objekt. Här hämtar vi namnet på användarens namn som vi har sparat i nyckeln "username".
    let drink_name = event.target.parentElement.querySelector("p").textContent;
    console.log(drink_name);

    let data_to_send = {
      username: current_username,
      drinkname: drink_name,
    };
<<<<<<< Updated upstream

    try {
      await fetch("../favouritepage/favourites.php", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_to_send)

      })

      /* 
              .then(response => response.json())
              .then(data => {
      
      
                document.getElementById("container").innerHTML =
                  <p>User ID: $()</p>;
      
      
              }); */



    } catch (error) {
      console.log("An error occurred:", error);
    }

=======
    
>>>>>>> Stashed changes
    load_loggedOnPage()
  }

  // Lägger eventlistener på like-knapparna
  const like_buttons = document.querySelectorAll(".hearts");
  like_buttons.forEach((like_button) =>
    like_button.addEventListener("click", send_to_favorites)
  );

});

async function display_FavoriteDrinks () {
  try {
    await fetch(`../favouritepage/favourites.php?un=${current_username}`);
    
    
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

display_FavoriteDrinks();
